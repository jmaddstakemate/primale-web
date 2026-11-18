"use client";

import { AnimatePresence, motion, useInView, useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";
import { PhoneFrame } from "./phone/phone-frame";
import { KitScreen, ProtocolScreen, TrendScreen } from "./phone/screens";
import { Reveal } from "./reveal";

const STEPS = [
  {
    n: "01",
    title: "Test at home",
    body: "A blood-test kit lands on your doormat every month. Collect your sample before 10am, post it back the same day, and Sussex Pathology handles the lab work.",
    points: ["Kit arrives in 2–3 days", "Results usually within 3 days of reaching the lab"],
    Screen: KitScreen,
  },
  {
    n: "02",
    title: "Get your protocol",
    body: "Your results feed a personalized supplement stack and lifestyle plan: exactly what to take, when to take it, and the habits that move the needle.",
    points: ["Doses and timings, not guesswork", "Adapts every time new results arrive"],
    Screen: ProtocolScreen,
  },
  {
    n: "03",
    title: "Track every month",
    body: "Total testosterone, free testosterone, SHBG and your T score, charted month after month, so you can see what’s working and drop what isn’t.",
    points: ["Your full trend, not a one-off number", "Next kit ordered for you automatically"],
    Screen: TrendScreen,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative">
      <div className="mx-auto max-w-6xl px-5 pt-24 sm:px-8 sm:pt-32">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-light">How it works</p>
          <h2 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Measure. Adjust. Repeat.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-muted">
            Guesswork is the default. Primale replaces it with a monthly loop of lab data and a
            protocol built around your goals.
          </p>
        </Reveal>
      </div>

      <PinnedSteps />
      <StackedSteps />

      <p className="mx-auto max-w-6xl px-5 pb-20 text-xs text-muted-2 sm:px-8">
        App screens shown with example data.
      </p>
    </section>
  );
}

/** Desktop: the phone stays pinned while each step scrolls past and swaps its screen. */
function PinnedSteps() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    setActive(Math.min(STEPS.length - 1, Math.max(0, Math.floor(progress * STEPS.length))));
  });

  return (
    <div ref={ref} className="mx-auto hidden max-w-6xl grid-cols-[1fr_auto] gap-20 px-8 lg:grid">
      <div>
        {STEPS.map((step, index) => (
          <div key={step.n} className="flex min-h-[85vh] items-center">
            <motion.article
              animate={{ opacity: active === index ? 1 : 0.25 }}
              transition={{ duration: 0.4 }}
              className="max-w-md"
            >
              <StepCopy step={step} highlight={active === index} />
            </motion.article>
          </div>
        ))}
      </div>

      <div>
        <div className="sticky top-16 flex h-[calc(100vh-4rem)] items-center">
          <div className="relative">
            <div className="absolute -inset-16 -z-10 rounded-full bg-primary/15 blur-3xl" />
            <ProgressRail active={active} />
            <PhoneFrame>
              <AnimatePresence initial={false}>
                {STEPS.map(
                  ({ Screen, n }, index) =>
                    active === index && (
                      <motion.div
                        key={n}
                        className="absolute inset-0"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.03 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <Screen play />
                      </motion.div>
                    ),
                )}
              </AnimatePresence>
            </PhoneFrame>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgressRail({ active }: { active: number }) {
  return (
    <div className="absolute -left-10 top-1/2 flex -translate-y-1/2 flex-col gap-3">
      {STEPS.map((step, index) => (
        <motion.span
          key={step.n}
          className="w-1 rounded-full bg-primary"
          animate={{ height: active === index ? 40 : 10, opacity: active === index ? 1 : 0.3 }}
          transition={{ type: "spring", stiffness: 300, damping: 26 }}
        />
      ))}
    </div>
  );
}

/** Mobile and tablet: each step gets its own phone, animating as it scrolls into view. */
function StackedSteps() {
  return (
    <div className="mx-auto max-w-6xl space-y-24 px-5 py-16 sm:px-8 lg:hidden">
      {STEPS.map((step) => (
        <StackedStep key={step.n} step={step} />
      ))}
    </div>
  );
}

function StackedStep({ step }: { step: (typeof STEPS)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-25% 0px" });
  const { Screen } = step;

  return (
    <div ref={ref} className="grid items-center gap-10 md:grid-cols-2">
      <Reveal>
        <StepCopy step={step} highlight />
      </Reveal>
      <div className="flex justify-center">
        <PhoneFrame>
          <Screen play={inView} />
        </PhoneFrame>
      </div>
    </div>
  );
}

function StepCopy({ step, highlight }: { step: (typeof STEPS)[number]; highlight: boolean }) {
  return (
    <>
      <p
        className={`font-mono text-sm font-semibold transition-colors ${
          highlight ? "text-primary" : "text-muted-2"
        }`}
      >
        {step.n}
      </p>
      <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{step.title}</h3>
      <p className="mt-4 text-lg leading-relaxed text-muted">{step.body}</p>
      <ul className="mt-6 space-y-2.5">
        {step.points.map((point) => (
          <li key={point} className="flex items-center gap-3 text-[15px] text-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {point}
          </li>
        ))}
      </ul>
    </>
  );
}
