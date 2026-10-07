import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalendarDays, Clock3, User } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { BlogCard } from "@/components/blog/BlogCard";
import { CTASection } from "@/components/home/CTASection";
import { blogPosts } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const date = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero title={post.title} crumb="Blog" />

      <article className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-5 text-sm text-brand-ink/50">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" /> {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" /> {date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock3 className="h-4 w-4" /> {post.readTime}
            </span>
          </div>

          <PhotoPlaceholder
            variant={post.image}
            className="mt-8 aspect-video w-full rounded-3xl"
            iconClassName="h-16 w-16"
          />

          <div className="prose-p:leading-relaxed mt-10 space-y-5 text-base text-brand-ink/75">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>

      <section className="bg-brand-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-brand-ink">
            More Articles
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
