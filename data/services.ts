export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: string;
  badge: string;
  deliverables: string[];
  metrics: string[];
  startingPrice?: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'studio-product-photoshoot',
    title: 'Studio & Commercial Photo Shoot',
    category: 'Visual Assets & E-Commerce',
    badge: 'Starting from ₹10,000',
    startingPrice: '₹10,000',
    shortDesc: 'Commercial e-commerce product photography, fashion lookbooks, and high-CTR lifestyle shoots starting from ₹10,000.',
    fullDesc: 'Attention is won or lost in the visual aesthetic. We provide end-to-end studio lighting, model coordination, and commercial retouching tailored for D2C fashion, lifestyle, and consumer products.',
    deliverables: [
      'Studio & lifestyle model coordination',
      'High-resolution retouched product images (white & aesthetic backdrops)',
      'Meta Ad creative-ready crops & multi-angle visual packs',
      'Short-form BTS video clips for viral Instagram reels',
      'Fast 3–5 business day delivery with full commercial licensing',
    ],
    metrics: ['High-CTR Ad Creatives', 'Ultra HD E-Commerce Resolution', '3–5 Day Fast Delivery'],
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing (Meta Ads)',
    category: 'Acquisition & ROAS',
    badge: 'High ROAS',
    shortDesc: 'Meta Ads (Facebook & Instagram), campaign structure, CAPI tracking, and weekly ROAS scaling.',
    fullDesc: 'We build end-to-end full-funnel ad campaigns across Meta and Google Search/Performance Max, designed to acquire qualified customers at the lowest CAC and scale profitably.',
    deliverables: [
      'Multi-platform account audit & structure restructuring',
      'High-intent Meta & Google Ads campaigns',
      'Server-side CAPI tracking & GA4 attribution modeling',
      'Weekly split testing of creative angles & pattern interrupts',
      'Real-time automated ROAS & contribution margin reporting',
    ],
    metrics: ['Full Funnel Attribution', 'Creative Fatigue Prevention', 'Conversion-First Bidding'],
  },
  {
    id: 'social-media-management',
    title: 'Social Media Management',
    category: 'Brand Equity & Community',
    badge: 'Organic Scale',
    shortDesc: 'Content architecture, Instagram management, 20–30 posts, in-house reels, and brand growth.',
    fullDesc: 'Transform your brand into an organic authority with compelling visual identity, strategic content pillars, engaging reels, and high-retention storytelling.',
    deliverables: [
      'Comprehensive monthly content calendar',
      '20–30 high-impact static ad & organic creatives',
      '4–8 viral short-form reels & shorts',
      'Community curation & DM lead nurture workflow',
      'Monthly organic reach and engagement analytics',
    ],
    metrics: ['Algorithmic Reach', 'Community Engagement', 'Consistent Brand Tone'],
  },
  {
    id: 'website-development',
    title: 'Website Development',
    category: 'UX & CRO Engineering',
    badge: '3D & High Speed',
    shortDesc: 'Shopify, WordPress, bespoke landing pages, and custom Next.js e-commerce platforms.',
    fullDesc: 'We engineer blazingly fast digital storefronts and interactive web experiences engineered specifically to turn paid and organic visitors into paying customers.',
    deliverables: [
      'Custom Shopify Liquid coding & Next.js builds',
      'Conversion Rate Optimisation (CRO) architecture',
      '3D interactive visual components and micro-interactions',
      'Mobile-first responsive optimization',
      'Sub-second Core Web Vitals performance tuning',
    ],
    metrics: ['95+ Core Web Vitals', 'Frictionless Checkout Flows', 'Modern Interactive Stack'],
  },
  {
    id: 'branding-graphic-design',
    title: 'Branding & Graphic Design',
    category: 'Visual Identity',
    badge: 'Iconic Aesthetic',
    shortDesc: 'Brand identity, ad creative design packs, typography systems, and packaging mockups.',
    fullDesc: 'Crafting unforgettable visual systems that command market premium. From typography and logos to multi-variant high-CTR performance design assets.',
    deliverables: [
      'Complete brand guidelines and identity system',
      'Vector typography, logo lockups & color palettes',
      'Ad creative toolkits for performance campaigns',
      'Product visuals, 3D mockups and social styling kits',
      'Design library & Figma component system',
    ],
    metrics: ['Distinct Brand Recall', 'High CTR Creative Assets', 'Scalable Design System'],
  },
  {
    id: 'video-editing-content',
    title: 'Video Editing & Content Creation',
    category: 'Retention & Storytelling',
    badge: 'High Viral Retention',
    shortDesc: 'Reels, promotional videos, UGC-style advertisements, motion graphics, and short-form storytelling.',
    fullDesc: 'Attention is the ultimate currency. We produce visually compelling video content with tight pacing, dynamic motion design, and sound-engineered engagement.',
    deliverables: [
      'Viral hook scripting & pattern interrupts',
      'Short-form vertical video (Reels, TikTok, Shorts)',
      'Motion graphics, kinetic typography & 3D titles',
      'UGC curation and authentic product showcases',
      'Color grading, sound design and audio mastering',
    ],
    metrics: ['3-Second Hook Retention', 'Dynamic Kinetic Editing', 'Platform-Native Formatting'],
  },
];
