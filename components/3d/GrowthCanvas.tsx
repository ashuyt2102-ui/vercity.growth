'use client';

import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

type Pointer = React.MutableRefObject<{ x: number; y: number }>;

function seededValue(seed: number) {
  const value = Math.sin(seed * 127.1) * 43758.5453;
  return value - Math.floor(value);
}

function GrowthCore({ mouse }: { mouse: Pointer }) {
  const groupRef = useRef<THREE.Group>(null!);
  const meshRef = useRef<THREE.Mesh>(null!);
  const ring1Ref = useRef<THREE.Mesh>(null!);
  const ring2Ref = useRef<THREE.Mesh>(null!);
  const ring3Ref = useRef<THREE.Mesh>(null!);
  const auraRef = useRef<THREE.ShaderMaterial>(null!);

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05);
    const time = state.clock.elapsedTime;
    const group = groupRef.current;

    group.rotation.x = THREE.MathUtils.damp(group.rotation.x, mouse.current.y * 0.34, 3.4, dt);
    group.rotation.y = THREE.MathUtils.damp(group.rotation.y, mouse.current.x * 0.48, 3.4, dt);
    group.rotation.z = THREE.MathUtils.damp(group.rotation.z, mouse.current.x * -0.08, 3, dt);
    group.position.y = Math.sin(time * 0.65) * 0.075;

    meshRef.current.rotation.x += dt * 0.12;
    meshRef.current.rotation.y += dt * 0.18;

    ring1Ref.current.rotation.x += dt * 0.22;
    ring1Ref.current.rotation.z += dt * 0.16;
    ring2Ref.current.rotation.y += dt * 0.19;
    ring2Ref.current.rotation.x -= dt * 0.12;
    ring3Ref.current.rotation.z += dt * 0.13;
    ring3Ref.current.rotation.y -= dt * 0.08;

    auraRef.current.uniforms.uTime.value = time;
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[1.56, 64, 64]} />
        <shaderMaterial
          ref={auraRef}
          uniforms={{
            uColor: { value: new THREE.Color('#38bdf8') },
            uIntensity: { value: 0.5 },
            uTime: { value: 0 },
          }}
          vertexShader={`
            varying vec3 vNormal;
            varying vec3 vViewPosition;

            void main() {
              vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
              vNormal = normalize(normalMatrix * normal);
              vViewPosition = -viewPosition.xyz;
              gl_Position = projectionMatrix * viewPosition;
            }
          `}
          fragmentShader={`
            uniform vec3 uColor;
            uniform float uIntensity;
            uniform float uTime;
            varying vec3 vNormal;
            varying vec3 vViewPosition;

            void main() {
              float facing = max(dot(normalize(vNormal), normalize(vViewPosition)), 0.0);
              float rim = pow(1.0 - facing, 2.15);
              float pulse = 0.88 + 0.12 * sin(uTime * 1.2);
              gl_FragColor = vec4(uColor, rim * uIntensity * pulse);
            }
          `}
          transparent
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>

      <mesh scale={1.015}>
        <icosahedronGeometry args={[1.42, 3]} />
        <meshBasicMaterial
          color="#7dd3fc"
          transparent
          opacity={0.075}
          wireframe
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>

      <Float speed={1.25} rotationIntensity={0.12} floatIntensity={0.18}>
        <mesh ref={meshRef} castShadow receiveShadow>
          <sphereGeometry args={[1.3, 96, 96]} />
          <MeshDistortMaterial
            color="#1e3457"
            roughness={0.2}
            metalness={0.82}
            distort={0.24}
            speed={1.15}
            clearcoat={1}
            clearcoatRoughness={0.12}
          />
        </mesh>
      </Float>

      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.05, 0.04, 24, 144]} />
        <meshStandardMaterial
          color="#93c5fd"
          emissive="#2563eb"
          emissiveIntensity={1.15}
          roughness={0.22}
          metalness={0.75}
        />
      </mesh>

      <mesh ref={ring2Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.58, 0.026, 20, 144]} />
        <meshStandardMaterial
          color="#67e8f9"
          emissive="#0891b2"
          emissiveIntensity={0.85}
          roughness={0.2}
          metalness={0.72}
        />
      </mesh>

      <mesh ref={ring3Ref} rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
        <torusGeometry args={[3.08, 0.018, 16, 160]} />
        <meshStandardMaterial
          color="#c4b5fd"
          emissive="#7c3aed"
          emissiveIntensity={0.62}
          roughness={0.28}
          metalness={0.7}
        />
      </mesh>

      <SatelliteNode radius={2.03} phase={0.3} tilt={0.7} speed={0.34} size={0.16} color="#67e8f9" />
      <SatelliteNode radius={2.48} phase={2.5} tilt={1.25} speed={-0.24} size={0.19} color="#818cf8" />
      <SatelliteNode radius={2.32} phase={4.7} tilt={0.42} speed={0.28} size={0.14} color="#34d399" />
      <SatelliteNode radius={2.88} phase={1.65} tilt={0.95} speed={-0.18} size={0.12} color="#f0abfc" />
    </group>
  );
}

function SatelliteNode({
  radius,
  phase,
  tilt,
  speed,
  size,
  color,
}: {
  radius: number;
  phase: number;
  tilt: number;
  speed: number;
  size: number;
  color: string;
}) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime * speed + phase;
    ref.current.position.set(
      Math.cos(time) * radius,
      Math.sin(time * 0.72 + phase) * radius * 0.28,
      Math.sin(time) * radius * Math.sin(tilt),
    );
    ref.current.rotation.x += delta * 0.75;
    ref.current.rotation.y += delta * 0.55;
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 2 + phase) * 0.12;
    ref.current.scale.setScalar(pulse);
  });

  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[size, 0]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.05}
        metalness={0.7}
        roughness={0.16}
        toneMapped={false}
      />
    </mesh>
  );
}

function ParticleField({ count = 150, mouse }: { count?: number; mouse: Pointer }) {
  const pointsRef = useRef<THREE.Points>(null!);
  const materialRef = useRef<THREE.ShaderMaterial>(null!);
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const seeds = new Float32Array(count);

    for (let index = 0; index < count; index += 1) {
      const theta = seededValue(index * 3 + 1) * Math.PI * 2;
      const vertical = seededValue(index * 3 + 2) * 2 - 1;
      const horizontal = Math.sqrt(1 - vertical * vertical);
      const radius = 3.35 + seededValue(index * 3 + 3) * 2.6;

      positions[index * 3] = radius * horizontal * Math.cos(theta);
      positions[index * 3 + 1] = radius * vertical;
      positions[index * 3 + 2] = radius * horizontal * Math.sin(theta);
      sizes[index] = 0.65 + seededValue(index + count) * 0.9;
      seeds[index] = seededValue(index + count * 2) * Math.PI * 2;
    }

    return { positions, sizes, seeds };
  }, [count]);

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05);
    pointsRef.current.rotation.y += dt * 0.035;
    pointsRef.current.rotation.x = THREE.MathUtils.damp(
      pointsRef.current.rotation.x,
      mouse.current.y * 0.035,
      2.5,
      dt,
    );
    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
  });

  return (
    <points ref={pointsRef} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[particles.positions, 3]} />
        <bufferAttribute attach="attributes-aSize" args={[particles.sizes, 1]} />
        <bufferAttribute attach="attributes-aSeed" args={[particles.seeds, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        uniforms={{ uTime: { value: 0 }, uColor: { value: new THREE.Color('#bfdbfe') } }}
        vertexShader={`
          attribute float aSize;
          attribute float aSeed;
          uniform float uTime;
          varying float vAlpha;

          void main() {
            vec3 animatedPosition = position;
            animatedPosition.x += sin(uTime * 0.32 + aSeed) * 0.025;
            animatedPosition.y += cos(uTime * 0.24 + aSeed * 1.7) * 0.035;

            vec4 viewPosition = modelViewMatrix * vec4(animatedPosition, 1.0);
            float depth = max(-viewPosition.z, 1.0);
            gl_PointSize = clamp(aSize * 30.0 / depth, 1.0, 4.0);
            gl_Position = projectionMatrix * viewPosition;
            vAlpha = 0.28 + 0.72 * (0.5 + 0.5 * sin(uTime * 1.25 + aSeed));
          }
        `}
        fragmentShader={`
          uniform vec3 uColor;
          varying float vAlpha;

          void main() {
            float distanceFromCenter = length(gl_PointCoord - 0.5);
            float glow = 1.0 - smoothstep(0.08, 0.5, distanceFromCenter);
            gl_FragColor = vec4(uColor, glow * vAlpha * 0.9);
          }
        `}
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        toneMapped={false}
      />
    </points>
  );
}

export default function GrowthCanvas() {
  const mouse = useRef({ x: 0, y: 0 });

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    mouse.current.x = THREE.MathUtils.clamp(((event.clientX - rect.left) / rect.width) * 2 - 1, -1, 1);
    mouse.current.y = THREE.MathUtils.clamp(-(((event.clientY - rect.top) / rect.height) * 2 - 1), -1, 1);
  };

  const resetPointer = () => {
    mouse.current.x = 0;
    mouse.current.y = 0;
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="relative h-full w-full select-none"
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 7.6], fov: 43 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.42} />
        <directionalLight position={[5, 6, 7]} intensity={2.1} color="#ffffff" />
        <directionalLight position={[-6, -4, -5]} intensity={1.6} color="#4f8dff" />
        <pointLight position={[0, 2.8, 2.5]} intensity={2.4} color="#38bdf8" distance={8} />
        <pointLight position={[0, -2.5, -2]} intensity={1.8} color="#8b5cf6" distance={8} />

        <GrowthCore mouse={mouse} />
        <ParticleField count={165} mouse={mouse} />
      </Canvas>
    </div>
  );
}
