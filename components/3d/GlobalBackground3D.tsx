'use client';

import React, { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function seededValue(seed: number) {
  const value = Math.sin(seed * 127.1) * 43758.5453;
  return value - Math.floor(value);
}

// 1. Constellation Star & Particle Corridor
function UniverseParticles({ count = 300 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null!);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const c1 = new THREE.Color('#38bdf8');
    const c2 = new THREE.Color('#818cf8');
    const c3 = new THREE.Color('#60a5fa');

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (seededValue(i * 3 + 1) - 0.5) * 32;
      pos[i * 3 + 1] = seededValue(i * 3 + 2) * 40 - 32;
      pos[i * 3 + 2] = (seededValue(i * 3 + 3) - 0.5) * 20;

      const chosen = i % 3 === 0 ? c1 : i % 3 === 1 ? c2 : c3;
      col[i * 3] = chosen.r;
      col[i * 3 + 1] = chosen.g;
      col[i * 3 + 2] = chosen.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// 2. Hero 3D Sculpture: Metallic Growth Core
function HeroSculpture() {
  const groupRef = useRef<THREE.Group>(null!);
  const coreRef = useRef<THREE.Mesh>(null!);
  const ring1 = useRef<THREE.Mesh>(null!);
  const ring2 = useRef<THREE.Mesh>(null!);
  const ring3 = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05);
    const isMobile = state.size.width < 768;

    groupRef.current.position.x = THREE.MathUtils.damp(
      groupRef.current.position.x,
      isMobile ? 0 : 3.2,
      3,
      dt,
    );
    const targetScale = isMobile ? 0.56 : 1;
    const scale = THREE.MathUtils.damp(groupRef.current.scale.x, targetScale, 3, dt);
    groupRef.current.scale.setScalar(scale);

    if (coreRef.current) {
      coreRef.current.rotation.x += dt * 0.12;
      coreRef.current.rotation.y += dt * 0.16;
    }
    if (ring1.current) {
      ring1.current.rotation.x += dt * 0.24;
      ring1.current.rotation.z += dt * 0.16;
    }
    if (ring2.current) {
      ring2.current.rotation.y += dt * 0.18;
      ring2.current.rotation.x -= dt * 0.12;
    }
    if (ring3.current) ring3.current.rotation.z += dt * 0.1;
  });

  return (
    <group ref={groupRef} position={[3.2, 0.2, -0.5]}>
      <mesh scale={1.035}>
        <icosahedronGeometry args={[1.4, 2]} />
        <meshBasicMaterial
          color="#67e8f9"
          transparent
          opacity={0.09}
          wireframe
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>

      <Float speed={1.25} rotationIntensity={0.12} floatIntensity={0.18}>
        <mesh ref={coreRef} castShadow>
          <icosahedronGeometry args={[1.4, 3]} />
          <MeshDistortMaterial
            color="#1e293b"
            roughness={0.2}
            metalness={0.82}
            emissive="#0f172a"
            distort={0.2}
            speed={1.1}
            clearcoat={1}
            clearcoatRoughness={0.14}
          />
        </mesh>
      </Float>

      <mesh ref={ring1}>
        <torusGeometry args={[2.25, 0.04, 20, 128]} />
        <meshStandardMaterial
          color="#7dd3fc"
          emissive="#0284c7"
          emissiveIntensity={1.1}
          roughness={0.22}
          metalness={0.76}
        />
      </mesh>

      <mesh ref={ring2} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.82, 0.027, 16, 128]} />
        <meshStandardMaterial
          color="#a5b4fc"
          emissive="#4f46e5"
          emissiveIntensity={0.82}
          roughness={0.24}
          metalness={0.74}
        />
      </mesh>

      <mesh ref={ring3} rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
        <torusGeometry args={[3.25, 0.018, 12, 144]} />
        <meshStandardMaterial
          color="#c4b5fd"
          emissive="#7c3aed"
          emissiveIntensity={0.58}
          roughness={0.3}
          metalness={0.68}
        />
      </mesh>

      <Float speed={2.5} floatIntensity={1.2}>
        <mesh position={[-2.2, 1.8, 0.5]}>
          <octahedronGeometry args={[0.2, 0]} />
          <meshStandardMaterial
            color="#67e8f9"
            emissive="#06b6d4"
            emissiveIntensity={1.1}
            metalness={0.6}
            roughness={0.18}
            toneMapped={false}
          />
        </mesh>
      </Float>
      <Float speed={2} floatIntensity={1}>
        <mesh position={[2.4, -1.6, -0.4]}>
          <icosahedronGeometry args={[0.22, 0]} />
          <meshStandardMaterial
            color="#93c5fd"
            emissive="#2563eb"
            emissiveIntensity={0.9}
            metalness={0.6}
            roughness={0.18}
            toneMapped={false}
          />
        </mesh>
      </Float>
    </group>
  );
}

// 3. Section Floating Geometry
function SectionSculptures() {
  const meshA = useRef<THREE.Mesh>(null!);
  const meshB = useRef<THREE.Mesh>(null!);
  const meshC = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (meshA.current) meshA.current.rotation.y += delta * 0.2;
    if (meshB.current) {
      meshB.current.rotation.x += delta * 0.2;
      meshB.current.rotation.y += delta * 0.25;
    }
    if (meshC.current) meshC.current.rotation.z += delta * 0.3;
  });

  return (
    <>
      {/* Services Level (y ≈ -12) */}
      <group position={[-4.5, -12, -2]}>
        <Float speed={2} floatIntensity={1.2}>
          <mesh ref={meshA}>
            <octahedronGeometry args={[1.2, 0]} />
            <meshStandardMaterial
              color="#0ea5e9"
              emissive="#0284c7"
              emissiveIntensity={0.6}
              wireframe
            />
          </mesh>
        </Float>
      </group>

      {/* Portfolio / Book Level (y ≈ -19) */}
      <group position={[4.2, -19, -2]}>
        <Float speed={1.8} floatIntensity={1}>
          <mesh ref={meshB}>
            <torusKnotGeometry args={[1.1, 0.28, 64, 12]} />
            <meshStandardMaterial
              color="#6366f1"
              emissive="#4338ca"
              emissiveIntensity={0.7}
              metalness={0.9}
              roughness={0.2}
            />
          </mesh>
        </Float>
      </group>

      {/* Pricing / Contact Level (y ≈ -26) */}
      <group position={[-3.8, -26, -2]}>
        <Float speed={2} floatIntensity={1}>
          <mesh ref={meshC}>
            <torusGeometry args={[2.0, 0.04, 16, 64]} />
            <meshStandardMaterial
              color="#06b6d4"
              emissive="#0891b2"
              emissiveIntensity={1}
              metalness={0.9}
            />
          </mesh>
        </Float>
      </group>
    </>
  );
}

// Camera and Scene Controller tracking mouse and scroll smoothly
function SceneController({
  mouse,
  scrollProgress,
}: {
  mouse: React.MutableRefObject<{ x: number; y: number }>;
  scrollProgress: React.MutableRefObject<number>;
}) {
  const currentScroll = useRef(0);

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05);
    currentScroll.current = THREE.MathUtils.damp(
      currentScroll.current,
      scrollProgress.current,
      3.5,
      dt,
    );

    const targetY = -currentScroll.current * 30;
    state.camera.position.y = THREE.MathUtils.damp(
      state.camera.position.y,
      targetY + mouse.current.y * 0.5,
      3.5,
      dt,
    );

    const targetX = mouse.current.x * 0.7;
    state.camera.position.x = THREE.MathUtils.damp(state.camera.position.x, targetX, 3.5, dt);

    state.camera.rotation.y = THREE.MathUtils.damp(
      state.camera.rotation.y,
      mouse.current.x * 0.06,
      3,
      dt,
    );
    state.camera.rotation.x = THREE.MathUtils.damp(
      state.camera.rotation.x,
      -mouse.current.y * 0.05,
      3,
      dt,
    );
  });

  return null;
}

export default function GlobalBackground3D() {
  const mouse = useRef({ x: 0, y: 0 });
  const scrollProgress = useRef(0);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      mouse.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -((e.clientY / window.innerHeight) * 2 - 1),
      };
    };

    const resetPointer = () => {
      mouse.current = { x: 0, y: 0 };
    };

    const handlePointerOut = (event: PointerEvent) => {
      if (!event.relatedTarget) resetPointer();
    };

    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        scrollProgress.current = Math.min(Math.max(window.scrollY / docHeight, 0), 1);
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerout', handlePointerOut, { passive: true });
    window.addEventListener('blur', resetPointer);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerout', handlePointerOut);
      window.removeEventListener('blur', resetPointer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
      <Canvas
        camera={{ position: [0, 0, 8.2], fov: 46 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 15, 10]} intensity={1.4} color="#ffffff" />
        <pointLight position={[3, 2, 4]} intensity={2} color="#60a5fa" distance={10} />
        <pointLight position={[-3, -15, 3]} intensity={1.8} color="#818cf8" distance={10} />
        <pointLight position={[0, -26, 4]} intensity={2.2} color="#06b6d4" distance={12} />

        <SceneController mouse={mouse} scrollProgress={scrollProgress} />
        <UniverseParticles count={320} />
        <HeroSculpture />
        <SectionSculptures />
      </Canvas>
    </div>
  );
}
