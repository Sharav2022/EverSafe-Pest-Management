import Link from "next/link";
import { Bug, Clock, PhoneCall } from "lucide-react";
import { services } from "@/data/services";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5H16l.5-3H13.5V8.5c0-.9.25-1.5 1.53-1.5H16.6V4.35C16.3 4.31 15.29 4.22 14.11 4.22c-2.46 0-4.15 1.5-4.15 4.26V10.5H7.5v3H9.96V21h3.54Z" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.5 4.6a4.1 4.1 0 0 0 1.3 5.5c-.6 0-1.3-.2-1.8-.5v.1c0 2 1.4 3.6 3.3 4a4.2 4.2 0 0 1-1.8.1 4.1 4.1 0 0 0 3.8 2.9A8.3 8.3 0 0 1 2 18.6a11.6 11.6 0 0 0 6.3 1.9c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1Z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-lime text-brand-ink">
                <Bug className="h-5 w-5" strokeWidth={2} />
              </span>
              <span className="font-heading text-lg font-extrabold">
                EverSafe
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              A trusted pest control service provider offering safe, effective
              solutions for homes and businesses.
            </p>
            <div className="mt-5 flex gap-2">
              {[FacebookIcon, TwitterIcon, InstagramIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/70 transition hover:bg-brand-lime hover:text-brand-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              <li><Link href="/" className="hover:text-brand-lime">Home</Link></li>
              <li><Link href="/about-us" className="hover:text-brand-lime">About Us</Link></li>
              <li><Link href="/services" className="hover:text-brand-lime">Our Services</Link></li>
              <li><Link href="/gallery" className="hover:text-brand-lime">Gallery</Link></li>
              <li><Link href="/pricing" className="hover:text-brand-lime">Pricing Plans</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-white">
              Our Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              {services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-brand-lime"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-white">
              Working Hours
            </h3>
            <div className="mt-4 space-y-4 text-sm text-white/60">
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-lime" />
                <span>Monday – Saturday: 9:00 AM – 7:00 PM</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-lime" />
                <span>Sunday: Emergency Services Available</span>
              </div>
            </div>
            <a
              href="tel:+14378339181"
              className="mt-5 flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 transition hover:bg-white/10"
            >
              <PhoneCall className="h-5 w-5 text-brand-lime" />
              <span>
                <span className="block text-xs text-white/50">Contact Us!</span>
                <span className="font-heading font-semibold">+1 437-833-9181</span>
              </span>
            </a>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-white">
              Newsletter
            </h3>
            <p className="mt-4 text-sm text-white/60">
              Get seasonal pest alerts and prevention tips in your inbox.
            </p>
            <form className="mt-4 flex flex-col gap-2.5">
              <input
                type="email"
                required
                placeholder="Enter Email Address*"
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-brand-lime focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-brand-lime px-4 py-2.5 font-heading text-sm font-bold text-brand-ink transition hover:bg-brand-lime-dark"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row">
          <p>
            Copyright © {year}{" "}
            <Link href="/" className="text-white hover:text-brand-lime">
              EverSafe
            </Link>
            . All rights reserved.
          </p>
          <p>Designed for reliable, safe pest control.</p>
        </div>
      </div>
    </footer>
  );
}
