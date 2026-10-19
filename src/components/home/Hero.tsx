import { Phone, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Photo } from "@/components/ui/Photo";
import { services } from "@/data/services";
import { pricingPlans } from "@/data/pricing";
import { siteConfig } from "@/lib/site-config";

const steps = ["Inspect", "Plan", "Treat", "Protect"];

export function Hero() {
  const lowestPlan = pricingPlans[0];
  const facts = [
    { value: "Homes & businesses", label: "Residential and commercial programs" },
    { value: `${services.length} programs`, label: "From ants and spiders to termites" },
    { value: `From ${lowestPlan.price}`, label: `${lowestPlan.name} plan, ${lowestPlan.cadence.replace("/", "per").trim()}` },
  ];

  return (
    <section className="relative overflow-hidden bg-ivory">
      <div className="shell grid gap-12 pb-16 pt-10 sm:pt-14 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-16">
        <div className="relative z-10 flex flex-col justify-center lg:col-span-6 lg:pr-6">
          <div data-rise>
            <Eyebrow>Pest management · Mississauga, Ontario</Eyebrow>
            <h1 className="display-xl mt-7 text-forest">
              Protect the spaces that matter&nbsp;most.
            </h1>
          </div>
          <p
            data-rise
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            className="lede mt-7 max-w-xl text-muted"
          >
            Thoughtful pest management for homes and businesses — starting with
            a careful inspection, followed by a plan that fits your property and
            the people in it.
          </p>

          <div
            data-rise
            style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
            className="mt-10 flex flex-col gap-3 xs:flex-row xs:flex-wrap"
          >
            <Button href="/contact-us" size="lg">
              Request a Quote
            </Button>
            <Button href="/services" size="lg" variant="outline" arrow={false}>
              Explore Our Services
            </Button>
          </div>

          <div
            data-rise
            style={{ "--reveal-delay": "260ms" } as React.CSSProperties}
            className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-[0.9375rem]"
          >
            <a
              href={siteConfig.phoneHref}
              className="inline-flex min-h-11 items-center gap-2.5 font-semibold text-forest underline decoration-line-strong underline-offset-[6px] hover:decoration-forest"
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              {siteConfig.phone}
            </a>
            <a
              href="#watch-video"
              className="group inline-flex min-h-11 items-center gap-3 font-semibold text-charcoal/80 hover:text-forest"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line-strong transition-colors group-hover:border-forest group-hover:bg-forest group-hover:text-ivory">
                <Play aria-hidden="true" className="ml-0.5 h-3.5 w-3.5" fill="currentColor" />
              </span>
              Watch our film
            </a>
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative lg:-mr-[max(var(--gutter),calc((100vw-84rem)/2))]">
            <Photo
              name="heroHome"
              preload
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="aspect-[4/5] w-full rounded-[2rem] xs:aspect-[5/4] lg:aspect-auto lg:h-[min(44rem,calc(100svh-11rem))] lg:min-h-[34rem] lg:rounded-r-none"
            />
          </div>

          {/* Process card layered over the photograph. */}
          <div className="relative z-10 -mt-24 ml-4 mr-4 rounded-[1.5rem] bg-evergreen p-6 text-ivory shadow-[0_30px_60px_-30px_rgb(11_32_33/0.8)] xs:ml-auto xs:mr-6 xs:w-[24rem] lg:absolute lg:-left-16 lg:bottom-10 lg:mt-0 lg:mr-0">
            <p className="eyebrow text-copper-light">Every visit, in order</p>
            <ol className="mt-5 grid grid-cols-4 gap-3">
              {steps.map((step, i) => (
                <li key={step} className="border-t border-ivory/20 pt-3">
                  <span className="block font-display text-2xl leading-none text-sage">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-2 block text-[0.8125rem] font-semibold">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="shell">
        <ul className="grid border-t border-line sm:grid-cols-3">
          {facts.map((fact, i) => (
            <li
              key={fact.value}
              className="border-b border-line py-6 sm:border-b-0 sm:py-8 sm:pr-8 [&:not(:first-child)]:sm:border-l [&:not(:first-child)]:sm:pl-8"
              data-reveal
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
            >
              <span className="block font-display text-3xl text-forest">{fact.value}</span>
              <span className="mt-1 block text-sm text-muted">{fact.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
