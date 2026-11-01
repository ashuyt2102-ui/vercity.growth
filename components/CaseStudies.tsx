'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Cpu, BarChart } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: Target,
    title: 'High-Intent Customer Targeting',
    description: 'We don’t chase broad reach that wastes ad capital. We sculpt audience exclusions, custom affinity cohorts, and conversion API loops that zero in on paying customers.',
  },
  {
    icon: Zap,
    title: 'Dynamic Pattern Interrupts',
    description: 'Visual fatigue is the fastest way to kill ad performance. Our creative pipeline delivers fresh hooked video concepts weekly so your campaigns never stall.',
  },
  {
    icon: Cpu,
    title: 'Next-Gen Conversion Tech',
    description: 'From 3D interactive web viewers to sub-second headless storefronts, we build digital touchpoints engineered to eliminate cart drop-off and friction.',
  },
  {
    icon: BarChart,
    title: 'Transparent Truth Metrics',
    description: 'We report on verified blended ROAS, contribution margin and true acquisition economics — never fabricated vanity metrics or unverified numbers.',
  },
];

export default function CaseStudies() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#050608] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs font-mono uppercase tracking-widest text-blue-400 mb-4">
            Strategic Methodology
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6 font-mono">
            WE FOCUS ON WHAT MOVES <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              BUSINESSES FORWARD.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            Eliminating agency fluff. We partner with founders and marketing leaders to construct durable, repeatable growth flywheels.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-[#0a0d16] border border-white/[0.07] hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
