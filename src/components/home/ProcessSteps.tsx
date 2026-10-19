import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export const processSteps = [
  {
    title: "Inspect",
    description:
      "A technician inspects your property to identify pests, entry points, and risk areas.",
  },
  {
    title: "Plan",
    description:
      "We design a treatment plan tailored to your property, pets, and the severity of the infestation.",
  },
  {
    title: "Treat",
    description:
      "Interior and exterior treatments are applied with precision, not guesswork.",
  },
  {
    title: "Protect",
    description:
      "Scheduled follow-ups and monitoring keep your property protected long after the first visit.",
  },
];

/** Editorial four-stage timeline with oversized numerals and a drawn connector. */
export function ProcessSteps({
  tone = "light",
  heading = true,
}: {
  tone?: "light" | "sage";
  heading?: boolean;
}) {
  return (
    <section className={cn("section-y", tone === "sage" ? "bg-sage-100" : "bg-ivory-200")}>
      <div className="shell">
        {heading && (
          <SectionHeading
            eyebrow="Our process"
            title={
              <>
                Inspect. Plan. Treat.{" "}
                <span className="text-copper">Protect.</span>
              </>
            }
            intro="The same four stages shape every residential and commercial program, so you always know what happens next."
          />
        )}

        <div className="relative mt-16 lg:mt-24">
          <span
            aria-hidden="true"
            data-reveal-line
            className="absolute left-0 right-0 top-[5px] hidden h-px bg-forest/25 lg:block"
          />
          <ol className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step, i) => (
              <li
                key={step.title}
                data-reveal
                style={{ "--reveal-delay": `${150 + i * 120}ms` } as React.CSSProperties}
                className="relative"
              >
                <span className="numeral block text-[5.5rem] text-forest/20 sm:text-[6.5rem] lg:mt-10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute left-0 top-0 hidden h-2.5 w-2.5 rounded-full bg-copper ring-4 lg:block",
                    tone === "sage" ? "ring-sage-100" : "ring-ivory-200"
                  )}
                />
                <h3 className="display-sm mt-4 text-forest">{step.title}</h3>
                <p className="mt-3 max-w-xs leading-relaxed text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
