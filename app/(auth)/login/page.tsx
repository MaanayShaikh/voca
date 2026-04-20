import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl items-center px-6 py-16 sm:px-10">
      <div className="grid w-full gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="panel space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
            Welcome back
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">
            Sign in to Voca
          </h1>
          <p className="max-w-md text-base leading-7 text-[var(--muted)]">
            Connect your account to continue generating posts, reviewing
            favorites, and refining your voice profile.
          </p>
          <div className="rounded-2xl border border-dashed border-[var(--border)] p-4 text-sm leading-6 text-[var(--muted)]">
            Placeholder auth form. Wire this up to Supabase auth when you are
            ready.
          </div>
        </section>

        <section className="panel">
          <form className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 outline-none"
                placeholder="••••••••"
              />
            </div>
            <button className="button-primary w-full" type="submit">
              Continue
            </button>
          </form>
          <p className="mt-5 text-sm text-[var(--muted)]">
            Need an account?{" "}
            <Link className="font-semibold text-[var(--accent)]" href="/signup">
              Create one
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
