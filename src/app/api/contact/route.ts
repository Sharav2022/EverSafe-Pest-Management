import { NextResponse } from "next/server";
import { forwardSubmission, validateContact } from "@/lib/forms";

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

  const result = await forwardSubmission("CONTACT_FORM_ENDPOINT", {
    ...data,
    source: "eversafepest.com contact form",
    submittedAt: new Date().toISOString(),
  });

  if (result === "sent") return NextResponse.json({ ok: true });
  if (result === "unconfigured") {
    return NextResponse.json({ error: "Online messaging is unavailable." }, { status: 503 });
  }
  return NextResponse.json(
    { error: "We couldn't send your message just now." },
    { status: 502 }
  );
}
