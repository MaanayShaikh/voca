import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl items-center px-6 py-16 sm:px-10">
      <div className="grid w-full gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="panel">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
            New account
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Sign up and define your niche
          </h1>
          <p className="mt-4 max-w-lg text-base leading-7 text-[var(--muted)]">
            This route is ready for your onboarding entrypoint. It is set up to
            collect account details now and can expand into niche, audience, and
            tone capture next.
          </p>

          <form className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 outline-none"
                  placeholder="Alex Rivera"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="niche">
                  Niche
                </label>
                <input
                  id="niche"
                  name="niche"
                  className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 outline-none"
                  placeholder="Personal branding"
                />
              </div>
            </div>
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
            <button className="button-primary w-full sm:w-auto" type="submit">
              Create account
            </button>
          </form>
        </section>

        <aside className="panel space-y-4">
          <h2 className="text-2xl font-semibold">What comes next</h2>
          <ul className="space-y-3 text-sm leading-6 text-[var(--muted)]">
            <li>Build a Supabase signup flow.</li>
            <li>Redirect new users into `/onboarding`.</li>
            <li>Capture writing samples for voice-profile analysis.</li>
          </ul>
          <p className="text-sm text-[var(--muted)]">
            Already have access?{" "}
            <Link className="font-semibold text-[var(--accent)]" href="/login">
              Sign in
            </Link>
          </p>
        </aside>
      </div>
    </main>
  );
}
