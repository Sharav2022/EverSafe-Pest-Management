import { cn } from "@/lib/utils";

type Tone = "light" | "dark";

/** Small uppercase label with a copper rule. `tone` is the surface it sits on. */
export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "eyebrow flex items-center gap-3",
        tone === "light" ? "text-copper-ink" : "text-copper-light",
        className
      )}
    >
      <span aria-hidden="true" className="h-px w-8 bg-current opacity-70" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "light",
  align = "left",
  size = "lg",
  as: Heading = "h2",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  tone?: Tone;
  align?: "left" | "center";
  size?: "lg" | "md";
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div
      data-reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center [&_.eyebrow]:justify-center",
        className
      )}
    >
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <Heading
        className={cn(
          size === "lg" ? "display-lg" : "display-md",
          eyebrow && "mt-5",
          tone === "light" ? "text-forest" : "text-ivory"
        )}
      >
        {title}
      </Heading>
      {intro && (
        <div
          className={cn(
            "lede mt-6 max-w-2xl",
            align === "center" && "mx-auto",
            tone === "light" ? "text-muted" : "text-ivory/75"
          )}
        >
          {intro}
        </div>
      )}
    </div>
  );
}
