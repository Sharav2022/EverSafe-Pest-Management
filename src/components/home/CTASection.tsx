import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Photo } from "@/components/ui/Photo";
import { siteConfig } from "@/lib/site-config";

/** Signature closing invitation used at the end of most pages. */
export function CTASection({
  title = "A safer space starts with the right approach.",
  intro = "Tell us what you're seeing. We'll arrange an inspection and recommend a plan that fits your property.",
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section className="bg-ivory px-[max(0.5rem,calc(var(--gutter)/2))] pb-[max(0.5rem,calc(var(--gutter)/2))]">
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-evergreen text-ivory">
        <Photo
          name="forestHouse"
          alt=""
          sizes="100vw"
          className="!absolute inset-0 -z-10 h-full w-full"
          imgClassName="opacity-45"
        />
        <span aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-evergreen via-evergreen/85 to-evergreen/30" />

        <div className="shell grid gap-12 py-24 sm:py-32 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8" data-reveal>
            <Eyebrow tone="dark">Request a quote</Eyebrow>
            <h2 className="display-lg mt-6 max-w-3xl">{title}</h2>
            <p className="lede mt-6 max-w-xl text-ivory/80">{intro}</p>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-4 lg:items-end" data-reveal>
            <Button href="/contact-us" variant="light" size="lg" className="w-full sm:w-auto">
              Request a Quote
            </Button>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex min-h-12 items-center justify-center gap-2.5 font-semibold text-ivory underline decoration-ivory/30 underline-offset-[6px] hover:decoration-ivory"
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              Or call {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
