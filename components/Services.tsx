'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp,
  Share2,
  Code2,
  Palette,
  Video,
  Users,
  ArrowRight,
  Check,
  Sparkles,
  X,
} from 'lucide-react';
import { servicesData, ServiceItem } from '@/data/services';
import Card3D from './3d/Card3D';

const SERVICE_ICONS: Record<string, React.ElementType> = {
  'performance-marketing': TrendingUp,
  'social-media-management': Share2,
  'website-development': Code2,
  'branding-graphic-design': Palette,
  'video-editing-content': Video,
  'influencer-marketing': Users,
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4">
              Core Capabilities &bull; D2C Growth Suite
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-mono">
              OUR GROWTH ENGINE.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-400 max-w-md font-light leading-relaxed">
            High-converting digital services engineered for D2C fashion &amp; lifestyle brands to increase reach, engagement, and profitable sales.
          </p>
        </div>

        {/* 6 Services Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const Icon = SERVICE_ICONS[service.id] || Sparkles;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full flex flex-col"
              >
                <Card3D intensity={12} className="h-full flex-1">
                  <div className="relative rounded-2xl p-7 bg-[#0a0d16]/80 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 h-full flex flex-col justify-between shadow-xl">
                    <div>
                      {/* Top Bar: Icon + Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-400 transition-all duration-300">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-gray-400">
                          {service.badge}
                        </span>
                      </div>

                      {/* Category Pill */}
                      <span className="text-[11px] uppercase font-mono tracking-widest text-cyan-400/90 mb-2 block">
                        {service.category}
                      </span>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3">
                        {service.title}
                      </h3>

                      {/* Short Description */}
                      <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* Bottom CTA to open detailed modal */}
                    <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                      <button
                        onClick={() => setSelectedService(service)}
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href="#contact"
                        className="text-xs font-mono text-gray-400 hover:text-white transition-colors"
                      >
                        Enquire &rarr;
                      </a>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Expandable Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl rounded-3xl bg-[#0c101c] border border-white/10 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-gray-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Service Modal Header */}
              <div className="mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-2">
                  {selectedService.category} &bull; {selectedService.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-mono">
                  {selectedService.title}
                </h3>
              </div>

              {/* Full Description */}
              <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed mb-6">
                {selectedService.fullDesc}
              </p>

              {/* Deliverables Checklist */}
              <div className="mb-8 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-4">
                  Scope &bull; Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <div className="mt-1 p-0.5 rounded-full bg-cyan-500/10 text-cyan-400 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs text-gray-300 font-light leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedService.metrics.map((m) => (
                  <span
                    key={m}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20"
                  >
                    &bull; {m}
                  </span>
                ))}
              </div>

              {/* Modal Action CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.06]">
                <span className="text-xs font-mono text-gray-400">
                  Ready to deploy this capability?
                </span>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="w-full sm:w-auto px-5 py-2.5 text-xs font-mono uppercase rounded-xl border border-white/10 text-gray-300 hover:bg-white/[0.05]"
                  >
                    Back
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setSelectedService(null)}
                    className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold uppercase rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-500 hover:to-cyan-400 shadow-lg text-center"
                  >
                    Book Growth Strategy
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
