'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { agencyConfig } from '@/data/agency';

const tickerItems = ['Make your next move', 'Creative that converts', 'Growth without guesswork'];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92svh] scroll-mt-24 flex-col justify-center overflow-hidden px-4 pb-8 pt-28 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10 py-12 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-xs font-mono uppercase tracking-[0.3em] text-cyan-300"
          >
            Vercity Growth · Digital studio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mx-auto max-w-3xl text-4xl font-black uppercase leading-[1.04] tracking-tight text-white sm:text-6xl lg:mx-0 xl:text-7xl"
          >
            Step into your
            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
              next growth era.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg lg:mx-0"
          >
            Strategy, creative, and performance marketing—built to move your brand forward.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:brightness-110"
            >
              Explore the studio <ArrowDown className="h-4 w-4" />
            </Link>
            <a
              href={agencyConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/[0.08]"
            >
              <MessageCircle className="h-4 w-4 text-cyan-300" /> Let&apos;s talk
            </a>
          </motion.div>
        </div>

        <div className="relative mx-auto flex h-[330px] w-full max-w-[440px] items-center justify-center sm:h-[440px]">
          <div className="absolute h-56 w-56 rounded-full bg-cyan-500/20 blur-[90px] sm:h-72 sm:w-72" />
          <motion.div
            aria-hidden="true"
            animate={{ rotateY: [0, 360], rotateZ: [0, 8, 0] }}
            transition={{ rotateY: { duration: 28, repeat: Infinity, ease: 'linear' }, rotateZ: { duration: 9, repeat: Infinity, ease: 'easeInOut' } }}
            className="absolute h-[250px] w-[178px] rounded-[50%] border border-cyan-300/70 shadow-[0_0_30px_rgba(34,211,238,0.2),inset_0_0_28px_rgba(34,211,238,0.14)] sm:h-[340px] sm:w-[242px]"
            style={{ transformStyle: 'preserve-3d', perspective: '900px' }}
          >
            <div className="absolute inset-3 rounded-[50%] border border-blue-400/50" />
            <div className="absolute inset-7 rounded-[50%] border border-indigo-300/40" />
            <div className="absolute inset-0 rounded-[50%] bg-gradient-to-b from-cyan-300/[0.08] via-transparent to-indigo-400/[0.12]" />
          </motion.div>
          <motion.div
            aria-hidden="true"
            animate={{ rotate: [0, -360] }}
            transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
            className="absolute h-[290px] w-[210px] rounded-[50%] border border-dashed border-blue-300/35 sm:h-[392px] sm:w-[280px]"
            style={{ transform: 'rotateX(68deg)' }}
          />
          <div className="relative z-10 text-center" style={{ transform: 'translateZ(40px)' }}>
            <span className="block text-[10px] font-mono uppercase tracking-[0.35em] text-cyan-200/80">
              Enter the
            </span>
            <span className="mt-2 block text-2xl font-black uppercase tracking-[0.12em] text-white sm:text-3xl">
              Growth
            </span>
            <span className="mt-1 block text-2xl font-black uppercase tracking-[0.12em] text-white sm:text-3xl">
              Portal
            </span>
            <Link
              href="/pricing"
              aria-label="Explore plans"
              className="mx-auto mt-5 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-200/50 bg-cyan-300/10 text-cyan-200 transition hover:scale-110 hover:bg-cyan-300/20"
            >
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-5 w-full max-w-7xl overflow-hidden border-y border-white/10 py-3">
        <div className="portal-marquee flex w-max items-center gap-8 whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span
              key={`${item}-${index}`}
              aria-hidden={index >= tickerItems.length}
              className="flex items-center gap-8 text-[11px] font-mono uppercase tracking-[0.22em] text-gray-300/80 sm:text-xs"
            >
              {item}
              <span className="text-cyan-300">✳</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
