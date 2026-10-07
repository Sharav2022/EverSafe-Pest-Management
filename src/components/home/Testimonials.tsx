"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote } from "lucide-react";
import { SectionTag } from "@/components/ui/Badge";
import { StarRating } from "@/components/ui/StarRating";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selected, setSelected] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="bg-brand-dark py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTag
          eyebrow="Testimonials"
          title="What our customers say about pest control"
        />

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t) => (
                <div key={t.name} className="min-w-0 flex-[0_0_100%] px-2">
                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
                    <Quote className="h-8 w-8 text-brand-lime/60" />
                    <p className="mt-4 text-lg leading-relaxed text-white/80">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="mt-6 flex items-center justify-between">
                      <div>
                        <p className="font-heading font-bold text-white">
                          {t.name}
                        </p>
                        <p className="text-sm text-white/50">{t.role}</p>
                      </div>
                      <StarRating rating={t.rating} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => scrollTo(i)}
                className={`h-2 rounded-full transition-all ${
                  selected === i ? "w-8 bg-brand-lime" : "w-2 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
