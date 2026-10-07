import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  tone = "dark",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold",
        tone === "dark"
          ? "bg-white/10 text-white backdrop-blur-sm"
          : "bg-brand-ink/5 text-brand-ink",
        className
      )}
    >
      <span className="h-2 w-2 rounded-full bg-brand-lime" />
      {children}
    </span>
  );
}

export function SectionTag({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  tone?: "dark" | "light";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      <p
        className={cn(
          "font-heading text-sm font-semibold uppercase tracking-wide",
          tone === "dark" ? "text-brand-lime" : "text-brand-lime-dark"
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-heading mt-3 text-3xl font-bold leading-tight sm:text-4xl",
          tone === "dark" ? "text-white" : "text-brand-ink"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            tone === "dark" ? "text-white/70" : "text-brand-ink/65"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
