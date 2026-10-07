import { Flame } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-brand-cream px-4 py-2.5 text-center text-sm font-semibold text-brand-ink">
      <span className="inline-flex items-center justify-center gap-2">
        <Flame className="h-4 w-4 text-orange-500" strokeWidth={2.5} />
        Serving your neighborhood with same-day emergency pest visits
        <a
          href="/contact-us"
          className="ml-1 rounded-full bg-brand-lime px-3 py-1 text-xs font-bold text-brand-ink transition hover:bg-brand-lime-dark"
        >
          Book Now
        </a>
      </span>
    </div>
  );
}
