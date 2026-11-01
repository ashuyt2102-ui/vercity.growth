'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, MessageCircle, BookOpen } from 'lucide-react';
import { agencyConfig } from '@/data/agency';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: '3D Playbook', href: '#playbook' },
  { name: 'Services', href: '#services' },
  { name: 'Our Work', href: '#work' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-[#050608]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/50'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="group flex items-center gap-2.5">
            <Image
              src="/vercity-logo.jpg"
              alt=""
              width={32}
              height={32}
              sizes="32px"
              className="rounded-lg object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                VERCITY<span className="text-cyan-400 font-light ml-1">GROWTH</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-gray-400 -mt-1 font-mono">
                ENGINEERED ROI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[#0d101a]/70 border border-white/[0.08] backdrop-blur-xl shadow-inner">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-gray-300 hover:text-white hover:bg-white/[0.08] rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={agencyConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono uppercase text-emerald-400 hover:text-emerald-300 bg-emerald-950/30 hover:bg-emerald-900/40 border border-emerald-500/30 rounded-full transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>+91 88513 84747</span>
            </a>

            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide uppercase text-black font-black rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 hover:opacity-95 shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>10–15 Min Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
              className="p-2 text-gray-300 hover:text-white rounded-lg focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-b border-white/[0.08] bg-[#070910]/95 backdrop-blur-2xl px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-gray-300 hover:text-white py-1"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-3">
                <a
                  href={agencyConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono uppercase text-emerald-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: +91 88513 84747</span>
                </a>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3.5 rounded-xl text-center text-xs font-black uppercase text-black bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300"
                >
                  Book 10–15 Min Call
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
