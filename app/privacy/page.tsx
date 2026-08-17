import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Primale collects and uses your information.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-light">
        Legal
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight">Privacy policy</h1>
      <p className="mt-3 text-sm text-muted-2">Last updated 15 August 2026</p>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-muted">
        <section>
          <h2 className="text-lg font-semibold text-foreground">Who we are</h2>
          <p className="mt-2">
            Primale (“we”) provides a UK testosterone-optimization membership
            and this marketing site. For questions about this policy, email{" "}
            <a className="text-primary-light underline" href="mailto:hello@primale.app">
              hello@primale.app
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            Information we collect
          </h2>
          <p className="mt-2">
            If you join the waitlist, we collect your email address and the
            time you signed up. We use this only to tell you when Primale
            memberships open and related product updates.
          </p>
          <p className="mt-2">
            When you use the Primale app, we also process account details,
            membership and payment information (via Stripe), lab-order status,
            blood-test results, and — if you grant permission on iOS — Apple
            Health data such as sleep and exercise. That processing is described
            in-app when you create an account.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            Legal basis (UK GDPR)
          </h2>
          <p className="mt-2">
            Waitlist emails are processed with your consent. You can withdraw
            that consent at any time by emailing us and asking to be removed.
            App accounts and memberships are processed to perform our contract
            with you, and where required to meet legal obligations.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Sharing</h2>
          <p className="mt-2">
            We do not sell your data. We share information with service
            providers who help us operate Primale — for example hosting
            (Vercel), database (Supabase), payments (Stripe), and laboratory
            analysis (Sussex Pathology) for blood tests you order. They may
            only use your data to provide those services.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Retention</h2>
          <p className="mt-2">
            Waitlist emails are kept until you ask us to delete them, or until
            the waitlist is closed after launch and we no longer need them.
            App data is retained while your account is active and for a
            reasonable period afterwards as required by law.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Your rights</h2>
          <p className="mt-2">
            You can request access, correction, deletion, or a copy of your
            personal data, and you can object to or restrict certain processing.
            You may also complain to the Information Commissioner’s Office
            (ICO) in the UK.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Cookies</h2>
          <p className="mt-2">
            This marketing site does not use advertising or analytics cookies.
            Essential cookies may be set by our hosting provider to deliver the
            site securely.
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
