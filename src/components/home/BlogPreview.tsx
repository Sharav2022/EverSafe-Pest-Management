import { SectionTag } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BlogCard } from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/blog";

export function BlogPreview() {
  return (
    <section className="bg-brand-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTag
          eyebrow="Knowledge Center"
          title="Stay updated with our pest control knowledge center"
          tone="light"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            href="/blog"
            variant="ghost"
            className="border border-brand-ink/15 text-brand-ink hover:bg-brand-ink/5"
          >
            Visit Our Blog
          </Button>
        </div>
      </div>
    </section>
  );
}
