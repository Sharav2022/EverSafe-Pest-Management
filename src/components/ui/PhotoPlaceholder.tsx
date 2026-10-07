import type { LucideIcon } from "lucide-react";
import {
  Bug,
  SprayCan,
  Home,
  Building2,
  Rat,
  Bed,
  ShieldCheck,
  Leaf,
  Users,
  Newspaper,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  "technician-yard": SprayCan,
  "technician-commercial": Building2,
  "technician-house": Home,
  "technician-indoor": Bed,
  "technician-exterior": Rat,
  "technician-spray": SprayCan,
  "blog-eco": Leaf,
  "blog-termite": Bug,
  "blog-schedule": ShieldCheck,
  "blog-seasonal": Newspaper,
  "blog-commercial": Building2,
  "blog-bedbugs": Bed,
  "team-1": Users,
  "team-2": Users,
  "team-3": Users,
  "team-4": Users,
  default: Bug,
};

const GRADIENTS = [
  "from-brand-dark via-brand-dark-2 to-brand-dark-3",
  "from-brand-dark-2 via-brand-dark to-brand-ink",
  "from-brand-dark-3 via-brand-dark-2 to-brand-dark",
  "from-brand-ink via-brand-dark to-brand-dark-2",
];

function hashToIndex(input: string, mod: number) {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) % mod;
}

export function PhotoPlaceholder({
  variant = "default",
  className,
  iconClassName,
}: {
  variant?: string;
  className?: string;
  iconClassName?: string;
}) {
  const Icon = ICONS[variant] ?? ICONS.default;
  const gradient = GRADIENTS[hashToIndex(variant, GRADIENTS.length)];

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-gradient-to-br",
        gradient,
        className
      )}
    >
      <div className="bg-noise-grid absolute inset-0 opacity-40" />
      <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-brand-lime/10 blur-2xl" />
      <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-brand-lime/10 blur-2xl" />
      <Icon
        strokeWidth={1.25}
        className={cn(
          "relative h-14 w-14 text-brand-lime/70 drop-shadow-sm",
          iconClassName
        )}
      />
    </div>
  );
}
