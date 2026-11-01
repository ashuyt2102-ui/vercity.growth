'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function seededValue(seed: number) {
  const value = Math.sin(seed * 127.1) * 43758.5453;
  return value - Math.floor(value);
}

// Metallic Growth Core Sculpture
function GrowthCore({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const ring1Ref = useRef<THREE.Mesh>(null!);
  const ring2Ref = useRef<THREE.Mesh>(null!);
  const ring3Ref = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    // Smooth responsive tilt based on mouse position
    const targetRotX = (mouse.current.y * 0.4);
    const targetRotY = (mouse.current.x * 0.4);

    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.05);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.05);

    // Continuous elegant organic rotations
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.25;

    ring1Ref.current.rotation.x += delta * 0.4;
    ring1Ref.current.rotation.z += delta * 0.3;

    ring2Ref.current.rotation.y += delta * 0.35;
    ring2Ref.current.rotation.x -= delta * 0.2;

    ring3Ref.current.rotation.z += delta * 0.25;
    ring3Ref.current.rotation.y -= delta * 0.15;
  });

  return (
    <group ref={groupRef}>
      {/* Central Metallic Distorted Sphere (Growth Core) */}
      <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh ref={meshRef} position={[0, 0, 0]} castShadow receiveShadow>
          <sphereGeometry args={[1.35, 64, 64]} />
          <MeshDistortMaterial
            color="#2a3859"
            roughness={0.15}
            metalness={0.92}
            distort={0.38}
            speed={1.8}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
      </Float>

      {/* Orbital Growth Rings */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.2, 0.035, 24, 100]} />
        <meshStandardMaterial
          color="#60a5fa"
          emissive="#2563eb"
          emissiveIntensity={0.8}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      <mesh ref={ring2Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.7, 0.025, 24, 100]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#0891b2"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.85}
        />
      </mesh>

      <mesh ref={ring3Ref} rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
        <torusGeometry args={[3.2, 0.02, 24, 100]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#7c3aed"
          emissiveIntensity={0.5}
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>

      {/* Satellite floating geometric accent nodes */}
      <SatelliteNode position={[1.8, 1.4, -0.6]} size={0.16} color="#38bdf8" />
      <SatelliteNode position={[-2.1, -1.1, 0.8]} size={0.2} color="#818cf8" />
      <SatelliteNode position={[1.5, -1.8, 1.2]} size={0.14} color="#34d399" />
      <SatelliteNode position={[-1.7, 1.6, -1.1]} size={0.18} color="#f472b6" />
    </group>
  );
}

function SatelliteNode({ position, size, color }: { position: [number, number, number]; size: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => {
    ref.current.rotation.x += delta * 0.8;
    ref.current.rotation.y += delta * 0.6;
  });

  return (
    <Float speed={2.5} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={ref} position={position}>
        <octahedronGeometry args={[size, 0]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.7}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </Float>
  );
}

// Particle Constellation
function ParticleField({ count = 90 }: { count?: number }) {
  const points = useMemo(() => {
    const coords = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = (seededValue(i * 2 + 1) - 0.5) * 360;
      const phi = (seededValue(i * 2 + 2) - 0.5) * 360;
      const distance = 2.4 + seededValue(i + count) * 3.5;

      coords[i * 3] = distance * Math.sin(theta) * Math.cos(phi);
      coords[i * 3 + 1] = distance * Math.sin(theta) * Math.sin(phi);
      coords[i * 3 + 2] = distance * Math.cos(theta);
    }
    return coords;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null!);

  useFrame((_, delta) => {
    pointsRef.current.rotation.y += delta * 0.05;
    pointsRef.current.rotation.x += delta * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[points, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#93c5fd"
        transparent
        opacity={0.75}
        sizeAttenuation
      />
    </points>
  );
}

export default function GrowthCanvas() {
  const mouse = useRef({ x: 0, y: 0 });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    mouse.current = { x, y };
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      className="w-full h-full relative cursor-grab active:cursor-grabbing select-none"
    >
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.65} />
        <directionalLight position={[10, 10, 10]} intensity={1.8} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={1.2} color="#3b82f6" />
        <pointLight position={[0, 3, 2]} intensity={2.2} color="#60a5fa" distance={8} />
        <pointLight position={[0, -3, -2]} intensity={1.5} color="#06b6d4" distance={8} />

        <GrowthCore mouse={mouse} />
        <ParticleField count={95} />
      </Canvas>
    </div>
  );
}
