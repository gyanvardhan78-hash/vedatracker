import Link from "next/link";

export default function LegalLayout({
  title,
  effectiveDate,
  children,
}: {
  title: string;
  effectiveDate: string;
  children: React.ReactNode;
}) {
  return (
    <section className="px-6 lg:px-8 pt-32 pb-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-accent transition-colors mb-8"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          {title}
        </h1>
        <p className="mt-3 text-xs text-muted">Effective date: {effectiveDate}</p>

        <div className="mt-10 rounded-2xl glass p-6 sm:p-10 shadow-card space-y-8 legal-content">
          {children}
        </div>
      </div>
    </section>
  );
}
