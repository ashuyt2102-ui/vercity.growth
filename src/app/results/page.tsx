const results = [
  {
    platform: "Google Ads",
    period: "February–May 2026",
    headline: "Search that converts.",
    value: "3,589%",
    label: "Reported return on ad spend",
  },
  {
    platform: "Meta Ads",
    period: "April 4–May 24, 2026",
    headline: "Creative meets commerce.",
    value: "12.51x",
    label: "Best ad-set ROAS",
    supporting: ["90 most purchases", "₹16 lowest cost per purchase"],
  },
];

export default function ResultsPage() {
  return (
    <main>
      <header className="page-hero">
        <p className="eyebrow">Results</p>
        <h1>The numbers. At a glance.</h1>
        <p>Selected campaign results and reporting periods from the 2026 portfolio.</p>
      </header>
      <section className="section-pad results-page">
        <div className="results-grid">
          {results.map((result) => (
            <article className="result-card spatial-card" key={result.platform}>
              <p className="eyebrow">{result.platform} · {result.period}</p>
              <h2>{result.headline}</h2>
              <strong>{result.value}</strong>
              <p>{result.label}</p>
              {result.supporting && (
                <ul className="result-support">
                  {result.supporting.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
            </article>
          ))}
        </div>
        <article className="report-card spatial-card">
          <div>
            <p className="eyebrow">Meta Ads · Website purchases</p>
            <h2>Reporting periods</h2>
            <p>Reported website purchases by month. October is a partial reporting period through October 13.</p>
          </div>
          <div className="report-periods">
            <div><span>August 2026</span><strong>133</strong><small>Aug 2–31</small></div>
            <div><span>September 2026</span><strong>70</strong><small>Sep 1–30</small></div>
            <div><span>October 2026</span><strong>16</strong><small>Oct 1–13</small></div>
          </div>
        </article>
        <p className="disclaimer">Figures are reported in Vercity Growth&apos;s 2026 portfolio and reflect the stated campaigns and periods. Results vary by brand, budget, and campaign.</p>
      </section>
    </main>
  );
}
