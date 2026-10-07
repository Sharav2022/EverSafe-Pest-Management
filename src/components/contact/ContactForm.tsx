"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-brand-lime/30 bg-brand-lime/10 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-brand-lime-dark" />
        <h3 className="font-heading mt-4 text-xl font-bold text-brand-ink">
          Message Sent!
        </h3>
        <p className="mt-2 text-sm text-brand-ink/60">
          Thanks for reaching out — a member of our team will contact you
          within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-brand-ink">
            Full Name*
          </label>
          <input
            required
            type="text"
            placeholder="Jane Cooper"
            className="w-full rounded-xl border border-brand-ink/15 px-4 py-3 text-sm focus:border-brand-lime-dark focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-brand-ink">
            Phone Number*
          </label>
          <input
            required
            type="tel"
            placeholder="+1 (123) 456-789"
            className="w-full rounded-xl border border-brand-ink/15 px-4 py-3 text-sm focus:border-brand-lime-dark focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-semibold text-brand-ink">
          Email Address*
        </label>
        <input
          required
          type="email"
          placeholder="jane@email.com"
          className="w-full rounded-xl border border-brand-ink/15 px-4 py-3 text-sm focus:border-brand-lime-dark focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-semibold text-brand-ink">
          Service Needed
        </label>
        <select className="w-full rounded-xl border border-brand-ink/15 px-4 py-3 text-sm focus:border-brand-lime-dark focus:outline-none">
          <option>Residential Pest Control</option>
          <option>Commercial Pest Control</option>
          <option>Termite Control &amp; Prevention</option>
          <option>Bed Bug Treatment</option>
          <option>Rodent Control</option>
          <option>Mosquito &amp; Cockroach Control</option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-semibold text-brand-ink">
          Message*
        </label>
        <textarea
          required
          rows={4}
          placeholder="Tell us about the issue you're experiencing..."
          className="w-full rounded-xl border border-brand-ink/15 px-4 py-3 text-sm focus:border-brand-lime-dark focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="group inline-flex items-center gap-2 rounded-full bg-brand-lime px-7 py-3.5 font-heading font-semibold text-brand-ink transition hover:bg-brand-lime-dark"
      >
        Send Message
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}
