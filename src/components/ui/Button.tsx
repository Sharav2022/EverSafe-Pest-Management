import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
  className?: string;
  showIcon?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-heading font-semibold transition-all duration-200 whitespace-nowrap";

const variants: Record<string, string> = {
  primary:
    "bg-brand-lime text-brand-ink hover:bg-brand-lime-dark active:scale-[0.98] shadow-[0_8px_24px_-8px_rgba(198,242,76,0.6)]",
  outline:
    "border border-white/25 text-white hover:bg-white/10 active:scale-[0.98]",
  ghost: "text-brand-ink hover:bg-brand-ink/5 active:scale-[0.98]",
};

const sizes: Record<string, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  showIcon = true,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      <span>{children}</span>
      {showIcon && (
        <ArrowUpRight
          className="h-4 w-4 -rotate-45 transition-transform duration-200 group-hover:rotate-0"
          strokeWidth={2.5}
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(classes, "group")}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cn(classes, "group")}>
      {content}
    </button>
  );
}
