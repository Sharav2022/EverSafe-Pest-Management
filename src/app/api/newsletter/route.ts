import { NextResponse } from "next/server";
import { forwardSubmission, isEmail } from "@/lib/forms";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim().slice(0, 200) : "";
  if (!isEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 422 });
  }

  const result = await forwardSubmission("NEWSLETTER_ENDPOINT", {
    email,
    subject: "Website newsletter sign-up",
    source: "eversafepest.com newsletter",
    submittedAt: new Date().toISOString(),
  });

  if (result === "sent") return NextResponse.json({ ok: true });
  if (result === "unconfigured") {
    return NextResponse.json({ error: "Sign-up is unavailable." }, { status: 503 });
  }
  return NextResponse.json(
    { error: "We couldn't complete your sign-up just now. Please try again." },
    { status: 502 }
  );
}
