import { SectionTag } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/services/ServiceCard";
import { services } from "@/data/services";

export function ServicesShowcase() {
  return (
    <section className="bg-brand-dark py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTag
          eyebrow="Our Services"
          title="Core services that set our pest control apart"
          description="From homes to warehouses, every treatment plan is tailored to your property and the pests you're facing."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/services" variant="outline" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
