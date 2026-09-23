const updates = [
  {
    version: "v1.0.1",
    date: "July 2026",
    status: "Live Now",
    notes: [
      "Improved sync reliability for offline progress tracking",
      "Fixed a crash on the revision timer for some devices",
      "Minor UI polish across dashboard and syllabus screens",
    ],
  },
  {
    version: "v1.0.0",
    date: "June 2026",
    status: "Initial Release",
    notes: [
      "First public release of Veda Tracker",
      "Subject and topic-level syllabus tracking",
      "Daily progress dashboard and revision reminders",
    ],
  },
];

export default function Updates() {
  return (
    <section id="updates" className="px-6 lg:px-8 py-24 border-t border-border">
      <div className="mx-auto max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Latest Updates
          </h2>
          <p className="mt-4 text-muted">
            Every release, documented. Here's what's changed in Veda
            Tracker.
          </p>
        </div>

        <div className="space-y-6">
          {updates.map((u) => (
            <div
              key={u.version}
              className="rounded-2xl glass p-6 sm:p-8 shadow-card"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold text-white">
                    {u.version}
                  </h3>
                  <span className="inline-flex items-center rounded-full bg-accent/10 border border-accent/30 px-3 py-1 text-xs text-accent-soft">
                    {u.status}
                  </span>
                </div>
                <span className="text-xs text-muted">{u.date}</span>
              </div>
              <ul className="space-y-2">
                {u.notes.map((note) => (
                  <li
                    key={note}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
