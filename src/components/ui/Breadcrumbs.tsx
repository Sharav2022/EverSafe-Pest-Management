import Link from "next/link";
import { cn } from "@/lib/utils";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({
  items,
  tone = "light",
  className,
}: {
  items: Crumb[];
  tone?: "light" | "dark";
  className?: string;
}) {
  const all: Crumb[] = [{ label: "Home", href: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol
        className={cn(
          "flex flex-wrap items-center gap-x-2 gap-y-1 text-sm",
          tone === "light" ? "text-muted" : "text-ivory/70"
        )}
      >
        {all.map((crumb, i) => {
          const last = i === all.length - 1;
          return (
            <li key={`${crumb.label}-${i}`} className="flex items-center gap-2">
              {crumb.href && !last ? (
                <Link
                  href={crumb.href}
                  className={cn(
                    "underline-offset-4 transition-colors hover:underline",
                    tone === "light" ? "hover:text-forest" : "hover:text-ivory"
                  )}
                >
                  {crumb.label}
                </Link>
              ) : (
                <span
                  aria-current={last ? "page" : undefined}
                  className={tone === "light" ? "text-charcoal" : "text-ivory"}
                >
                  {crumb.label}
                </span>
              )}
              {!last && (
                <span aria-hidden="true" className="opacity-50">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
