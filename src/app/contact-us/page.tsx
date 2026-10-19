import type { Metadata } from "next";
import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { processSteps } from "@/components/home/ProcessSteps";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Request a free pest control inspection or get in touch with Ever Safe Pest Management in Mississauga, Ontario.",
  alternates: { canonical: "/contact-us" },
};

export default function ContactUsPage() {
  const { address } = siteConfig;

  return (
    <section className="bg-ivory pb-20 pt-8 sm:pb-28 sm:pt-10">
      <div className="shell">
        <Breadcrumbs items={[{ label: "Contact Us" }]} />
      </div>

      <div className="shell mt-10 grid gap-14 lg:mt-16 lg:grid-cols-12 lg:gap-12">
        {/* Editorial introduction and direct contact details */}
        <div className="lg:col-span-5">
          <div data-rise>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="display-xl mt-6 text-forest">Let&rsquo;s take a look.</h1>
            <p className="lede mt-7 max-w-md text-muted">
              Tell us what you&rsquo;re seeing and where. We&rsquo;ll arrange a
              free inspection and recommend a plan — no obligation.
            </p>
          </div>

          <ul className="mt-12 border-t border-line">
            <li className="border-b border-line">
              <a href={siteConfig.phoneHref} className="group flex items-center gap-5 py-6">
                <Phone aria-hidden="true" className="h-5 w-5 shrink-0 text-copper" strokeWidth={1.75} />
                <span>
                  <span className="block text-sm text-muted">Call us</span>
                  <span className="mt-0.5 block font-display text-3xl text-forest group-hover:text-copper-ink">
                    {siteConfig.phone}
                  </span>
                </span>
              </a>
            </li>
            <li className="border-b border-line">
              <a href={siteConfig.emailHref} className="group flex items-center gap-5 py-6">
                <Mail aria-hidden="true" className="h-5 w-5 shrink-0 text-copper" strokeWidth={1.75} />
                <span className="min-w-0">
                  <span className="block text-sm text-muted">Email us</span>
                  <span className="mt-0.5 block break-words text-lg font-semibold text-forest underline decoration-line-strong underline-offset-4 group-hover:decoration-forest">
                    {siteConfig.email}
                  </span>
                </span>
              </a>
            </li>
            <li className="border-b border-line">
              <a
                href={siteConfig.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-5 py-6"
              >
                <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-copper" strokeWidth={1.75} />
                <span>
                  <span className="block text-sm text-muted">Office</span>
                  <span className="mt-0.5 block text-lg font-semibold leading-snug text-forest">
                    {address.streetAddress}
                    <br />
                    {address.addressLocality}, {address.addressRegion} {address.postalCode}
                  </span>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-copper-ink">
                    Open in Google Maps
                    <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </span>
                </span>
              </a>
            </li>
            <li className="flex items-start gap-5 border-b border-line py-6">
              <Clock3 aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-copper" strokeWidth={1.75} />
              <dl className="grid gap-2">
                {siteConfig.hours.map((h) => (
                  <div key={h.days} className="flex flex-wrap gap-x-3">
                    <dt className="text-sm text-muted">{h.days}</dt>
                    <dd className="text-sm font-semibold text-charcoal">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </li>
          </ul>
        </div>

        {/* Form */}
        <div className="lg:col-span-7">
          <div className="rounded-[2rem] bg-white p-6 shadow-[0_40px_80px_-50px_rgb(16_43_44/0.35)] sm:p-10 lg:p-12">
            <h2 className="display-sm text-forest">Request a quote</h2>
            <p className="mt-2 text-muted">We typically respond within one business day.</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="mt-10 rounded-[1.5rem] border border-line p-6 sm:p-8">
            <p className="eyebrow text-copper-ink">What happens next</p>
            <ol className="mt-5 grid gap-5 sm:grid-cols-4">
              {processSteps.map((step, i) => (
                <li key={step.title}>
                  <span className="font-display text-2xl text-copper-ink">{String(i + 1).padStart(2, "0")}</span>
                  <span className="mt-1 block font-semibold text-forest">{step.title}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
