export default function GeneratePage() {
  return (
    <section className="panel space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
          Generator
        </p>
        <h1 className="mt-2 text-3xl font-semibold">Main content generator</h1>
      </div>
      <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <div className="rounded-3xl border border-[var(--border)] bg-white/70 p-5">
          <p className="text-sm font-medium text-[var(--muted)]">
            Topic prompt
          </p>
          <div className="mt-4 min-h-72 rounded-2xl border border-dashed border-[var(--border)] bg-[var(--surface-soft)] p-4 text-sm leading-6 text-[var(--muted)]">
            Connect this page to `POST /api/generate` to request three content
            variants based on the user prompt and voice profile.
          </div>
        </div>
        <div className="rounded-3xl border border-[var(--border)] bg-white/70 p-5">
          <p className="text-sm font-medium text-[var(--muted)]">
            Output preview
          </p>
          <div className="mt-4 space-y-3">
            {[1, 2, 3].map((variant) => (
              <div
                key={variant}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-4 text-sm leading-6 text-[var(--muted)]"
              >
                Variant {variant} placeholder
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
