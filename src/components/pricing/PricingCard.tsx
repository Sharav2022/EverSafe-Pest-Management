import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { PricingPlan } from "@/data/pricing";
import { cn } from "@/lib/utils";

export function cadenceLabel(cadence: string) {
  return cadence.replace("/", "per").trim();
}

export function PricingCard({ plan, index }: { plan: PricingPlan; index: number }) {
  const featured = Boolean(plan.popular);
  return (
    <article
      aria-labelledby={`plan-${plan.name}`}
      className={cn(
        "relative flex h-full flex-col rounded-[1.75rem] p-8 sm:p-10",
        featured
          ? "bg-evergreen text-ivory shadow-[0_40px_80px_-40px_rgb(11_32_33/0.7)] lg:-my-6 lg:py-16"
          : "border border-line bg-white text-charcoal"
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span className={cn("font-display text-xl", featured ? "text-copper-light" : "text-copper-ink")}>
          {String(index + 1).padStart(2, "0")}
        </span>
        {featured && (
          <span className="rounded-full bg-ivory/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-sage">
            Most popular
          </span>
        )}
      </div>

      <h3
        id={`plan-${plan.name}`}
        className={cn("display-sm mt-6", featured ? "text-ivory" : "text-forest")}
      >
        {plan.name}
      </h3>
      <p className={cn("mt-3 leading-relaxed", featured ? "text-ivory/75" : "text-muted")}>
        {plan.description}
      </p>

      <p className={cn("mt-8 flex items-baseline gap-2 border-y py-6", featured ? "border-ivory/15" : "border-line")}>
        <span className={cn("numeral text-[4rem]", featured ? "text-ivory" : "text-forest")}>
          {plan.price}
        </span>
        <span className={cn("text-[0.9375rem] font-semibold", featured ? "text-ivory/75" : "text-muted")}>
          {cadenceLabel(plan.cadence)}
        </span>
      </p>

      <ul className="mt-8 flex-1 space-y-3.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 leading-snug">
            <Check
              aria-hidden="true"
              className={cn("mt-0.5 h-4 w-4 shrink-0", featured ? "text-copper-light" : "text-copper")}
              strokeWidth={2.25}
            />
            <span className={featured ? "text-ivory/90" : "text-charcoal"}>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        href="/contact-us"
        variant={featured ? "light" : "outline"}
        size="lg"
        className="mt-10 w-full"
      >
        Choose {plan.name}
      </Button>
    </article>
  );
}
