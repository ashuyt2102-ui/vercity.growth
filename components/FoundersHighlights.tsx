import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const founders = [
  { name: 'Akash Kaushal', role: 'Founder', photo: '/founders/akash-kaushal.jpeg' },
  { name: 'Nisha Saifi', role: 'Co-founder', photo: '/founders/nisha-saifi.jpeg' },
];

export default function FoundersHighlights() {
  return (
    <section
      id="founders"
      className="relative scroll-mt-24 border-t border-white/[0.06] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-300">The people behind Vercity</p>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">Meet our founders</h2>
          </div>
          <Link
            href="/founders"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white"
          >
            More about the founders <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {founders.map((founder) => (
            <article
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#080c16]/80 p-4 backdrop-blur-xl sm:gap-6 sm:p-6"
              key={founder.name}
            >
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-cyan-950/30 to-indigo-950/30 sm:h-32 sm:w-32">
                <Image
                  src={founder.photo}
                  alt={`${founder.name}, ${founder.role} of Vercity Growth`}
                  fill
                  sizes="(max-width: 640px) 96px, 128px"
                  className="object-contain object-center"
                />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-300">{founder.role}</p>
                <h3 className="mt-2 text-lg font-bold text-white sm:text-xl">{founder.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
