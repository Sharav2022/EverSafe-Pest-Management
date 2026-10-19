import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Disclosure } from "@/components/ui/Disclosure";
import { PricingCard } from "@/components/pricing/PricingCard";
import { CTASection } from "@/components/home/CTASection";
import { pricingPlans } from "@/data/pricing";
import { pricingFaqs } from "@/data/faqs";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Pricing Plans",
  description:
    "Transparent, flexible pricing plans for residential and commercial pest control from Ever Safe Pest Management.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Clear plans for every level of protection."
        intro="No hidden fees. Start with a single targeted visit, or choose ongoing protection for the whole property. Every plan includes a satisfaction guarantee and free re-service between visits."
        crumbs={[{ label: "Pricing" }]}
      />

      <section className="section-y bg-ivory">
        <div className="shell">
          <h2 className="sr-only">Plans</h2>
          <ul className="grid items-stretch gap-6 lg:grid-cols-3 lg:gap-5 lg:py-6">
            {pricingPlans.map((plan, i) => (
              <li key={plan.name} data-reveal style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}>
                <PricingCard plan={plan} index={i} />
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-14 max-w-2xl text-center text-sm leading-relaxed text-muted">
            Not sure which plan fits your property?{" "}
            <a href={siteConfig.phoneHref} className="font-semibold text-forest underline underline-offset-4">
              Call {siteConfig.phone}
            </a>
            .
          </p>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4" data-reveal>
            <Eyebrow>FAQs</Eyebrow>
            <h2 className="display-md mt-6 text-forest">Common pricing questions</h2>
            <a
              href={siteConfig.phoneHref}
              className="mt-8 inline-flex min-h-12 items-center gap-3 font-semibold text-forest underline decoration-line-strong underline-offset-[6px]"
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              Ask us directly
            </a>
          </div>
          <div className="border-t border-line lg:col-span-7 lg:col-start-6">
            {pricingFaqs.map((faq) => (
              <Disclosure key={faq.question} question={faq.question}>
                {faq.answer}
              </Disclosure>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
