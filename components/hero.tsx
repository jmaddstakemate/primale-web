import { PhoneMock } from "./phone-mock";
import { WaitlistForm } from "./waitlist-form";

const GOALS = [
  "More energy",
  "Build muscle",
  "Libido & drive",
  "Focus & mood",
  "Better sleep",
  "Longevity",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(13,148,136,0.18),_transparent_55%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-light">
            UK testosterone membership
          </p>
          <h1 className="mt-4 max-w-xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[56px] lg:leading-[1.05]">
            Optimize your testosterone, for real
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
            Primale pairs at-home blood tests with personalized supplement and
            lifestyle protocols, then tracks your levels over time so you can
            see what works.
          </p>

          <ul className="mt-8 space-y-3 text-[15px] text-foreground">
            {[
              "Monthly at-home blood test included",
              "Track your T trend every month",
              "Personalized protocols that adapt",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary-light">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6.2 4.6 8.8 10 3.2"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <WaitlistForm id="waitlist" />
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {GOALS.map((goal) => (
              <span
                key={goal}
                className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted"
              >
                {goal}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <PhoneMock />
        </div>
      </div>
    </section>
  );
}
