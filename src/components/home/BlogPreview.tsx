import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowLink } from "@/components/ui/Button";
import { ArticleCard, ArticleRow } from "@/components/blog/ArticleCards";
import { blogPosts } from "@/data/blog";

export function BlogPreview() {
  const [lead, ...rest] = blogPosts;
  const list = rest.slice(0, 3);

  return (
    <section className="section-y bg-ivory">
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Knowledge centre"
            title="Practical guidance, season by season."
          />
          <ArrowLink href="/blog" className="shrink-0 lg:mb-3">
            Visit the blog
          </ArrowLink>
        </div>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <ArticleCard post={lead} aspect="aspect-[4/3] lg:aspect-[5/4]" />
          </div>
          <div className="divide-y divide-line border-y border-line lg:col-span-6 lg:self-start">
            {list.map((post) => (
              <ArticleRow key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
