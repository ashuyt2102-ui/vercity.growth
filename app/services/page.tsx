import type { Metadata } from 'next';
import Services from '@/components/Services';
import SectionPageLayout from '@/components/SectionPageLayout';

export const metadata: Metadata = {
  title: 'Services | Vercity Growth',
  description: 'Explore Vercity Growth performance marketing, social media, creative, branding, and web development services.',
};

export default function ServicesPage() {
  return (
    <SectionPageLayout
      eyebrow="Services"
      title="One studio, many ways forward."
      description="Explore the services we bring together to help ambitious brands move forward."
    >
      <Services />
    </SectionPageLayout>
  );
}
