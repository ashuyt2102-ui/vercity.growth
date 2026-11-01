'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Lightbulb, BarChart3, ShieldCheck, Zap, Layers } from 'lucide-react';

const VALUE_PROPOSITIONS = [
  {
    icon: Compass,
    title: 'Strategy First',
    subtitle: 'Zero Guesswork Execution',
    description:
      'We dive deep into your market economics, consumer psychology and unit economics before allocating a single rupee of ad spend.',
    accent: 'from-blue-500/20 to-cyan-500/10',
    borderColor: 'group-hover:border-blue-500/40',
    iconColor: 'text-blue-400',
  },
  {
    icon: Lightbulb,
    title: 'Creativity That Converts',
    subtitle: 'High-Retention Aesthetics',
    description:
      'Visuals engineered to halt doom-scrolling. Our editorial design and short-form video hooks are mathematically timed for peak retention and conversion.',
    accent: 'from-cyan-500/20 to-teal-500/10',
    borderColor: 'group-hover:border-cyan-500/40',
    iconColor: 'text-cyan-400',
  },
  {
    icon: BarChart3,
    title: 'Growth Backed By Data',
    subtitle: 'Rigorous Optimization Loops',
    description:
      'Every campaign decision is supported by server-side CAPI telemetry, GA4 attribution models, and weekly multi-angle hypothesis testing.',
    accent: 'from-indigo-500/20 to-purple-500/10',
    borderColor: 'group-hover:border-indigo-500/40',
    iconColor: 'text-indigo-400',
  },
];

const TRUST_PILLARS = [
  { icon: ShieldCheck, label: '100% Direct Account Ownership' },
  { icon: Zap, label: 'Sub-Second Page Load Engineering' },
  { icon: Layers, label: 'Full Creative & Technical Stack' },
];

export default function TrustIntro() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#07090f] border-y border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4"
          >
            Agency Foundation
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6 font-mono"
          >
            YOUR NEXT LEVEL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              STARTS HERE.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-400 leading-relaxed font-light"
          >
            We combine creative thinking, data-driven decisions and modern technology to help businesses build a stronger digital presence and achieve measurable growth.
          </motion.p>
        </div>

        {/* 3 Core Value Propositions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {VALUE_PROPOSITIONS.map((prop, idx) => {
            const Icon = prop.icon;
            return (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`group relative rounded-2xl p-8 bg-[#0c0f1b]/80 border border-white/[0.08] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${prop.borderColor} hover:shadow-2xl hover:shadow-blue-950/40`}
              >
                {/* Background glow gradient */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${prop.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className={`w-6 h-6 ${prop.iconColor}`} />
                  </div>

                  <span className="text-xs uppercase font-mono tracking-widest text-gray-500 mb-2">
                    {prop.subtitle}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {prop.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed font-light mt-auto">
                    {prop.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Badges Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 sm:p-6 flex flex-wrap items-center justify-around gap-6"
        >
          {TRUST_PILLARS.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-3 text-xs sm:text-sm text-gray-300 font-mono">
                <Icon className="w-4 h-4 text-cyan-400" />
                <span>{item.label}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
