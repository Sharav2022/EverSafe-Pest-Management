import type { Metadata } from "next";
import { Leaf, ShieldCheck, Users2, Target } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTag } from "@/components/ui/Badge";
import { OurStory } from "@/components/home/OurStory";
import { TrustStats } from "@/components/home/TrustStats";
import { TeamPreview } from "@/components/home/TeamPreview";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about EverSafe Pest Management's mission, values, and the certified team protecting homes and businesses.",
};

const values = [
  {
    icon: Leaf,
    title: "Sustainability First",
    description: "Eco-friendly products and methods that protect people, pets, and the planet.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Compliance",
    description: "Licensed, insured, and trained to the highest industry safety standards.",
  },
  {
    icon: Users2,
    title: "People-Centered",
    description: "Clear communication and respectful service in every home and business we visit.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "We don't stop at symptoms — we solve the root cause of every infestation.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <PageHero title="About Us" crumb="About Us" />

      <OurStory />

      <section className="bg-brand-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTag
            eyebrow="Our Values"
            title="What guides every treatment we perform"
            tone="light"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-brand-ink/10 bg-white p-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-dark text-brand-lime">
                  <value.icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="font-heading mt-5 text-lg font-bold text-brand-ink">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-ink/60">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustStats />
      <TeamPreview />
      <CTASection />
    </>
  );
}
