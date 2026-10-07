import { SectionTag } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TeamCard } from "@/components/team/TeamCard";
import { team } from "@/data/team";

export function TeamPreview() {
  return (
    <section className="bg-brand-dark py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTag
          eyebrow="Our Experts"
          title="Dedicated experts delivering reliable pest control"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <TeamCard key={member.slug} member={member} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/team" variant="outline" size="lg">
            Meet The Full Team
          </Button>
        </div>
      </div>
    </section>
  );
}
