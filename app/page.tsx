import { Faq } from "@/components/faq";
import { Features } from "@/components/features";
import { FinalCta } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <Pricing />
      <Faq />
      <FinalCta />
    </>
  );
}
