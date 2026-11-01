import type { Metadata } from 'next';
import Contact from '@/components/Contact';
import SectionPageLayout from '@/components/SectionPageLayout';

export const metadata: Metadata = {
  title: 'Contact | Vercity Growth',
  description: 'Tell Vercity Growth about your brand and request a consultation.',
};

export default function ContactPage() {
  return (
    <SectionPageLayout
      eyebrow="Contact"
      title="Let’s talk about your next move."
      description="Share a little about your project and the Vercity Growth team will get back to you."
    >
      <Contact />
    </SectionPageLayout>
  );
}
