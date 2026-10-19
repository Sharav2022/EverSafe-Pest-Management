import { services } from "@/data/services";
import { siteConfig } from "@/lib/site-config";

export const serviceOptions = services.map((s) => s.title);

export type ContactPayload = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

export type FieldErrors = Partial<Record<keyof ContactPayload, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function str(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export function isEmail(value: string) {
  return EMAIL_RE.test(value);
}

/** Shared by the browser (instant feedback) and the API route (authoritative). */
export function validateContact(input: Record<string, unknown>): {
  data: ContactPayload;
  errors: FieldErrors;
} {
  const data: ContactPayload = {
    name: str(input.name, 120),
    phone: str(input.phone, 40),
    email: str(input.email, 200),
    service: str(input.service, 120),
    message: str(input.message, 5000),
  };

  const errors: FieldErrors = {};
  if (!data.name) errors.name = "Please enter your full name.";
  if (!data.phone) errors.phone = "Please enter a phone number.";
  else if (data.phone.replace(/\D/g, "").length < 7)
    errors.phone = "Please enter a valid phone number.";
  if (!data.email) errors.email = "Please enter your email address.";
  else if (!isEmail(data.email)) errors.email = "Please enter a valid email address.";
  if (data.service && !serviceOptions.includes(data.service))
    errors.service = "Please choose a service from the list.";
  if (!data.message) errors.message = "Please tell us a little about the issue.";

  return { data, errors };
}

/**
 * Default delivery: FormSubmit relays each submission by email to the
 * business inbox. The first submission triggers a one-time "Activate Form"
 * email to that inbox; until it is clicked, FormSubmit reports failure and
 * visitors see the email/phone fallback, so no enquiry is lost.
 */
const DEFAULT_ENDPOINT = `https://formsubmit.co/ajax/${siteConfig.email}`;

/** Generic acknowledgement emailed to the visitor after a contact enquiry. */
export const contactAutoReply = [
  "Thank you for contacting Ever Safe Pest Management.",
  "",
  "We've received your enquiry, and a member of our team will be in touch shortly — we typically respond within one business day.",
  "",
  `If your pest issue is urgent, please call us on ${siteConfig.phone} (${siteConfig.hours[0].days}, ${siteConfig.hours[0].time}).`,
  "",
  `To add anything to your enquiry, email us at ${siteConfig.email}.`,
  "",
  "Ever Safe Pest Management",
  `${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality}, ${siteConfig.address.addressRegion} ${siteConfig.address.postalCode}`,
  siteConfig.url.replace(/^https?:\/\//, ""),
].join("\n");

type EndpointEnv = "CONTACT_FORM_ENDPOINT" | "NEWSLETTER_ENDPOINT";

/** A ready-to-send submission: where it goes and the exact JSON body. */
export type Delivery = { endpoint: string; body: Record<string, unknown> };

/**
 * Builds the outgoing submission. With a custom endpoint configured the
 * server sends it; otherwise it is handed back to the browser to send to
 * FormSubmit, which only accepts submissions made from a real web page.
 */
export function buildDelivery(
  envName: EndpointEnv,
  payload: Record<string, unknown> & { subject: string; autoReply?: string }
): Delivery & { viaServer: boolean } {
  const custom = process.env[envName];
  const { subject, autoReply, ...fields } = payload;
  return {
    endpoint: custom || DEFAULT_ENDPOINT,
    viaServer: Boolean(custom),
    body: {
      ...fields,
      _subject: subject,
      _template: "table",
      _captcha: "false",
      // FormSubmit emails this text to the address in the `email` field.
      ...(autoReply && { _autoresponse: autoReply }),
    },
  };
}

/**
 * Posts a delivery and reports whether the endpoint confirmed it. FormSubmit
 * answers 200 with { success: "false" } when it rejects a submission.
 * Used on the server (custom endpoints) and in the browser (FormSubmit).
 */
export async function sendDelivery({ endpoint, body }: Delivery): Promise<boolean> {
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
    });
    const data = (await res.json().catch(() => null)) as { success?: unknown } | null;
    const rejected = data?.success === false || data?.success === "false";
    return res.ok && !rejected;
  } catch {
    return false;
  }
}
