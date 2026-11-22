import Link from "next/link";

const services = [
  ["01", "Performance Ads", "Meta and Google campaigns built for conversion and return.", ["Meta Ads", "Google Ads", "Conversion-focused"]],
  ["02", "Creative Production", "Product imagery, campaign assets, reels, and content made to connect with customers.", ["Product imagery", "Campaign assets", "Reels and content"]],
  ["03", "Growth Strategy", "A connected plan that brings media, creative, and brand goals together.", ["Clear priorities", "Connected channels", "Purposeful creative"]],
  ["04", "Reporting & Analytics", "Performance reporting that helps teams see what is working and decide what comes next.", ["Campaign reporting", "Performance insights", "Clear decisions"]],
] as const;

export default function ServicesPage() {
  return (
    <main>
      <header className="page-hero">
        <p className="eyebrow">Capabilities</p>
        <h1>Creative thinking. Real results.</h1>
        <p>A connected approach across media, creative, strategy, and reporting.</p>
      </header>
      <section className="section-pad services-page">
        <div className="section-heading">
          <div><p className="eyebrow">What we do</p><h2>Build. Measure. Multiply.</h2></div>
          <p>We connect marketing strategy, purposeful creative, and performance data to help brands grow with clarity.</p>
        </div>
        <div className="about-grid">
          {services.map(([number, title, description, details]) => (
            <article className="spatial-card" key={title}>
              <p className="eyebrow">{number}</p>
              <h2>{title}</h2>
              <p>{description}</p>
              <ul className="inner-list">{details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
            </article>
          ))}
        </div>
        <div className="sector-list">
          <p className="eyebrow">Sectors</p>
          <p>Fashion <span>·</span> Jewellery <span>·</span> Education <span>·</span> Property <span>·</span> D2C</p>
        </div>
        <Link className="button button-primary" style={{ marginTop: 30 }} href="/contact">Work with us →</Link>
      </section>
    </main>
  );
}
