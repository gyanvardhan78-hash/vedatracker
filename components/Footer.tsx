import Link from "next/link";

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Refund & Cancellation Policy", href: "/refund-policy" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 lg:px-8 py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-7 w-7 rounded-lg bg-accent/10 border border-accent/40 flex items-center justify-center">
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-base font-semibold text-white">
                Veda Tracker
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              A focused syllabus and study progress tracker for students who
              want to stay ahead of every exam.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white mb-4">Navigate</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="/#home" className="text-sm text-muted hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/#updates" className="text-sm text-muted hover:text-accent transition-colors">
                  Updates
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-sm text-muted hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Veda Tracker. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Made for students, everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
