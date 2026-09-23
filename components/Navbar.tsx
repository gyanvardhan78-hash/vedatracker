"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Updates", href: "/#updates" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-card" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/#home" className="flex items-center gap-2 group">
          <span className="h-8 w-8 rounded-lg bg-accent/10 border border-accent/40 flex items-center justify-center shadow-glow">
            <span className="h-2.5 w-2.5 rounded-full bg-accent animate-pulse-slow" />
          </span>
          <span className="text-lg font-semibold tracking-tight text-white">
            Veda Tracker
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#download"
            className="inline-flex items-center rounded-full bg-accent px-5 py-2 text-sm font-medium text-black shadow-glow hover:shadow-glow-lg hover:bg-accent-soft transition-all"
          >
            Download APK
          </a>
        </div>

        <button
          className="md:hidden text-white p-2"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {menuOpen ? (
              <path
                d="M6 6L18 18M6 18L18 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden glass border-t border-border px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm text-muted hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#download"
            onClick={() => setMenuOpen(false)}
            className="block text-center rounded-full bg-accent px-5 py-2 text-sm font-medium text-black shadow-glow"
          >
            Download APK
          </a>
        </div>
      )}
    </header>
  );
}
