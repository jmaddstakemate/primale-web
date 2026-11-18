"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useState, type PointerEvent, type ReactNode } from "react";
import { PhoneFrame } from "./phone/phone-frame";
import { DashboardScreen } from "./phone/screens";

const EASE = [0.22, 1, 0.36, 1] as const;

export function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 left-1/2 h-[640px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(245,166,35,0.22),transparent)] blur-2xl motion-safe:animate-aurora" />
      <div className="absolute -right-40 top-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(123,164,214,0.16),transparent)] blur-2xl motion-safe:animate-aurora-slow" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}

export function LivePill() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-primary/10 py-1.5 pl-3 pr-4 text-sm font-medium text-primary-light"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-optimal opacity-75 motion-safe:animate-ping-slow" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-optimal" />
      </span>
      Now on the App Store · UK
    </motion.div>
  );
}

export function HeroHeadline({ text }: { text: string }) {
  const words = text.split(" ");
  const accentFrom = words.length - 2;

  const renderWord = (word: string, index: number) => (
    <span key={index} className="inline-block overflow-hidden pb-1 align-bottom">
      <motion.span
        className={`inline-block ${
          index >= accentFrom
            ? "bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent"
            : ""
        }`}
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.1 + index * 0.07 }}
      >
        {word}
        {index < words.length - 1 && "\u00a0"}
      </motion.span>
    </span>
  );

  return (
    <h1 className="mt-6 max-w-xl text-[44px] font-bold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-[68px]">
      {words.slice(0, accentFrom).map(renderWord)}
      <span className="whitespace-nowrap">
        {words.slice(accentFrom).map((word, offset) => renderWord(word, accentFrom + offset))}
      </span>
    </h1>
  );
}

export function HeroPhone() {
  const [play, setPlay] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 18 });

  useEffect(() => {
    const timer = setTimeout(() => setPlay(true), 500);
    return () => clearTimeout(timer);
  }, []);

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function onPointerLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div
      className="relative flex justify-center [perspective:1400px] lg:justify-end"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative"
      >
        <div className="absolute -inset-10 -z-10 rounded-full bg-primary/20 blur-3xl" />
        <PhoneFrame>
          <DashboardScreen play={play} />
        </PhoneFrame>

        <FloatingCard className="-left-16 top-56 sm:-left-36" delay={1.6} drift={-10}>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-optimal/15 text-optimal">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M5 12.5 10 17 19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <div>
            <p className="text-[12px] font-semibold">Your results are in</p>
            <p className="text-[11px] text-muted">Total T is in the optimal range</p>
          </div>
        </FloatingCard>

        <FloatingCard className="-right-6 bottom-44 sm:-right-28" delay={2.1} drift={12}>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary-light">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2.5c.4 0 .8.2 1 .6C15.2 7 18 11.2 18 14.2a6 6 0 1 1-12 0C6 11.2 8.8 7 11 3.1c.2-.4.6-.6 1-.6Z" />
            </svg>
          </span>
          <div>
            <p className="text-[12px] font-semibold">Kit posted</p>
            <p className="text-[11px] text-muted">Arrives in 2–3 days</p>
          </div>
        </FloatingCard>
      </motion.div>
    </div>
  );
}

function FloatingCard({
  children,
  className,
  delay,
  drift,
}: {
  children: ReactNode;
  className: string;
  delay: number;
  drift: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, type: "spring", stiffness: 200, damping: 18 }}
      className={`absolute z-30 hidden sm:block ${className}`}
      style={{ transform: "translateZ(60px)" }}
    >
      <motion.div
        animate={{ y: [0, drift, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-card/80 px-3.5 py-3 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
