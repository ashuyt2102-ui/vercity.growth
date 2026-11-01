import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PortalPageLayout from '@/components/PortalPageLayout';

export const metadata: Metadata = {
  title: 'Our Founders | Vercity Growth',
  description: 'Meet Vercity Growth founder Akash Kaushal and co-founder Nisha Saifi.',
};

const founders = [
  {
    name: 'Akash Kaushal',
    role: 'Founder',
    age: 26,
    photo: '/founders/akash-kaushal.jpeg',
  },
  {
    name: 'Nisha Saifi',
    role: 'Co-founder',
    age: 26,
    photo: '/founders/nisha-saifi.jpeg',
  },
];

export default function FoundersPage() {
  return (
    <PortalPageLayout>
      <section className="px-4 pb-20 pt-32 sm:px-6 sm:pb-28 sm:pt-40 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-cyan-300">The people behind Vercity</p>
            <h1 className="text-4xl font-black uppercase leading-tight tracking-tight text-white sm:text-6xl">
              Meet the
              <span className="block bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">founders.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
              The people building Vercity Growth and shaping its next chapter.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            {founders.map((founder) => (
              <article
                key={founder.name}
                className="overflow-hidden rounded-3xl border border-white/10 bg-[#080c16]/85 shadow-2xl backdrop-blur-xl"
              >
                <div className="relative aspect-[3/4] w-full border-b border-white/10 bg-gradient-to-br from-cyan-950/20 via-[#080c16] to-indigo-950/20">
                  <Image
                    src={founder.photo}
                    alt={`${founder.name}, ${founder.role} of Vercity Growth`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain object-center"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-mono uppercase tracking-[0.22em] text-cyan-300">{founder.role}</p>
                  <h2 className="mt-2 text-2xl font-bold text-white">{founder.name}</h2>
                  <p className="mt-2 text-sm text-gray-400">Age {founder.age}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white">
              About Vercity Growth <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PortalPageLayout>
  );
}
