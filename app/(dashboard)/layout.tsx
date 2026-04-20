import Link from "next/link";

const navigation = [
  { href: "/generate", label: "Generate" },
  { href: "/history", label: "History" },
  { href: "/onboarding", label: "Onboarding" },
];

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-7xl gap-6 px-4 py-4 sm:px-6 lg:px-8">
      <aside className="panel hidden w-72 shrink-0 lg:flex lg:flex-col lg:justify-between">
        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
              Dashboard
            </p>
            <h1 className="mt-2 text-3xl font-semibold">Voca Studio</h1>
          </div>
          <nav className="space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                className="block rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3 text-sm font-medium transition hover:border-[var(--accent)]"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="rounded-2xl border border-dashed border-[var(--border)] p-4 text-sm leading-6 text-[var(--muted)]">
          Route group scaffold for authenticated screens.
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col gap-4">
        <header className="panel flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
              Workspace
            </p>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Protected routes for generation, history, and onboarding.
            </p>
          </div>
          <Link className="button-secondary" href="/">
            Back to landing page
          </Link>
        </header>
        <main className="min-w-0">{children}</main>
      </div>
    </div>
  );
}
