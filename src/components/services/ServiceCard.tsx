import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-brand-lime/50 hover:bg-white/[0.06]"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-lime/10 text-brand-lime">
        <service.icon className="h-7 w-7" strokeWidth={1.75} />
      </span>
      <h3 className="font-heading mt-5 text-lg font-bold text-white">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
        {service.summary}
      </p>
      <span className="mt-5 inline-flex items-center gap-2 font-heading text-sm font-semibold text-brand-lime">
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
