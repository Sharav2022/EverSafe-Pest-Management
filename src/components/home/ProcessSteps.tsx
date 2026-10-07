import { SectionTag } from "@/components/ui/Badge";

const steps = [
  {
    number: "01",
    title: "Inspect",
    description:
      "A certified technician inspects your property to identify pests, entry points, and risk areas.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We design a treatment plan tailored to your property, pets, and the severity of the infestation.",
  },
  {
    number: "03",
    title: "Treat",
    description:
      "Eco-friendly interior and exterior treatments are applied with precision, not guesswork.",
  },
  {
    number: "04",
    title: "Protect",
    description:
      "Scheduled follow-ups and monitoring keep your property protected long after the first visit.",
  },
];

export function ProcessSteps() {
  return (
    <section className="bg-brand-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTag
          eyebrow="Our Process"
          title="Our pest control process for safe & effective results"
          tone="light"
        />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              <span className="font-heading text-6xl font-extrabold text-brand-ink/10">
                {step.number}
              </span>
              <h3 className="font-heading -mt-4 text-xl font-bold text-brand-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink/60">
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <span className="absolute right-[-16px] top-6 hidden h-px w-8 bg-brand-ink/15 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
