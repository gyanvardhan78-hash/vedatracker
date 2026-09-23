"use client";

import { useState } from "react";

const SUPPORT_EMAIL = "support@vedatracker.com";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
    `Support request from ${name || "Veda Tracker user"}`
  )}&body=${encodeURIComponent(
    `${message}\n\n---\nName: ${name}\nEmail: ${email}`
  )}`;

  return (
    <section id="contact" className="px-6 lg:px-8 py-24 border-t border-border">
      <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Contact Us
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Have a question, found a bug, or need help with your account?
            Reach out and our team will get back to you within 1–2 business
            days.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-9 w-9 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 6L12 13L21 6"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="16"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                </svg>
              </span>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-sm text-white hover:text-accent transition-colors"
              >
                {SUPPORT_EMAIL}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-9 w-9 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 16.92V19.92C22 20.47 21.55 20.92 21 20.9C10.4 20.29 3.71 13.6 3.1 3C3.08 2.45 3.53 2 4.08 2H7.08C7.6 2 8.03 2.4 8.08 2.92C8.19 4.03 8.44 5.11 8.82 6.13C8.99 6.58 8.86 7.08 8.5 7.4L6.9 8.9C8.1 11.5 10.5 13.9 13.1 15.1L14.6 13.5C14.92 13.14 15.42 13.01 15.87 13.18C16.89 13.56 17.97 13.81 19.08 13.92C19.6 13.97 20 14.4 20 14.92V16.92"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-sm text-white">+91 85218 94766</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="h-9 w-9 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 22C12 22 19 16 19 10.5C19 6.36 15.64 3 11.5 3C7.36 3 4 6.36 4 10.5C4 16 12 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <circle cx="11.5" cy="10.5" r="2.5" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </span>
              <span className="text-sm text-white leading-relaxed">
                2th Floor,Shiv Sadan ,Near Artistica Apartment,Shridungri, Gamharia
                <br />
                Jamshedpur, Jharkhand 832109, India
              </span>
            </div>
          </div>
        </div>

        <form
          action={mailtoHref}
          method="get"
          className="rounded-2xl glass p-6 sm:p-8 shadow-card space-y-4"
        >
          <div>
            <label htmlFor="name" className="text-xs text-muted">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="mt-1.5 w-full rounded-lg bg-surface border border-border px-4 py-2.5 text-sm text-white placeholder:text-muted focus:border-accent outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-xs text-muted">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-1.5 w-full rounded-lg bg-surface border border-border px-4 py-2.5 text-sm text-white placeholder:text-muted focus:border-accent outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-xs text-muted">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="How can we help?"
              className="mt-1.5 w-full rounded-lg bg-surface border border-border px-4 py-2.5 text-sm text-white placeholder:text-muted focus:border-accent outline-none transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-black shadow-glow hover:shadow-glow-lg hover:bg-accent-soft transition-all"
          >
            Send Message
          </button>
          <p className="text-[11px] text-muted text-center">
            This opens your email app with the message pre-filled.
          </p>
        </form>
      </div>
    </section>
  );
}
