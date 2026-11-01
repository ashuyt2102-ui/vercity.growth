import type { Metadata } from 'next';
import ResultsHighlights from '@/components/ResultsHighlights';
import SectionPageLayout from '@/components/SectionPageLayout';

export const metadata: Metadata = {
  title: 'Results | Vercity Growth',
  description: 'A snapshot of websites built, top reported ROAS, and ad spend managed by Vercity Growth.',
};

export default function ResultsPage() {
  return (
    <SectionPageLayout
      eyebrow="Our results"
      title="The numbers so far."
      description="A snapshot of the work and campaign figures shared by Vercity Growth."
    >
      <ResultsHighlights />
    </SectionPageLayout>
  );
}
