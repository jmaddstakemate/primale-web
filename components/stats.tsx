"use client";

import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { RevealGroup, RevealItem } from "./reveal";

const STATS = [
  { value: 12, decimals: 0, prefix: "", suffix: "", label: "Blood tests a year, included" },
  { value: 3, decimals: 0, prefix: "2–", suffix: " days", label: "For your kit to arrive" },
  { value: 3, decimals: 0, prefix: "~", suffix: " days", label: "From lab to results in the app" },
  { value: 40.83, decimals: 2, prefix: "£", suffix: "", label: "A month on the yearly plan" },
];

export function Stats() {
  return (
    <section aria-label="Primale in numbers" className="relative border-t border-border">
      <RevealGroup className="mx-auto grid max-w-6xl grid-cols-2 gap-y-12 px-5 py-20 sm:px-8 lg:grid-cols-4">
        {STATS.map((stat) => (
          <RevealItem key={stat.label} className="border-l border-border pl-5 sm:pl-7">
            <p className="text-4xl font-bold tracking-tight text-foreground tabular-nums sm:text-5xl">
              {stat.prefix}
              <Counter value={stat.value} decimals={stat.decimals} />
              <span className="text-primary">{stat.suffix}</span>
            </p>
            <p className="mt-2 max-w-[12rem] text-sm text-muted">{stat.label}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}

function Counter({ value, decimals }: { value: number; decimals: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();
  const count = useMotionValue(0);
  const text = useTransform(count, (v) => v.toFixed(decimals));

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      count.set(value);
      return;
    }
    const controls = animate(count, value, { duration: 1.8, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [inView, reduced, count, value]);

  return <motion.span ref={ref}>{text}</motion.span>;
}
