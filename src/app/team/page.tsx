import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTag } from "@/components/ui/Badge";
import { TeamCard } from "@/components/team/TeamCard";
import { CTASection } from "@/components/home/CTASection";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the licensed and certified pest control technicians behind EverSafe Pest Management.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero title="Our Team" crumb="Our Team" />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTag
            eyebrow="Meet The Experts"
            title="Licensed technicians dedicated to your safety"
            tone="light"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <TeamCard key={member.slug} member={member} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
