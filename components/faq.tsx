const FAQS = [
  {
    q: "What is Primale?",
    a: "Primale is a UK membership that pairs monthly at-home blood tests with personalized supplement and lifestyle protocols, then tracks your testosterone over time.",
  },
  {
    q: "What’s included in Primale Pro?",
    a: "A fresh at-home blood test every month, a testosterone dashboard, a personalized supplement and lifestyle protocol, Apple Health insights on iOS, and smart retest reminders.",
  },
  {
    q: "How do the blood tests work?",
    a: "We send a kit to you. You collect a sample at home and ship it back. Our lab partner, Sussex Pathology, analyses it and results land in the Primale app.",
  },
  {
    q: "Is this TRT or a medical service?",
    a: "No. Primale is not testosterone replacement therapy, a prescription service, or a substitute for seeing a doctor. It helps you measure and optimize with testing, supplements, and lifestyle — always talk to a clinician about your health.",
  },
  {
    q: "Where is Primale available?",
    a: "We’re launching in the United Kingdom first. Join the waitlist and we’ll email you when memberships open.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Monthly and yearly Primale Pro memberships can be cancelled anytime. Yearly is billed annually at the best-value rate.",
  },
  {
    q: "Does it work with Apple Health?",
    a: "Yes. On iOS, Primale can use HealthKit sleep and exercise data to add optimization insights alongside your lab results.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-t border-border bg-background-secondary">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-light">
          FAQ
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Questions, answered
        </h2>

        <div className="mt-10 divide-y divide-border border-y border-border">
          {FAQS.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="cursor-pointer list-none text-left text-[16px] font-semibold tracking-tight [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span className="text-muted-2 transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 pr-8 text-[15px] leading-relaxed text-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
