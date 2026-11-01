import type { Metadata } from 'next';
import Pricing from '@/components/Pricing';
import SectionPageLayout from '@/components/SectionPageLayout';

export const metadata: Metadata = {
  title: 'Pricing & Plans | Vercity Growth',
  description: 'Browse Vercity Growth performance, social media, web development, and product photography plans.',
};

export default function PricingPage() {
  return (
    <SectionPageLayout
      eyebrow="Plans & pricing"
      title="Find the right next step."
      description="Browse one plan at a time and compare options across our services."
    >
      <Pricing />
    </SectionPageLayout>
  );
}
