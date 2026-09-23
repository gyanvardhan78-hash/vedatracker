import fs from "fs";
import path from "path";
import Image from "next/image";

const placeholders = [
  { title: "Login", note: "Easy to access", file: "dashboard.png" },
  { title: "Dashboard", note: "Focused study sessions", file: "syllabus-map.png" },
  { title: "Syllabus Map", note: "Topic-by-topic breakdown ", file: "Login.png" },
];

function screenshotExists(filename: string) {
  try {
    const filePath = path.join(process.cwd(), "public", "images", "screenshots", filename);
    return fs.existsSync(filePath);
  } catch {
    return false;
  }
}

export default function AppPreview() {
  return (
    <section id="preview" className="px-6 lg:px-8 py-24 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Built for a clear view of every subject
          </h2>
          <p className="mt-4 text-muted">
            A quick look at the interface. Replace these placeholders with
            real screenshots once you're ready to publish.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {placeholders.map((item) => {
            const hasImage = screenshotExists(item.file);
            return (
              <div
                key={item.title}
                className="rounded-2xl glass p-4 shadow-card hover:border-accent/40 transition-colors"
              >
                <div className="relative aspect-[9/16] w-full rounded-xl border border-dashed border-border bg-surface/60 overflow-hidden flex flex-col items-center justify-center gap-3 text-muted">
                  {hasImage ? (
                    <Image
                      src={`/images/screenshots/${item.file}`}
                      alt={`${item.title} screenshot`}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover"
                    />
                  ) : (
                    <>
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-accent/60"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M3 16L8 11L12 15L16 10L21 15"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle cx="8" cy="8" r="1.5" fill="currentColor" />
                      </svg>
                      <span className="text-xs">Screenshot placeholder</span>
                    </>
                  )}
                </div>
                <div className="mt-4 text-left">
                  <h3 className="text-sm font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted mt-1">{item.note}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

