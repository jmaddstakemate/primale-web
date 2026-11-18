const GOALS = [
  "More energy",
  "Build muscle",
  "Libido & drive",
  "Focus & mood",
  "Better sleep",
  "Longevity",
  "Recovery",
  "Confidence",
];

export function GoalsMarquee() {
  return (
    <section aria-label="What members train for" className="relative border-y border-border bg-background-secondary py-6">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex shrink-0 gap-3 pr-3 motion-safe:animate-marquee">
          {[...GOALS, ...GOALS].map((goal, index) => (
            <span
              key={index}
              aria-hidden={index >= GOALS.length}
              className="flex items-center gap-3 whitespace-nowrap rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-muted"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {goal}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
