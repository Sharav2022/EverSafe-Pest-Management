import { SectionTag } from "@/components/ui/Badge";
import { PricingCard } from "@/components/pricing/PricingCard";
import { pricingPlans } from "@/data/pricing";

export function PricingPreview() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTag
          eyebrow="Pricing"
          title="Customized pricing plans for your pest control needs"
          tone="light"
          description="No hidden fees. Cancel or change plans anytime — every plan includes a satisfaction guarantee."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
