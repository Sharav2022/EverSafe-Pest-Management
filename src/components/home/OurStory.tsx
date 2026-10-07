import { Play, ShieldCheck } from "lucide-react";
import { SectionTag } from "@/components/ui/Badge";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";

export function OurStory() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <PhotoPlaceholder
            variant="technician-house"
            className="aspect-[4/3] w-full rounded-3xl"
            iconClassName="h-16 w-16"
          />
          <button
            aria-label="Play video"
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-lime text-brand-ink shadow-lg transition hover:scale-105"
          >
            <Play className="ml-0.5 h-6 w-6" fill="currentColor" />
          </button>
          <div className="absolute -bottom-6 -right-4 flex items-center gap-3 rounded-2xl border border-brand-ink/10 bg-white px-5 py-4 shadow-xl sm:right-6">
            <ShieldCheck className="h-8 w-8 text-brand-lime-dark" />
            <div>
              <p className="font-heading text-lg font-extrabold text-brand-ink">
                25+ Years
              </p>
              <p className="text-xs text-brand-ink/50">Industry Experience</p>
            </div>
          </div>
        </div>

        <div>
          <SectionTag
            eyebrow="Our Story"
            title="Our story of building safe and reliable pest control solutions"
            tone="light"
            align="left"
          />
          <p className="mt-6 text-sm leading-relaxed text-brand-ink/65">
            EverSafe started with a simple idea: pest control should protect
            your family and property without compromising on safety. What
            began as a two-person team has grown into a certified network of
            technicians serving thousands of homes and businesses.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-brand-ink/65">
            Today, we combine eco-friendly products, ongoing technician
            training, and transparent reporting to make pest control
            straightforward and stress-free.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <p className="font-heading text-3xl font-extrabold text-brand-ink">
                98%
              </p>
              <p className="mt-1 text-sm text-brand-ink/55">
                Pest Elimination Rate
              </p>
            </div>
            <div>
              <p className="font-heading text-3xl font-extrabold text-brand-ink">
                5,000+
              </p>
              <p className="mt-1 text-sm text-brand-ink/55">
                Homes &amp; Businesses Served
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
