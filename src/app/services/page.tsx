import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTag } from "@/components/ui/Badge";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { CTASection } from "@/components/home/CTASection";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Ever Safe Pest Management's residential, commercial, termite, rodent, bed bug, and mosquito control services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Our Services" crumb="Services" />

      <section className="bg-brand-dark py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTag
            eyebrow="What We Offer"
            title="Pest control services built around your property"
            description="Every plan starts with a free inspection so you only pay for the treatment your property actually needs."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps />
      <CTASection />
    </>
  );
}
