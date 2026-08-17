const FEATURES = [
  {
    title: "Monthly at-home blood test",
    body: "A fresh kit every month, included in Primale Pro. No clinic visit required.",
    icon: DropIcon,
  },
  {
    title: "Testosterone dashboard",
    body: "Total T, free T, a score ring, and charts so you can see the trend — not a one-off number.",
    icon: ChartIcon,
  },
  {
    title: "Personalized stack",
    body: "Supplement and lifestyle protocols that adapt as your results come in.",
    icon: SparkIcon,
  },
  {
    title: "Apple Health insights",
    body: "Sleep and exercise patterns layered onto your T data, on iOS.",
    icon: HeartIcon,
  },
  {
    title: "Smart retest reminders",
    body: "Know when the next kit is due so you stay on a monthly cadence.",
    icon: BellIcon,
  },
];

export function Features() {
  return (
    <section id="features" className="border-t border-border bg-background-secondary">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-light">
          Primale Pro
        </p>
        <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
          Everything you need to measure and raise your testosterone
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Month after month — the test, the protocol, and the tracking in one
          membership.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary-light">
                <feature.icon />
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">
                {feature.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                {feature.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DropIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.5c.4 0 .8.2 1 .6C15.2 7 18 11.2 18 14.2a6 6 0 1 1-12 0C6 11.2 8.8 7 11 3.1c.2-.4.6-.6 1-.6Z" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 19V5M4 19h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7 14.5 11 10l3 2.5 5-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.5 13.6 9l6.4.4-5 3.9 1.8 6.2L12 16.2 7.2 19.5 9 13.3 4 9.4 10.4 9 12 2.5Z" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 21s-7.2-4.4-9.3-8.6C1.2 9.3 3 6 6.4 6c1.9 0 3.2 1 3.6 1.4.4-.4 1.7-1.4 3.6-1.4 3.4 0 5.2 3.3 3.7 6.4C19.2 16.6 12 21 12 21Z" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 16h12l-1.2-2.2a6.5 6.5 0 0 1-.8-3.1V9.2A5 5 0 0 1 12 4a5 5 0 0 1-6 5.2v1.5c0 1.1-.3 2.2-.8 3.1L4 16h2Zm4 2a2 2 0 0 0 4 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
