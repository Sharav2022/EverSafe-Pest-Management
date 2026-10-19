import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { CTASection } from "@/components/home/CTASection";
import { services, serviceGroups, type ServiceGroup } from "@/data/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Ever Safe Pest Management's residential, commercial, termite, rodent, bed bug, and mosquito & cockroach control services.",
  alternates: { canonical: "/services" },
};

const groups: ServiceGroup[] = ["property", "specialist"];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Pest management, organised around your property."
        intro="Every program starts with an inspection, so you only pay for the treatment your property actually needs. Choose by the kind of space you're protecting, or by the pest you're facing."
        crumbs={[{ label: "Services" }]}
      >
        <nav aria-label="Services on this page">
          <ul className="flex flex-wrap gap-2">
            {services.map((s) => (
              <li key={s.slug}>
                <a
                  href={`#${s.slug}`}
                  className="inline-flex min-h-10 items-center rounded-full border border-line-strong px-4 text-sm font-semibold text-forest transition-colors hover:border-forest hover:bg-forest hover:text-ivory"
                >
                  {s.shortTitle}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      {groups.map((group) => {
        const list = services.filter((s) => s.group === group);
        return (
          <section key={group} aria-labelledby={`group-${group}`} className={cn("section-y", group === "property" ? "bg-ivory" : "bg-white")}>
            <div className="shell">
              <div className="flex flex-col gap-3 border-b border-line pb-8 sm:flex-row sm:items-end sm:justify-between">
                <h2 id={`group-${group}`} className="display-md text-forest">
                  {serviceGroups[group].label}
                </h2>
                <p className="max-w-md text-muted">{serviceGroups[group].description}</p>
              </div>

              <div className="divide-y divide-line">
                {list.map((service) => {
                  const index = services.indexOf(service);
                  const flip = index % 2 === 1;
                  return (
                    <article
                      key={service.slug}
                      id={service.slug}
                      aria-labelledby={`${service.slug}-title`}
                      className="grid scroll-mt-32 gap-10 py-14 lg:grid-cols-12 lg:items-center lg:gap-14 lg:py-20"
                    >
                      <Link
                        href={`/services/${service.slug}`}
                        tabIndex={-1}
                        aria-hidden="true"
                        className={cn("group block lg:col-span-6", flip && "lg:order-2")}
                      >
                        <Photo
                          name={service.photo}
                          alt=""
                          sizes="(min-width: 1024px) 48vw, 100vw"
                          zoom
                          className="aspect-[4/3] rounded-[1.75rem] lg:aspect-[5/4]"
                        />
                      </Link>
                      <div className={cn("lg:col-span-6", flip ? "lg:order-1 lg:pr-6" : "lg:pl-6")} data-reveal>
                        <div className="flex items-center gap-4">
                          <span className="font-display text-2xl text-copper">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="eyebrow text-muted">{service.audience}</span>
                        </div>
                        <h3 id={`${service.slug}-title`} className="display-md mt-5 text-forest">
                          {service.title}
                        </h3>
                        <p className="mt-5 leading-relaxed text-muted">{service.summary}</p>

                        <p className="mt-8 text-sm font-semibold text-charcoal">Common reasons to call</p>
                        <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                          {service.situations.slice(0, 4).map((s) => (
                            <li key={s} className="flex items-start gap-2.5 text-[0.9375rem] text-muted">
                              <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-copper" />
                              {s}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-10 flex flex-wrap gap-3">
                          <Button href={`/services/${service.slug}`}>
                            <span>
                              View service<span className="sr-only">: {service.title}</span>
                            </span>
                          </Button>
                          <Button href="/contact-us" variant="outline" arrow={false}>
                            Request a Quote
                          </Button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      <ProcessSteps tone="sage" />
      <CTASection />
    </>
  );
}
