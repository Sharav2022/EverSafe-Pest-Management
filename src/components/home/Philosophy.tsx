import { Eyebrow } from "@/components/ui/SectionHeading";
import { ArrowLink } from "@/components/ui/Button";
import { StoryVideo } from "@/components/home/StoryVideo";

export function Philosophy() {
  return (
    <section className="section-y bg-ivory">
      <div className="shell grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <StoryVideo />
        </div>
        <div className="lg:col-span-5" data-reveal>
          <Eyebrow>Responsible pest management</Eyebrow>
          <h2 className="display-md mt-6 text-forest">
            The threats you don&rsquo;t always see deserve an expert eye.
          </h2>
          <p className="mt-6 leading-relaxed text-muted">
            Ever Safe started with a simple idea: pest control should protect
            your family and property without compromising on safety. That means
            choosing the least disruptive effective approach, combining
            treatment with exclusion and sanitation advice, and reporting
            clearly on everything we do.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            If you have young children, pets or family members with
            sensitivities, tell us up front — every plan can be adjusted.
          </p>
          <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4">
            <ArrowLink href="/about-us">About Ever Safe</ArrowLink>
            <ArrowLink href="/team">Meet the team</ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}
