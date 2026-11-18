import { DownloadCta } from "./app-store";
import { HeroBackdrop, HeroHeadline, HeroPhone, LivePill } from "./hero-motion";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <HeroBackdrop />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28 lg:pt-20">
        <div>
          <LivePill />
          <HeroHeadline text="Optimize your testosterone, for real" />

          <Reveal delay={0.55}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              Primale pairs a monthly at-home blood test with a personalized
              supplement and lifestyle protocol, then tracks your levels so you
              can see exactly what’s working.
            </p>
          </Reveal>

          <Reveal delay={0.7}>
            <div className="mt-9">
              <DownloadCta />
            </div>
          </Reveal>

          <Reveal delay={0.85}>
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
              {["Monthly blood test included", "Analysed by Sussex Pathology", "Cancel anytime"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none" className="text-primary" aria-hidden>
                    <path
                      d="M2 6.2 4.6 8.8 10 3.2"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <HeroPhone />
      </div>
    </section>
  );
}
