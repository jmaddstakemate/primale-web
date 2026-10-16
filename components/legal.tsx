import Link from "next/link";
import type { ReactNode } from "react";

export const CONTACT_EMAIL = "hello@primale.app";

export const COMPANY = {
  name: "Primale Health Limited",
  number: "17307135",
  address: "71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom",
};

export function CompanyDetails() {
  return (
    <p>
      Primale is operated by {COMPANY.name}, a company registered in England
      and Wales (company number {COMPANY.number}), whose registered office is
      at {COMPANY.address}.
    </p>
  );
}

export type LegalClause = {
  /** Stable anchor — the app deep-links to individual clauses, so don't rename. */
  id: string;
  heading: string;
  body: ReactNode;
};

type LegalArticleProps = {
  title: string;
  updated: string;
  intro: ReactNode;
  clauses: LegalClause[];
};

export function LegalArticle({ title, updated, intro, clauses }: LegalArticleProps) {
  return (
    <article className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-light">
        Legal
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight">{title}</h1>
      <p className="mt-3 text-sm text-muted-2">Last updated {updated}</p>

      <div className="mt-6 space-y-3 text-[15px] leading-relaxed text-muted">
        {intro}
      </div>

      <nav
        aria-label="On this page"
        className="mt-10 rounded-xl border border-border bg-card p-5"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-2">
          On this page
        </p>
        <ol className="mt-3 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
          {clauses.map((clause, index) => (
            <li key={clause.id} className="flex gap-2">
              <span className="tabular-nums text-muted-2">{index + 1}.</span>
              <a href={`#${clause.id}`} className="text-muted hover:text-foreground">
                {clause.heading}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-muted">
        {clauses.map((clause, index) => (
          <section key={clause.id} id={clause.id} className="scroll-mt-24">
            <h2 className="flex gap-2 text-lg font-semibold text-foreground">
              <span className="tabular-nums text-muted-2">{index + 1}.</span>
              {clause.heading}
            </h2>
            <div className="mt-3 space-y-3">{clause.body}</div>
          </section>
        ))}
      </div>

      <div className="mt-14 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-6 text-sm">
        <Link href="/" className="text-primary-light hover:underline">
          Back to home
        </Link>
        <Link href="/legal" className="text-muted hover:text-foreground">
          All legal documents
        </Link>
      </div>
    </article>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export function MailLink() {
  return (
    <a className="text-primary-light underline" href={`mailto:${CONTACT_EMAIL}`}>
      {CONTACT_EMAIL}
    </a>
  );
}

export function Highlight({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-foreground">{children}</strong>;
}
