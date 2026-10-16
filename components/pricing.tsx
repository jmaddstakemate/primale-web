import Link from "next/link";

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
    <section id="pricing" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-light">
          Membership
        </p>
        <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
          Primale Pro
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          The monthly blood test is included. Join the waitlist for early
          access — checkout opens in the app when we launch.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {PLANS.map((plan) => (
            <article
              key={plan.id}
              className={`rounded-2xl border p-6 ${
                plan.highlighted
                  ? "border-primary bg-primary/10"
                  : "border-border bg-card"
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
              <p className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">
                  {plan.price}
                </span>
                <span className="text-muted">{plan.period}</span>
              </p>
              <p className="mt-2 text-sm text-muted">{plan.sublabel}</p>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/#waitlist"
            className="inline-flex h-12 items-center rounded-xl bg-primary px-6 text-[15px] font-semibold text-on-primary transition-colors hover:bg-primary-light"
          >
            Join the waitlist
          </Link>
        </div>
      </div>
    </section>
  );
}
