import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Veda Tracker | Master Your Syllabus",
  description:
    "Veda Tracker is a smart syllabus and study progress tracking app. Download the latest APK, view changelogs, and get support.",
  keywords: [
    "Veda Tracker",
    "syllabus tracker",
    "study planner app",
    "exam preparation tracker",
    "download APK",
  ],
  openGraph: {
    title: "Veda Tracker | Master Your Syllabus",
    description:
      "Track your syllabus, plan your revisions, and stay ahead of every exam with Veda Tracker.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-base text-white antialiased">
        <div className="pointer-events-none fixed inset-0 bg-grid-glow -z-10" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
