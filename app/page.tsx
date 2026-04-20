import Link from "next/link";

const quickLinks = [
  {
    href: "/login",
    title: "Sign in",
    description: "Access your workspace and continue generating content.",
  },
  {
    href: "/signup",
    title: "Create account",
    description: "Start your profile, define your niche, and save your style.",
  },
  {
    href: "/generate",
    title: "Open dashboard",
    description: "Jump into the content generator and review your drafts.",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-16 sm:px-10">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="space-y-8">
          <div className="inline-flex rounded-full border border-[var(--border)] bg-white/70 px-3 py-1 text-sm font-medium text-[var(--muted)] shadow-sm backdrop-blur">
            AI voice engine for repeatable content
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
              Voca
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-[var(--foreground)] sm:text-6xl">
              Train your writing voice once, then generate posts that still
              sound like you.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">
              This scaffold includes auth routes, a protected dashboard,
              placeholder API handlers, Supabase helpers, and the database
              schema to get the project moving end to end.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link className="button-primary" href="/signup">
              Start onboarding
            </Link>
            <Link className="button-secondary" href="/generate">
              View dashboard
            </Link>
          </div>
        </section>

        <aside className="panel space-y-5">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
              Project map
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[var(--foreground)]">
              Core routes are scaffolded
            </h2>
          </div>
          <div className="space-y-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-4 transition hover:-translate-y-0.5 hover:border-[var(--accent)]"
              >
                <p className="text-base font-semibold text-[var(--foreground)]">
                  {link.title}
                </p>
                <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}
