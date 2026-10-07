import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";

const items = [
  { variant: "technician-yard", offset: "translate-y-6" },
  { variant: "technician-indoor", offset: "-translate-y-2" },
  { variant: "technician-house", offset: "translate-y-0" },
  { variant: "technician-exterior", offset: "translate-y-8" },
  { variant: "technician-spray", offset: "-translate-y-4" },
  { variant: "technician-commercial", offset: "translate-y-3" },
];

export function HeroCarousel() {
  const track = [...items, ...items];

  return (
    <div className="relative mt-14 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand-dark to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand-dark to-transparent sm:w-32" />

      <div className="animate-marquee flex w-max gap-5 py-2">
        {track.map((item, i) => (
          <div
            key={i}
            className={`h-40 w-56 shrink-0 rounded-2xl sm:h-48 sm:w-64 ${item.offset}`}
          >
            <PhotoPlaceholder
              variant={item.variant}
              className="h-full w-full rounded-2xl"
              iconClassName="h-10 w-10"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
