import type { Metadata } from 'next';
import AgencyStory from '@/components/AgencyStory';
import SectionPageLayout from '@/components/SectionPageLayout';
import Testimonials from '@/components/Testimonials';

export const metadata: Metadata = {
  title: 'Stories | Vercity Growth',
  description: 'Read partner perspectives and the story behind Vercity Growth.',
};

export default function StoriesPage() {
  return (
    <SectionPageLayout
      eyebrow="Stories"
      title="The people and ideas behind the work."
      description="Partner perspectives and the story behind Vercity Growth."
    >
      <Testimonials />
      <AgencyStory />
    </SectionPageLayout>
  );
}
