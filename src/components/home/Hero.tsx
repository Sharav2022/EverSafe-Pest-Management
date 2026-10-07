import { Play } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { HeroCarousel } from "@/components/home/HeroCarousel";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-dark pb-16 pt-16 sm:pt-20">
      <div className="bg-noise-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute right-[-10%] top-10 h-72 w-72 rounded-full bg-brand-lime/10 blur-3xl" />
      <div className="pointer-events-none absolute left-[-10%] bottom-0 h-72 w-72 rounded-full bg-brand-lime/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Badge className="mx-auto">Safe &amp; Reliable Pest Control Services</Badge>

        <h1 className="font-heading mt-6 text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
          Complete Pest Control Solutions for Your Home
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          We provide professional pest control solutions using advanced,
          eco-friendly methods to eliminate pests safely and effectively. Our
          certified experts ensure long-lasting protection for your home and
          business.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <Button href="/contact-us" size="lg">
            Get Pest-Free Today
          </Button>

          <a href="#watch-video" className="group flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-brand-lime transition group-hover:bg-brand-lime group-hover:text-brand-ink">
              <Play className="ml-0.5 h-4 w-4" fill="currentColor" />
            </span>
            <span className="font-heading font-semibold text-white">
              Watch Our Video
            </span>
          </a>
        </div>
      </div>

      <HeroCarousel />
    </section>
  );
}
