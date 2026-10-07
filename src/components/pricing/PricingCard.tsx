import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import type { PricingPlan } from "@/data/pricing";

export function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-3xl border p-8",
        plan.popular
          ? "border-brand-lime bg-brand-dark text-white shadow-2xl shadow-brand-lime/10"
          : "border-brand-ink/10 bg-white text-brand-ink"
      )}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-lime px-4 py-1 font-heading text-xs font-bold text-brand-ink">
          Most Popular
        </span>
      )}

      <h3 className="font-heading text-xl font-bold">{plan.name}</h3>
      <p
        className={cn(
          "mt-2 text-sm",
          plan.popular ? "text-white/60" : "text-brand-ink/60"
        )}
      >
        {plan.description}
      </p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-heading text-4xl font-extrabold">
          {plan.price}
        </span>
        <span
          className={cn(
            "text-sm",
            plan.popular ? "text-white/50" : "text-brand-ink/50"
          )}
        >
          {plan.cadence}
        </span>
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-lime" />
            <span className={plan.popular ? "text-white/80" : "text-brand-ink/75"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        href="/contact-us"
        variant={plan.popular ? "primary" : "outline"}
        className={cn(
          "mt-8 w-full justify-center",
          !plan.popular && "border-brand-ink/20 text-brand-ink hover:bg-brand-ink/5"
        )}
      >
        Choose {plan.name}
      </Button>
    </div>
  );
}
