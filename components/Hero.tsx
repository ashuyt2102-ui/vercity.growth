'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, MessageCircle, Sparkles, PhoneCall, Camera, BookOpen } from 'lucide-react';
import { agencyConfig } from '@/data/agency';
import Card3D from './3d/Card3D';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[94vh] flex items-center justify-center pt-28 pb-16 lg:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Top pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 backdrop-blur-md mb-6 w-fit shadow-lg shadow-cyan-500/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span className="text-xs font-mono tracking-widest text-cyan-300 uppercase">
                D2C Fashion &bull; Lifestyle &bull; Creative Studio
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] uppercase text-white mb-6 font-mono"
            >
              WE ENGINEER <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
                DIGITAL GROWTH.
              </span>
            </motion.h1>

            {/* Supporting Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl font-light leading-relaxed mb-6"
            >
              We scale D2C fashion &amp; lifestyle brands through high-converting Meta Ads, commercial studio product photo shoots, and high-performance digital storefronts.
            </motion.p>

            {/* Photo Shoot & Signature Highlight Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mb-8 p-4 rounded-xl bg-[#090d18]/80 border border-cyan-500/30 backdrop-blur-md max-w-xl"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5">
                  <Camera className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold mb-1">
                    Studio Product Photo Shoots &bull; Starting from ₹10,000
                  </h4>
                  <p className="text-xs text-gray-300 font-light leading-relaxed">
                    Commercial on-model lifestyle and studio product photography with 3–5 day delivery. Engineered specifically for high-converting Meta Ads and lookbooks.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Key Value Micro-list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 mb-10 text-xs sm:text-sm text-gray-400 font-mono"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Meta Ads Management</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>2–3 Creatives (Weekly)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <span>Product Shoots (From ₹10,000)</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-black tracking-wider uppercase text-black bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 hover:opacity-95 shadow-xl shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.02]"
              >
                <span>View Plans (From ₹10,000)</span>
                <ArrowUpRight className="w-4 h-4 text-black" />
              </a>

              <a
                href="#playbook"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase text-cyan-300 border border-cyan-500/30 hover:border-cyan-500/60 bg-cyan-950/20 hover:bg-cyan-900/30 backdrop-blur-md transition-all duration-300"
              >
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>Open 3D Playbook</span>
              </a>

              <a
                href={agencyConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs font-mono uppercase tracking-wider text-emerald-300 border border-emerald-500/30 hover:border-emerald-500/60 bg-emerald-950/20 hover:bg-emerald-900/30 backdrop-blur-md transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Akash</span>
              </a>
            </motion.div>

            {/* Direct access tag */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-8 flex items-center gap-4 text-xs font-mono text-gray-400"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Direct Strategy: Akash Kaushal (+91 88513 84747) &bull; Partnerships: Ayush Shukla</span>
            </motion.div>
          </div>

          {/* Right Column: 3D Perspective Visual Spotlight */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            <Card3D intensity={12} className="w-full max-w-md">
              <div className="relative rounded-3xl p-8 bg-gradient-to-br from-[#0c1222]/90 via-[#0a0e1c]/80 to-[#060810]/95 border border-cyan-500/30 shadow-[0_20px_60px_-15px_rgba(6,182,212,0.25)] backdrop-blur-2xl">
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                    Vercity Growth Suite
                  </span>
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Onboarding Q4</span>
                  </span>
                </div>

                <h3 className="text-2xl font-black uppercase text-white font-mono mb-4">
                  D2C PERFORMANCE &amp; CREATIVE MATRIX
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-white font-medium block">Studio Product Photo Shoot</span>
                      <span className="text-[11px] font-mono text-cyan-400">Commercial E-Commerce Visuals</span>
                    </div>
                    <span className="text-sm font-black font-mono text-white">From ₹10,000</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-white font-medium block">Complete Growth Package</span>
                      <span className="text-[11px] font-mono text-cyan-300">Ads + Social + Weekly Creatives</span>
                    </div>
                    <span className="text-sm font-black font-mono text-cyan-300">₹50,000/mo</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-white font-medium block">Custom Shopify / Next.js</span>
                      <span className="text-[11px] font-mono text-cyan-400">High-Converting Stores</span>
                    </div>
                    <span className="text-sm font-black font-mono text-white">From ₹50,000</span>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="w-full py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider bg-gradient-to-r from-cyan-400 to-blue-500 text-black flex items-center justify-center gap-2 hover:opacity-95 shadow-lg"
                >
                  <span>Book 10–15 Min Strategy Call</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
}
