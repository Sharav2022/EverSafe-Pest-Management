import { NextResponse } from "next/server";
import { buildDelivery, isEmail, sendDelivery } from "@/lib/forms";

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

  const delivery = buildDelivery("NEWSLETTER_ENDPOINT", {
    email,
    subject: "Website newsletter sign-up",
    source: "eversafepest.com newsletter",
    submittedAt: new Date().toISOString(),
  });

  // Default (FormSubmit): validated here, sent by the visitor's browser.
  if (!delivery.viaServer) {
    return NextResponse.json({ ok: true, relay: { endpoint: delivery.endpoint, body: delivery.body } });
  }

  if (await sendDelivery(delivery)) return NextResponse.json({ ok: true });
  console.error("[NEWSLETTER_ENDPOINT] delivery failed");
  return NextResponse.json(
    { error: "We couldn't complete your sign-up just now. Please try again." },
    { status: 502 }
  );
}
