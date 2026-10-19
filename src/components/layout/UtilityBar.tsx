import { MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

/** Slim band of verified practical details above the main header. */
export function UtilityBar() {
  const [weekday] = siteConfig.hours;
  return (
    <div className="bg-evergreen text-[0.8125rem] text-ivory/80">
      <div className="shell flex h-10 items-center justify-between gap-6">
        <p className="flex min-w-0 items-center gap-2 truncate">
          <MapPin aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-copper-light" />
          <span className="truncate">
            Mississauga, Ontario
            <span className="hidden md:inline">
              <span aria-hidden="true" className="mx-3 text-ivory/30">·</span>
              {weekday.days}, {weekday.time}
            </span>
          </span>
        </p>
        <a
          href={siteConfig.phoneHref}
          className="flex shrink-0 items-center gap-2 font-semibold text-ivory transition-colors hover:text-copper-light"
        >
          <Phone aria-hidden="true" className="h-3.5 w-3.5" />
          <span className="sr-only">Call Ever Safe at </span>
          {siteConfig.phone}
        </a>
      </div>
    </div>
  );
}
