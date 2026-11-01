import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Compass, Shield, Sparkles } from 'lucide-react';
import PortalPageLayout from '@/components/PortalPageLayout';

export const metadata: Metadata = {
  title: 'About Vercity Growth',
  description: 'Learn about Vercity Growth and our approach to helping ambitious brands grow.',
};

const principles = [
  {
    icon: Compass,
    title: 'Strategy with direction',
    description: 'We connect your brand goals to a clear plan across marketing, creative, and digital experiences.',
  },
  {
    icon: Sparkles,
    title: 'Creative that moves',
    description: 'We make thoughtful, distinctive creative designed to earn attention and make your brand memorable.',
  },
  {
    icon: Shield,
    title: 'Built for lasting growth',
    description: 'We focus on strong foundations, considered experimentation, and progress you can understand.',
  },
];

export default function AboutPage() {
  return (
    <PortalPageLayout>
      <section className="px-4 pb-20 pt-32 sm:px-6 sm:pb-28 sm:pt-40 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-cyan-300">About Vercity Growth</p>
            <h1 className="text-4xl font-black uppercase leading-tight tracking-tight text-white sm:text-6xl">
              Good growth starts with
              <span className="block bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">a clear direction.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
              Vercity Growth is a digital growth studio bringing strategy, creative, and performance together to help ambitious brands move forward.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {principles.map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-[#080c16]/80 p-6 backdrop-blur-xl sm:p-7">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="text-lg font-bold text-white">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{description}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl border border-cyan-300/15 bg-cyan-950/20 p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <h2 className="text-xl font-bold text-white">Meet the people behind the studio.</h2>
              <p className="mt-2 text-sm text-gray-400">Get to know Vercity Growth&apos;s founders.</p>
            </div>
            <Link
              href="/founders"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
            >
              Meet the founders <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PortalPageLayout>
  );
}
