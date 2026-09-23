export default function Hero() {
  return (
    <section id="home" className="relative pt-40 pb-24 px-6 lg:px-8 overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-accent/10 blur-[120px] -z-10" />

      <div className="mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-accent-soft mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          v1.0.1 is live now
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
          Master Your Syllabus with{" "}
          <span className="text-gradient">Veda Tracker</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          Veda Tracker helps students break down every subject into trackable
          topics, monitor daily study progress, and stay exam-ready with a
          clean, distraction-free interface built for focus.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            id="download"
            href="/downloads/veda-tracker-latest.apk"
            className="group relative inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-black shadow-glow hover:shadow-glow-lg hover:bg-accent-soft transition-all"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3V16M12 16L7 11M12 16L17 11M5 21H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Download APK (Latest Version)
          </a>
          <a
            href="#preview"
            className="inline-flex items-center gap-2 rounded-full glass px-8 py-3.5 text-sm font-medium text-white hover:border-accent/50 transition-colors"
          >
            See App Preview
          </a>
        </div>

        <p className="mt-4 text-xs text-muted">
          Android 8.0 and above &middot; 24 MB &middot; No sign-up required to
          install
        </p>
      </div>
    </section>
  );
}
