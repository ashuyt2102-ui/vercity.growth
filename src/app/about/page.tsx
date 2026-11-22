import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      <header className="page-hero">
        <p className="eyebrow">About Vercity Growth</p>
        <h1>Growth is the brief.</h1>
        <p>Performance-first digital marketing, built around outcomes.</p>
      </header>
      <section className="section-pad">
        <div className="about-grid">
          <article className="spatial-card"><h2>Build</h2><p>We connect marketing strategy with purposeful creative and performance media.</p></article>
          <article className="spatial-card"><h2>Measure</h2><p>We use clear reporting to understand campaign performance and guide decisions.</p></article>
          <article className="spatial-card"><h2>Multiply</h2><p>We turn what we learn into sharper creative and considered next steps for growth.</p></article>
        </div>
        <div className="sector-list">
          <p className="eyebrow">Sectors</p>
          <p>Fashion <span>·</span> Jewellery <span>·</span> Education <span>·</span> Property <span>·</span> D2C</p>
        </div>
        <div className="section-heading" style={{ marginTop: 60 }}>
          <div><p className="eyebrow">Meet the people behind the studio</p><h2>Founders</h2></div>
          <Link className="text-link" href="/founders">Meet the founders →</Link>
        </div>
      </section>
    </main>
  );
}
