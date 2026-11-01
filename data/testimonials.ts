export interface TestimonialItem {
  id: string;
  name: string;
  company: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
  highlight: string;
  isDemo: boolean;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Aarav Mehta',
    company: 'Apex Apparel',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    quote: 'The Vercity Growth team transformed our online customer acquisition. Their combination of sharp creative direction and ruthless ad testing gave our brand a modern edge that competitors simply cannot match.',
    rating: 5,
    highlight: 'Transformed online customer acquisition',
    isDemo: true,
  },
  {
    id: 'test-2',
    name: 'Siddharth Rao',
    company: 'NextGen Mobility',
    role: 'Chief Marketing Officer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    quote: 'From their high-speed web development to their reels strategy, everything is engineered with mathematical intent. They don’t just deliver assets; they deliver an entire revenue engine.',
    rating: 5,
    highlight: 'Engineered with mathematical intent',
    isDemo: true,
  },
  {
    id: 'test-3',
    name: 'Ananya Sharma',
    company: 'Kavya Wellness',
    role: 'Head of Growth',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    quote: 'Transparent reporting, zero vanity fluff, and consistent delivery. Having our ad campaigns and creative production unified under one cohesive strategy has streamlined our quarterly goals.',
    rating: 5,
    highlight: 'Transparent reporting, zero vanity fluff',
    isDemo: true,
  },
  {
    id: 'test-4',
    name: 'Devansh Kulkarni',
    company: 'CloudSphere B2B',
    role: 'VP of Sales & Marketing',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    quote: 'Their deep technical understanding of CAPI, landing page CRO, and high-tier aesthetic branding set them apart from traditional agencies. Highly recommended for scaling businesses.',
    rating: 5,
    highlight: 'Deep technical understanding and high-tier aesthetic',
    isDemo: true,
  },
];
