import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Photo } from "@/components/ui/Photo";
import type { PhotoKey } from "@/lib/photos";
import { cn } from "@/lib/utils";

/**
 * Editorial page opener shared by inner pages. With a photo it becomes an
 * asymmetric split; without one it is a typographic statement.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
  photo,
  children,
  titleClassName,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  crumbs: Crumb[];
  photo?: PhotoKey;
  /** Extra content under the intro, e.g. actions or metadata. */
  children?: React.ReactNode;
  titleClassName?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ivory pt-8 sm:pt-10">
      <div className="shell">
        <Breadcrumbs items={crumbs} />
      </div>

      <div
        className={cn(
          "shell grid items-end gap-10 pb-14 pt-10 sm:pb-20 lg:pt-16",
          photo && "lg:grid-cols-12 lg:gap-12"
        )}
      >
        <div className={cn(photo ? "lg:col-span-7 lg:pb-6" : "max-w-4xl")}>
          <div data-rise>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className={cn("display-xl mt-6 text-forest", titleClassName)}>{title}</h1>
          </div>
          {intro && (
            <div
              data-rise
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
              className="lede mt-7 max-w-2xl text-muted"
            >
              {intro}
            </div>
          )}
          {children && (
            <div data-rise style={{ "--reveal-delay": "200ms" } as React.CSSProperties} className="mt-9">
              {children}
            </div>
          )}
        </div>

        {photo && (
          <div className="relative lg:col-span-5">
            <Photo
              name={photo}
              preload
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/3] w-full rounded-[1.75rem] sm:aspect-[16/10] lg:aspect-[4/5]"
            />
            <span
              aria-hidden="true"
              className="absolute -bottom-3 -left-3 hidden h-24 w-24 rounded-bl-[1.75rem] border-b border-l border-copper/60 lg:block"
            />
          </div>
        )}
      </div>
      <div className="shell">
        <div className="h-px bg-line" />
      </div>
    </section>
  );
}
