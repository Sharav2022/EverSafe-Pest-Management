"use client";

import { useId, useRef, useState } from "react";
import { AlertCircle, ArrowRight, Check, CheckCircle2, Copy, Loader2, Mail, Phone } from "lucide-react";
import {
  sendDelivery,
  serviceOptions,
  validateContact,
  type Delivery,
  type ContactPayload,
  type FieldErrors,
} from "@/lib/forms";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent" }
  | { state: "fallback"; reason: "unavailable" | "failed"; data: ContactPayload };

function emailParts(data: ContactPayload) {
  const subject = `Quote request — ${data.service || "General enquiry"}`;
  const body = [
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Service: ${data.service}`,
    "",
    data.message,
  ].join("\n");
  return { subject, body };
}

function mailtoFor(data: ContactPayload) {
  const { subject, body } = emailParts(data);
  return `${siteConfig.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// Works for visitors whose browser has no email app set up for mailto links.
function gmailFor(data: ContactPayload) {
  const { subject, body } = emailParts(data);
  const params = new URLSearchParams({ view: "cm", fs: "1", to: siteConfig.email, su: subject, body });
  return `https://mail.google.com/mail/?${params.toString()}`;
}

const fieldBase =
  "w-full rounded-2xl border bg-white px-4 py-3.5 text-[1rem] text-charcoal transition-[border-color,box-shadow] duration-200 placeholder:text-muted/70 focus:outline-none focus:ring-4";

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const id = useId();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status.state === "sending") return;

    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form).entries());
    const { data, errors: found } = validateContact(raw);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, company: raw.company ?? "" }),
      });
      if (res.ok) {
        // The server validates; FormSubmit deliveries are sent from the browser.
        const body = (await res.json().catch(() => null)) as { relay?: Delivery } | null;
        if (body?.relay && !(await sendDelivery(body.relay))) {
          setStatus({ state: "fallback", reason: "failed", data });
          return;
        }
        form.reset();
        setStatus({ state: "sent" });
        return;
      }
      if (res.status === 422) {
        const body = (await res.json().catch(() => null)) as { fields?: FieldErrors } | null;
        setErrors(body?.fields ?? {});
        setStatus({ state: "idle" });
        return;
      }
      setStatus({
        state: "fallback",
        reason: res.status === 503 ? "unavailable" : "failed",
        data,
      });
    } catch {
      setStatus({ state: "fallback", reason: "failed", data });
    }
  }

  if (status.state === "sent") {
    return (
      <div role="status" className="flex flex-col items-start rounded-[1.5rem] bg-sage-100 p-8 sm:p-10">
        <CheckCircle2 aria-hidden="true" className="h-9 w-9 text-forest" strokeWidth={1.5} />
        <h2 className="display-sm mt-5 text-forest">Thank you — your message is with us.</h2>
        <p className="mt-3 max-w-md text-muted">
          A member of the Ever Safe team will be in touch using the details you
          provided. If the issue is urgent, call us on{" "}
          <a href={siteConfig.phoneHref} className="font-semibold text-forest underline underline-offset-4">
            {siteConfig.phone}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus({ state: "idle" })}
          className="mt-8 text-sm font-semibold text-forest underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  const field = (name: keyof ContactPayload) => ({
    id: `${id}-${name}`,
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${id}-${name}-error` : undefined,
    className: cn(
      fieldBase,
      errors[name]
        ? "border-copper-ink focus:border-copper-ink focus:ring-copper/15"
        : "border-line-strong focus:border-forest focus:ring-forest/10"
    ),
  });

  const sending = status.state === "sending";

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-6">
      {status.state === "fallback" && (
        <div role="alert" className="rounded-[1.25rem] border border-copper/40 bg-white p-6">
          <div className="flex gap-3">
            <AlertCircle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-copper-ink" />
            <div>
              <p className="font-semibold text-charcoal">
                {status.reason === "unavailable"
                  ? "Online messaging isn't available right now."
                  : "Your message couldn't be sent just now."}
              </p>
              <p className="mt-1 text-sm text-muted">
                Your details are still in the form below. Email them to{" "}
                <a href={siteConfig.emailHref} className="font-semibold text-forest underline underline-offset-4">
                  {siteConfig.email}
                </a>
                , or call us directly.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={gmailFor(status.data)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-forest px-5 text-sm font-semibold text-ivory"
                >
                  <Mail aria-hidden="true" className="h-4 w-4" />
                  Send with Gmail
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <a
                  href={mailtoFor(status.data)}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line-strong px-5 text-sm font-semibold text-forest"
                >
                  <Mail aria-hidden="true" className="h-4 w-4" />
                  Other email app
                </a>
                <button
                  type="button"
                  onClick={async () => {
                    const { subject, body } = emailParts(status.data);
                    try {
                      await navigator.clipboard.writeText(`To: ${siteConfig.email}\nSubject: ${subject}\n\n${body}`);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2500);
                    } catch {
                      setCopied(false);
                    }
                  }}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line-strong px-5 text-sm font-semibold text-forest"
                >
                  {copied ? (
                    <Check aria-hidden="true" className="h-4 w-4" />
                  ) : (
                    <Copy aria-hidden="true" className="h-4 w-4" />
                  )}
                  {copied ? "Copied" : "Copy details"}
                </button>
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line-strong px-5 text-sm font-semibold text-forest"
                >
                  <Phone aria-hidden="true" className="h-4 w-4" />
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Full name" required htmlFor={`${id}-name`} error={errors.name} errorId={`${id}-name-error`}>
          <input {...field("name")} type="text" autoComplete="name" required placeholder="Jane Cooper" />
        </Field>
        <Field label="Phone number" required htmlFor={`${id}-phone`} error={errors.phone} errorId={`${id}-phone-error`}>
          <input {...field("phone")} type="tel" autoComplete="tel" required placeholder="(437) 555-0123" />
        </Field>
      </div>

      <Field label="Email address" required htmlFor={`${id}-email`} error={errors.email} errorId={`${id}-email-error`}>
        <input {...field("email")} type="email" autoComplete="email" required placeholder="jane@email.com" />
      </Field>

      <Field label="Service needed" htmlFor={`${id}-service`} error={errors.service} errorId={`${id}-service-error`}>
        <div className="relative">
          <select {...field("service")} defaultValue={serviceOptions[0]} className={cn(field("service").className, "appearance-none pr-12")}>
            {serviceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          <svg aria-hidden="true" viewBox="0 0 20 20" className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted">
            <path d="M5 8l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </Field>

      <Field label="Message" required htmlFor={`${id}-message`} error={errors.message} errorId={`${id}-message-error`}>
        <textarea {...field("message")} rows={5} required placeholder="Tell us what you're seeing, where, and for how long." />
      </Field>

      {/* Honeypot for bots — hidden from people and assistive tech. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          <span aria-hidden="true" className="text-copper-ink">*</span> Required fields
        </p>
        <button
          type="submit"
          disabled={sending}
          aria-disabled={sending}
          className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-forest px-8 font-semibold text-ivory transition-colors hover:bg-forest-600 disabled:cursor-wait disabled:opacity-75"
        >
          {sending ? "Sending…" : "Send message"}
          {sending ? (
            <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
          ) : (
            <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          )}
        </button>
      </div>
      <p role="status" aria-live="polite" className="sr-only">
        {sending ? "Sending your message" : ""}
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  error,
  errorId,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  errorId: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-charcoal">
        {label}
        {required && (
          <>
            <span aria-hidden="true" className="ml-0.5 text-copper-ink">*</span>
            <span className="sr-only"> (required)</span>
          </>
        )}
      </label>
      {children}
      {error && (
        <p id={errorId} className="mt-2 flex items-center gap-1.5 text-sm font-medium text-copper-ink">
          <AlertCircle aria-hidden="true" className="h-4 w-4" />
          {error}
        </p>
      )}
    </div>
  );
}
