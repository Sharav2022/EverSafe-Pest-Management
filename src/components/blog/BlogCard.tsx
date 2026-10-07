import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import type { BlogPost } from "@/data/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  const date = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-brand-ink/10 bg-white transition hover:shadow-xl"
    >
      <PhotoPlaceholder variant={post.image} className="h-48 w-full" />
      <div className="flex flex-1 flex-col p-6">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-lime/15 px-3 py-1 text-xs font-bold text-brand-lime-dark">
          {post.category}
        </span>
        <h3 className="font-heading mt-4 text-lg font-bold leading-snug text-brand-ink">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-brand-ink/60">
          {post.excerpt}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-brand-ink/10 pt-4 text-xs text-brand-ink/50">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" />
            {date}
          </span>
          <span className="inline-flex items-center gap-1 font-semibold text-brand-ink group-hover:text-brand-lime-dark">
            Read More
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
