'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Globe, Share2, MessageCircle, Phone, Mail } from 'lucide-react';
import { agencyConfig } from '@/data/agency';
import { servicesData } from '@/data/services';

export default function Footer() {
  const [currentYear, setCurrentYear] = React.useState('2026');

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="relative border-t border-white/[0.08] pt-20 pb-12 overflow-hidden bg-[#040507]/90 backdrop-blur-xl">
      {/* Top CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-blue-950/40 via-[#0d1326]/80 to-cyan-950/40 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl backdrop-blur-xl">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-2">
              Next-Gen Partnership &bull; D2C Growth
            </span>
            <h3 className="text-2xl sm:text-4xl font-black uppercase text-white font-mono leading-tight">
              YOUR GROWTH STORY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                STARTS NOW.
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-light mt-2 max-w-lg">
              Book a quick 10–15 minute call with Akash Kaushal or request your free Meta Ads &amp; funnel audit.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={agencyConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/40 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Direct</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-black bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 hover:opacity-95 shadow-xl shadow-cyan-500/30 hover:scale-105 transition-all"
            >
              <span>10–15 MIN CALL</span>
              <ArrowUpRight className="w-4 h-4 text-black" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="#home" className="inline-flex items-center gap-2.5 mb-4">
              <Image
                src="/vercity-logo.jpg"
                alt=""
                width={32}
                height={32}
                sizes="32px"
                className="rounded-lg object-contain"
              />
              <span className="text-lg font-black tracking-tight text-white font-mono">
                VERCITY<span className="text-cyan-400 font-light ml-1">GROWTH</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed max-w-sm mb-4">
              Specialized performance marketing &amp; creative studio scaling D2C fashion, lifestyle, and modern brands through high-ROAS Meta Ads and conversion funnels.
            </p>

            <div className="space-y-1.5 text-xs font-mono text-gray-400 mb-6">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>+91 88513 84747 (Akash Kaushal)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>vercitygrowth@gmail.com</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={agencyConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-emerald-500/50 flex items-center justify-center text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={agencyConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-cyan-500/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href={agencyConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-cyan-500/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-300 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Services</a></li>
              <li><a href="#work" className="hover:text-cyan-400 transition-colors">Our Work</a></li>
              <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing (₹50,000)</a></li>
              <li><a href="#process" className="hover:text-cyan-400 transition-colors">Process</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-300 mb-4">
              Core Stack
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>Meta Ads Scaling</li>
              <li>Social Media Management</li>
              <li>Weekly 2–3 Ad Creatives</li>
              <li>D2C Funnel Optimization</li>
              <li>Free Meta Ads &amp; Web Audit</li>
              <li>Server-Side CAPI Tracking</li>
            </ul>
          </div>

          {/* Leadership */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-300 mb-4">
              Direct Access
            </h4>
            <div className="space-y-3 text-xs text-gray-400">
              <div>
                <span className="text-white font-medium block">Akash Kaushal</span>
                <span className="text-cyan-400 text-[11px] font-mono">Lead Growth Strategist</span>
                <p className="text-[11px] text-gray-500">+91 88513 84747</p>
              </div>
              <div>
                <span className="text-white font-medium block">Ayush Shukla</span>
                <span className="text-cyan-400 text-[11px] font-mono">Brand Partnerships</span>
                <p className="text-[11px] text-gray-500">vercitygrowth@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            &copy; {currentYear} VERCITY GROWTH. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Q4/2026 Brand Partnerships</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
