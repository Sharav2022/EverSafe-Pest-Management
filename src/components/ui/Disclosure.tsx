import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

/** Native <details> accordion row: keyboard and screen-reader friendly with no JS. */
export function Disclosure({
  question,
  children,
  defaultOpen = false,
  tone = "light",
}: {
  question: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  tone?: "light" | "dark";
}) {
  return (
    <details
      open={defaultOpen}
      className={cn(
        "disclosure group border-b",
        tone === "light" ? "border-line" : "border-ivory/15"
      )}
    >
      <summary
        className={cn(
          "flex cursor-pointer items-start justify-between gap-6 py-6 text-left",
          tone === "light" ? "text-forest" : "text-ivory"
        )}
      >
        <span className="title-md">{question}</span>
        <span
          aria-hidden="true"
          className={cn(
            "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color,color] duration-300 ease-out-soft group-open:rotate-45",
            tone === "light"
              ? "border-line-strong group-open:bg-forest group-open:text-ivory"
              : "border-ivory/25 group-open:bg-ivory group-open:text-forest"
          )}
        >
          <Plus className="h-4 w-4" strokeWidth={2} />
        </span>
      </summary>
      <div
        className={cn(
          "max-w-2xl pb-7 pr-12 leading-relaxed",
          tone === "light" ? "text-muted" : "text-ivory/75"
        )}
      >
        {children}
      </div>
    </details>
  );
}
