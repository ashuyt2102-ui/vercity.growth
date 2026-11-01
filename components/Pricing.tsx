'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import Link from 'next/link';
import { pricingCategories, pricingConfig, type PricingTier } from '@/data/pricing';
import Card3D from './3d/Card3D';

interface PricingProps {
  onSelectPlan?: (planName: string) => void;
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  const [activeCategory, setActiveCategory] = useState(pricingCategories[0].id);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const filteredPlans = pricingConfig.plans.filter((plan) => plan.category === activeCategory);
  const activePlan: PricingTier = filteredPlans[activeIndex];

  const chooseCategory = (category: string) => {
    setActiveCategory(category);
    setActiveIndex(0);
    setDirection(1);
  };

  const movePlan = (step: number) => {
    setDirection(step);
    setActiveIndex((index) => Math.min(Math.max(index + step, 0), filteredPlans.length - 1));
  };

  return (
    <section id="pricing" className="relative scroll-mt-24 overflow-hidden border-t border-white/[0.06] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-9 text-center">
          <p className="mb-3 text-xs font-mono uppercase tracking-[0.25em] text-cyan-300">Clear options. No clutter.</p>
          <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">Find your plan</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-400">
            Browse one plan at a time, then choose what fits your next move.
          </p>
        </div>

        <div className="mb-8 flex justify-center">
          <div className="grid w-full max-w-2xl grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-center">
            {pricingCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => chooseCategory(category.id)}
                aria-pressed={activeCategory === category.id}
                className={`min-h-11 rounded-xl border px-3 py-2 text-xs transition sm:rounded-full sm:px-5 ${
                  activeCategory === category.id
                    ? 'border-cyan-300/50 bg-cyan-300 text-slate-950'
                    : 'border-white/10 bg-white/[0.04] text-gray-300 hover:bg-white/[0.08]'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto grid max-w-4xl items-center gap-5 md:grid-cols-[auto_1fr_auto]">
          <button
            type="button"
            onClick={() => movePlan(-1)}
            disabled={activeIndex === 0}
            aria-label="Previous plan"
            className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-cyan-300/50 hover:text-cyan-200 disabled:cursor-not-allowed disabled:opacity-30 md:flex"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <Card3D intensity={10} className="w-full">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.article
                key={activePlan.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 32 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -32 }}
                transition={{ duration: 0.22 }}
                className="rounded-3xl border border-cyan-300/20 bg-[#080c16]/90 p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl sm:p-9"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-cyan-300">{activePlan.category}</p>
                    <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">{activePlan.name}</h3>
                    {activePlan.badge && (
                      <span className="mt-3 inline-flex rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[10px] uppercase tracking-wider text-gray-300">
                        {activePlan.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-black text-white sm:text-4xl">{activePlan.price}</p>
                    <p className="mt-1 text-xs text-gray-400">{activePlan.period}</p>
                  </div>
                </div>

                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-300">{activePlan.tagline}</p>

                <ul className="mt-6 grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-2">
                  {activePlan.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs leading-relaxed text-gray-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                      <span>{item.replace(/^✅\s*/, '')}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/contact?plan=${encodeURIComponent(activePlan.name)}`}
                  onClick={() => onSelectPlan?.(activePlan.name)}
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 to-blue-400 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 transition hover:brightness-110 sm:w-auto"
                >
                  {activePlan.ctaText} <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.article>
            </AnimatePresence>
          </Card3D>

          <button
            type="button"
            onClick={() => movePlan(1)}
            disabled={activeIndex === filteredPlans.length - 1}
            aria-label="Next plan"
            className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-cyan-300/50 hover:text-cyan-200 disabled:cursor-not-allowed disabled:opacity-30 md:flex"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mx-auto mt-5 flex max-w-4xl items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => movePlan(-1)}
            disabled={activeIndex === 0}
            className="inline-flex items-center gap-1 text-xs text-gray-300 hover:text-white disabled:opacity-30 md:hidden"
          >
            <ArrowLeft className="h-4 w-4" /> Previous
          </button>
          <p className="text-center font-mono text-xs text-gray-400" aria-live="polite">
            {String(activeIndex + 1).padStart(2, '0')} / {String(filteredPlans.length).padStart(2, '0')}
          </p>
          <button
            type="button"
            onClick={() => movePlan(1)}
            disabled={activeIndex === filteredPlans.length - 1}
            className="inline-flex items-center gap-1 text-xs text-gray-300 hover:text-white disabled:opacity-30 md:hidden"
          >
            Next <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-8 text-center text-[11px] leading-relaxed text-gray-500">
          {pricingConfig.currencyNotice}
        </p>
      </div>
    </section>
  );
}
