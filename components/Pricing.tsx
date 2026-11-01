'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, AlertCircle, ArrowUpRight, MessageCircle } from 'lucide-react';
import { pricingConfig, pricingCategories, PricingTier } from '@/data/pricing';
import { agencyConfig } from '@/data/agency';
import Card3D from './3d/Card3D';

interface PricingProps {
  onSelectPlan?: (planName: string) => void;
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const handleSelect = (planName: string) => {
    if (onSelectPlan) {
      onSelectPlan(planName);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredPlans = activeCategory === 'all'
    ? pricingConfig.plans
    : pricingConfig.plans.filter((p) => p.category === activeCategory);

  return (
    <section id="pricing" className="py-24 relative overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4">
            Direct &bull; Transparent &bull; Results-Focused
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4 font-mono">
            INVEST IN YOUR NEXT LEVEL.
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-light mb-4">
            VERCITY GROWTH plans, commercial product photo shoots starting from ₹10,000, and high-ROAS ad management.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300/90 font-mono">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>Note: {pricingConfig.currencyNotice}</span>
          </div>
        </div>

        {/* Pricing Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {pricingCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-black shadow-lg shadow-cyan-500/30'
                  : 'bg-white/[0.04] text-gray-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Pricing Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPlans.map((plan) => (
            <div key={plan.id} className="h-full flex flex-col">
              <Card3D
                intensity={plan.featured ? 14 : 10}
                glowColor={plan.featured ? 'rgba(56, 189, 248, 0.35)' : 'rgba(255, 255, 255, 0.1)'}
                className="h-full flex-1"
              >
                <div
                  className={`relative rounded-3xl p-8 h-full flex flex-col justify-between backdrop-blur-xl transition-all duration-300 shadow-2xl ${
                    plan.featured
                      ? 'bg-gradient-to-b from-[#0f172a]/95 via-[#0d1326]/90 to-[#080b14]/95 border-2 border-cyan-400/80 shadow-cyan-500/20'
                      : plan.category === 'photoshoot'
                      ? 'bg-gradient-to-b from-[#131b2e]/90 via-[#0a0e1c]/80 to-[#060810]/90 border border-cyan-500/40'
                      : 'bg-[#0a0d16]/85 border border-white/[0.09]'
                  }`}
                >
                  {/* Badge */}
                  {plan.badge && (
                    <div
                      className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white shadow-md flex items-center gap-1.5 font-mono whitespace-nowrap ${
                        plan.featured
                          ? 'bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 shadow-cyan-500/40 text-black font-black'
                          : plan.category === 'photoshoot'
                          ? 'bg-cyan-500 text-black font-black shadow-cyan-500/30'
                          : 'bg-white/10 text-gray-300 border border-white/20'
                      }`}
                    >
                      {plan.featured && <Sparkles className="w-3 h-3" />}
                      <span>{plan.badge}</span>
                    </div>
                  )}

                  <div>
                    {/* Plan Header */}
                    <div className="flex items-center justify-between mb-2 mt-1">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                        {plan.category.toUpperCase()}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">
                      {plan.name}
                    </h3>

                    {/* Price Display */}
                    <div className="flex items-baseline gap-1.5 mb-3">
                      <span className="text-3xl sm:text-4xl font-black text-white font-mono">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-xs text-gray-400 font-mono">{plan.period}</span>
                      )}
                    </div>

                    <p className="text-xs text-gray-300 font-light leading-relaxed mb-6 min-h-[44px]">
                      {plan.tagline}
                    </p>

                    {/* Deliverables List */}
                    <div className="space-y-2.5 mb-8 pt-4 border-t border-white/[0.08]">
                      {plan.deliverables.map((item) => (
                        <div key={item} className="flex items-start gap-2.5">
                          <div className="mt-0.5 p-0.5 rounded-full bg-cyan-500/10 text-cyan-400 shrink-0">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs text-gray-300 font-light leading-snug">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-2">
                    <button
                      onClick={() => handleSelect(plan.name)}
                      className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 ${
                        plan.featured
                          ? 'bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 text-black font-black hover:opacity-95 shadow-lg shadow-cyan-500/30 hover:scale-[1.02]'
                          : 'bg-white/[0.07] hover:bg-white/[0.12] text-white border border-white/10'
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </Card3D>
            </div>
          ))}
        </div>

        {/* Quick direct discovery call banner with Akash Kaushal */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#090d18]/85 border border-cyan-500/30 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 block mb-1">
              Direct Strategy Hotline &bull; D2C Growth
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-white font-mono">
              Ready to scale your brand or book a commercial photo shoot?
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 font-light mt-1">
              Connect directly with Akash Kaushal ({agencyConfig.contact.phoneDisplay}) or email {agencyConfig.contact.email}.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={agencyConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Akash</span>
            </a>
            <button
              onClick={() => handleSelect('COMPLETE GROWTH PACKAGE')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-lg shadow-cyan-500/20 transition-all"
            >
              <span>Book 10–15 Min Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
