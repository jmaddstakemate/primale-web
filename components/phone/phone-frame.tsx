import type { ReactNode } from "react";

/** iPhone-style shell. Screens inside are absolutely positioned so they can crossfade. */
export function PhoneFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative w-[280px] rounded-[2.6rem] border border-white/10 bg-[#0e1620] p-2.5 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.08)] sm:w-[300px] ${className}`}
    >
      <div className="relative h-[560px] overflow-hidden rounded-[2.1rem] bg-background sm:h-[600px]">
        <div className="absolute left-1/2 top-2.5 z-20 h-[24px] w-[92px] -translate-x-1/2 rounded-full bg-black" />
        <div className="absolute inset-x-0 top-0 z-10 flex h-11 items-center justify-between px-7 text-[11px] font-semibold text-foreground">
          <span>9:41</span>
          <span className="flex items-center gap-1">
            <span className="h-2 w-3 rounded-[2px] bg-foreground/80" />
            <span className="h-2.5 w-5 rounded-[3px] border border-foreground/70 p-[1px]">
              <span className="block h-full w-3/4 rounded-[1px] bg-foreground/80" />
            </span>
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}
