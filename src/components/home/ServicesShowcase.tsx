import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowLink } from "@/components/ui/Button";
import { CompactServiceTile, FeatureServiceTile } from "@/components/services/ServiceTiles";
import { services, serviceGroups } from "@/data/services";

export function ServicesShowcase() {
  const property = services.filter((s) => s.group === "property");
  const specialist = services.filter((s) => s.group === "specialist");
  const [residential, commercial] = property;

  return (
    <section className="section-y bg-ivory">
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Services"
            title="One careful standard, six focused programs."
            intro="Start with the kind of property you need protected, or go straight to the pest you're dealing with."
          />
          <ArrowLink href="/services" className="shrink-0 lg:mb-3">
            View all services
          </ArrowLink>
        </div>

        <div className="mt-14 grid gap-4 lg:mt-20 lg:grid-cols-12 lg:gap-5">
          <FeatureServiceTile
            service={residential}
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="min-h-[28rem] lg:col-span-7 lg:min-h-[36rem]"
          />
          <FeatureServiceTile
            service={commercial}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="min-h-[28rem] lg:col-span-5 lg:min-h-[36rem] lg:translate-y-12"
          />
        </div>

        <div className="mt-16 lg:mt-28">
          <div className="flex flex-col gap-2 border-t border-line pt-8 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="title-md text-forest">{serviceGroups.specialist.label}</h3>
            <p className="text-muted">{serviceGroups.specialist.description}</p>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {specialist.map((service, i) => (
              <li key={service.slug} data-reveal style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}>
                <CompactServiceTile service={service} index={i + 3} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
