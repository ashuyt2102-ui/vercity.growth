const projects = [
  { brand: "Grescle", category: "Collection creative", description: "Product-led visuals and editorial campaign assets." },
  { brand: "Cilaire", category: "Selected creative", description: "Graphic tee creative and lifestyle-led campaign assets." },
  { brand: "Testrosclothing", category: "Selected creative", description: "Product visuals spanning polos and oversized graphic tees." },
  { brand: "Daebak", category: "Selected creative", description: "Graphic streetwear with sport and motorsport influences." },
  { brand: "RentRelay", category: "Selected creative", description: "Property-service campaign creatives." },
];

export default function StoriesPage() {
  return (
    <main>
      <header className="page-hero">
        <p className="eyebrow">Selected work</p>
        <h1>Brands we have worked with.</h1>
        <p>A selection of collaborations across apparel, lifestyle, and property services.</p>
      </header>
      <section className="section-pad work-page">
        <div className="section-heading">
          <div><p className="eyebrow">Selected work · 2026</p><h2>Creative meets commerce.</h2></div>
          <p>Campaign creative and performance work for brands with something to say.</p>
        </div>
        <div className="work-grid">
          {projects.map((project, index) => (
            <article className="work-card spatial-card" key={project.brand}>
              <span className="work-number">{String(index + 1).padStart(2, "0")}</span>
              <p className="eyebrow">{project.category}</p>
              <h2>{project.brand}</h2>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
        <div className="client-count spatial-card">
          <strong>10</strong>
          <div><h2>Brands featured</h2><p>Selected collaborations across apparel, lifestyle, and property services.</p></div>
        </div>
        <p className="disclaimer">Selected work shown for portfolio purposes. Brand names remain the property of their respective owners.</p>
      </section>
    </main>
  );
}
