import Link from "next/link";

const services = [
 ["Visual Assets & E-Commerce","Starting from ₹10,000","Studio & Commercial Photo Shoot","Commercial e-commerce product photography, fashion lookbooks, and high-CTR lifestyle shoots starting from ₹10,000.",["High-CTR Ad Creatives","Ultra HD E-Commerce Resolution","3–5 Day Fast Delivery"]],
 ["Acquisition & ROAS","High ROAS","Performance Marketing (Meta Ads)","Meta Ads (Facebook & Instagram), campaign structure, CAPI tracking, and weekly ROAS scaling.",["Full Funnel Attribution","Creative Fatigue Prevention","Conversion-First Bidding"]],
 ["Brand Equity & Community","Organic Scale","Social Media Management","Content architecture, Instagram management, 20–30 posts, in-house reels, and brand growth.",["Algorithmic Reach","Community Engagement","Consistent Brand Tone"]],
 ["UX & CRO Engineering","3D & High Speed","Website Development","Shopify, WordPress, bespoke landing pages, and custom Next.js e-commerce platforms.",["95+ Core Web Vitals","Frictionless Checkout Flows","Modern Interactive Stack"]],
 ["Visual Identity","Iconic Aesthetic","Branding & Graphic Design","Brand identity, ad creative design packs, typography systems, and packaging mockups.",["Distinct Brand Recall","High CTR Creative Assets","Scalable Design System"]],
 ["Retention & Storytelling","High Viral Retention","Video Editing & Content Creation","Reels, promotional videos, UGC-style advertisements, motion graphics, and short-form storytelling.",["3-Second Hook Retention","Dynamic Kinetic Editing","Platform-Native Formatting"]],
] as const;

export default function ServicesPage() {
 return <main><header className="page-hero"><p className="eyebrow">Services</p><h1>One studio, many ways forward.</h1><p>Explore the services we bring together to help ambitious brands move forward.</p></header><section className="section-pad services-page"><div className="section-heading"><div><p className="eyebrow">One studio, many ways forward</p><h2>What we do</h2></div><p>Pick a direction. We&apos;ll help you find the right next step.</p></div><div className="about-grid">{services.map((s)=><article className="spatial-card" key={s[2]}><p className="eyebrow">{s[0]}</p><h2>{s[2]}</h2><p>{s[3]}</p><ul className="inner-list">{s[4].map(v=><li key={v}>{v}</li>)}</ul></article>)}</div><Link className="button button-primary" style={{marginTop:30}} href="/contact">Talk about it →</Link></section></main>;
}
