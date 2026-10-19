import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "light" | "outline" | "outline-light" | "copper";
type Size = "md" | "lg";

type CommonProps = {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Show the trailing arrow. */
  arrow?: boolean;
};

type LinkProps = CommonProps & {
  href: string;
  type?: never;
  disabled?: never;
  onClick?: never;
};

type NativeButtonProps = CommonProps & {
  href?: undefined;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

const base =
  "group/btn relative inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full font-semibold tracking-[-0.005em] whitespace-nowrap transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-out-soft active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-forest text-ivory hover:bg-forest-600 shadow-[0_1px_0_rgb(255_255_255/0.08)_inset,0_10px_24px_-14px_rgb(18_61_50/0.7)]",
  light: "bg-ivory text-forest hover:bg-white",
  copper: "bg-copper text-evergreen hover:bg-copper-light",
  outline:
    "border border-line-strong text-charcoal hover:border-forest hover:bg-forest hover:text-ivory",
  "outline-light":
    "border border-ivory/30 text-ivory hover:border-ivory hover:bg-ivory hover:text-forest",
};

const sizes: Record<Size, string> = {
  md: "px-5 text-[0.9375rem]",
  lg: "px-7 text-base min-h-14",
};

export function Button(props: LinkProps | NativeButtonProps) {
  const { children, variant = "primary", size = "md", className, arrow = true } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-200 ease-out-soft group-hover/btn:translate-x-0.5"
          strokeWidth={2}
        />
      )}
    </>
  );

  if (props.href !== undefined) {
    return (
      <Link href={props.href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={classes}
    >
      {content}
    </button>
  );
}

/** Understated text link with a moving arrow. */
export function ArrowLink({
  href,
  children,
  tone = "dark",
  className,
}: {
  href: string;
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group/link inline-flex items-center gap-2 font-semibold underline decoration-transparent underline-offset-[6px] transition-colors duration-200 hover:decoration-current",
        tone === "dark" ? "text-forest" : "text-ivory",
        className
      )}
    >
      {children}
      <ArrowRight
        aria-hidden="true"
        className="h-4 w-4 transition-transform duration-200 ease-out-soft group-hover/link:translate-x-1"
        strokeWidth={2}
      />
    </Link>
  );
}
