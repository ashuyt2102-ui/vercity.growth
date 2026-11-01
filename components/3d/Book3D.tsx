'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, BookOpen, Camera, Sparkles, TrendingUp, Code2, ArrowUpRight } from 'lucide-react';
import { agencyConfig } from '@/data/agency';

export default function Book3D() {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = 4; // 4 spreads (0: Cover, 1: Photoshoot & Creatives, 2: Meta Ads & Tech, 3: Call to Action)

  const nextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-8 select-none">
      {/* 3D Stage Container */}
      <div
        className="relative mx-auto flex items-center justify-center min-h-[460px] sm:min-h-[520px]"
        style={{ perspective: '1600px' }}
      >
        {/* The 3D Book Object */}
        <div
          className="relative w-full max-w-2xl h-[420px] sm:h-[480px] rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] transition-transform duration-700 ease-out"
          style={{
            transformStyle: 'preserve-3d',
            transform: currentPage === 0 ? 'rotateY(0deg) rotateX(4deg)' : 'rotateY(0deg) rotateX(2deg)',
          }}
        >
          {/* SPREAD 0: Hardcover Exterior Front */}
          {currentPage === 0 && (
            <motion.div
              initial={{ rotateY: -60, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0c1222] via-[#090d18] to-[#04060b] border-2 border-cyan-500/40 p-8 sm:p-12 flex flex-col justify-between shadow-2xl overflow-hidden cursor-pointer group"
              onClick={nextPage}
            >
              {/* Spine Highlight & Lighting Sheen */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/80 via-white/[0.08] to-transparent pointer-events-none" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 font-mono text-xs font-black">
                      VG
                    </div>
                    <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
                      Official Agency Playbook &bull; 2026
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-white/[0.05] border border-white/10 text-gray-400">
                    Volume 01
                  </span>
                </div>

                <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400/90 block mb-2">
                  D2C Fashion &bull; Lifestyle &bull; Performance
                </span>
                <h3 className="text-3xl sm:text-5xl font-black uppercase text-white font-mono tracking-tight leading-none mb-6">
                  THE GROWTH <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
                    BLUEPRINT.
                  </span>
                </h3>

                <p className="text-sm text-gray-300 font-light leading-relaxed max-w-md">
                  From commercial studio product photo shoots starting at ₹10,000 to full-funnel Meta Ads and headless e-commerce engineering.
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <div className="text-xs font-mono text-gray-400">
                  Curated by <span className="text-white font-semibold">Akash Kaushal</span> &amp; <span className="text-white font-semibold">Ayush Shukla</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 group-hover:text-cyan-300 font-bold">
                  <span>Click To Open Playbook</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          )}

          {/* SPREAD 1: Photo Shoot & Creative Engine (Pages 2 & 3) */}
          {currentPage === 1 && (
            <motion.div
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 rounded-2xl bg-[#090d18] border border-white/10 p-6 sm:p-10 flex flex-col justify-between shadow-2xl overflow-hidden"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 h-full">
                {/* Left Page: Photo Shoot Focus */}
                <div className="flex flex-col justify-between border-b sm:border-b-0 sm:border-r border-white/[0.08] sm:pr-6 pb-4 sm:pb-0">
                  <div>
                    <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-2">
                      <Camera className="w-4 h-4" />
                      <span>Chapter 01 &bull; Visual Production</span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-white font-mono mb-2">
                      Studio Photo Shoots (From ₹10,000)
                    </h4>
                    <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
                      Attention starts with visual dominance. We shoot high-resolution e-commerce and lifestyle assets that halt scrolling on Meta Ads and lookbooks.
                    </p>
                    <div className="space-y-1.5 text-xs font-mono text-gray-400">
                      <div>&bull; E-Commerce White &amp; Gradient Studio Shoots</div>
                      <div>&bull; On-Model Fashion Lookbooks (₹25,000)</div>
                      <div>&bull; 25–50 High-Res Retouched Final Assets</div>
                      <div>&bull; Ad Creative Ready Multi-Crop Packs</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-cyan-300 font-mono">
                    Starting at ₹10,000 with 3–5 day delivery.
                  </div>
                </div>

                {/* Right Page: Weekly Creative Pipeline */}
                <div className="flex flex-col justify-between sm:pl-2">
                  <div>
                    <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-2">
                      <Sparkles className="w-4 h-4" />
                      <span>Chapter 02 &bull; High-CTR Creatives</span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-white font-mono mb-2">
                      2–3 Creatives Weekly
                    </h4>
                    <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
                      Creative fatigue kills ROAS. Every week, we script, design, and render 2–3 new static and short-form video hooks to continuously test and scale.
                    </p>
                    <div className="space-y-1.5 text-xs font-mono text-gray-400">
                      <div>&bull; 3-Second Pattern Interrupt Hooks</div>
                      <div>&bull; Short-Form Reels &amp; UGC Formats</div>
                      <div>&bull; Multi-Variant Angle Testing</div>
                      <div>&bull; Dynamic Motion Design &amp; Kinetic Type</div>
                    </div>
                  </div>

                  <div className="text-[11px] font-mono text-gray-500">
                    Included in our ₹50,000/mo Complete Growth Package.
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* SPREAD 2: Meta Ads & VERCITY GROWTH Web Plans (Pages 4 & 5) */}
          {currentPage === 2 && (
            <motion.div
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 rounded-2xl bg-[#090d18] border border-white/10 p-6 sm:p-10 flex flex-col justify-between shadow-2xl overflow-hidden"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 h-full">
                {/* Left Page: Meta Ads & Paid Media */}
                <div className="flex flex-col justify-between border-b sm:border-b-0 sm:border-r border-white/[0.08] sm:pr-6 pb-4 sm:pb-0">
                  <div>
                    <div className="flex items-center gap-2 text-blue-400 text-xs font-mono uppercase tracking-wider mb-2">
                      <TrendingUp className="w-4 h-4" />
                      <span>Chapter 03 &bull; Acquisition Engine</span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-white font-mono mb-2">
                      Meta Ads Scaling
                    </h4>
                    <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
                      Full-funnel campaign management across Facebook &amp; Instagram targeting cold audiences and retargeting high-intent buyers.
                    </p>
                    <div className="space-y-1.5 text-xs font-mono text-gray-400">
                      <div>&bull; Starter Plan (Basic): ₹20,000/mo</div>
                      <div>&bull; Growth Plan (Pro): ₹30,000/mo</div>
                      <div>&bull; Complete Growth Package: ₹50,000/mo</div>
                      <div>&bull; Server-Side CAPI Tracking &amp; Attribution</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-blue-950/30 border border-blue-500/20 text-xs text-blue-300 font-mono">
                    Direct account ownership with weekly ROAS audits.
                  </div>
                </div>

                {/* Right Page: Web Infrastructure */}
                <div className="flex flex-col justify-between sm:pl-2">
                  <div>
                    <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-2">
                      <Code2 className="w-4 h-4" />
                      <span>Chapter 04 &bull; Web Infrastructure</span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-white font-mono mb-2">
                      High-Speed Storefronts
                    </h4>
                    <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
                      Turn paid traffic into purchases with custom Liquid e-commerce coding and sub-second Next.js digital platforms.
                    </p>
                    <div className="space-y-1.5 text-xs font-mono text-gray-400">
                      <div>&bull; Informational Web: ₹15,000</div>
                      <div>&bull; Standard E-Commerce: ₹25,000</div>
                      <div>&bull; Premium E-Commerce: ₹50,000</div>
                      <div>&bull; Enterprise Solution: ₹1,00,000</div>
                    </div>
                  </div>

                  <div className="text-[11px] font-mono text-gray-500">
                    Engineered for high conversion rates &amp; 95+ Core Web Vitals.
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* SPREAD 3: Direct Action & Book a Call (Back Cover) */}
          {currentPage === 3 && (
            <motion.div
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0c1222] via-[#090d18] to-[#04060b] border-2 border-cyan-500/40 p-8 sm:p-12 flex flex-col justify-between shadow-2xl overflow-hidden"
            >
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-2">
                  Chapter 05 &bull; Next Steps
                </span>
                <h3 className="text-2xl sm:text-4xl font-black uppercase text-white font-mono mb-4">
                  READY TO SCALE YOUR D2C BRAND?
                </h3>
                <p className="text-sm text-gray-300 font-light leading-relaxed max-w-lg mb-8">
                  Book a quick 10–15 minute strategy call with Akash Kaushal to review your products, marketing bottlenecks, and photo shoot requirements.
                </p>

                <div className="space-y-3 max-w-md mb-8">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-gray-400 block">Lead Performance Director</span>
                      <span className="text-sm font-bold text-white font-mono">Akash Kaushal</span>
                    </div>
                    <span className="text-xs font-mono text-cyan-400">+91 88513 84747</span>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-gray-400 block">Brand Partnerships</span>
                      <span className="text-sm font-bold text-white font-mono">Ayush Shukla</span>
                    </div>
                    <span className="text-xs font-mono text-cyan-400">vercitygrowth@gmail.com</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                <a
                  href={agencyConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-emerald-500 text-black shadow-lg shadow-emerald-500/25 flex items-center gap-2"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="#contact"
                  className="px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-lg"
                >
                  Book 10–15 Min Call &rarr;
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Book Interactive Pagination Navigation */}
      <div className="flex items-center justify-center gap-6 mt-6">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="p-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-gray-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentPage === idx ? 'w-8 bg-cyan-400 shadow-[0_0_10px_#38bdf8]' : 'w-2 bg-white/20'
              }`}
              aria-label={`Go to spread ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className="p-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-gray-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          aria-label="Next page"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <p className="text-center text-xs font-mono text-gray-500 mt-2">
        Click the arrows or the book cover to flip through the VERCITY GROWTH 3D Lookbook &bull; Spread {currentPage + 1} of {totalPages}
      </p>
    </div>
  );
}
