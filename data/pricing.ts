export interface PricingTier {
  id: string;
  category: 'performance' | 'social' | 'web' | 'photoshoot';
  name: string;
  price: string;
  period: string;
  tagline: string;
  popular?: boolean;
  featured?: boolean;
  deliverables: string[];
  ctaText: string;
  badge?: string;
}

export const pricingCategories = [
  { id: 'performance', label: 'Performance ads' },
  { id: 'photoshoot', label: 'Photo shoots' },
  { id: 'social', label: 'Social media' },
  { id: 'web', label: 'Web development' },
];

export const pricingConfig = {
  currencyNotice: 'All agency management fees are in INR (₹). Ad spend is billed directly by Meta / Google to your own accounts. 100% direct account ownership.',
  plans: [
    // 1. Performance Marketing
    {
      id: 'performance-starter',
      category: 'performance',
      name: 'Starter Plan (Basic)',
      price: '₹20,000',
      period: '/Month',
      tagline: 'Ideal for emerging brands launching their first structured paid acquisition campaigns.',
      popular: false,
      badge: 'VERCITY GROWTH Plan',
      deliverables: [
        'Ad Budget Range: ₹50,000 – ₹80,000',
        'Campaign Setup: Up to 2–4 Standard Campaigns',
        'Ad Creatives: Limited Creative Variations',
        'Testing & ROAS: Basic Testing Framework',
        'Strategy & Attribution Optimization',
        'Bi-weekly Performance Reviews',
      ],
      ctaText: 'Select Starter Ads Plan',
    },
    {
      id: 'performance-growth',
      category: 'performance',
      name: 'Growth Plan (Pro)',
      price: '₹25,000',
      period: '/Month',
      tagline: 'High-scale multi-campaign ads machine with aggressive A/B testing and ROAS scaling.',
      popular: true,
      badge: 'Most Popular',
      deliverables: [
        'Ad Budget Range: ₹80,000 – ₹1,00,000+',
        'Advanced & Multi-Campaign Funnel Setup',
        'High-Volume Custom Creatives (2–3 Weekly)',
        'Intensive A/B Testing & ROAS Scaling',
        'Up to 5 Design Support Assets Included',
        'Dedicated Senior Account Manager',
      ],
      ctaText: 'Select Growth Plan (Pro)',
    },
    {
      id: 'performance-complete',
      category: 'performance',
      name: 'COMPLETE GROWTH PACKAGE',
      price: '₹35,000',
      period: '/Month',
      tagline: 'The complete all-in-one performance marketing & creative engine for ambitious D2C brands.',
      popular: true,
      featured: true,
      badge: '★ SIGNATURE PACKAGE',
      deliverables: [
        '✅ Meta Ads Management (Facebook & Instagram)',
        '✅ Social Media Management & Brand Growth',
        '✅ 2–3 Creatives Weekly (8–12 monthly high-CTR assets)',
        '✅ Growth Strategy & Weekly Reporting',
        'Server-Side CAPI Tracking & Custom Audience Exclusions',
        'Direct 10–15 Min Weekly Strategy Calls with Akash Kaushal',
        'Dedicated WhatsApp VIP Channel',
      ],
      ctaText: 'Book ₹35,000 Complete Package',
    },

    // 2. Photo Shoot Service (Starting from ₹10,000)
    {
      id: 'shoot-starter',
      category: 'photoshoot',
      name: 'STUDIO PRODUCT SHOOT',
      price: '₹10,000',
      period: 'Starting From',
      tagline: 'High-resolution commercial product photography for e-commerce, D2C fashion & cosmetics.',
      popular: false,
      badge: 'Starting at ₹10,000',
      deliverables: [
        'Up to 8–10 Products / SKUs Covered',
        'Professional Studio Lighting & Backdrop Setups',
        '25+ High-Resolution Retouched Final Images',
        'Clean White E-Commerce Cuts + Gradient Styling',
        'Ready for Shopify, Amazon, & Meta Ad Creatives',
        'Turnaround Time: 3–5 Business Days',
      ],
      ctaText: 'Book Photo Shoot (From ₹10,000)',
    },
    {
      id: 'shoot-editorial',
      category: 'photoshoot',
      name: 'FASHION & MODEL LOOKBOOK',
      price: '₹25,000',
      period: 'Per Lookbook Shoot',
      tagline: 'Full-spectrum model shoot with lifestyle styling, editorial lighting, and video reels.',
      popular: true,
      badge: 'Editorial Grade',
      deliverables: [
        'Professional Fashion Model & Stylist Coordination',
        'Studio & On-Location Lifestyle Setups',
        '50+ High-Resolution Retouched Lookbook Assets',
        '4 Short-Form Behind-The-Scenes Video Reels',
        'High-CTR Angles Engineered for Meta Ad Campaigns',
        'Full Commercial Rights & RAW File Access',
      ],
      ctaText: 'Book Lookbook Shoot',
    },

    // 3. Social Media Management
    {
      id: 'social-essential',
      category: 'social',
      name: 'Essential Plan',
      price: '₹15,000',
      period: '/Month',
      tagline: 'Daily brand consistency and community engagement across Instagram and social channels.',
      popular: false,
      badge: 'Consistency',
      deliverables: [
        'Core Goal: Daily Consistency & Brand Presence',
        '30 High-Resolution Static Posts / Month',
        'Captions, Hashtag Strategy & Automated Scheduling',
        'Community Monitoring & Engagement',
        'Monthly Performance & Growth Analytics',
      ],
      ctaText: 'Select Essential Social',
    },
    {
      id: 'social-growth',
      category: 'social',
      name: 'Social Growth Plan',
      price: '₹20,000',
      period: '/Month',
      tagline: 'High-engagement video content and dynamic reels to capture organic viral reach.',
      popular: false,
      badge: 'High Engagement',
      deliverables: [
        'Core Goal: Engagement & Video Momentum',
        '20 Static Posts + 4 In-House Video Reels',
        'Strategic Planning, Scheduling & Publishing',
        'Audience Curation & Lead Nurture Workflow',
        'Monthly Attribution & Reach Analytics',
      ],
      ctaText: 'Select Social Growth',
    },
    {
      id: 'social-authority',
      category: 'social',
      name: 'Authority Plan',
      price: '₹25,000',
      period: '/Month',
      tagline: 'Transform your brand into the undisputed category leader with influencer collaborations.',
      popular: true,
      badge: 'Viral Authority',
      deliverables: [
        'Core Goal: Viral Reach & Market Authority',
        '20 Static Posts + 4 In-House High-Retention Reels',
        '4 Influencer Collaboration Reels Coordinated',
        'Complete Creative Direction & Scripting',
        'Advanced Competitor Intelligence & Reporting',
      ],
      ctaText: 'Select Authority Plan',
    },

    // 4. Web Design & Development
    {
      id: 'web-info',
      category: 'web',
      name: 'Informational Website',
      price: '₹15,000',
      period: 'One-Time Build',
      tagline: 'Sleek, high-speed digital flagship for portfolios, consultancies, and emerging startups.',
      popular: false,
      badge: 'Portfolio / Startup',
      deliverables: [
        '5–7 Custom Designed Responsive Pages',
        'WordPress / HTML / Next.js Clean Stack',
        'Sub-Second Page Load & Mobile Optimization',
        'SEO Meta Tags & Contact Form Integration',
        'Clean Modern UI Architecture',
      ],
      ctaText: 'Select Informational Web',
    },
    {
      id: 'web-ecommerce-standard',
      category: 'web',
      name: 'Standard E-Commerce',
      price: '₹25,000',
      period: 'One-Time Build',
      tagline: 'Complete ready-to-sell online store engineered for high conversion rates from day one.',
      popular: false,
      badge: 'New Stores',
      deliverables: [
        'Shopify / WooCommerce Full Store Setup',
        'Up to 25 Product Listings & Category Catalog',
        'Payment Gateway & Automated Shipping Integration',
        'Conversion-Optimized Checkout Flow',
        'Ready-to-Sell Launch Support',
      ],
      ctaText: 'Select Standard E-Commerce',
    },
    {
      id: 'web-ecommerce-premium',
      category: 'web',
      name: 'Premium E-Commerce',
      price: '₹50,000',
      period: 'One-Time Build',
      tagline: 'Bespoke custom Liquid coding and CRO architecture for high-volume scaling brands.',
      popular: true,
      badge: 'High-Scale Brands',
      deliverables: [
        'Custom Shopify Liquid / Next.js Storefront Development',
        'Up to 50 Product Listings with Rich Variations',
        'Advanced Conversion Rate Optimization (CRO)',
        '3D Interactive Product Viewers & Micro-Interactions',
        'Sub-800ms Core Web Vitals Performance Tuning',
      ],
      ctaText: 'Select Premium E-Commerce',
    },
    {
      id: 'web-enterprise',
      category: 'web',
      name: 'Enterprise Solution',
      price: '₹1,00,000',
      period: 'Scales with Complexity',
      tagline: 'Custom-coded headless web application with multi-role dashboards and bespoke workflows.',
      popular: false,
      badge: 'Enterprise Headless',
      deliverables: [
        'Core Tech: React.js / Next.js / Node.js / Laravel',
        'Custom Headless Architecture with Edge Caching',
        'Multi-Role Dashboards (Super Admin, Admin, & User)',
        '100% Source Code & Intellectual Property Ownership',
        'Dedicated Engineering Team & SLA Guarantees',
      ],
      ctaText: 'Discuss Enterprise Solution',
    },
  ] as PricingTier[],
};
