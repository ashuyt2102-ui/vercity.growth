interface ResultsHighlightsProps {
  heading?: string;
}

const results = [
  { value: '30+', label: 'Websites built' },
  { value: '8x+', label: 'Top ROAS' },
  { value: '₹5 lakh', label: 'Total ad spend' },
];

export default function ResultsHighlights({ heading }: ResultsHighlightsProps) {
  return (
    <section
      aria-labelledby={heading ? 'results-highlights-title' : undefined}
      className="relative border-t border-white/[0.06] px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {heading && (
          <div className="mb-8">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-300">Built on real outcomes</p>
            <h2 id="results-highlights-title" className="mt-3 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
              {heading}
            </h2>
          </div>
        )}
        <div className="grid gap-3 sm:grid-cols-3 sm:gap-5">
          {results.map((result) => (
            <article
              key={result.label}
              className="rounded-2xl border border-white/10 bg-[#080c16]/80 px-5 py-7 text-center backdrop-blur-xl sm:py-9"
            >
              <p className="text-3xl font-black tracking-tight text-white sm:text-4xl">{result.value}</p>
              <p className="mt-2 text-xs font-mono uppercase tracking-[0.16em] text-gray-400">{result.label}</p>
            </article>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-gray-500">
          Historical figures shared by Vercity Growth; results vary by brand and campaign.
        </p>
      </div>
    </section>
  );
}
