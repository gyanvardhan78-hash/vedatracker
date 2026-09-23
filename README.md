# Veda Tracker — Landing Page

Production-ready Next.js 14 (App Router) + Tailwind CSS landing page for the
Veda Tracker mobile app. Built for APK distribution and Razorpay merchant
verification.

## Stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS
- No external UI libraries — everything is hand-built and dependency-light

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you deploy — required edits

1. **APK file** — Drop your real `.apk` into `public/downloads/` and name it
   `veda-tracker-latest.apk` (see the README inside that folder). The
   "Download APK" button on the homepage already points to
   `/downloads/veda-tracker-latest.apk`.

2. **Contact details** — Replace the placeholder email, phone number, and
   registered address in:
   - `components/Contact.tsx`
   - `app/contact-us/page.tsx`
   - `app/terms/page.tsx`, `app/privacy/page.tsx`, `app/refund-policy/page.tsx`
     (support email references)

   These are currently placeholders (`support@vedatracker.com`,
   `+91 98765 43210`, a sample Bengaluru address). **Razorpay's verification
   team will check that these are real and consistent across the site**, so
   update them to your actual business details before submitting for
   approval.

3. **Legal text review** — The Terms & Conditions, Privacy Policy, and
   Refund & Cancellation Policy are realistic, comprehensive placeholders
   written to match what a payment gateway compliance team expects to see.
   They are **not a substitute for legal advice** — have a lawyer (or at
   minimum, carefully review them yourself) confirm they accurately reflect
   your actual business practices before going live.

4. **App screenshots** — The "App Preview" section (`components/AppPreview.tsx`)
   currently shows placeholder frames. Swap them for real screenshots using
   `next/image` when ready.

5. **Changelog** — Update `components/Updates.tsx` with real version notes
   as you ship updates.

6. **Branding** — The logo is currently a simple glowing dot mark. Replace
   it with a real logo/favicon if you have one (`app/layout.tsx` for
   metadata, `public/` for favicon assets).

## Deploying to Vercel

```bash
npm i -g vercel
vercel
```

Or connect the repository directly in the Vercel dashboard — no
environment variables are required for the base site to run.

## Project structure

```
app/
  layout.tsx          — root layout, fonts, metadata
  page.tsx             — homepage (assembles sections)
  globals.css
  terms/page.tsx
  privacy/page.tsx
  refund-policy/page.tsx
  contact-us/page.tsx
components/
  Navbar.tsx
  Hero.tsx
  AppPreview.tsx
  Updates.tsx
  Contact.tsx
  Footer.tsx
  LegalLayout.tsx
public/
  downloads/            — put veda-tracker-latest.apk here
```
