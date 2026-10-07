import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import type { TeamMember } from "@/data/team";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-brand-ink/10 bg-white transition hover:shadow-xl">
      <PhotoPlaceholder variant={member.image} className="h-56 w-full" />
      <div className="p-6 text-center">
        <h3 className="font-heading text-lg font-bold text-brand-ink">
          {member.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-brand-lime-dark">
          {member.role}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-brand-ink/60">
          {member.bio}
        </p>
      </div>
    </div>
  );
}
