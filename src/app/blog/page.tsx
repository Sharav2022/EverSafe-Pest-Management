import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { BlogCard } from "@/components/blog/BlogCard";
import { CTASection } from "@/components/home/CTASection";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Pest control tips, seasonal guides, and prevention advice from the EverSafe Pest Management team.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero title="Our Blog" crumb="Blog" />

      <section className="bg-brand-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
