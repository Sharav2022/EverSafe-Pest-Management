import { services } from "@/data/services";

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
 * Forwards a submission as JSON to the endpoint configured in the given env
 * variable (e.g. a Formspree, Zapier or CRM webhook URL). Returns
 * "unconfigured" when no endpoint is set so the UI can offer a fallback
 * instead of pretending the message was sent.
 */
export async function forwardSubmission(
  envName: "CONTACT_FORM_ENDPOINT" | "NEWSLETTER_ENDPOINT",
  payload: Record<string, unknown>
): Promise<"sent" | "unconfigured" | "failed"> {
  const endpoint = process.env[envName];
  if (!endpoint) return "unconfigured";

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
    if (!res.ok) {
      // Log status only — never the visitor's personal details.
      console.error(`[${envName}] delivery failed with status ${res.status}`);
      return "failed";
    }
    return "sent";
  } catch {
    console.error(`[${envName}] delivery failed: network error`);
    return "failed";
  }
}
