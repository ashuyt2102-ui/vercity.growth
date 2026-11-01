import type { ReactNode } from 'react';
import PortalPageLayout from '@/components/PortalPageLayout';

interface SectionPageLayoutProps {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}

export default function SectionPageLayout({
  eyebrow,
  title,
  description,
  children,
}: SectionPageLayoutProps) {
  return (
    <PortalPageLayout>
      <header className="px-4 pb-8 pt-32 sm:px-6 sm:pb-10 sm:pt-40 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-cyan-300">{eyebrow}</p>
          <h1 className="max-w-4xl text-4xl font-black uppercase leading-tight tracking-tight text-white sm:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">{description}</p>
        </div>
      </header>
      {children}
    </PortalPageLayout>
  );
}
