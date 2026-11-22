"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const services = [
  {
    icon: "analytics",
    category: "Performance",
    title: "Performance Ads",
    description: "Meta and Google campaigns built around conversion, return, and measurable outcomes.",
    details: ["Meta Ads", "Google Ads", "Conversion-focused"],
  },
  {
    icon: "workflow",
    category: "Creative",
    title: "Creative Production",
    description: "Product imagery, campaign assets, reels, and content shaped for each brand.",
    details: ["Product imagery", "Campaign assets", "Reels and content"],
  },
  {
    icon: "leads",
    category: "Strategy",
    title: "Growth Strategy",
    description: "Connect marketing strategy, purposeful creative, and performance data to find the next move.",
    details: ["Clear priorities", "Connected channels", "Practical decisions"],
  },
  {
    icon: "shield",
    category: "Measurement",
    title: "Reporting & Analytics",
    description: "Clear reporting across campaigns helps teams understand performance and make informed decisions.",
    details: ["Performance reporting", "Campaign insights", "Outcome-focused"],
  },
] as const;

const sectors = ["Fashion", "Jewellery", "Education", "Property", "D2C"] as const;
const selectedBrands = ["Grescle", "Cilaire", "Testrosclothing", "Daebak", "RentRelay"] as const;

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
  const whatsapp = "https://wa.me/918851384747?text=Hi%20Akash%2C%20I%20would%20like%20to%20discuss%20performance%20marketing%20and%20creative%20for%20my%20brand.";

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
          <p className="eyebrow" data-reveal style={{ "--rd": "60ms" } as React.CSSProperties}>Performance &amp; creative · Agency portfolio 2026</p>
          <h1 className="hero-title" data-reveal style={{ "--rd": "120ms" } as React.CSSProperties}>We don&apos;t just market. <em>We multiply.</em></h1>
          <p className="hero-sub" data-reveal style={{ "--rd": "200ms" } as React.CSSProperties}>Performance media, creative production, and growth strategy for ambitious brands.</p>
          <div className="hero-actions" data-reveal style={{ "--rd": "300ms" } as React.CSSProperties}>
            <Link className="btn btn-primary" href="/services">Explore our capabilities <ArrowIcon /></Link>
            <a className="btn btn-outline" href={whatsapp}>Talk about your next move</a>
          </div>
        </div>
        <div className="logos" data-reveal style={{ "--rd": "420ms" } as React.CSSProperties}>
          <p className="logos-label">Meta Ads · Google Ads · Creative · Strategy</p>
          <div className="logos-row">{sectors.map((sector) => <span className="logo" key={sector}>{sector}</span>)}</div>
        </div>
      </header>

      <section className="section features" id="services">
        <div className="section-head">
          <span className="eyebrow">What we do</span>
          <h2 data-reveal style={{ "--rd": "80ms" } as React.CSSProperties}>Creative thinking. Real results.</h2>
          <p data-reveal style={{ "--rd": "160ms" } as React.CSSProperties}>A connected approach across media, creative, strategy, and reporting.</p>
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
            <h2 data-reveal style={{ "--rd": "90ms" } as React.CSSProperties}>Build. Measure. Multiply.</h2>
            <p data-reveal style={{ "--rd": "180ms" } as React.CSSProperties}>We connect marketing strategy, purposeful creative, and performance data to help brands grow with clarity.</p>
            <Link className="btn btn-primary" href="/results" data-reveal style={{ "--rd": "270ms" } as React.CSSProperties}>See the results <ArrowIcon /></Link>
          </div>
          <div className="dashboard spatial-card" data-reveal style={{ "--rd": "160ms" } as React.CSSProperties}>
            <div className="dash-top"><div><span className="dash-overline">VERCITY GROWTH</span><h3>Studio snapshot</h3></div><span className="dash-live"><i /> Growth</span></div>
            <div className="dash-services">
              <div><span className="dash-service-icon">↗</span><span><b>Performance Ads</b><small>Meta and Google campaigns built for return</small></span></div>
              <div><span className="dash-service-icon">✳</span><span><b>Creative Production</b><small>Product imagery, campaign assets, and content</small></span></div>
              <div><span className="dash-service-icon">◌</span><span><b>Growth Strategy</b><small>Clear decisions informed by performance data</small></span></div>
            </div>
            <div className="dash-footer"><span>10 brands featured</span><Link href="/stories">Explore selected work <ArrowIcon /></Link></div>
          </div>
        </div>
        <div className="stats">
          <article className="stat spatial-card" data-reveal style={{ "--rd": "0ms" } as React.CSSProperties}><strong>10</strong><span>Brands featured</span></article>
          <article className="stat spatial-card" data-reveal style={{ "--rd": "80ms" } as React.CSSProperties}><strong>3,589%</strong><span>Reported Google Ads ROAS</span></article>
          <article className="stat spatial-card" data-reveal style={{ "--rd": "160ms" } as React.CSSProperties}><strong>12.51x</strong><span>Best Meta ad-set ROAS</span></article>
        </div>
        <p className="stats-note">Reported campaign results from the 2026 portfolio. Results vary by campaign and period; see the reporting dates on our results page.</p>
      </section>

      <section className="section clients-section" id="clients">
        <div className="section-head">
          <span className="eyebrow">Selected clients</span>
          <h2>Brands we have worked with.</h2>
          <p>A selection of collaborations across apparel, lifestyle, and property services.</p>
        </div>
        <div className="client-list">
          {selectedBrands.map((brand) => <span className="client-name spatial-card" key={brand}>{brand}</span>)}
        </div>
        <Link className="text-link" href="/stories">View selected work <ArrowIcon /></Link>
      </section>

      <section className="section founders-section" id="founders">
        <div className="section-head">
          <span className="eyebrow">The people behind Vercity</span>
          <h2>Meet our founders</h2>
          <p>Meet the people behind Vercity Growth.</p>
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
          <h2>Work with Vercity Growth.</h2>
          <p>Performance marketing, strong creative, and clearer decisions for what comes next.</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/contact">Talk to Vercity <ArrowIcon /></Link>
            <a className="btn btn-outline" href={whatsapp}>WhatsApp · +91 88513 84747</a>
          </div>
        </div>
      </section>
    </main>
  );
}
