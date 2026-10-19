import Link from "next/link";
import { BrandLockup } from "@/components/ui/BrandMark";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { footerNav } from "@/data/nav";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();
  const { address } = siteConfig;

  return (
    <footer className="grain relative overflow-hidden bg-evergreen text-ivory">
      <div className="shell pb-10 pt-20 sm:pt-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <BrandLockup tone="light" />
            <p className="display-md mt-10 max-w-2xl text-ivory">
              Careful inspection, clear advice and treatment that respects the
              spaces you live and work in.
            </p>
          </div>
          <div className="lg:col-span-5 lg:justify-self-end">
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-ivory/12 pt-12 sm:grid-cols-2 lg:grid-cols-12">
          {footerNav.map((group) => (
            <div key={group.heading} className="lg:col-span-3">
              <h2 className="eyebrow text-sage/75">{group.heading}</h2>
              <ul className="mt-5 space-y-1">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-9 items-center text-[0.9375rem] text-ivory/80 transition-colors hover:text-ivory"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="sm:col-span-2 lg:col-span-6 lg:pl-10">
            <h2 className="eyebrow text-sage/75">Contact</h2>
            <div className="mt-5 grid gap-8 sm:grid-cols-2">
              <div className="space-y-3">
                <a
                  href={siteConfig.phoneHref}
                  className="block font-display text-3xl text-ivory transition-colors hover:text-copper-light"
                >
                  {siteConfig.phone}
                </a>
                <a
                  href={siteConfig.emailHref}
                  className="block text-ivory/80 underline decoration-ivory/25 underline-offset-4 transition-colors hover:text-ivory"
                >
                  {siteConfig.email}
                </a>
                <a
                  href={siteConfig.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block not-italic leading-relaxed text-ivory/70 transition-colors hover:text-ivory"
                >
                  {address.streetAddress}
                  <br />
                  {address.addressLocality}, {address.addressRegion} {address.postalCode}
                  <span className="sr-only"> (opens Google Maps in a new tab)</span>
                </a>
              </div>
              <dl className="space-y-3 text-sm">
                {siteConfig.hours.map((h) => (
                  <div key={h.days}>
                    <dt className="text-ivory/55">{h.days}</dt>
                    <dd className="mt-0.5 text-ivory/85">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-ivory/12 pt-8 text-sm text-ivory/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Mississauga, Ontario, Canada</p>
        </div>
      </div>
    </footer>
  );
}
