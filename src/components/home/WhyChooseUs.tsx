import { Leaf, ShieldCheck, Clock3, Wallet } from "lucide-react";
import { SectionTag } from "@/components/ui/Badge";
import { StarRating } from "@/components/ui/StarRating";

const reasons = [
  {
    icon: Leaf,
    title: "Eco-Friendly Treatments",
    description:
      "Plant-derived and EPA-registered products that are tough on pests, gentle on family and pets.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Certified",
    description:
      "Every technician is background-checked, licensed, and continually trained on the latest methods.",
  },
  {
    icon: Clock3,
    title: "Fast, Flexible Scheduling",
    description:
      "Same-week appointments and 24/7 emergency callouts for urgent infestations.",
  },
  {
    icon: Wallet,
    title: "Transparent Pricing",
    description:
      "Upfront quotes with no hidden fees, plus flexible one-time and recurring plans.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-end">
          <SectionTag
            eyebrow="Why Choose Us"
            title="Why customers prefer our pest control solutions"
            tone="light"
            align="left"
          />
          <div className="flex items-center gap-3 rounded-2xl border border-brand-ink/10 bg-brand-ink/[0.03] px-5 py-4">
            <StarRating />
            <div>
              <p className="font-heading text-sm font-bold text-brand-ink">
                5.0 / 5
              </p>
              <p className="text-xs text-brand-ink/50">Over 4,200 Reviews</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group rounded-3xl border border-brand-ink/10 p-7 transition hover:border-brand-lime hover:shadow-xl hover:shadow-brand-lime/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-dark text-brand-lime transition group-hover:bg-brand-lime group-hover:text-brand-ink">
                <reason.icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="font-heading mt-5 text-lg font-bold text-brand-ink">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink/60">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
