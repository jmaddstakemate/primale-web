import { AppStoreButton } from "./app-store";
import { Reveal, RevealGroup, RevealItem } from "./reveal";

const INCLUDED = [
  "A fresh at-home blood test every month",
  "Total T, free T, SHBG and your T score",
  "Personalized supplement and lifestyle protocol",
  "Apple Health insights",
  "Kit and results updates",
  "Cancel anytime in the app",
];

const PLANS = [
  {
    id: "yearly",
    label: "Yearly",
    price: "£490",
    period: "/year",
    sublabel: "Just £40.83/mo, billed annually",
    badge: "Best value",
    highlighted: true,
  },
  {
    id: "monthly",
    label: "Monthly",
    price: "£49",
    period: "/month",
    sublabel: "Billed monthly, cancel anytime",
    badge: null,
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden border-t border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(245,166,35,0.1),transparent)] blur-2xl"
      />
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-light">Membership</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">One membership. Everything included.</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
            Your monthly blood test is part of Primale Pro, not an add-on. Download the app to
            choose a plan and order your first test.
          </p>
        </Reveal>

        <RevealGroup className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-2">
          {PLANS.map((plan) => (
            <RevealItem key={plan.id}>
              <article
                className={`relative h-full rounded-3xl ${
                  plan.highlighted
                    ? "bg-[conic-gradient(from_var(--border-angle),#3a2a10_0%,#f5a623_12%,#fff1cf_20%,#f5a623_28%,#3a2a10_42%,#3a2a10_100%)] p-[1.5px] shadow-[0_30px_80px_-30px_rgba(245,166,35,0.45)] motion-safe:animate-border-spin"
                    : "bg-border p-px"
                }`}
              >
                <div
                  className={`flex h-full flex-col rounded-[calc(1.5rem-1px)] p-7 ${
                    plan.highlighted ? "bg-[linear-gradient(180deg,#1a1a12,#101820_60%)]" : "bg-card"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{plan.label}</h3>
                    {plan.badge && (
                      <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-on-primary">
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-5 flex items-baseline gap-1">
                    <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
                    <span className="text-muted">{plan.period}</span>
                  </p>
                  <p className="mt-2 text-sm text-muted">{plan.sublabel}</p>

                  <ul className="mt-7 space-y-3 border-t border-border pt-6">
                    {INCLUDED.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[14px] text-foreground">
                        <svg width="16" height="16" viewBox="0 0 12 12" fill="none" className="mt-0.5 shrink-0 text-primary" aria-hidden>
                          <path d="M2 6.2 4.6 8.8 10 3.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-12 flex flex-col items-center gap-3">
          <AppStoreButton />
          <p className="text-xs text-muted-2">Subscriptions are managed through the app. iPhone only for now.</p>
        </Reveal>
      </div>
    </section>
  );
}
