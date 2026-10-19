import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Ever Safe mark: an arched doorway (the home) holding a single leaf vein
 * (responsible care). Drawn as a line icon so it stays crisp at any size.
 */
export function BrandGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <path
        d="M8 35V18.5C8 11.6 13.4 6 20 6s12 5.6 12 12.5V35"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path d="M5 35h30" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path
        d="M20 31c-5-3.2-6.6-8.8-3.4-14.6C22 18 24.4 23.8 20 31Z"
        fill="var(--brand-glyph-leaf, #c77644)"
      />
      <path d="M20 31c-.4-4.4-1.2-8.4-3.4-14.6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />
    </svg>
  );
}

export function BrandLockup({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const onDark = tone === "light";
  return (
    <Link
      href="/"
      aria-label="Ever Safe Pest Management — home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <BrandGlyph
        className={cn(
          "h-9 w-9 transition-transform duration-300 ease-out-soft group-hover:-translate-y-0.5",
          onDark ? "text-ivory" : "text-forest"
        )}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.6rem] tracking-[-0.01em]",
            onDark ? "text-ivory" : "text-forest"
          )}
        >
          Ever Safe
        </span>
        <span
          className={cn(
            "mt-1 text-[0.6rem] font-bold uppercase tracking-[0.28em]",
            onDark ? "text-sage/80" : "text-muted"
          )}
        >
          Pest Management
        </span>
      </span>
    </Link>
  );
}
