import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { CTASection } from "@/components/home/CTASection";
import type { PhotoKey } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "The kinds of homes, workplaces and outdoor spaces Ever Safe Pest Management helps protect across residential and commercial properties.",
  alternates: { canonical: "/gallery" },
};

type Item = {
  photo: PhotoKey;
  caption: string;
  service: { label: string; href: string };
  aspect: string;
};

// Illustrative imagery grouped by property type. Not records of Ever Safe jobs.
const items: Item[] = [
  { photo: "residentialHome", caption: "Family homes", service: { label: "Residential pest control", href: "/services/residential-pest-control" }, aspect: "aspect-[4/5]" },
  { photo: "commercialOffice", caption: "Offices and shared workplaces", service: { label: "Commercial pest control", href: "/services/commercial-pest-control" }, aspect: "aspect-[4/3]" },
  { photo: "kitchenBright", caption: "Kitchens", service: { label: "Cockroach control", href: "/services/mosquito-cockroach-control" }, aspect: "aspect-square" },
  { photo: "termitePorchHome", caption: "Wood-framed and older homes", service: { label: "Termite control & prevention", href: "/services/termite-control" }, aspect: "aspect-[4/3]" },
  { photo: "bedroomCalm", caption: "Bedrooms", service: { label: "Bed bug treatment", href: "/services/bed-bug-treatment" }, aspect: "aspect-[4/5]" },
  { photo: "restaurant", caption: "Restaurants and food service", service: { label: "Commercial pest control", href: "/services/commercial-pest-control" }, aspect: "aspect-[4/3]" },
  { photo: "backyardGarden", caption: "Gardens and yards", service: { label: "Mosquito control", href: "/services/mosquito-cockroach-control" }, aspect: "aspect-[4/5]" },
  { photo: "rodentFarmhouse", caption: "Houses heading into the cold months", service: { label: "Rodent control", href: "/services/rodent-control" }, aspect: "aspect-square" },
  { photo: "warehouse", caption: "Warehouses and storage", service: { label: "Commercial pest control", href: "/services/commercial-pest-control" }, aspect: "aspect-[4/3]" },
  { photo: "apartmentBuilding", caption: "Multi-unit residential buildings", service: { label: "Rodent control", href: "/services/rodent-control" }, aspect: "aspect-[4/5]" },
  { photo: "livingRoomDog", caption: "Homes shared with pets", service: { label: "Residential pest control", href: "/services/residential-pest-control" }, aspect: "aspect-[4/3]" },
  { photo: "cabinAutumn", caption: "Cottages and rural properties", service: { label: "Rodent control", href: "/services/rodent-control" }, aspect: "aspect-[4/3]" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="The spaces we help protect."
        intro="A visual guide to the homes, workplaces and outdoor spaces Ever Safe works with, and the service each one usually calls for."
        crumbs={[{ label: "Gallery" }]}
      >
        <p className="max-w-xl border-l-2 border-copper pl-4 text-sm leading-relaxed text-muted">
          These are illustrative photographs, not images of specific Ever Safe
          customers or completed jobs. Project photography will be added here
          as it becomes available.
        </p>
      </PageHero>

      <section className="section-y bg-ivory">
        <div className="shell">
          <ul className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {items.map((item, i) => (
              <li
                key={item.photo}
                // The first row paints immediately so it can be the LCP.
                data-reveal={i < 3 ? undefined : true}
                style={{ "--reveal-delay": `${(i % 3) * 90}ms` } as React.CSSProperties}
                className="mb-5 break-inside-avoid"
              >
                <figure className="group">
                  <Photo
                    name={item.photo}
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    preload={i < 2}
                    zoom
                    className={`${item.aspect} rounded-[1.25rem]`}
                  />
                  <figcaption className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-1 pb-3 pt-4">
                    <span className="font-semibold text-forest">{item.caption}</span>
                    <Link
                      href={item.service.href}
                      className="text-sm text-copper-ink underline decoration-copper/30 underline-offset-4 hover:decoration-copper-ink"
                    >
                      {item.service.label}
                    </Link>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  );
}
