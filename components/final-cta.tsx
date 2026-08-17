import { WaitlistForm } from "./waitlist-form";

export function FinalCta() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-2xl px-5 py-20 text-center sm:px-8 sm:py-24">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Get in early
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted">
          Primale Pro is opening first to the waitlist. Leave your email and
          we’ll tell you when memberships go live in the UK.
        </p>
        <div className="mx-auto mt-8 flex justify-center">
          <WaitlistForm id="waitlist-footer" />
        </div>
      </div>
    </section>
  );
}
