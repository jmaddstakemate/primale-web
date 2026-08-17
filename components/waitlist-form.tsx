"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "duplicate" | "error";

export function WaitlistForm({
  id,
  compact = false,
}: {
  id?: string;
  compact?: boolean;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage(null);

    const form = event.currentTarget;
    const honeypot = new FormData(form).get("website");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website: honeypot }),
      });
      const data = (await response.json()) as {
        ok?: boolean;
        already?: boolean;
        error?: string;
      };

      if (!response.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Try again.");
        return;
      }

      if (data.already) {
        setStatus("duplicate");
        setMessage("You're already on the list.");
        return;
      }

      setStatus("success");
      setMessage("You're on the list. We'll be in touch.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Try again.");
    }
  }

  const done = status === "success" || status === "duplicate";

  return (
    <div id={id} className={compact ? "" : "w-full max-w-md"}>
      <form
        onSubmit={onSubmit}
        className={
          compact
            ? "flex flex-col gap-3 sm:flex-row"
            : "flex flex-col gap-3 sm:flex-row"
        }
      >
        <label className="sr-only" htmlFor={id ? `${id}-email` : "waitlist-email"}>
          Email address
        </label>
        <input
          id={id ? `${id}-email` : "waitlist-email"}
          type="email"
          name="email"
          required
          autoComplete="email"
          inputMode="email"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle" && status !== "loading") {
              setStatus("idle");
              setMessage(null);
            }
          }}
          disabled={status === "loading"}
          className="h-12 flex-1 rounded-xl border border-border bg-card px-4 text-[15px] text-foreground outline-none placeholder:text-muted-2 focus:border-primary"
        />
        <div className="hidden" aria-hidden>
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="h-12 shrink-0 rounded-xl bg-primary px-5 text-[15px] font-semibold text-white transition-colors hover:bg-primary-light disabled:opacity-70"
        >
          {status === "loading" ? "Joining…" : "Join waitlist"}
        </button>
      </form>
      {message && (
        <p
          role="status"
          className={`mt-3 text-sm ${
            status === "error" ? "text-red-400" : "text-primary-light"
          }`}
        >
          {message}
        </p>
      )}
      {done ? null : (
        <p className="mt-3 text-xs text-muted-2">
          UK only for now. No spam — just a note when Primale opens.
        </p>
      )}
    </div>
  );
}
