"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const services = [
  {
    icon: "workflow",
    category: "Visual Assets & E-Commerce",
    title: "Studio & Commercial Photo Shoot",
    description: "Commercial e-commerce product photography, fashion lookbooks, and high-CTR lifestyle shoots starting from ₹10,000.",
    details: ["High-CTR ad creatives", "Ultra HD e-commerce resolution", "3–5 day fast delivery"],
  },
  {
    icon: "analytics",
    category: "Acquisition & ROAS",
    title: "Performance Marketing (Meta Ads)",
    description: "Meta Ads (Facebook & Instagram), campaign structure, CAPI tracking, and weekly ROAS scaling.",
    details: ["Full funnel attribution", "Creative fatigue prevention", "Conversion-first bidding"],
  },
  {
    icon: "leads",
    category: "Brand Equity & Community",
    title: "Social Media Management",
    description: "Content architecture, Instagram management, 20–30 posts, in-house reels, and brand growth.",
    details: ["Algorithmic reach", "Community engagement", "Consistent brand tone"],
  },
  {
    icon: "bolt",
    category: "UX & CRO Engineering",
    title: "Website Development",
    description: "Shopify, WordPress, bespoke landing pages, and custom Next.js e-commerce platforms.",
    details: ["95+ Core Web Vitals", "Frictionless checkout flows", "Modern interactive stack"],
  },
  {
    icon: "shield",
    category: "Visual Identity",
    title: "Branding & Graphic Design",
    description: "Brand identity, ad creative design packs, typography systems, and packaging mockups.",
    details: ["Distinct brand recall", "High-CTR creative assets", "Scalable design system"],
  },
  {
    icon: "globe",
    category: "Retention & Storytelling",
    title: "Video Editing & Content Creation",
    description: "Reels, promotional videos, UGC-style advertisements, motion graphics, and short-form storytelling.",
    details: ["3-second hook retention", "Dynamic kinetic editing", "Platform-native formatting"],
  },
] as const;

const founders = [
  ["akash-kaushal.jpeg", "Akash Kaushal, Founder of Vercity Growth", "Founder", "Akash Kaushal"],
  ["nisha-saifi.jpeg", "Nisha Saifi, Co-founder of Vercity Growth", "Co-founder", "Nisha Saifi"],
] as const;

function FeatureIcon({ name }: { name: (typeof services)[number]["icon"] }) {
  const paths = {
    workflow: <><rect x="3" y="3" width="6" height="6" rx="1" /><rect x="15" y="15" width="6" height="6" rx="1" /><path d="M6 9v3a3 3 0 0 0 3 3h3" /></>,
    analytics: <><path d="M4 19V5M4 19h16M8 16v-4M13 16V8M18 16V9" /></>,
    leads: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></>,
    bolt: <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />,
    globe: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z" /></>,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>;
}

export default function Home() {
  const whatsapp = "https://wa.me/918851384747?text=Hi%20Akash%2C%20I%20would%20like%20to%20book%20a%20quick%2010-15%20min%20call%20to%20grow%20my%20brand.";

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealItems.forEach((item) => item.classList.add("in"));
      return;
    }
    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          currentObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );
    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main id="top">
      <header className="hero">
        <div className="hero-inner">
          <p className="eyebrow" data-reveal style={{ "--rd": "60ms" } as React.CSSProperties}>Vercity Growth · Digital studio</p>
          <h1 className="hero-title" data-reveal style={{ "--rd": "120ms" } as React.CSSProperties}>Step into your next <em>growth era.</em></h1>
          <p className="hero-sub" data-reveal style={{ "--rd": "200ms" } as React.CSSProperties}>Strategy, creative, and performance marketing—built to move your brand forward.</p>
          <div className="hero-actions" data-reveal style={{ "--rd": "300ms" } as React.CSSProperties}>
            <Link className="btn btn-primary" href="/services">Explore the studio <ArrowIcon /></Link>
            <a className="btn btn-outline" href={whatsapp}>Book a 10–15 min call</a>
          </div>
        </div>
        <div className="logos" data-reveal style={{ "--rd": "420ms" } as React.CSSProperties}>
          <p className="logos-label">One studio, many ways forward</p>
          <div className="logos-row">{services.map((service) => <span className="logo" key={service.title}>{service.title}</span>)}</div>
        </div>
      </header>

      <section className="section features" id="services">
        <div className="section-head">
          <span className="eyebrow">One studio, many ways forward</span>
          <h2 data-reveal style={{ "--rd": "80ms" } as React.CSSProperties}>What we do</h2>
          <p data-reveal style={{ "--rd": "160ms" } as React.CSSProperties}>Pick a direction. We&apos;ll help you find the right next step.</p>
        </div>
        <div className="feature-grid">
          {services.map((service, index) => (
            <article className="card spatial-card" key={service.title} data-reveal style={{ "--rd": `${index * 90}ms` } as React.CSSProperties}>
              <div className="card-icon"><FeatureIcon name={service.icon} /></div>
              <p className="card-category">{service.category}</p>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>{service.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section showcase" id="results">
        <div className="showcase-grid">
          <div className="showcase-copy">
            <span className="eyebrow">Built on real outcomes</span>
            <h2 data-reveal style={{ "--rd": "90ms" } as React.CSSProperties}>Bring the moving parts of growth together.</h2>
            <p data-reveal style={{ "--rd": "180ms" } as React.CSSProperties}>Vercity Growth brings strategy, creative, and performance together under one roof—so your next step feels clear and your brand can keep moving forward.</p>
            <Link className="btn btn-primary" href="/results" data-reveal style={{ "--rd": "270ms" } as React.CSSProperties}>See the results <ArrowIcon /></Link>
          </div>
          <div className="dashboard spatial-card" data-reveal style={{ "--rd": "160ms" } as React.CSSProperties}>
            <div className="dash-top"><div><span className="dash-overline">VERCITY GROWTH</span><h3>Studio snapshot</h3></div><span className="dash-live"><i /> Growth</span></div>
            <div className="dash-services">
              <div><span className="dash-service-icon">↗</span><span><b>Strategy</b><small>A clear direction for your next move</small></span></div>
              <div><span className="dash-service-icon">✳</span><span><b>Creative</b><small>Distinctive work made to earn attention</small></span></div>
              <div><span className="dash-service-icon">◌</span><span><b>Performance</b><small>Considered campaigns and optimization</small></span></div>
            </div>
            <div className="dash-footer"><span>Built around your brand</span><Link href="/about">How we work <ArrowIcon /></Link></div>
          </div>
        </div>
        <div className="stats">
          <article className="stat spatial-card" data-reveal style={{ "--rd": "0ms" } as React.CSSProperties}><strong>30+</strong><span>Websites built</span></article>
          <article className="stat spatial-card" data-reveal style={{ "--rd": "80ms" } as React.CSSProperties}><strong>8x+</strong><span>Top ROAS</span></article>
          <article className="stat spatial-card" data-reveal style={{ "--rd": "160ms" } as React.CSSProperties}><strong>₹5 lakh</strong><span>Total ad spend</span></article>
        </div>
        <p className="stats-note">Historical figures shared by Vercity Growth; results vary by brand and campaign.</p>
      </section>

      <section className="section founders-section" id="founders">
        <div className="section-head">
          <span className="eyebrow">The people behind Vercity</span>
          <h2>Meet our founders</h2>
          <p>The people building Vercity Growth and shaping its next chapter.</p>
        </div>
        <div className="founder-grid">
          {founders.map(([src, alt, role, name]) => (
            <article className="founder-card spatial-card" key={name}>
              <Image src={`/${src}`} alt={alt} width={800} height={900} />
              <div><span>{role}</span><h3>{name}</h3></div>
            </article>
          ))}
        </div>
        <Link className="text-link" href="/founders">More about the founders <ArrowIcon /></Link>
      </section>

      <section className="section cta" id="contact">
        <div className="cta-card spatial-card">
          <span className="eyebrow">Ready for your next move?</span>
          <h2>Let&apos;s build something that grows.</h2>
          <p>Tell us about your brand and goals. We&apos;ll help you find the right next step.</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/contact">Talk to Vercity <ArrowIcon /></Link>
            <a className="btn btn-outline" href={whatsapp}>WhatsApp · +91 88513 84747</a>
          </div>
        </div>
      </section>
    </main>
  );
}
