"use client";

import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import type { PointerEvent, ReactNode } from "react";
import { Logo } from "./logo";
import { Reveal, RevealGroup, RevealItem } from "./reveal";

const EASE = [0.22, 1, 0.36, 1] as const;
const IN_VIEW = { once: true, margin: "-60px" } as const;

export function Features() {
  return (
    <section id="features" className="relative border-t border-border bg-background-secondary">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-light">Primale Pro</p>
          <h2 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Everything you need to measure and raise your testosterone
          </h2>
          <p className="mt-5 max-w-xl text-lg text-muted">
            The test, the protocol and the tracking, in one membership and one app.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <RevealItem className="md:col-span-2">
            <SpotlightCard className="h-full">
              <div className="grid h-full gap-6 sm:grid-cols-[1fr_1.1fr] sm:items-end">
                <CardCopy
                  title="Testosterone dashboard"
                  body="Total T, free T, SHBG and a single T score, with charts that show the trend instead of a one-off number."
                />
                <DashboardArt />
              </div>
            </SpotlightCard>
          </RevealItem>

          <RevealItem>
            <SpotlightCard className="h-full">
              <TestArt />
              <CardCopy
                title="Monthly at-home blood test"
                body="A fresh kit every month, included in your membership. No clinic visits, no extra fees."
              />
            </SpotlightCard>
          </RevealItem>

          <RevealItem>
            <SpotlightCard className="h-full">
              <StackArt />
              <CardCopy
                title="Personalized stack"
                body="Supplements with doses and timings, plus the lifestyle habits that matter most for you."
              />
            </SpotlightCard>
          </RevealItem>

          <RevealItem>
            <SpotlightCard className="h-full">
              <HealthArt />
              <CardCopy
                title="Apple Health insights"
                body="Sleep and training from Apple Health, layered onto your results to show what’s driving them."
              />
            </SpotlightCard>
          </RevealItem>

          <RevealItem>
            <SpotlightCard className="h-full">
              <ReminderArt />
              <CardCopy
                title="Kit updates as they happen"
                body="Know when your kit ships, reaches the lab, and when results land, with no chasing."
              />
            </SpotlightCard>
          </RevealItem>

          <RevealItem className="md:col-span-2 lg:col-span-3">
            <SpotlightCard className="overflow-hidden">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <ShieldArt />
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">Private by design</h3>
                    <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted">
                      Your results live in the app, encrypted in transit and at rest. We never put
                      them in emails, never sell your data, and never use health data for advertising.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 sm:max-w-[16rem] sm:justify-end">
                  {["Never sold", "Never emailed", "Read-only Apple Health"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-optimal/30 bg-optimal/10 px-3 py-1.5 text-xs font-medium text-optimal"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}

function SpotlightCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const glow = useMotionTemplate`radial-gradient(420px circle at ${x}px ${y}px, rgba(245,166,35,0.12), transparent 65%)`;
  const ring = useMotionTemplate`radial-gradient(260px circle at ${x}px ${y}px, rgba(245,166,35,0.55), transparent 70%)`;

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  return (
    <div
      onPointerMove={onPointerMove}
      onPointerLeave={() => {
        x.set(-400);
        y.set(-400);
      }}
      className={`group relative rounded-3xl border border-border bg-card p-7 transition-colors ${className}`}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: ring,
          mask: "linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0)",
          padding: 1,
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glow }}
      />
      <div className="relative flex h-full flex-col gap-6">{children}</div>
    </div>
  );
}

function CardCopy({ title, body }: { title: string; body: string }) {
  return (
    <div className="mt-auto">
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">{body}</p>
    </div>
  );
}

function DashboardArt() {
  const line = "M0 92 C40 88 60 70 100 66 S170 40 210 38 S270 18 320 12";
  return (
    <div className="rounded-2xl border border-border bg-background/60 p-4">
      <div className="flex items-baseline justify-between">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-2">Total T</p>
        <span className="rounded-full bg-optimal/15 px-2 py-0.5 text-[11px] font-semibold text-optimal">
          Optimal
        </span>
      </div>
      <p className="mt-1 text-2xl font-bold tracking-tight">
        23.8 <span className="text-sm font-medium text-muted">nmol/L</span>
      </p>
      <svg viewBox="0 0 320 100" className="mt-3 h-24 w-full" aria-hidden>
        <defs>
          <linearGradient id="bentoFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#f5a623" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f5a623" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[25, 50, 75].map((y) => (
          <line key={y} x1="0" x2="320" y1={y} y2={y} stroke="#1e2a36" strokeDasharray="3 5" />
        ))}
        <motion.path
          d={`${line} L320 100 L0 100 Z`}
          fill="url(#bentoFill)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={IN_VIEW}
          transition={{ duration: 1, delay: 0.9 }}
        />
        <motion.path
          d={line}
          fill="none"
          stroke="#f5a623"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={IN_VIEW}
          transition={{ duration: 1.6, ease: EASE, delay: 0.2 }}
        />
        <motion.circle
          cx="320"
          cy="12"
          r="5"
          fill="#f5a623"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={IN_VIEW}
          transition={{ delay: 1.7, type: "spring", stiffness: 300, damping: 15 }}
          style={{ filter: "drop-shadow(0 0 6px rgba(245,166,35,0.9))" }}
        />
      </svg>
    </div>
  );
}

function TestArt() {
  return (
    <div className="flex items-center gap-5">
      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary-light">
        <span className="absolute inset-0 rounded-2xl bg-primary/20 motion-safe:animate-ping-slow" />
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2.5c.4 0 .8.2 1 .6C15.2 7 18 11.2 18 14.2a6 6 0 1 1-12 0C6 11.2 8.8 7 11 3.1c.2-.4.6-.6 1-.6Z" />
        </svg>
      </div>
      <div className="grid grid-cols-6 gap-1.5" aria-hidden>
        {Array.from({ length: 12 }, (_, index) => (
          <motion.span
            key={index}
            className="h-3.5 w-3.5 rounded-[5px] bg-primary"
            initial={{ opacity: 0.12, scale: 0.6 }}
            whileInView={{ opacity: 1 - index * 0.06, scale: 1 }}
            viewport={IN_VIEW}
            transition={{ delay: 0.3 + index * 0.06, type: "spring", stiffness: 300, damping: 18 }}
          />
        ))}
      </div>
    </div>
  );
}

function StackArt() {
  const pills = [
    { label: "Vitamin D3", className: "bg-primary/15 text-primary-light border-primary/30" },
    { label: "Zinc", className: "bg-accent/10 text-accent-light border-accent/30" },
    { label: "Magnesium", className: "bg-primary/15 text-primary-light border-primary/30" },
    { label: "Omega-3", className: "bg-accent/10 text-accent-light border-accent/30" },
  ];
  return (
    <div className="flex flex-wrap gap-2">
      {pills.map((pill, index) => (
        <motion.span
          key={pill.label}
          initial={{ opacity: 0, y: 14, rotate: index % 2 ? 4 : -4 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={IN_VIEW}
          transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 260, damping: 16 }}
          className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${pill.className}`}
        >
          {pill.label}
        </motion.span>
      ))}
    </div>
  );
}

function HealthArt() {
  return (
    <div className="flex items-center gap-4">
      <motion.div
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#ff2d55]/15 text-[#ff375f]"
        animate={{ scale: [1, 1.08, 1, 1.05, 1] }}
        transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 0.6 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 21s-7.2-4.4-9.3-8.6C1.2 9.3 3 6 6.4 6c1.9 0 3.2 1 3.6 1.4.4-.4 1.7-1.4 3.6-1.4 3.4 0 5.2 3.3 3.7 6.4C19.2 16.6 12 21 12 21Z" />
        </svg>
      </motion.div>
      <svg viewBox="0 0 160 40" className="h-10 w-full" aria-hidden>
        <motion.path
          d="M0 20 H40 L50 6 L62 34 L72 12 L80 20 H160"
          fill="none"
          stroke="#ff375f"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={IN_VIEW}
          transition={{ duration: 1.4, ease: EASE, delay: 0.2 }}
        />
      </svg>
    </div>
  );
}

function ReminderArt() {
  const items = [
    { title: "Kit posted", body: "Arrives in 2–3 days" },
    { title: "Sample at the lab", body: "Results usually within 3 days" },
  ];
  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: -14, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={IN_VIEW}
          transition={{ delay: 0.3 + index * 0.25, type: "spring", stiffness: 260, damping: 20 }}
          className="flex items-center gap-3 rounded-xl border border-border bg-background/60 px-3 py-2"
        >
          <Logo size={28} className="rounded-lg" />
          <div>
            <p className="text-[12px] font-semibold">{item.title}</p>
            <p className="text-[11px] text-muted">{item.body}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function ShieldArt() {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-optimal/15 text-optimal">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 3 5 6v5.5c0 4.3 3 8 7 9.5 4-1.5 7-5.2 7-9.5V6l-7-3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <motion.path
          d="m8.8 12.2 2.3 2.3 4.3-4.6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={IN_VIEW}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
      </svg>
    </div>
  );
}
