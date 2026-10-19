import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Photo } from "@/components/ui/Photo";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";

/** Large image-led tile used for the two property programs. */
export function FeatureServiceTile({
  service,
  className,
  imageClassName,
  sizes,
}: {
  service: Service;
  className?: string;
  imageClassName?: string;
  sizes: string;
}) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[1.75rem] bg-evergreen text-ivory",
        className
      )}
    >
      <Photo
        name={service.photo}
        alt=""
        sizes={sizes}
        zoom
        className={cn("!absolute inset-0 h-full w-full", imageClassName)}
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-evergreen via-evergreen/45 to-evergreen/0"
      />
      <span className="relative mt-auto flex flex-col p-7 sm:p-9">
        <span className="eyebrow text-sage">{service.audience}</span>
        <span className="display-sm mt-3 block max-w-md">{service.title}</span>
        <span className="mt-3 block max-w-md text-[0.9375rem] leading-relaxed text-ivory/80">
          {service.summary}
        </span>
        <span className="mt-6 inline-flex items-center gap-2 font-semibold">
          Explore the program
          <ArrowUpRight
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-300 ease-out-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </span>
    </Link>
  );
}

/** Compact tile used for specialist treatments. */
export function CompactServiceTile({
  service,
  index,
  tone = "light",
}: {
  service: Service;
  index?: number;
  tone?: "light" | "dark";
}) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group flex h-full flex-col rounded-[1.5rem] p-3 transition-colors duration-300",
        tone === "light" ? "bg-white hover:bg-sage-100" : "bg-ivory/[0.06] hover:bg-ivory/[0.1]"
      )}
    >
      <Photo
        name={service.photo}
        alt=""
        sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
        zoom
        className="aspect-[4/3] rounded-[1.1rem]"
      />
      <span className="flex flex-1 flex-col px-3 pb-3 pt-5">
        <span className="flex items-start justify-between gap-4">
          <span
            className={cn("title-md", tone === "light" ? "text-forest" : "text-ivory")}
          >
            {service.title}
          </span>
          {index !== undefined && (
            <span aria-hidden="true" className="font-display text-xl text-copper-ink">
              {String(index).padStart(2, "0")}
            </span>
          )}
        </span>
        <span
          className={cn(
            "mt-2 text-[0.9375rem] leading-relaxed",
            tone === "light" ? "text-muted" : "text-ivory/70"
          )}
        >
          {service.audience}
        </span>
        <span
          className={cn(
            "mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold",
            tone === "light" ? "text-forest" : "text-ivory"
          )}
        >
          Learn more
          <ArrowUpRight
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-300 ease-out-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </span>
    </Link>
  );
}
