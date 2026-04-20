const items = [
  "Launch thread about customer research",
  "Carousel draft on brand positioning",
  "Short post on audience trust signals",
];

export default function HistoryPage() {
  return (
    <section className="panel space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
          History
        </p>
        <h1 className="mt-2 text-3xl font-semibold">
          Post history and favorites
        </h1>
      </div>
      <div className="grid gap-4">
        {items.map((item) => (
          <article
            key={item}
            className="rounded-3xl border border-[var(--border)] bg-white/70 p-5"
          >
            <p className="text-base font-semibold">{item}</p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Placeholder row for saved generations, favorite variants, and
              timestamps.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
