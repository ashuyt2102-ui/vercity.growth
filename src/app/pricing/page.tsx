"use client";

import Link from "next/link";
import { useState } from "react";

const categories = {
 "Performance ads": [
  {name:"Starter Plan (Basic)",price:"₹20,000",desc:"Ideal for emerging brands launching their first structured paid acquisition campaigns.",features:["Ad Budget Range: ₹50,000 – ₹80,000","Campaign Setup: Up to 2–4 Standard Campaigns","Ad Creatives: Limited Creative Variations","Testing & ROAS: Basic Testing Framework","Strategy & Attribution Optimization","Bi-weekly Performance Reviews"],button:"Select Starter Ads Plan"},
  {name:"Growth Plan (Pro)",badge:"MOST POPULAR",price:"₹25,000",desc:"High-scale multi-campaign ads machine with aggressive A/B testing and ROAS scaling.",features:["Ad Budget Range: ₹80,000 – ₹1,00,000+","Advanced & Multi-Campaign Funnel Setup","High-Volume Custom Creatives (2–3 Weekly)","Intensive A/B Testing & ROAS Scaling","Up to 5 Design Support Assets Included","Dedicated Senior Account Manager"],button:"Select Growth Plan (Pro)"},
  {name:"COMPLETE GROWTH PACKAGE",badge:"SIGNATURE PACKAGE",price:"₹35,000",desc:"The complete all-in-one performance marketing & creative engine for ambitious D2C brands.",features:["Meta Ads Management (Facebook & Instagram)","Social Media Management & Brand Growth","2–3 Creatives Weekly (8–12 monthly high-CTR assets)","Growth Strategy & Weekly Reporting","Server-Side CAPI Tracking & Custom Audience Exclusions","Direct 10–15 Min Weekly Strategy Calls with Akash Kaushal","Dedicated WhatsApp VIP Channel"],button:"Book ₹35,000 Complete Package"},
 ],
 "Photo shoots": [
  {name:"Commercial Photo Shoot",price:"₹10,000",desc:"High-end studio and on-model lifestyle product photography for D2C fashion, cosmetics, and e-commerce brands.",features:["White and lifestyle backdrops","High-CTR ad-ready deliverables","Ultra HD e-commerce resolution","3–5 day fast delivery"],button:"Book a Photo Shoot"},
 ],
 "Social media": [
  {name:"Social Media Management",price:"Custom",desc:"Content architecture and consistent brand growth across Instagram and short-form channels.",features:["20–30 posts","In-house reels","Community engagement","Consistent brand tone"],button:"Discuss Social Media"},
 ],
 "Web development": [
  {name:"Website Development",price:"Custom",desc:"Fast, conversion-focused digital experiences built for modern brands.",features:["Shopify and WordPress","Custom Next.js platforms","Bespoke landing pages","Modern interactive stack"],button:"Discuss Your Website"},
 ],
} as const;

export default function PricingPage() {
 const [category,setCategory]=useState<keyof typeof categories>("Performance ads");
 const [index,setIndex]=useState(0);
 const plans=categories[category];
 const plan=plans[Math.min(index,plans.length-1)];
 return <main><header className="page-hero"><p className="eyebrow">Plans & pricing</p><h1>Find the right next step.</h1><p>Browse one plan at a time and compare options across our services.</p></header><section className="section-pad"><div className="section-heading"><div><p className="eyebrow">Clear options. No clutter.</p><h2>Find your plan</h2></div><p>Browse one plan at a time, then choose what fits your next move.</p></div><div className="pricing-grid"><div className="pricing-tabs">{(Object.keys(categories) as Array<keyof typeof categories>).map(c=><button key={c} className={c===category?"active":""} onClick={()=>{setCategory(c);setIndex(0)}}>{c}</button>)}</div><article className="plan-card spatial-card"><p className="eyebrow">{category}</p>{"badge" in plan&&<b>{plan.badge}</b>}<h3>{plan.name}</h3><p className="price">{plan.price}<small> /Month</small></p><p>{plan.desc}</p><ul>{plan.features.map(f=><li key={f}>✓ {f}</li>)}</ul><Link href={`/contact?plan=${encodeURIComponent(plan.name)}`}>{plan.button} →</Link></article></div><p className="disclaimer">All agency management fees are in INR (₹). Ad spend is billed directly by Meta / Google to your own accounts. 100% direct account ownership.</p></section></main>;
}
