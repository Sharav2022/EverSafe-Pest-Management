import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ArticleCard, FeaturedArticle } from "@/components/blog/ArticleCards";
import { CTASection } from "@/components/home/CTASection";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Pest control tips, seasonal guides, and prevention advice from the Ever Safe Pest Management team.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;
  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

  return (
    <>
      <PageHero
        eyebrow="Knowledge centre"
        title="Field notes on keeping pests out."
        intro="Seasonal guides, early warning signs and practical prevention advice for homes and businesses."
        crumbs={[{ label: "Blog" }]}
      >
        <p className="text-sm text-muted">
          Topics: {categories.join(" · ")}
        </p>
      </PageHero>

      <section className="section-y bg-ivory">
        <div className="shell">
          <h2 className="sr-only">Latest article</h2>
          <FeaturedArticle post={featured} headingLevel="h3" preload />

          <div className="mt-20 border-t border-line pt-14 lg:mt-28">
            <h2 className="display-sm text-forest">More articles</h2>
            <ul className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post, i) => (
                <li key={post.slug} data-reveal style={{ "--reveal-delay": `${(i % 3) * 80}ms` } as React.CSSProperties}>
                  <ArticleCard
                    post={post}
                    aspect={i % 3 === 1 ? "aspect-[4/5]" : "aspect-[4/3]"}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
