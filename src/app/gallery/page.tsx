import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "See EverSafe Pest Management technicians at work across residential and commercial properties.",
};

const gallery = [
  { variant: "technician-yard", span: "sm:row-span-2" },
  { variant: "technician-house", span: "" },
  { variant: "technician-indoor", span: "" },
  { variant: "technician-commercial", span: "sm:row-span-2" },
  { variant: "technician-exterior", span: "" },
  { variant: "technician-spray", span: "" },
  { variant: "blog-eco", span: "" },
  { variant: "blog-termite", span: "sm:row-span-2" },
  { variant: "team-1", span: "" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero title="Gallery" crumb="Gallery" />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:auto-rows-[160px]">
            {gallery.map((item, i) => (
              <PhotoPlaceholder
                key={i}
                variant={item.variant}
                className={`h-40 w-full rounded-2xl sm:h-full ${item.span}`}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
