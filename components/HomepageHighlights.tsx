import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const results = [
  { value: '30+', label: 'Websites built' },
  { value: '8x+', label: 'Top ROAS' },
  { value: '₹5 lakh', label: 'Total ad spend' },
];

const founders = [
  { name: 'Akash Kaushal', role: 'Founder' },
  { name: 'Nisha Saifi', role: 'Co-founder' },
];

export default function HomepageHighlights() {
  return (
    <>
      <section
        id="about"
        className="relative scroll-mt-24 border-t border-white/[0.06] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto grid max-w-6xl gap-6 rounded-3xl border border-white/10 bg-[#080c16]/80 p-6 backdrop-blur-xl sm:p-9 md:grid-cols-[1fr_auto] md:items-center">
          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-300">About Vercity Growth</p>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
              Strategy, creative, and performance—working together.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-300 sm:text-base">
              We are a digital growth studio helping ambitious brands move forward with clear strategy, thoughtful creative, and high-converting digital experiences.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-cyan-300/30 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:border-cyan-200 hover:bg-cyan-300/10 hover:text-white"
          >
            More about us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section
        id="results"
        className="relative scroll-mt-24 border-t border-white/[0.06] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-300">Built on real outcomes</p>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">The numbers so far</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 sm:gap-5">
            {results.map((result) => (
              <article
                key={result.label}
                className="rounded-2xl border border-white/10 bg-[#080c16]/80 px-5 py-7 text-center backdrop-blur-xl sm:py-9"
              >
                <p className="text-3xl font-black tracking-tight text-white sm:text-4xl">{result.value}</p>
                <p className="mt-2 text-xs font-mono uppercase tracking-[0.16em] text-gray-400">{result.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/[0.06] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-300">The people behind Vercity</p>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">Our founders</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {founders.map((founder) => (
              <article key={founder.name} className="rounded-2xl border border-white/10 bg-[#080c16]/80 p-5 backdrop-blur-xl">
                <p className="text-xs font-mono uppercase tracking-[0.18em] text-cyan-300">{founder.role}</p>
                <h3 className="mt-2 text-lg font-bold text-white">{founder.name}</h3>
              </article>
            ))}
          </div>
          <div className="md:col-start-2">
            <Link href="/founders" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white">
              Meet the founders <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section
        id="our-story"
        className="relative scroll-mt-24 border-t border-white/[0.06] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-6xl rounded-3xl border border-cyan-300/15 bg-gradient-to-br from-cyan-950/25 via-[#080c16]/90 to-indigo-950/20 p-6 sm:p-10 lg:p-12">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-300">A little about our beginning</p>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">Our story</h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-relaxed text-gray-300 sm:text-base">
            <p>
              Vercity Growth was built around a simple belief: growing a brand should feel like one clear journey, not a collection of disconnected tasks. Founded by Akash Kaushal and Nisha Saifi, we bring strategy, creative, and performance together under one roof.
            </p>
            <p>
              We work alongside ambitious teams to turn big ideas into thoughtful campaigns, stronger digital experiences, and steady progress. Every brand has its own path; our job is to help make the next step clearer.
            </p>
            <p className="text-cyan-100/80">
              This is our story so far—and it keeps growing with every partnership.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
