import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Photo } from "@/components/ui/Photo";
import { formatPostDate, type BlogPost } from "@/data/blog";
import { cn } from "@/lib/utils";

function Meta({ post, tone = "light" }: { post: BlogPost; tone?: "light" | "dark" }) {
  return (
    <p className={cn("flex flex-wrap items-center gap-x-3 gap-y-1 text-sm", tone === "light" ? "text-muted" : "text-ivory/70")}>
      <span className={cn("font-semibold", tone === "light" ? "text-copper-ink" : "text-copper-light")}>
        {post.category}
      </span>
      <span aria-hidden="true">·</span>
      <time dateTime={post.date}>{formatPostDate(post.date)}</time>
      <span aria-hidden="true">·</span>
      <span>{post.readTime}</span>
    </p>
  );
}

/** Large lead story: wide image with the headline set beside it. */
export function FeaturedArticle({
  post,
  headingLevel = "h2",
  preload = false,
}: {
  post: BlogPost;
  headingLevel?: "h2" | "h3";
  preload?: boolean;
}) {
  const Heading = headingLevel;
  return (
    <Link href={`/blog/${post.slug}`} className="group grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
      <Photo
        name={post.photo}
        alt=""
        sizes="(min-width: 1024px) 58vw, 100vw"
        preload={preload}
        zoom
        className="aspect-[16/10] rounded-[1.75rem] lg:col-span-7"
      />
      <div className="lg:col-span-5">
        <Meta post={post} />
        <Heading className="display-md mt-5 text-forest decoration-1 underline-offset-[8px] group-hover:underline">
          {post.title}
        </Heading>
        <p className="mt-5 leading-relaxed text-muted">{post.excerpt}</p>
        <span className="mt-8 inline-flex items-center gap-2 font-semibold text-forest">
          Read the article
          <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

/** Standard article tile with an editorial crop. */
export function ArticleCard({
  post,
  aspect = "aspect-[4/3]",
  headingLevel = "h3",
}: {
  post: BlogPost;
  aspect?: string;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  return (
    <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col">
      <Photo
        name={post.photo}
        alt=""
        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
        zoom
        className={cn("rounded-[1.25rem]", aspect)}
      />
      <div className="mt-6">
        <Meta post={post} />
        <Heading className="title-md mt-3 text-forest decoration-1 underline-offset-4 group-hover:underline">
          {post.title}
        </Heading>
        <p className="mt-2 line-clamp-2 leading-relaxed text-muted">{post.excerpt}</p>
      </div>
    </Link>
  );
}

/** Text-only row used in compact lists. */
export function ArticleRow({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group grid grid-cols-[6.5rem_1fr] gap-5 py-6 sm:grid-cols-[8rem_1fr]">
      <Photo
        name={post.photo}
        alt=""
        sizes="128px"
        className="aspect-square rounded-[1rem]"
      />
      <div className="self-center">
        <Meta post={post} />
        <h3 className="mt-2 font-semibold leading-snug text-forest decoration-1 underline-offset-4 group-hover:underline sm:text-lg">
          {post.title}
        </h3>
      </div>
    </Link>
  );
}
