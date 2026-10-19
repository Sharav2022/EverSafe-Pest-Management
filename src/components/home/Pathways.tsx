import { Check } from "lucide-react";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";

export function Pathways() {
  return (
    <section className="section-y bg-white">
      <div className="shell">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <Eyebrow className="justify-center">Two pathways</Eyebrow>
          <h2 className="display-lg mt-6 text-forest">
            Built for the way your space is&nbsp;used.
          </h2>
        </div>

        <div className="mt-16 grid gap-16 lg:mt-24 lg:grid-cols-12 lg:gap-10">
          {/* Residential: warm, tall portrait composition. */}
          <article className="lg:col-span-6">
            <Photo
              name="livingRoomDog"
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="aspect-[4/3] rounded-[1.75rem] lg:aspect-[5/6]"
            />
            <div className="mt-9 max-w-lg" data-reveal>
              <p className="eyebrow text-copper-ink">For homes</p>
              <h3 className="display-md mt-4 text-forest">Comfort you don&rsquo;t have to think about.</h3>
              <p className="mt-5 leading-relaxed text-muted">
                Interior and exterior protection planned around children, pets
                and the rhythm of family life — with quarterly follow-ups so the
                seasons don&rsquo;t catch you off guard.
              </p>
              <ul className="mt-6 space-y-2.5">
                {["Free initial inspection", "Perimeter and interior treatment", "Minor exclusion to block entry points"].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-charcoal">
                    <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-copper" strokeWidth={2.25} />
                    {t}
                  </li>
                ))}
              </ul>
              <Button href="/services/residential-pest-control" variant="outline" className="mt-9">
                Residential pest control
              </Button>
            </div>
          </article>

          {/* Commercial: cooler, architectural, offset lower. */}
          <article className="flex flex-col lg:col-span-5 lg:col-start-8 lg:pt-40">
            <div className="max-w-lg lg:order-2 lg:mt-9" data-reveal>
              <p className="eyebrow text-copper-ink">For businesses</p>
              <h3 className="display-md mt-4 text-forest">Continuity, documented.</h3>
              <p className="mt-5 leading-relaxed text-muted">
                Integrated Pest Management programs for offices, restaurants,
                warehouses and retail — scheduled around your operating hours,
                with digital reports ready for audits.
              </p>
              <ul className="mt-6 space-y-2.5">
                {["Custom IPM plans", "After-hours and weekend scheduling", "Dedicated account technician"].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-charcoal">
                    <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-copper" strokeWidth={2.25} />
                    {t}
                  </li>
                ))}
              </ul>
              <Button href="/services/commercial-pest-control" variant="outline" className="mt-9">
                Commercial pest control
              </Button>
            </div>
            <Photo
              name="commercialTowers"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="order-first mb-9 aspect-[4/3] rounded-[1.75rem] lg:order-1 lg:mb-0 lg:aspect-[4/3]"
            />
          </article>
        </div>
      </div>
    </section>
  );
}
