'use client';

import React from 'react';
import Book3D from './3d/Book3D';
import { BookOpen } from 'lucide-react';

export default function BookShowcase() {
  return (
    <section id="playbook" className="py-24 relative overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Interactive 3D Lookbook &bull; Agency Playbook</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4 font-mono">
            EXPLORE THE VERCITY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              GROWTH PLAYBOOK.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
            Flip through our interactive 3D brand book. Discover our commercial product photo shoot setups (starting at ₹10,000), Meta Ads scaling frameworks, and full-stack e-commerce architecture.
          </p>
        </div>

        {/* 3D Book Animation */}
        <Book3D />
      </div>
    </section>
  );
}
