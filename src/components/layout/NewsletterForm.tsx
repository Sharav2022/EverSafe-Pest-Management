"use client";

import { useId, useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "success" }
  | { state: "unavailable" }
  | { state: "error"; message: string };

export function NewsletterForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const id = useId();
  const messageId = `${id}-message`;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status.state === "sending") return;
    const form = e.currentTarget;
    const email = String(new FormData(form).get("email") ?? "").trim();

    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        form.reset();
        setStatus({ state: "success" });
      } else if (res.status === 503) {
        setStatus({ state: "unavailable" });
      } else {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        setStatus({
          state: "error",
          message: data?.error ?? "Something went wrong. Please try again.",
        });
      }
    } catch {
      setStatus({ state: "error", message: "We couldn't reach the server. Please try again." });
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md">
      <label htmlFor={`${id}-email`} className="text-sm font-semibold text-ivory">
        Seasonal pest alerts and prevention tips
      </label>
      <div className="mt-3 flex items-center gap-2 rounded-full border border-ivory/20 bg-ivory/[0.06] p-1.5 pl-5 transition-colors focus-within:border-copper-light">
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Email address"
          aria-describedby={messageId}
          className="min-w-0 flex-1 bg-transparent py-2 text-ivory placeholder:text-ivory/45 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status.state === "sending"}
          className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-ivory px-5 text-sm font-semibold text-forest transition-colors hover:bg-white disabled:opacity-70"
        >
          {status.state === "sending" ? (
            <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
          ) : (
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          )}
          Subscribe
        </button>
      </div>
      <p id={messageId} role="status" aria-live="polite" className="mt-3 min-h-5 text-sm">
        {status.state === "success" && (
          <span className="text-sage">Thanks — you&rsquo;re on the list.</span>
        )}
        {status.state === "error" && <span className="text-copper-light">{status.message}</span>}
        {status.state === "unavailable" && (
          <span className="text-ivory/80">
            Online sign-up is unavailable right now. Email{" "}
            <a
              className="font-semibold text-ivory underline underline-offset-4"
              href={`${siteConfig.emailHref}?subject=${encodeURIComponent("Newsletter sign-up")}`}
            >
              {siteConfig.email}
            </a>{" "}
            and we&rsquo;ll add you.
          </span>
        )}
      </p>
    </form>
  );
}
