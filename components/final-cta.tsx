import { AppStoreButton, AppStoreQr } from "./app-store";
import { Logo } from "./logo";
import { Reveal } from "./reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-border">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(245,166,35,0.2),transparent)] blur-2xl motion-safe:animate-aurora" />
      </div>
      <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center px-5 py-28 text-center sm:px-8 sm:py-36">
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-primary/30 blur-2xl motion-safe:animate-pulse" />
          <Logo size={88} className="relative rounded-[1.4rem] shadow-2xl" />
        </div>
        <h2 className="mt-10 text-4xl font-bold tracking-tight sm:text-6xl">
          Stop guessing.
          <br />
          <span className="bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
            Start measuring.
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-lg text-muted">
          Download Primale, pick a plan, and order your first blood test in minutes.
        </p>
        <div className="mt-10 flex flex-col items-center gap-8 sm:flex-row">
          <AppStoreButton />
          <div className="hidden items-center gap-4 sm:flex">
            <span className="h-px w-8 bg-border" />
            <span className="text-xs uppercase tracking-[0.16em] text-muted-2">or scan</span>
            <span className="h-px w-8 bg-border" />
          </div>
          <div className="hidden sm:block">
            <AppStoreQr size={104} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
