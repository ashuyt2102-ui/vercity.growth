export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What services does VERCITY GROWTH provide?',
    answer: 'VERCITY GROWTH is a full-stack digital growth partner. We specialize in Performance Marketing (Meta & Google Ads), Social Media Management & Reels Production, Custom High-Speed Web Development (Next.js & Shopify), Branding & Graphic Systems, Video Editing, and Influencer Campaign Orchestration.',
  },
  {
    id: 'faq-2',
    question: 'How do I choose the right package?',
    answer: 'If you are an emerging business looking to establish a professional social presence and consistent creative output, PLAN 01 — STARTER is ideal. If your objective is active customer acquisition with paid ads and reels, PLAN 02 — GROWTH is our most popular tier. For multi-channel scaling (Meta + Google) and landing page CRO, select PLAN 03 — SCALE. For bespoke enterprise scopes, contact us for a custom solution.',
  },
  {
    id: 'faq-3',
    question: 'Are advertising budgets included in the package prices?',
    answer: 'No. All package pricing represents our agency service and creative management fee. Ad spend is billed directly by advertising platforms (Meta, Google, etc.) to your company billing cards for 100% transparency and account ownership.',
  },
  {
    id: 'faq-4',
    question: 'How long does a project take to launch?',
    answer: 'For marketing and social media packages, onboarding and creative strategy typically takes 5 to 7 business days, after which campaigns and content rollout begin. For custom web development or comprehensive rebrands, timelines generally range between 2 to 4 weeks depending on scope.',
  },
  {
    id: 'faq-5',
    question: 'Do you work with small businesses?',
    answer: 'Yes. Our PLAN 01 — STARTER tier was designed specifically for promising small businesses and early-stage founders who want agency-grade creative output and strategic guidance without bloated retainer fees.',
  },
  {
    id: 'faq-6',
    question: 'Can I request a custom package?',
    answer: 'Absolutely. Many of our clients require tailored combinations such as dedicated UGC creator pipelines, bespoke WebGL web apps, or specialized international market expansions. Choose "ENTERPRISE / CUSTOM" or reach out via our contact form.',
  },
  {
    id: 'faq-7',
    question: 'How can I get started?',
    answer: 'Simply select your desired package or submit the contact form below with your brand details. Our growth strategy team will review your business and arrange a discovery session within 24 hours.',
  },
];
