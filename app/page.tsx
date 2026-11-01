import Link from 'next/link';
import { ArrowUpRight, CircleDollarSign, Compass, MessageSquareQuote } from 'lucide-react';
import Hero from '@/components/Hero';
import PortalPageLayout from '@/components/PortalPageLayout';
import Services from '@/components/Services';
import ResultsHighlights from '@/components/ResultsHighlights';
import FoundersHighlights from '@/components/FoundersHighlights';

const destinations = [
  { title: 'Stories', description: 'Meet the ideas and perspectives behind the studio.', href: '/stories', icon: MessageSquareQuote },
  { title: 'Pricing', description: 'Find a plan that fits your next move.', href: '/pricing', icon: CircleDollarSign },
  { title: 'About', description: 'Get to know the principles behind Vercity Growth.', href: '/about', icon: Compass },
  { title: 'Contact', description: 'Tell us about your brand and goals.', href: '/contact', icon: ArrowUpRight },
];

export default function Home() {
  return (
    <PortalPageLayout>
      <div>
        <Hero />
        <Services />
        <ResultsHighlights heading="The numbers so far" />
        <FoundersHighlights />
        <section aria-label="Explore more of Vercity Growth" className="border-t border-white/[0.06] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map(({ title, description, href, icon: Icon }) => (
              <Link
                className="group rounded-2xl border border-white/10 bg-[#080c16]/75 p-5 transition hover:border-cyan-300/35 hover:bg-[#0b1220]/90 sm:p-6"
                href={href}
                key={title}
              >
                <div className="flex items-center justify-between">
                  <Icon aria-hidden="true" className="h-5 w-5 text-cyan-300" />
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-gray-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-200" />
                </div>
                <h2 className="mt-5 text-lg font-bold text-white">{title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-gray-400">{description}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </PortalPageLayout>
  );
}
