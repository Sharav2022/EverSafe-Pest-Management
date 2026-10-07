import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/services/ServiceCard";
import { CTASection } from "@/components/home/CTASection";
import { services } from "@/data/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero title={service.title} crumb={service.title} />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-2">
            <PhotoPlaceholder
              variant={service.image}
              className="aspect-video w-full rounded-3xl"
              iconClassName="h-16 w-16"
            />

            <h2 className="font-heading mt-8 text-2xl font-bold text-brand-ink">
              Overview
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-ink/65">
              {service.description}
            </p>

            <h2 className="font-heading mt-10 text-2xl font-bold text-brand-ink">
              What&rsquo;s Included
            </h2>
            <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 rounded-2xl border border-brand-ink/10 p-4 text-sm text-brand-ink/70"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-lime-dark" />
                  {feature}
                </li>
              ))}
            </ul>

            <h2 className="font-heading mt-10 text-2xl font-bold text-brand-ink">
              How It Works
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {service.process.map((step, i) => (
                <div key={step.title} className="rounded-2xl bg-brand-cream p-5">
                  <span className="font-heading text-3xl font-extrabold text-brand-ink/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading mt-2 font-bold text-brand-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-brand-ink/60">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl bg-brand-dark p-7 text-white">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-lime/10 text-brand-lime">
                <service.icon className="h-7 w-7" strokeWidth={1.75} />
              </span>
              <h3 className="font-heading mt-5 text-xl font-bold">
                Need this service?
              </h3>
              <p className="mt-2 text-sm text-white/60">
                Get a free inspection and a same-week appointment.
              </p>
              <Button href="/contact-us" className="mt-6 w-full justify-center">
                Request a Quote
              </Button>
            </div>

            <div className="rounded-3xl border border-brand-ink/10 p-6">
              <h3 className="font-heading font-bold text-brand-ink">
                All Services
              </h3>
              <ul className="mt-4 space-y-2">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                        s.slug === slug
                          ? "bg-brand-lime/15 text-brand-lime-dark"
                          : "text-brand-ink/70 hover:bg-brand-cream"
                      }`}
                    >
                      {s.title}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-brand-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-brand-ink">
            Related Services
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <div key={s.slug} className="rounded-3xl bg-brand-dark">
                <ServiceCard service={s} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
