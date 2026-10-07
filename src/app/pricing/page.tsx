import type { Metadata } from "next";
import { HelpCircle } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTag } from "@/components/ui/Badge";
import { PricingCard } from "@/components/pricing/PricingCard";
import { CTASection } from "@/components/home/CTASection";
import { pricingPlans } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Pricing Plans",
  description:
    "Transparent, flexible pricing plans for residential and commercial pest control from EverSafe Pest Management.",
};

const faqs = [
  {
    question: "Is there a contract or commitment?",
    answer:
      "No long-term contracts. Monthly plans can be paused or cancelled anytime after the initial service.",
  },
  {
    question: "What's included in the free inspection?",
    answer:
      "A full interior and exterior walkthrough, pest identification, and a tailored treatment recommendation.",
  },
  {
    question: "Do you guarantee your work?",
    answer:
      "Yes — every plan includes a re-service guarantee if pests return between scheduled visits.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero title="Pricing Plans" crumb="Pricing" />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTag
            eyebrow="Pricing"
            title="Customized pricing plans for your pest control needs"
            tone="light"
            description="No hidden fees. Every plan includes a satisfaction guarantee and free re-service between visits."
          />
          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-cream py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionTag eyebrow="FAQs" title="Common pricing questions" tone="light" />
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="flex gap-4 rounded-2xl border border-brand-ink/10 bg-white p-6"
              >
                <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-lime-dark" />
                <div>
                  <h3 className="font-heading font-bold text-brand-ink">
                    {faq.question}
                  </h3>
                  <p className="mt-1 text-sm text-brand-ink/60">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
