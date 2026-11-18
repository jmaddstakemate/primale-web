import { Faq } from "@/components/faq";
import { Features } from "@/components/features";
import { FinalCta } from "@/components/final-cta";
import { GoalsMarquee } from "@/components/goals-marquee";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";
import { Stats } from "@/components/stats";

export default function Home() {
  return (
    <>
      <Hero />
      <GoalsMarquee />
      <HowItWorks />
      <Features />
      <Stats />
      <Pricing />
      <Faq />
      <FinalCta />
    </>
  );
}
