import type { Metadata } from "next";
import Link from "next/link";
import { CompanyDetails, MailLink } from "@/components/legal";

export const metadata: Metadata = {
  title: "Legal",
  description: "Terms of service and privacy policy for Primale.",
};

const documents = [
  {
    href: "/terms",
    title: "Terms of service",
    description:
      "What Primale Pro includes, how billing and automatic renewal work, cancelling and refunds, and the limits of what the app can tell you.",
  },
  {
    href: "/privacy",
    title: "Privacy policy",
    description:
      "What we collect, how we handle blood test results and Apple Health data, who we share data with, and how to delete your account.",
  },
];

export default function LegalPage() {
  return (
    <article className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-light">
        Legal
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight">
        Legal documents
      </h1>
      <p className="mt-4 text-[15px] leading-relaxed text-muted">
        The agreements that cover the Primale app, the Primale Pro membership,
        and this website.
      </p>

      <div className="mt-10 space-y-4">
        {documents.map((document) => (
          <Link
            key={document.href}
            href={document.href}
            className="block rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary"
          >
            <h2 className="text-lg font-semibold text-foreground">
              {document.title}
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              {document.description}
            </p>
            <p className="mt-4 text-sm font-medium text-primary-light">
              Read {document.title.toLowerCase()} →
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-10 space-y-3 text-[15px] leading-relaxed text-muted">
        <p>
          Questions about either document? Email <MailLink />.
        </p>
        <CompanyDetails />
      </div>

      <p className="mt-12 text-sm">
        <Link href="/" className="text-primary-light hover:underline">
          Back to home
        </Link>
      </p>
    </article>
  );
}
