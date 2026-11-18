"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Reveal } from "./reveal";

const FAQS = [
  {
    q: "What is Primale?",
    a: "Primale is a UK membership that pairs monthly at-home blood tests with personalized supplement and lifestyle protocols, then tracks your testosterone over time.",
  },
  {
    q: "How do I join?",
    a: "Download Primale from the App Store, create your account and choose a monthly or yearly plan. Then tap “Order my first test” and your kit is on its way.",
  },
  {
    q: "What’s included in Primale Pro?",
    a: "A fresh at-home blood test every month, a testosterone dashboard, a personalized supplement and lifestyle protocol, Apple Health insights, and updates as your kit moves from your door to the lab.",
  },
  {
    q: "How do the blood tests work?",
    a: "We send a kit to you, usually arriving in 2–3 days. Collect your sample before 10am and post it back the same day, Monday to Thursday. Our lab partner, Sussex Pathology, analyses it and your results usually land in the app within 3 days of reaching the lab.",
  },
  {
    q: "Is this TRT or a medical service?",
    a: "No. Primale is not testosterone replacement therapy, a prescription service, or a substitute for seeing a doctor. It helps you measure and optimize with testing, supplements and lifestyle. Always talk to a clinician about your health.",
  },
  {
    q: "Where is Primale available?",
    a: "Primale is available across the United Kingdom.",
  },
  {
    q: "Is there an Android app?",
    a: "Not yet. Primale is iPhone only for now.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Monthly and yearly memberships can be cancelled anytime from Profile in the app. Yearly is billed annually at the best-value rate.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-border bg-background-secondary">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-light">FAQ</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Questions, answered</h2>
          <p className="mt-5 max-w-sm text-muted">
            Anything else? Email{" "}
            <a href="mailto:support@primale.health" className="text-primary-light underline-offset-4 hover:underline">
              support@primale.health
            </a>
            .
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="divide-y divide-border border-y border-border">
            {FAQS.map((item, index) => {
              const isOpen = open === index;
              return (
                <div key={item.q}>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left text-[17px] font-semibold tracking-tight transition-colors hover:text-primary-light"
                    >
                      {item.q}
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 22 }}
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-lg leading-none ${
                          isOpen ? "border-primary bg-primary text-on-primary" : "border-border text-muted"
                        }`}
                        aria-hidden
                      >
                        +
                      </motion.span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-12 text-[15px] leading-relaxed text-muted">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
