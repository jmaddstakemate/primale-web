"use client";

import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useEffect, type ReactNode } from "react";

// Mock app screens with example data. Labels and supplement doses mirror the
// real app (primale-mobile/features) so the site shows what members will see.

const EASE = [0.22, 1, 0.36, 1] as const;

function useCountUp(target: number, play: boolean, decimals = 0, delay = 0): MotionValue<string> {
  const reduced = useReducedMotion();
  const value = useMotionValue(0);

  useEffect(() => {
    if (!play) {
      value.set(0);
      return;
    }
    if (reduced) {
      value.set(target);
      return;
    }
    const controls = animate(value, target, { duration: 1.6, ease: EASE, delay });
    return () => controls.stop();
  }, [play, reduced, target, value, delay]);

  return useTransform(value, (v) => v.toFixed(decimals));
}

function Screen({ children }: { children: ReactNode }) {
  return <div className="absolute inset-0 overflow-hidden px-5 pb-6 pt-14">{children}</div>;
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-2">{children}</p>
  );
}

function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-border bg-card p-4 ${className}`}>{children}</div>;
}

// ---------------------------------------------------------------------------
// Dashboard
// ---------------------------------------------------------------------------

const CHART = [66.7, 58.5, 49.8, 39.5, 29.1, 16.5];
const CHART_LINE = CHART.map((y, i) => `${i === 0 ? "M" : "L"} ${i * 56} ${y}`).join(" ");

export function DashboardScreen({ play }: { play: boolean }) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const score = useCountUp(82, play, 0, 0.2);
  const total = useCountUp(23.8, play, 1, 0.5);

  return (
    <Screen>
      <Eyebrow>Good morning</Eyebrow>
      <p className="mt-1 text-lg font-semibold tracking-tight">Your testosterone</p>

      <div className="relative mx-auto mt-5 h-[148px] w-[148px]">
        <svg width="148" height="148" viewBox="0 0 148 148" aria-hidden>
          <circle cx="74" cy="74" r={radius} fill="none" className="stroke-border" strokeWidth="10" />
          <motion.circle
            cx="74"
            cy="74"
            r={radius}
            fill="none"
            className="stroke-primary"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: play ? circumference * (1 - 0.82) : circumference }}
            transition={{ duration: 1.6, ease: EASE, delay: 0.2 }}
            transform="rotate(-90 74 74)"
            style={{ filter: "drop-shadow(0 0 10px rgba(245,166,35,0.45))" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span className="text-[38px] font-bold leading-none tracking-tight tabular-nums">
            {score}
          </motion.span>
          <span className="mt-1 text-[11px] font-semibold text-muted">T score</span>
        </div>
      </div>

      <Card className="mt-4">
        <div className="flex items-end justify-between">
          <div>
            <Eyebrow>Total testosterone</Eyebrow>
            <p className="mt-1 text-[28px] font-bold leading-none tracking-tight tabular-nums">
              <motion.span>{total}</motion.span>
              <span className="ml-1 text-sm font-medium text-muted">nmol/L</span>
            </p>
          </div>
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={play ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
            transition={{ delay: 1.6, type: "spring", stiffness: 300, damping: 18 }}
            className="rounded-full bg-optimal/15 px-2.5 py-1 text-xs font-semibold text-optimal"
          >
            Optimal
          </motion.span>
        </div>
        <svg className="mt-4 h-14 w-full" viewBox="0 0 280 80" preserveAspectRatio="none" aria-hidden>
          <defs>
            <linearGradient id="dashFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" style={{ stopColor: "var(--primary)" }} stopOpacity="0.35" />
              <stop offset="100%" style={{ stopColor: "var(--primary)" }} stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d={`${CHART_LINE} L 280 80 L 0 80 Z`}
            fill="url(#dashFill)"
            initial={{ opacity: 0 }}
            animate={{ opacity: play ? 1 : 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          />
          <motion.path
            d={CHART_LINE}
            fill="none"
            className="stroke-primary"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: play ? 1 : 0 }}
            transition={{ duration: 1.4, ease: EASE, delay: 0.5 }}
          />
        </svg>
      </Card>

      <Card className="mt-3 flex items-center justify-between py-3">
        <div>
          <Eyebrow>Next test</Eyebrow>
          <p className="text-sm font-semibold">12 Dec</p>
        </div>
        <span className="text-xs font-medium text-primary-light">Kit included</span>
      </Card>
    </Screen>
  );
}

// ---------------------------------------------------------------------------
// Kit on its way
// ---------------------------------------------------------------------------

const KIT_STEPS = [
  { label: "Test ordered", detail: "Mon 9 Dec" },
  { label: "Kit posted", detail: "Tue 10 Dec" },
  { label: "Arriving", detail: "Thu 12 Dec" },
  { label: "Sample to the lab", detail: "Post it the same day" },
  { label: "Results in the app", detail: "Usually within 3 days" },
];

export function KitScreen({ play }: { play: boolean }) {
  const reached = 3;

  return (
    <Screen>
      <Eyebrow>Blood test</Eyebrow>
      <p className="mt-1 text-lg font-semibold tracking-tight">Your kit is on its way</p>

      <Card className="mt-5">
        <div className="relative">
          <div className="absolute bottom-3 left-[11px] top-3 w-0.5 bg-border" />
          <motion.div
            className="absolute left-[11px] top-3 w-0.5 origin-top bg-primary"
            style={{ height: "52%" }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: play ? 1 : 0 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
          />
          <ul className="relative space-y-4">
            {KIT_STEPS.map((step, index) => {
              const done = index < reached;
              return (
                <li key={step.label} className="flex items-start gap-3">
                  <motion.span
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={play ? { scale: 1, opacity: 1 } : { scale: 0.4, opacity: 0 }}
                    transition={{ delay: 0.2 + index * 0.18, type: "spring", stiffness: 320, damping: 20 }}
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                      done ? "bg-primary text-on-primary" : "border border-border bg-background text-muted-2"
                    }`}
                  >
                    {done ? "✓" : index + 1}
                  </motion.span>
                  <div>
                    <p className={`text-[13px] font-semibold ${done ? "text-foreground" : "text-muted"}`}>
                      {step.label}
                    </p>
                    <p className="text-[11px] text-muted-2">{step.detail}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Card>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={play ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.6, ease: EASE, delay: 1.2 }}
      >
        <Card className="mt-3 border-primary/40 bg-primary/10">
          <p className="text-[13px] font-semibold text-primary-light">Take it before 10am</p>
          <p className="mt-1 text-[12px] leading-snug text-muted">
            Testosterone is highest in the morning, and the lab’s ranges assume a morning sample.
          </p>
        </Card>
      </motion.div>
    </Screen>
  );
}

// ---------------------------------------------------------------------------
// Protocol
// ---------------------------------------------------------------------------

const PROTOCOL = [
  { time: "Morning", name: "Vitamin D3", dose: "2,000 IU" },
  { time: "Morning", name: "Omega-3 (EPA/DHA)", dose: "1 g" },
  { time: "With dinner", name: "Zinc", dose: "15 mg" },
  { time: "Before bed", name: "Magnesium Glycinate", dose: "300 mg" },
];

const HABITS = ["Sleep 7.5 hours+", "Lift 3× a week", "Morning daylight"];

export function ProtocolScreen({ play }: { play: boolean }) {
  return (
    <Screen>
      <Eyebrow>Built from your results</Eyebrow>
      <p className="mt-1 text-lg font-semibold tracking-tight">Your protocol</p>

      <ul className="mt-5 space-y-2.5">
        {PROTOCOL.map((item, index) => (
          <motion.li
            key={item.name}
            initial={{ opacity: 0, x: 30 }}
            animate={play ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.15 + index * 0.12 }}
            className="flex items-center gap-3 rounded-2xl border border-border bg-card px-3.5 py-3"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary-light">
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                <g transform="rotate(-45 12 12)">
                  <rect x="3" y="8" width="18" height="8" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M12 8h5a4 4 0 0 1 0 8h-5Z" fill="currentColor" />
                </g>
              </svg>
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] font-semibold">{item.name}</p>
              <p className="text-[11px] text-muted-2">{item.time}</p>
            </div>
            <span className="text-[12px] font-medium text-muted">{item.dose}</span>
          </motion.li>
        ))}
      </ul>

      <div className="mt-5">
        <Eyebrow>Lifestyle</Eyebrow>
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {HABITS.map((habit, index) => (
          <motion.span
            key={habit}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={play ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
            transition={{ delay: 0.75 + index * 0.1, type: "spring", stiffness: 300, damping: 20 }}
            className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 text-[11px] font-medium text-accent-light"
          >
            {habit}
          </motion.span>
        ))}
      </div>
    </Screen>
  );
}

// ---------------------------------------------------------------------------
// Trend
// ---------------------------------------------------------------------------

const TREND = [
  { month: "Jul", value: 16.2 },
  { month: "Aug", value: 17.4 },
  { month: "Sep", value: 18.9 },
  { month: "Oct", value: 20.6 },
  { month: "Nov", value: 22.1 },
  { month: "Dec", value: 23.8 },
];
const TREND_MIN = 10;
const TREND_MAX = 25;

export function TrendScreen({ play }: { play: boolean }) {
  const latest = useCountUp(23.8, play, 1, 0.3);

  return (
    <Screen>
      <Eyebrow>Total testosterone</Eyebrow>
      <p className="mt-1 text-lg font-semibold tracking-tight">Six months of progress</p>

      <Card className="mt-5">
        <p className="text-[34px] font-bold leading-none tracking-tight tabular-nums">
          <motion.span>{latest}</motion.span>
          <span className="ml-1 text-sm font-medium text-muted">nmol/L</span>
        </p>
        <p className="mt-1 text-[12px] font-semibold text-optimal">Up from 16.2 in July</p>

        <div className="mt-5 flex h-40 items-end justify-between gap-2">
          {TREND.map((point, index) => {
            const isLatest = index === TREND.length - 1;
            return (
              <div key={point.month} className="flex h-full flex-1 flex-col items-center gap-2">
                <div className="relative w-full flex-1">
                  <motion.div
                    className={`absolute inset-x-0 bottom-0 origin-bottom rounded-lg ${
                      isLatest
                        ? "bg-primary shadow-[0_0_20px_rgba(245,166,35,0.5)]"
                        : "bg-primary/25"
                    }`}
                    style={{ height: `${((point.value - TREND_MIN) / (TREND_MAX - TREND_MIN)) * 100}%` }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: play ? 1 : 0 }}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.15 + index * 0.1 }}
                  />
                </div>
                <span className={`text-[10px] font-semibold ${isLatest ? "text-primary-light" : "text-muted-2"}`}>
                  {point.month}
                </span>
              </div>
            );
          })}
        </div>
      </Card>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={play ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.6, ease: EASE, delay: 1 }}
      >
        <Card className="mt-3 flex items-center justify-between py-3">
          <div>
            <Eyebrow>Next test</Eyebrow>
            <p className="text-sm font-semibold">12 Jan · ordered for you</p>
          </div>
          <span className="h-2.5 w-2.5 rounded-full bg-optimal shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
        </Card>
      </motion.div>
    </Screen>
  );
}
