import Link from "next/link";
import { Phone } from "lucide-react";
import { quoteLink } from "@/data/nav";
import { siteConfig } from "@/lib/site-config";

/**
 * Compact call / quote bar pinned to the bottom of small screens. The layout
 * reserves matching space below the footer so nothing is ever covered.
 */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ivory/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md md:hidden">
      <div className="grid grid-cols-[auto_1fr] gap-2">
        <a
          href={siteConfig.phoneHref}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line-strong px-5 font-semibold text-forest"
        >
          <Phone aria-hidden="true" className="h-4 w-4" />
          Call
          <span className="sr-only"> Ever Safe at {siteConfig.phone}</span>
        </a>
        <Link
          href={quoteLink.href}
          className="inline-flex h-12 items-center justify-center rounded-full bg-forest font-semibold text-ivory"
        >
          {quoteLink.label}
        </Link>
      </div>
    </div>
  );
}

/** Spacer that matches the action bar height on small screens. */
export function MobileActionBarSpacer() {
  return <div aria-hidden="true" className="h-[calc(4.5rem+env(safe-area-inset-bottom))] bg-evergreen md:hidden" />;
}
