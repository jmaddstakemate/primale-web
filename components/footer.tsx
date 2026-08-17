import Link from "next/link";
import { Wordmark } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background-secondary">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Wordmark />
          <p className="mt-3 max-w-xs text-sm text-muted">
            Optimize your testosterone, for real.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          <Link href="/#how-it-works" className="hover:text-foreground">
            How it works
          </Link>
          <Link href="/#pricing" className="hover:text-foreground">
            Pricing
          </Link>
          <Link href="/privacy" className="hover:text-foreground">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-foreground">
            Terms
          </Link>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted-2 sm:px-8">
          Primale is not medical advice, diagnosis, or treatment. Always speak
          with a qualified clinician about your health.
        </p>
      </div>
    </footer>
  );
}
