import { Bug } from "lucide-react";
import { cn } from "@/lib/utils";

export function Loader({
  className,
  label = "Loading",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      role="status"
      aria-label={label}
      className={cn(
        "flex flex-col items-center justify-center gap-4",
        className
      )}
    >
      <div className="relative flex h-20 w-20 items-center justify-center">
        <span
          className="animate-spin-slow absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, #c6f24c 0deg, #c6f24c 90deg, transparent 200deg, transparent 360deg)",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 4px))",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 4px))",
          }}
        />
        <span className="absolute inset-[6px] rounded-full bg-brand-dark" />
        <span className="absolute inset-[6px] animate-pulse rounded-full bg-brand-lime/10" />
        <Bug
          className="relative h-8 w-8 animate-bounce text-brand-lime"
          strokeWidth={1.75}
        />
      </div>
      <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-brand-lime">
        {label}
      </p>
    </div>
  );
}
