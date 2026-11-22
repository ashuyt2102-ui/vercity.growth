import Link from "next/link";

const capabilities = [
  "Performance Ads",
  "Creative Production",
  "Growth Strategy",
  "Reporting & Analytics",
];

export default function PricingPage() {
  return (
    <main>
      <header className="page-hero">
        <p className="eyebrow">Working with Vercity</p>
        <h1>Let&apos;s find the right scope.</h1>
        <p>Every brand has different goals. Get in touch to discuss current services, scope, and pricing.</p>
      </header>
      <section className="section-pad">
        <div className="section-heading">
          <div><p className="eyebrow">Our capabilities</p><h2>One connected approach.</h2></div>
          <p>We bring performance media, creative, strategy, and reporting together around your goals.</p>
        </div>
        <div className="about-grid">
          {capabilities.map((capability, index) => (
            <article className="spatial-card" key={capability}>
              <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
              <h2>{capability}</h2>
            </article>
          ))}
        </div>
        <Link className="button button-primary" style={{ marginTop: 30 }} href="/contact">Discuss your project →</Link>
      </section>
    </main>
  );
}
