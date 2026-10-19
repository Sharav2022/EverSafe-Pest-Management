import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button, ArrowLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Photo } from "@/components/ui/Photo";
import { CompactServiceTile } from "@/components/services/ServiceTiles";
import { CTASection } from "@/components/home/CTASection";
import { getService, services } from "@/data/services";
import { siteConfig } from "@/lib/site-config";
import { photos } from "@/lib/photos";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${siteConfig.name}`,
      description: service.summary,
      images: [{ url: photos[service.photo].src.src, alt: photos[service.photo].alt }],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const index = services.indexOf(service);
  // Related: the next three programs, wrapping around the list.
  const related = [1, 2, 3].map((n) => services[(index + n) % services.length]);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    serviceType: service.title,
    url: `${siteConfig.url}/services/${service.slug}`,
    provider: { "@id": `${siteConfig.url}/#business` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* 1. Service-specific hero */}
      <section className="bg-ivory pt-8 sm:pt-10">
        <div className="shell">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: service.title }]} />
        </div>
        <div className="shell grid gap-12 pb-16 pt-10 lg:grid-cols-12 lg:items-center lg:gap-14 lg:pb-24 lg:pt-14">
          <div className="lg:col-span-6">
            <div data-rise>
              <Eyebrow>{service.audience}</Eyebrow>
              <h1 className="display-xl mt-6 text-forest">{service.title}</h1>
            </div>
            <p data-rise style={{ "--reveal-delay": "120ms" } as React.CSSProperties} className="lede mt-7 max-w-xl text-muted">
              {service.summary}
            </p>
            <div data-rise style={{ "--reveal-delay": "200ms" } as React.CSSProperties} className="mt-10 flex flex-col gap-4 xs:flex-row xs:flex-wrap xs:items-center">
              <Button href="/contact-us" size="lg">Request a Quote</Button>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex min-h-12 items-center gap-2.5 px-2 font-semibold text-forest underline decoration-line-strong underline-offset-[6px] hover:decoration-forest"
              >
                <Phone aria-hidden="true" className="h-4 w-4" />
                {siteConfig.phone}
              </a>
            </div>
          </div>
          <div className="relative lg:col-span-6">
            <Photo
              name={service.photo}
              preload
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[4/3] rounded-[2rem] lg:aspect-[5/6]"
            />
            <span className="absolute -bottom-6 left-6 flex h-16 w-16 items-center justify-center rounded-full bg-evergreen text-copper-light shadow-xl sm:left-10">
              <service.icon aria-hidden="true" className="h-7 w-7" strokeWidth={1.5} />
            </span>
          </div>
        </div>
      </section>

      {/* 2. Overview */}
      <section className="section-y bg-white">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-14">
          <div className="lg:col-span-6" data-reveal>
            <Eyebrow>Overview</Eyebrow>
            <h2 className="sr-only">Overview</h2>
            <p className="display-sm mt-6 text-forest">{service.description}</p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <Photo
              name={service.secondaryPhoto}
              sizes="(min-width: 1024px) 30vw, 100vw"
              className="aspect-[4/3] rounded-[1.5rem]"
            />
          </div>
        </div>
      </section>

      {/* 3. Situations + 4. Inclusions */}
      <section className="section-y bg-sage-100">
        <div className="shell grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <h2 className="display-md text-forest">Signs it&rsquo;s time to call</h2>
            <ol className="mt-10 border-t border-line">
              {service.situations.map((s, i) => (
                <li key={s} className="flex gap-5 border-b border-line py-5">
                  <span className="font-display text-xl text-copper-ink">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-charcoal">{s}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="rounded-[1.75rem] bg-white p-8 sm:p-12">
              <h2 className="display-md text-forest">What&rsquo;s included</h2>
              <ul className="mt-8 space-y-5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest text-ivory">
                      <Check aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    <span className="leading-relaxed text-charcoal">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 border-t border-line pt-8">
                <ArrowLink href="/pricing">See plans and pricing</ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Service process */}
      <section className="grain section-y relative overflow-hidden bg-evergreen text-ivory">
        <div className="shell">
          <div className="max-w-2xl" data-reveal>
            <Eyebrow tone="dark">How it works</Eyebrow>
            <h2 className="display-lg mt-6">Four steps, start to finish.</h2>
          </div>
          <ol className="mt-16 grid gap-px overflow-hidden rounded-[1.5rem] bg-ivory/12 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <li
                key={step.title}
                data-reveal
                style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
                className="flex flex-col bg-evergreen p-8 lg:min-h-72"
              >
                <span className="numeral text-6xl text-copper-light">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display-sm mt-auto pt-10">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-ivory/70">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 7. Related services */}
      <section className="section-y bg-ivory">
        <div className="shell">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="display-md text-forest">Related services</h2>
            <ArrowLink href="/services">All services</ArrowLink>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <li key={s.slug}>
                <CompactServiceTile service={s} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. Quote / contact */}
      <CTASection
        title={`Talk to us about ${service.title.toLowerCase()}.`}
        intro="Describe what you're seeing and we'll arrange an inspection and a clear recommendation."
      />
    </>
  );
}
