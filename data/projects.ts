export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: string;
  industry: string;
  services: string[];
  description: string;
  demoLabel: string;
  image: string;
  accentColor: string;
  challenge: string;
  strategy: string;
  execution: string;
  resultsSummary: string;
  lessonsLearned: string;
}

export const portfolioCategories = [
  'All Projects',
  'Performance Marketing',
  'Branding',
  'Website Development',
  'Social Media',
  'Creative Campaigns',
];

export const portfolioProjects: ProjectItem[] = [
  {
    id: 'lumina-dynamics',
    title: 'Precision D2C Acquisition Engine',
    client: 'Lumina Dynamics (Demo Case Study)',
    category: 'Performance Marketing',
    industry: 'Consumer Tech & Smart Hardware',
    services: ['Meta Ads', 'Google Search', 'Creative Testing', 'Conversion API'],
    description: 'Constructed an automated multi-angle ad testing pipeline, lowering cost-per-acquisition while sustaining exponential transaction volume.',
    demoLabel: 'Demo Architecture Showcase',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#3b82f6',
    challenge: 'High creative fatigue and rising CPMs on standard image campaigns limiting expansion beyond early adopters.',
    strategy: 'Shifted focus to modular motion ads highlighting product utility, combined with targeted remarketing funnels.',
    execution: 'Engineered 18 video variants with hooked openings, deployed server-side tracking, and restructured ad sets by user intent.',
    resultsSummary: 'Systematic CPA reduction and stable ROAS maintained through aggressive weekly creative iteration.',
    lessonsLearned: 'Dynamic video hooks in the first 2.5 seconds represent over 70% of downstream conversion variance.',
  },
  {
    id: 'aether-studio',
    title: 'Futuristic Identity & Spatial Visuals',
    client: 'Aether Studio (Demo Case Study)',
    category: 'Branding',
    industry: 'Design & Architecture',
    services: ['Brand Identity', 'Design System', '3D Asset Toolkit', 'Typography'],
    description: 'Comprehensive brand overhaul incorporating brutalist typography, holographic accents, and a scalable digital design language.',
    demoLabel: 'Demo Architecture Showcase',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#8b5cf6',
    challenge: 'Legacy brand assets felt dated and failed to communicate the studio’s cutting-edge spatial computing capabilities.',
    strategy: 'Crafted a dark-mode first design philosophy using stark contrast, bespoke geometry, and interactive brand tokens.',
    execution: 'Delivered an extensive 65-page brand manual, interactive web vector library, and 3D promotional assets.',
    resultsSummary: 'Elevated client brand perception to position them as a premium tier creative studio in international pitches.',
    lessonsLearned: 'Cohesive visual identity dramatically improves pitch-deck closing ratios and brand authority.',
  },
  {
    id: 'nexus-headless-store',
    title: 'High-Converting 3D Headless Storefront',
    client: 'Nexus Wear (Demo Case Study)',
    category: 'Website Development',
    industry: 'Luxury Apparel & E-Commerce',
    services: ['Next.js App Router', 'Three.js 3D Viewer', 'Shopify Engine', 'CRO'],
    description: 'Engineered an ultra-fast headless ecommerce store featuring interactive 3D product previews and instant 1-click checkout flows.',
    demoLabel: 'Demo Architecture Showcase',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#10b981',
    challenge: 'Standard monolithic store suffered 4.2s mobile load times and high cart abandonment rates on product customizer pages.',
    strategy: 'Architected a decoupled headless frontend utilizing Next.js, WebGL shaders for rapid 3D previews, and edge caching.',
    execution: 'Cut mobile page load to sub-800ms, streamlined checkout steps, and implemented predictive search.',
    resultsSummary: 'Sub-second page speeds, frictionless mobile checkout, and notable uplift in average session duration.',
    lessonsLearned: 'Performance engineering directly impacts checkout completions; every 100ms improvement removes friction.',
  },
  {
    id: 'zenith-social-ecosystem',
    title: 'Organic Reach & Short-Form Authority',
    client: 'Zenith Collective (Demo Case Study)',
    category: 'Social Media',
    industry: 'FinTech & Wealth Management',
    services: ['Short-Form Reels', 'Content Architecture', 'Visual Design', 'Community'],
    description: 'Built a multi-tier social presence turning complex financial concepts into snackable, aesthetically striking reels.',
    demoLabel: 'Demo Architecture Showcase',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#f59e0b',
    challenge: 'Dry, overly technical content resulted in stagnation across Instagram and LinkedIn channels.',
    strategy: 'Introduced dynamic motion graphics, conversational breakdowns, and strong editorial typography.',
    execution: 'Produced 24 monthly reels, coordinated community engagement workflows, and implemented automated DM onboarding.',
    resultsSummary: 'Exponential expansion of non-follower impressions and consistent qualified inbound pipeline for wealth advisory.',
    lessonsLearned: 'Simplicity and visual clarity win the attention algorithm every time in high-trust industries.',
  },
  {
    id: 'strata-creator-launch',
    title: 'High-Affinity Creator Launch Campaign',
    client: 'Strata Nutrition (Demo Case Study)',
    category: 'Creative Campaigns',
    industry: 'Health & Wellness',
    services: ['Influencer Seeding', 'Whitelisted Creator Ads', 'Content Strategy'],
    description: 'Orchestrated a 30-creator synchronized campaign leveraging authentic UGC reviews combined with whitelisted paid amplification.',
    demoLabel: 'Demo Architecture Showcase',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#ec4899',
    challenge: 'Customer skepticism towards conventional studio banner advertisements in the wellness supplement sector.',
    strategy: 'Partnered with micro and mid-tier fitness practitioners who demonstrated genuine daily lifestyle usage.',
    execution: 'Curated 35 bespoke UGC assets, managed contracts and rights, and turned top performers into whitelisted Meta ads.',
    resultsSummary: 'Generated authentic social proof, superior click-through rates, and strong multi-touch brand attribution.',
    lessonsLearned: 'Unpolished, authentic user-generated perspectives out-convert high-gloss studio ads in wellness.',
  },
  {
    id: 'vortex-b2b-omnichannel',
    title: 'Omnichannel B2B Growth Pipeline',
    client: 'Vortex SaaS (Demo Case Study)',
    category: 'Performance Marketing',
    industry: 'Enterprise SaaS & Cloud Computing',
    services: ['Google Search', 'LinkedIn Sponsored Ads', 'Lead Funnel CRO', 'Analytics'],
    description: 'Constructed an intent-focused paid search and retargeting framework aimed at enterprise decision makers.',
    demoLabel: 'Demo Architecture Showcase',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#06b6d4',
    challenge: 'Broad match search keywords were burning budget on non-enterprise inquiries and students looking for free tools.',
    strategy: 'Strict exact-match phrase sculpting, negative keyword matrix, and gated executive whitepaper funnels.',
    execution: 'Launched landing pages with 2-step qualification forms, integrated HubSpot pipeline tracking, and implemented offline conversion sync.',
    resultsSummary: 'Drastic improvement in qualified demo booking rate and total pipeline value attributed to paid channels.',
    lessonsLearned: 'B2B success relies on qualifying leads at the form stage rather than chasing vanity volume.',
  },
];
