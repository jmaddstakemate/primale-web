import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { email, website } = body as { email?: unknown; website?: unknown };

  // Honeypot: bots that fill hidden fields are dropped silently.
  if (typeof website === "string" && website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  if (typeof email !== "string") {
    return NextResponse.json({ error: "Enter a valid email." }, { status: 400 });
  }

  const normalized = email.trim().toLowerCase();
  if (!EMAIL_RE.test(normalized) || normalized.length > 254) {
    return NextResponse.json({ error: "Enter a valid email." }, { status: 400 });
  }

  try {
    const supabase = getSupabase();
    const { error } = await supabase.from("waitlist_signups").insert({
      email: normalized,
      source: "marketing",
    });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json({ ok: true, already: true });
      }
      console.error("waitlist insert failed", error);
      return NextResponse.json(
        { error: "Could not join the waitlist. Try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("waitlist error", err);
    return NextResponse.json(
      { error: "Could not join the waitlist. Try again." },
      { status: 500 },
    );
  }
}
