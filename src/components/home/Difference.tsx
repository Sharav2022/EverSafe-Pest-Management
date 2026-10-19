import { ClipboardList, MessageSquareText, Ruler, ScanSearch, ShieldCheck } from "lucide-react";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const differences = [
  {
    icon: ScanSearch,
    title: "Inspection-led recommendations",
    text: "Every program begins with an inspection of the property, so advice is based on evidence rather than assumptions.",
  },
  {
    icon: Ruler,
    title: "Tailored treatment plans",
    text: "Plans reflect the property, the pest, and the people and pets who use the space.",
  },
  {
    icon: MessageSquareText,
    title: "Clear communication",
    text: "You'll know what we found, what we recommend and why — with a written service report after the visit.",
  },
  {
    icon: ShieldCheck,
    title: "Long-term prevention",
    text: "Exclusion work, monitoring and scheduled follow-ups aim to stop problems from returning.",
  },
  {
    icon: ClipboardList,
    title: "Professional service standards",
    text: "Products are applied according to their label directions, with documentation for commercial clients.",
  },
];

export function Difference() {
  return (
    <section className="grain section-y relative overflow-hidden bg-evergreen text-ivory">
      <div aria-hidden="true" className="hairline-grid absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div className="shell relative grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32" data-reveal>
            <Eyebrow tone="dark">The Ever Safe difference</Eyebrow>
            <h2 className="display-lg mt-6 text-ivory">
              Careful work, explained clearly.
            </h2>
            <p className="lede mt-6 max-w-md text-ivory/75">
              Good pest management is quiet, methodical and transparent. These
              are the standards behind every visit.
            </p>
            <Button href="/contact-us" variant="light" size="lg" className="mt-10">
              Book an inspection
            </Button>
          </div>
        </div>

        <ol className="lg:col-span-6 lg:col-start-7">
          {differences.map((item, i) => (
            <li
              key={item.title}
              data-reveal
              style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
              className={`grid grid-cols-[2.75rem_1fr] gap-5 border-t border-ivory/15 py-9 sm:grid-cols-[3.5rem_1fr] ${
                i % 2 === 1 ? "lg:pl-16" : ""
              }`}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/20 text-copper-light sm:h-12 sm:w-12">
                <item.icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="title-md text-ivory">{item.title}</h3>
                <p className="mt-2 max-w-md leading-relaxed text-ivory/70">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
