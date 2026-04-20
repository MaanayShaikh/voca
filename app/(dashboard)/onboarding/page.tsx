export default function OnboardingPage() {
  return (
    <section className="panel space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
          Onboarding
        </p>
        <h1 className="mt-2 text-3xl font-semibold">
          Voice profile training
        </h1>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
        <div className="rounded-3xl border border-[var(--border)] bg-white/70 p-5">
          <p className="text-base font-semibold">Writing sample intake</p>
          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
            Add long-form examples, recent posts, or transcripts to analyze your
            tone, structure, and cadence.
          </p>
        </div>
        <div className="rounded-3xl border border-[var(--border)] bg-white/70 p-5">
          <p className="text-base font-semibold">Analysis output</p>
          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
            Connect this screen to `POST /api/voice-profile` to turn samples
            into reusable guidance for generation prompts.
          </p>
        </div>
      </div>
    </section>
  );
}
