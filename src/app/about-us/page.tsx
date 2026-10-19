import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow, SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowLink, Button } from "@/components/ui/Button";
import { StoryVideo } from "@/components/home/StoryVideo";
import { CTASection } from "@/components/home/CTASection";
import { PropertyBlueprint, inspectionZones } from "@/components/about/PropertyBlueprint";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Ever Safe Pest Management's approach, values, and the team protecting homes and businesses from Mississauga, Ontario.",
  alternates: { canonical: "/about-us" },
};

const values = [
  {
    title: "Responsible treatment",
    description:
      "We choose the least disruptive approach that will work, and apply every product according to its label directions.",
  },
  {
    title: "Safety & compliance",
    description:
      "Careful, documented work — with written service reports and records commercial clients can show an inspector.",
  },
  {
    title: "People-centred",
    description:
      "Clear communication and respectful service in every home and business we visit.",
  },
  {
    title: "Root-cause focused",
    description:
      "We don't stop at symptoms — we look for what is causing the problem and how to keep it from coming back.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        eyebrow="About Ever Safe"
        title="A calmer, more careful approach to pest management."
        intro="Ever Safe Pest Management is based in Mississauga, Ontario, and works with homeowners and businesses who want pest problems handled properly — and explained clearly."
        crumbs={[{ label: "About Us" }]}
        photo="suburbStreet"
      />

      {/* Story */}
      <section className="section-y bg-white">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5" data-reveal>
            <Eyebrow>Our story</Eyebrow>
            <p className="display-md mt-6 text-forest">
              Ever Safe started with a simple idea: pest control should protect
              your family and property without compromising on safety.
            </p>
          </div>
          <div className="space-y-5 leading-relaxed text-muted lg:col-span-6 lg:col-start-7 lg:pt-14" data-reveal>
            <h2 className="sr-only">Our story</h2>
            <p className="lede text-charcoal">
              That idea still shapes every visit. We combine careful inspection,
              targeted treatment and practical prevention, and we report
              clearly on what we found and what we did.
            </p>
            <p>
              Most pest problems have a cause you can do something about — an
              unsealed gap, a moisture problem, a change in season. Finding it
              is what turns a one-off treatment into lasting protection.
            </p>
            <p>
              Whether it&rsquo;s a family home or a commercial kitchen, the
              standard is the same: respect for the space, straight answers,
              and a plan that fits the people who use it.
            </p>
          </div>
        </div>
        <div className="shell mt-16 lg:mt-24">
          <StoryVideo className="lg:aspect-[21/9]" />
        </div>
      </section>

      {/* Values */}
      <section className="section-y bg-ivory">
        <div className="shell">
          <SectionHeading eyebrow="Our values" title="What guides every treatment we perform." />
          <dl className="mt-14 grid border-t border-line sm:grid-cols-2">
            {values.map((value, i) => (
              <div
                key={value.title}
                data-reveal
                style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
                className="border-b border-line py-10 sm:pr-12 sm:even:border-l sm:even:pl-12 sm:even:pr-0"
              >
                <dt className="flex items-baseline gap-4">
                  <span className="font-display text-2xl text-copper">{String(i + 1).padStart(2, "0")}</span>
                  <span className="display-sm text-forest">{value.title}</span>
                </dt>
                <dd className="mt-4 max-w-md pl-10 leading-relaxed text-muted">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* How we look at a property */}
      <section className="grain section-y relative overflow-hidden bg-evergreen text-ivory">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:col-span-7">
            <PropertyBlueprint className="w-full text-sage" />
          </div>
          <div className="lg:col-span-5">
            <Eyebrow tone="dark">The inspection</Eyebrow>
            <h2 className="display-md mt-6">How we look at a property.</h2>
            <ol className="mt-10 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-1">
              {inspectionZones.map((zone, i) => (
                <li key={zone.label} className="flex gap-4 border-t border-ivory/12 py-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-copper text-xs font-bold text-evergreen">
                    {i + 1}
                  </span>
                  <span>
                    <span className="block font-semibold">{zone.label}</span>
                    <span className="mt-0.5 block text-sm text-ivory/70">{zone.detail}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Team route */}
      <section className="section-y bg-white">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow="Our team" title="The people you'll deal with." size="md" />
            <Button href="/team" variant="outline" className="mt-10">
              Meet the team
            </Button>
          </div>
          <ul className="border-t border-line lg:col-span-5 lg:col-start-8">
            {team.map((member) => (
              <li key={member.slug} className="border-b border-line">
                <Link href={`/team#${member.slug}`} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-5 hover:text-forest">
                  <span className="title-md text-forest">{member.name}</span>
                  <span className="text-sm text-muted">{member.role}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="shell mt-14">
          <ArrowLink href="/gallery">See the spaces we help protect</ArrowLink>
        </div>
      </section>

      <CTASection />
    </>
  );
}
