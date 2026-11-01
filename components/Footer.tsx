import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react';
import { agencyConfig } from '@/data/agency';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.08] bg-[#040507]/80 px-4 py-8 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="inline-flex items-center gap-3">
          <Image
            src="/vercity-logo.jpg"
            alt=""
            width={34}
            height={34}
            sizes="34px"
            className="rounded-lg object-contain"
          />
          <span className="text-sm font-black tracking-tight text-white">
            VERCITY<span className="ml-1 font-light text-cyan-300">GROWTH</span>
          </span>
        </Link>

        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-gray-400">
          <Link href="/#services" className="transition hover:text-white">Services</Link>
          <Link href="/#pricing" className="transition hover:text-white">Plans</Link>
          <Link href="/#about" className="transition hover:text-white">About</Link>
          <Link href="/founders" className="transition hover:text-white">Founders</Link>
          <Link href="/#contact" className="transition hover:text-white">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${agencyConfig.contact.email}`}
            aria-label="Email Vercity Growth"
            className="text-gray-400 transition hover:text-cyan-200"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={agencyConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-[10px] font-bold text-gray-400 transition hover:border-cyan-300/40 hover:text-cyan-200"
          >
            IG
          </a>
          <a
            href={agencyConfig.social.linkedin}
            aria-label="LinkedIn"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-[10px] font-bold text-gray-400 transition hover:border-cyan-300/40 hover:text-cyan-200"
          >
            in
          </a>
          <a
            href={agencyConfig.social.facebook}
            aria-label="Facebook"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-[10px] font-bold text-gray-400 transition hover:border-cyan-300/40 hover:text-cyan-200"
          >
            f
          </a>
          <a
            href={agencyConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-gray-400 transition hover:text-cyan-200"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <Link href="/" aria-label="Back to top" className="ml-2 text-cyan-200 transition hover:text-white">
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-6 max-w-7xl border-t border-white/[0.06] pt-5 text-center text-[11px] text-gray-500 sm:text-left">
        &copy; 2026 VERCITY GROWTH. All rights reserved.
      </div>
    </footer>
  );
}
