"use client";

import { useEffect, useRef } from "react";

type Star = { x: number; y: number; z: number; size: number; phase: number };
type GlobeStop = { progress: number; x: number; y: number; scale: number };

const globeStops: GlobeStop[] = [
  { progress: 0, x: 0.72, y: 0.92, scale: 0.58 },
  { progress: 0.32, x: 0.34, y: 0.5, scale: 0.35 },
  { progress: 0.64, x: 0.72, y: 0.48, scale: 0.33 },
  { progress: 1, x: 0.51, y: 0.55, scale: 0.38 },
];

function sampleGlobe(progress: number, key: "x" | "y" | "scale") {
  for (let index = 0; index < globeStops.length - 1; index += 1) {
    const start = globeStops[index];
    const end = globeStops[index + 1];
    if (progress <= end.progress) {
      const linear = (progress - start.progress) / (end.progress - start.progress);
      const eased = linear * linear * (3 - 2 * linear);
      return start[key] + (end[key] - start[key]) * eased;
    }
  }
  return globeStops[globeStops.length - 1][key];
}

export default function SpaceBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let stars: Star[] = [];
    let animationFrame = 0;

    const drawGrid = (centerX: number, centerY: number, radius: number, rotation: number) => {
      const pointOnGlobe = (longitude: number, latitude: number) => {
        const x = Math.cos(latitude) * Math.sin(longitude + rotation);
        const y = Math.sin(latitude);
        const z = Math.cos(latitude) * Math.cos(longitude + rotation);
        const tilt = 0.34;
        const tiltedY = y * Math.cos(tilt) - z * Math.sin(tilt);
        const tiltedZ = y * Math.sin(tilt) + z * Math.cos(tilt);
        return { x: centerX + x * radius, y: centerY - tiltedY * radius, z: tiltedZ };
      };

      context.lineWidth = Math.max(0.55, radius * 0.002);
      context.strokeStyle = "rgba(110, 231, 195, 0.14)";

      for (let meridian = 0; meridian < 12; meridian += 1) {
        const longitude = (meridian / 12) * Math.PI * 2;
        let drawing = false;
        context.beginPath();
        for (let step = 0; step <= 64; step += 1) {
          const point = pointOnGlobe(longitude, (step / 64 - 0.5) * Math.PI);
          if (point.z > 0) {
            if (!drawing) context.moveTo(point.x, point.y);
            else context.lineTo(point.x, point.y);
            drawing = true;
          } else {
            drawing = false;
          }
        }
        context.stroke();
      }

      for (let band = -3; band <= 3; band += 1) {
        const latitude = (band / 4) * (Math.PI / 2);
        let drawing = false;
        context.beginPath();
        for (let step = 0; step <= 96; step += 1) {
          const point = pointOnGlobe((step / 96) * Math.PI * 2, latitude);
          if (point.z > 0) {
            if (!drawing) context.moveTo(point.x, point.y);
            else context.lineTo(point.x, point.y);
            drawing = true;
          } else {
            drawing = false;
          }
        }
        context.stroke();
      }
    };

    const drawLand = (centerX: number, centerY: number, radius: number, rotation: number) => {
      const continents = [
        [[-0.77, -0.3], [-0.69, -0.5], [-0.53, -0.53], [-0.46, -0.38], [-0.34, -0.34], [-0.38, -0.18], [-0.5, -0.09], [-0.55, 0.04], [-0.67, -0.04]],
        [[-0.48, 0.12], [-0.37, 0.08], [-0.29, 0.2], [-0.31, 0.36], [-0.39, 0.56], [-0.45, 0.4]],
        [[-0.09, -0.56], [0.12, -0.58], [0.22, -0.46], [0.36, -0.49], [0.45, -0.35], [0.66, -0.28], [0.7, -0.13], [0.59, -0.04], [0.47, 0.0], [0.41, 0.17], [0.26, 0.2], [0.16, 0.09], [0.01, 0.13], [-0.11, 0.03], [-0.2, -0.15], [-0.31, -0.24], [-0.22, -0.42]],
        [[0.21, 0.24], [0.38, 0.24], [0.45, 0.38], [0.39, 0.57], [0.28, 0.62], [0.2, 0.45]],
      ];

      context.save();
      context.translate(centerX, centerY);
      context.rotate(rotation);
      context.beginPath();
      context.arc(0, 0, radius * 0.985, 0, Math.PI * 2);
      context.clip();
      context.fillStyle = "rgba(94, 194, 165, 0.12)";
      for (const shape of continents) {
        context.beginPath();
        shape.forEach(([x, y], index) => {
          if (index === 0) context.moveTo(x * radius, y * radius);
          else context.lineTo(x * radius, y * radius);
        });
        context.closePath();
        context.fill();
      }
      context.restore();
    };

    const draw = (timestamp: number) => {
      if (!width || !height) return;
      const time = reducedMotion.matches ? 0 : timestamp / 1000;
      pointer.x += (pointer.targetX - pointer.x) * 0.045;
      pointer.y += (pointer.targetY - pointer.y) * 0.045;
      context.clearRect(0, 0, width, height);

      for (const star of stars) {
        const perspective = 360 / (360 + star.z);
        const x = width / 2 + star.x * perspective + pointer.x * (1 - perspective) * 22;
        const y = height / 2 + star.y * perspective + pointer.y * (1 - perspective) * 22;
        const opacity = reducedMotion.matches ? 0.42 : 0.2 + (Math.sin(time * 1.4 + star.phase) + 1) * 0.27;
        context.fillStyle = `rgba(201, 219, 255, ${opacity})`;
        context.beginPath();
        context.arc(x, y, star.size * perspective, 0, Math.PI * 2);
        context.fill();
      }

      const scrollRange = Math.max(1, document.documentElement.scrollHeight - height);
      const progress = Math.min(1, Math.max(0, window.scrollY / scrollRange));
      const sideScale = Math.min(1, Math.max(0.5, width / 1200));
      const centerX = width * (0.5 + (sampleGlobe(progress, "x") - 0.5) * sideScale) + pointer.x * 26;
      const centerY = height * sampleGlobe(progress, "y") + pointer.y * 20;
      const radius = Math.min(width, height) * sampleGlobe(progress, "scale");

      const atmosphere = context.createRadialGradient(centerX, centerY, radius * 0.65, centerX, centerY, radius * 1.35);
      atmosphere.addColorStop(0, "rgba(69, 240, 177, 0)");
      atmosphere.addColorStop(0.72, "rgba(77, 208, 192, 0.09)");
      atmosphere.addColorStop(0.86, "rgba(106, 235, 213, 0.18)");
      atmosphere.addColorStop(1, "rgba(79, 163, 232, 0)");
      context.fillStyle = atmosphere;
      context.beginPath();
      context.arc(centerX, centerY, radius * 1.35, 0, Math.PI * 2);
      context.fill();

      const surface = context.createRadialGradient(centerX - radius * 0.32, centerY - radius * 0.42, radius * 0.04, centerX, centerY, radius * 1.04);
      surface.addColorStop(0, "rgba(39, 105, 121, 0.7)");
      surface.addColorStop(0.4, "rgba(17, 47, 73, 0.74)");
      surface.addColorStop(0.82, "rgba(8, 20, 42, 0.78)");
      surface.addColorStop(1, "rgba(4, 9, 22, 0.3)");
      context.fillStyle = surface;
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, Math.PI * 2);
      context.fill();

      const rotation = time * 0.035 + progress * Math.PI * 0.7 + pointer.x * 0.08;
      drawLand(centerX, centerY, radius, -rotation);
      drawGrid(centerX, centerY, radius, rotation);

      context.strokeStyle = "rgba(133, 239, 218, 0.38)";
      context.lineWidth = 1;
      context.beginPath();
      context.arc(centerX, centerY, radius, -Math.PI * 0.15 + rotation * 0.2, Math.PI * 0.75 + rotation * 0.2);
      context.stroke();

      context.save();
      context.translate(centerX, centerY);
      context.rotate(-0.2 + pointer.x * 0.08 + time * 0.02);
      context.beginPath();
      context.ellipse(0, 0, radius * 1.28, radius * 0.35, 0, 0, Math.PI * 2);
      context.strokeStyle = "rgba(93, 240, 168, 0.3)";
      context.lineWidth = 1.1;
      context.stroke();
      context.restore();
    };

    const animate = (timestamp: number) => {
      animationFrame = 0;
      draw(timestamp);
      if (!reducedMotion.matches) animationFrame = window.requestAnimationFrame(animate);
    };

    const requestStaticDraw = () => {
      if (reducedMotion.matches && !animationFrame) {
        animationFrame = window.requestAnimationFrame((timestamp) => {
          animationFrame = 0;
          draw(timestamp);
        });
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      const count = Math.min(140, Math.max(48, Math.round((width * height) / 11500)));
      stars = Array.from({ length: count }, () => ({
        x: (Math.random() - 0.5) * width * 1.8,
        y: (Math.random() - 0.5) * height * 1.8,
        z: Math.random() * 1050,
        size: Math.random() * 1.25 + 0.35,
        phase: Math.random() * Math.PI * 2,
      }));
      draw(0);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      pointer.targetX = (event.clientX / width - 0.5) * 2;
      pointer.targetY = (event.clientY / height - 0.5) * 2;
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>(".spatial-card") : null;
      if (target) {
        const bounds = target.getBoundingClientRect();
        const localX = (event.clientX - bounds.left) / bounds.width - 0.5;
        const localY = (event.clientY - bounds.top) / bounds.height - 0.5;
        target.style.setProperty("--card-tilt-x", `${-localY * 7}deg`);
        target.style.setProperty("--card-tilt-y", `${localX * 7}deg`);
      }
      requestStaticDraw();
    };

    const onPointerLeave = () => {
      pointer.targetX = 0;
      pointer.targetY = 0;
      requestStaticDraw();
    };

    const onScroll = () => requestStaticDraw();
    const onMotionChange = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      if (reducedMotion.matches) draw(0);
      else animationFrame = window.requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    reducedMotion.addEventListener("change", onMotionChange);
    if (!reducedMotion.matches) animationFrame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("scroll", onScroll);
      reducedMotion.removeEventListener("change", onMotionChange);
    };
  }, []);

  return <canvas aria-hidden="true" className="space-backdrop" ref={canvasRef} />;
}
