'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Code2,
  Palette,
  Share2,
  Sparkles,
  TrendingUp,
  Users,
  Video,
} from 'lucide-react';
import { servicesData } from '@/data/services';
import Link from 'next/link';

const serviceIcons = {
  'performance-marketing': TrendingUp,
  'social-media-management': Share2,
  'website-development': Code2,
  'branding-graphic-design': Palette,
  'video-editing-content': Video,
  'influencer-marketing': Users,
  'studio-product-photoshoot': Sparkles,
};

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const service = servicesData[activeIndex];
  const Icon = serviceIcons[service.id as keyof typeof serviceIcons] || Sparkles;

  const showPrevious = () => setActiveIndex((index) => (index - 1 + servicesData.length) % servicesData.length);
  const showNext = () => setActiveIndex((index) => (index + 1) % servicesData.length);

  return (
    <section id="services" className="relative scroll-mt-24 overflow-hidden border-t border-white/[0.06] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-3 text-xs font-mono uppercase tracking-[0.25em] text-cyan-300">One studio, many ways forward</p>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">What we do</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-gray-400">
            Pick a direction. We&apos;ll help you find the right next step.
          </p>
        </div>

        <div className="grid items-center gap-8 rounded-[2rem] border border-white/10 bg-[#080c16]/75 p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl sm:p-10 md:grid-cols-[1fr_auto]">
          <div className="min-h-[255px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.25 }}
                className="flex h-full flex-col justify-center"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-cyan-300">{service.category}</p>
                    <p className="mt-1 text-xs text-gray-500">{service.badge}</p>
                  </div>
                </div>
                <h3 className="max-w-2xl text-2xl font-bold text-white sm:text-3xl">{service.title}</h3>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">{service.shortDesc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.metrics.slice(0, 3).map((metric) => (
                    <span key={metric} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] text-gray-300">
                      {metric}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-5 md:flex-col md:border-l md:border-t-0 md:pl-7 md:pt-0">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Previous service"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-cyan-300/50 hover:text-cyan-200"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <span className="min-w-[4rem] text-center font-mono text-xs text-gray-400" aria-live="polite">
                {String(activeIndex + 1).padStart(2, '0')} / {String(servicesData.length).padStart(2, '0')}
              </span>
              <button
                type="button"
                onClick={showNext}
                aria-label="Next service"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-cyan-300/50 hover:text-cyan-200"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <Link href="/contact" className="text-xs font-semibold uppercase tracking-wider text-cyan-200 transition hover:text-white">
              Talk about it <ArrowRight className="ml-1 inline h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="mt-5 flex justify-center gap-2" aria-label="Choose a service">
          {servicesData.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show service ${index + 1}: ${item.title}`}
              aria-current={activeIndex === index}
              className={`h-1.5 rounded-full transition-all ${activeIndex === index ? 'w-8 bg-cyan-300' : 'w-1.5 bg-white/25 hover:bg-white/50'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
