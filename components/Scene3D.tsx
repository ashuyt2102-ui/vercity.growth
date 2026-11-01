'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import the 3D canvas with ssr: false and clean loading state
const GrowthCanvas = dynamic(() => import('./3d/GrowthCanvas'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative flex items-center justify-center">
        <div className="w-32 h-32 rounded-full border border-blue-500/20 border-t-blue-500 animate-spin" />
        <div className="absolute w-20 h-20 rounded-full border border-cyan-400/30 border-b-cyan-400 animate-spin animate-reverse" />
        <span className="absolute text-xs tracking-widest uppercase font-mono text-blue-400/80">VERCITY 3D</span>
      </div>
    </div>
  ),
});

export default function Scene3D() {
  return (
    <div className="w-full h-full min-h-[380px] lg:min-h-[560px] relative flex items-center justify-center">
      <GrowthCanvas />
    </div>
  );
}
