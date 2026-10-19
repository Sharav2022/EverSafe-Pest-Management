import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/home/CTASection";
import { team } from "@/data/team";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the people behind Ever Safe Pest Management — leadership, field operations, technicians and customer success.",
  alternates: { canonical: "/team" },
};

// Leadership first, then field operations and customer-facing roles.
const roleOrder = [
  "Chief Executive Officer",
  "Field Operations Supervisor",
  "Lead Pest Control Technician",
  "Customer Success Manager",
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

const tileTones = [
  "bg-evergreen text-sage",
  "bg-sage text-forest",
  "bg-ivory-300 text-forest",
  "bg-forest text-copper-light",
];

export default function TeamPage() {
  const members = [...team].sort(
    (a, b) => roleOrder.indexOf(a.role) - roleOrder.indexOf(b.role)
  );

  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="The people behind every visit."
        intro="From the first phone call to the follow-up inspection, these are the people responsible for how Ever Safe works."
        crumbs={[{ label: "Our Team" }]}
      />

      <section className="section-y bg-ivory">
        <div className="shell">
          <ul className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {members.map((member, i) => (
              <li
                key={member.slug}
                id={member.slug}
                data-reveal
                style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
                className={cn("scroll-mt-32", i % 2 === 1 && "lg:mt-20")}
              >
                <article aria-labelledby={`${member.slug}-name`}>
                  {/* Typographic portrait: no stand-in faces for real people. */}
                  <div
                    aria-hidden="true"
                    className={cn(
                      "relative flex aspect-[4/5] items-end overflow-hidden rounded-[1.75rem] p-7",
                      tileTones[i % tileTones.length]
                    )}
                  >
                    <span className="numeral text-[7.5rem] leading-none">{initials(member.name)}</span>
                    <span className="absolute right-7 top-7 h-12 w-12 rounded-full border border-current opacity-40" />
                  </div>
                  <p className="eyebrow mt-7 text-copper-ink">{member.role}</p>
                  <h2 id={`${member.slug}-name`} className="display-sm mt-3 text-forest">
                    {member.name}
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted">{member.bio}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title="Questions before you book?"
        intro="Talk to the team directly. We'll explain what an inspection involves and what to expect next."
      />
    </>
  );
}
