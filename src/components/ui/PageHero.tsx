import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function PageHero({
  title,
  crumb,
}: {
  title: string;
  crumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-20">
      <div className="bg-noise-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute right-[-5%] top-0 h-64 w-64 rounded-full bg-brand-lime/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-extrabold text-white sm:text-5xl">
          {title}
        </h1>
        <div className="mt-4 flex items-center gap-2 text-sm text-white/60">
          <Link href="/" className="hover:text-brand-lime">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-brand-lime">{crumb}</span>
        </div>
      </div>
    </section>
  );
}
