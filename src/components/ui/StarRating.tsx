import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function StarRating({
  rating = 5,
  className,
}: {
  rating?: number;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4",
            i < rating
              ? "fill-brand-lime text-brand-lime"
              : "fill-transparent text-white/20"
          )}
        />
      ))}
    </div>
  );
}
