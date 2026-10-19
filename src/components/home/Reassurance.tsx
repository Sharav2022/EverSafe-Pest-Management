import { Eyebrow } from "@/components/ui/SectionHeading";
import { ArrowLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";

const principles = [
  {
    title: "Find the cause",
    text: "We look for how pests are getting in and what is drawing them, not just where they were last seen.",
  },
  {
    title: "Treat with precision",
    text: "Treatment is targeted to the areas that need it, planned around your household or operation.",
  },
  {
    title: "Keep it from returning",
    text: "Sealing, follow-up visits and practical advice help protection last beyond the first appointment.",
  },
];

export function Reassurance() {
  return (
    <section className="section-y bg-white">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <div data-reveal>
            <Eyebrow>Our philosophy</Eyebrow>
            <h2 className="display-lg mt-6 max-w-3xl text-forest">
              Your property deserves more than a temporary&nbsp;fix.
            </h2>
          </div>

          <div className="mt-14 grid gap-10 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] sm:items-center lg:items-end">
            <Photo
              name="livingRoomFireplace"
              sizes="(min-width: 1024px) 26vw, (min-width: 640px) 45vw, 100vw"
              className="aspect-[4/5] rounded-[1.5rem]"
            />
            <p data-reveal className="lede text-muted sm:pb-4">
              Pest problems are usually a symptom — of a gap in the foundation,
              moisture in the wrong place, or a season changing outside. Ever
              Safe starts with an inspection so every recommendation is based on
              what is actually happening in your space.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 lg:pt-40">
          <ol className="border-t border-line">
            {principles.map((p, i) => (
              <li
                key={p.title}
                data-reveal
                style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
                className="grid grid-cols-[3rem_1fr] gap-4 border-b border-line py-8"
              >
                <span className="font-display text-2xl text-copper">{`0${i + 1}`}</span>
                <div>
                  <h3 className="title-md text-forest">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <ArrowLink href="/about-us" className="mt-10">
            How we work
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
