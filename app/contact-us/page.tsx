import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Veda Tracker",
  description: "Official contact details for Veda Tracker.",
};

export default function ContactUsPage() {
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
          Contact Us
        </h1>
        <p className="mt-3 text-sm text-muted max-w-xl">
          We're here to help with any questions about the app, billing, or
          your account. Reach out using any of the details below.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-2xl glass p-6 shadow-card">
            <span className="h-10 w-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent mb-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 6L12 13L21 6"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
                <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.7" />
              </svg>
            </span>
            <h2 className="text-sm font-medium text-white">Email</h2>
            <p className="mt-1.5 text-sm text-muted">
              For support, billing, or general queries
            </p>
            <a
              href="mailto:support@vedatracker.com"
              className="mt-3 inline-block text-sm text-accent-soft hover:underline"
            >
              gyanvardhan78@gmail.com
            </a>
          </div>

          <div className="rounded-2xl glass p-6 shadow-card">
            <span className="h-10 w-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent mb-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22 16.92V19.92C22 20.47 21.55 20.92 21 20.9C10.4 20.29 3.71 13.6 3.1 3C3.08 2.45 3.53 2 4.08 2H7.08C7.6 2 8.03 2.4 8.08 2.92C8.19 4.03 8.44 5.11 8.82 6.13C8.99 6.58 8.86 7.08 8.5 7.4L6.9 8.9C8.1 11.5 10.5 13.9 13.1 15.1L14.6 13.5C14.92 13.14 15.42 13.01 15.87 13.18C16.89 13.56 17.97 13.81 19.08 13.92C19.6 13.97 20 14.4 20 14.92V16.92"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h2 className="text-sm font-medium text-white">Phone</h2>
            <p className="mt-1.5 text-sm text-muted">
              Monday – Friday, 10 AM – 6 PM IST
            </p>
            <a
              href="tel:+918521894766"
              className="mt-3 inline-block text-sm text-accent-soft hover:underline"
            >
              +91 85218 94766
            </a>
          </div>

          <div className="rounded-2xl glass p-6 shadow-card sm:col-span-2">
            <span className="h-10 w-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent mb-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 22C12 22 19 16 19 10.5C19 6.36 15.64 3 11.5 3C7.36 3 4 6.36 4 10.5C4 16 12 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle cx="11.5" cy="10.5" r="2.5" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </span>
            <h2 className="text-sm font-medium text-white">
              Registered Office
            </h2>
            <p className="mt-1.5 text-sm text-muted leading-relaxed">
              Veda Tracker
              <br />
              2th Floor,Shiv Sadan ,Near Artistica Apartment,Shridungri, Gamharia,
              <br />
              Jamshedpur, Jharkhand 832109, India
            </p>
          </div>
        </div>

        <p className="mt-10 text-xs text-muted">
          For queries related to Terms & Conditions, Privacy Policy, or
          Refund & Cancellation, please email us with the relevant subject
          line and we will route your request to the appropriate team.
        </p>
      </div>
    </section>
  );
}
