import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the Primale website and waitlist.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-light">
        Legal
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight">Terms of use</h1>
      <p className="mt-3 text-sm text-muted-2">Last updated 15 August 2026</p>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-muted">
        <section>
          <h2 className="text-lg font-semibold text-foreground">The waitlist</h2>
          <p className="mt-2">
            Joining the Primale waitlist does not create a membership, charge
            your card, or guarantee a place. We will email you when Primale Pro
            opens in the UK. You can ask to be removed at any time by contacting{" "}
            <a className="text-primary-light underline" href="mailto:hello@primale.app">
              hello@primale.app
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Membership</h2>
          <p className="mt-2">
            Primale Pro is a paid UK membership billed through Stripe in the
            Primale app. Prices shown on this site (£49/month or £490/year) are
            indicative and may change before launch. Membership includes a
            monthly at-home blood test and the digital coaching layer described
            on this site. Full membership terms will be presented in-app before
            you pay.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            Not medical advice
          </h2>
          <p className="mt-2">
            Primale is not a medical device, clinic, or pharmacy. It is not
            testosterone replacement therapy and does not diagnose, treat, or
            cure any condition. Blood-test results and protocols are for
            information and lifestyle support only. Always consult a qualified
            clinician before changing supplements, training, or medical care.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Eligibility</h2>
          <p className="mt-2">
            You must be 18 or over to join the waitlist or take out a Primale
            membership. Blood testing is currently intended for customers in
            the United Kingdom.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">This website</h2>
          <p className="mt-2">
            Content on this site is provided “as is.” We may update copy,
            pricing, and features as the product develops. We are not liable
            for losses arising from your use of this marketing site, except
            where we cannot exclude liability by law.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Governing law</h2>
          <p className="mt-2">
            These terms are governed by the laws of England and Wales. Courts
            of England and Wales have exclusive jurisdiction, without affecting
            any rights you have as a UK consumer.
          </p>
        </section>
      </div>

      <p className="mt-12 text-sm text-muted">
        <Link href="/" className="text-primary-light hover:underline">
          Back to home
        </Link>
      </p>
    </article>
  );
}
