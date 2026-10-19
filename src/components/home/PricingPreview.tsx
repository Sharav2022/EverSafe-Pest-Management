import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowLink } from "@/components/ui/Button";
import { cadenceLabel } from "@/components/pricing/PricingCard";
import { pricingPlans } from "@/data/pricing";

export function PricingPreview() {
  return (
    <section className="section-y bg-white">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="Pricing"
            size="md"
            title="Transparent plans, from a single visit to year-round care."
          />
          <ArrowLink href="/pricing" className="mt-9">
            Compare plans in full
          </ArrowLink>
        </div>

        <ul className="border-t border-line lg:col-span-7 lg:col-start-6">
          {pricingPlans.map((plan) => (
            <li key={plan.name} className="border-b border-line">
              <Link
                href="/contact-us"
                className="group grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-2 py-7 sm:grid-cols-[12.5rem_1fr_auto_auto] sm:py-9"
              >
                <span className="flex items-center gap-3">
                  <span className="display-sm text-forest">{plan.name}</span>
                  {plan.popular && (
                    <span className="rounded-full bg-sage px-2.5 py-1 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-forest">
                      Popular
                    </span>
                  )}
                </span>
                <span className="col-span-2 row-start-2 text-[0.9375rem] text-muted sm:col-span-1 sm:row-start-auto">
                  {plan.description}
                </span>
                <span className="col-start-2 row-start-1 flex items-baseline gap-1.5 justify-self-end sm:col-start-auto sm:row-start-auto">
                  <span className="numeral text-[2.75rem] text-forest">{plan.price}</span>
                  <span className="text-sm font-semibold text-muted">{cadenceLabel(plan.cadence)}</span>
                </span>
                <span className="hidden h-11 w-11 items-center justify-center rounded-full border border-line-strong text-forest transition-colors group-hover:border-forest group-hover:bg-forest group-hover:text-ivory sm:flex">
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </span>
                <span className="sr-only">Choose {plan.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
