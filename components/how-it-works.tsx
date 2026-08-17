const STEPS = [
  {
    n: "01",
    title: "Test at home",
    body: "A blood-test kit arrives each month. Collect your sample and send it back — Sussex Pathology handles the lab work.",
  },
  {
    n: "02",
    title: "Get a protocol",
    body: "Your results feed a personalized supplement stack and lifestyle plan that adapts as your levels change.",
  },
  {
    n: "03",
    title: "Track every month",
    body: "See total and free T, your score, and the trend over time — then retest on a schedule so you know what is working.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-light">
          How it works
        </p>
        <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
          Measure, adjust, repeat
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Guesswork is the default. Primale replaces it with a monthly loop of
          lab data and a protocol built around your goals.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {STEPS.map((step) => (
            <article
              key={step.n}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <p className="font-mono text-sm font-semibold text-accent">
                {step.n}
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
