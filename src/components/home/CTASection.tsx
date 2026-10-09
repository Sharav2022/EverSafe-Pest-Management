import { Button } from "@/components/ui/Button";
import { PhoneCall } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-16">
      <div className="bg-noise-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
          Ready for a pest-free home or business?
        </h2>
        <p className="max-w-xl text-white/70">
          Get a free, no-obligation inspection and quote from a licensed
          Ever Safe technician today.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Button href="/contact-us" size="lg">
            Get Pest-Free Today
          </Button>
          <a
            href="tel:+14378339181"
            className="flex items-center gap-2 font-heading font-semibold text-white"
          >
            <PhoneCall className="h-5 w-5 text-brand-lime" />
            +1 437-833-9181
          </a>
        </div>
      </div>
    </section>
  );
}
