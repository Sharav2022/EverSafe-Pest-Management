import { NextResponse } from "next/server";
import { buildDelivery, contactAutoReply, sendDelivery, validateContact } from "@/lib/forms";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const { data, errors } = validateContact(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { error: "Please check the highlighted fields.", fields: errors },
      { status: 422 }
    );
  }

  const delivery = buildDelivery("CONTACT_FORM_ENDPOINT", {
    ...data,
    subject: `Website enquiry: ${data.service || "General"} — ${data.name}`,
    autoReply: contactAutoReply,
    source: "eversafepest.com contact form",
    submittedAt: new Date().toISOString(),
  });

  // Default (FormSubmit): validated here, sent by the visitor's browser.
  if (!delivery.viaServer) {
    return NextResponse.json({ ok: true, relay: { endpoint: delivery.endpoint, body: delivery.body } });
  }

  if (await sendDelivery(delivery)) return NextResponse.json({ ok: true });
  // Log the failure only — never the visitor's personal details.
  console.error("[CONTACT_FORM_ENDPOINT] delivery failed");
  return NextResponse.json(
    { error: "We couldn't send your message just now." },
    { status: 502 }
  );
}
