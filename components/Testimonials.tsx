'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonialsData } from '@/data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? testimonialsData.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === testimonialsData.length - 1 ? 0 : prevIdx + 1));
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="py-24 relative overflow-hidden bg-[#050608] border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4">
            Partner Perspectives &bull; Sample Showcase
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4 font-mono">
            WHAT PARTNERS SAY.
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 font-mono">
            Sample client feedback representation during development.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative rounded-3xl p-8 sm:p-12 bg-[#0c101c] border border-white/[0.08] shadow-2xl">
          <Quote className="absolute top-6 right-8 w-16 h-16 text-blue-500/10 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
            >
              {/* Photo & Role */}
              <div className="flex flex-col items-center text-center shrink-0">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500/40 shadow-xl shadow-blue-500/20 mb-4">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-base font-bold text-white">{current.name}</h4>
                <p className="text-xs text-cyan-400 font-mono">{current.role}</p>
                <p className="text-xs text-gray-500 font-mono">{current.company}</p>

                {/* Stars */}
                <div className="flex gap-1 mt-2 text-amber-400">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>

              {/* Quote Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-block px-3 py-1 rounded-md bg-blue-500/10 text-blue-300 text-xs font-mono uppercase tracking-wider mb-4 border border-blue-500/20">
                  {current.highlight}
                </div>
                <p className="text-base sm:text-xl text-gray-200 font-light italic leading-relaxed mb-6">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  Verified Partner Representation
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/[0.06]">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonialsData.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-blue-500' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                aria-label="Previous Testimonial"
                className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-gray-300 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                aria-label="Next Testimonial"
                className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-gray-300 hover:text-white transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
