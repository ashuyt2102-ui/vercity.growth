'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Rocket, Repeat } from 'lucide-react';

const PROCESS_STEPS = [
  {
    step: '01',
    name: 'Discover',
    icon: Search,
    title: 'Audit & Economics',
    description: 'Understand the business, historical performance, target audience demographics, competitors and exact margin economics.',
    highlight: 'Deep market diagnostics',
  },
  {
    step: '02',
    name: 'Strategise',
    icon: Compass,
    title: 'Tailored Growth Roadmap',
    description: 'Build a bespoke growth architecture: creative angles, platform budget allocation, tracking instrumentation and offer positioning.',
    highlight: 'Data-driven battleplan',
  },
  {
    step: '03',
    name: 'Execute',
    icon: Rocket,
    title: 'Launch & Content Rollout',
    description: 'Produce high-converting creative assets, launch full-funnel ad campaigns, deploy custom web touchpoints and configure event telemetry.',
    highlight: 'High-frequency creative',
  },
  {
    step: '04',
    name: 'Optimise',
    icon: Repeat,
    title: 'Iterate & Scale',
    description: 'Measure live performance metrics, prune underperforming ads, double down on winning hooks, and scale ad budgets predictably.',
    highlight: 'Continuous feedback loop',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-[#050608] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4">
            Execution Framework
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4 font-mono">
            FROM IDEAS TO IMPACT.
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            A systematic four-phase operational pipeline designed to eliminate bottlenecks and guarantee measurable brand traction.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500/20 via-cyan-500/30 to-indigo-500/20 -translate-y-12 z-0 pointer-events-none" />

          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative z-10 p-6 rounded-2xl bg-[#0a0d16] border border-white/[0.08] hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Step badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-1">
                  {step.name}
                </div>

                <h3 className="text-lg font-bold text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed mb-4">
                  {step.description}
                </p>

                <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-gray-500 group-hover:text-blue-300 transition-colors">
                  &bull; {step.highlight}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
