import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Photo } from "@/components/ui/Photo";
import { ArrowLink, Button } from "@/components/ui/Button";
import { ArticleCard } from "@/components/blog/ArticleCards";
import { CTASection } from "@/components/home/CTASection";
import { blogPosts, formatPostDate, getPost } from "@/data/blog";
import { services } from "@/data/services";
import { photos } from "@/lib/photos";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: photos[post.photo].src.src, alt: photos[post.photo].alt }],
    },
  };
}

// Points each article at the most relevant service, by category keywords.
function relatedService(category: string, title: string) {
  const text = `${category} ${title}`.toLowerCase();
  const match =
    (text.includes("termite") && "termite-control") ||
    (text.includes("bed bug") && "bed-bug-treatment") ||
    (text.includes("commercial") && "commercial-pest-control") ||
    "residential-pest-control";
  return services.find((s) => s.slug === match)!;
}

export default async function BlogDetailPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);
  const service = relatedService(post.category, post.title);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@id": `${siteConfig.url}/#business` },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
    image: `${siteConfig.url}${photos[post.photo].src.src}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article>
        <header className="bg-ivory pt-8 sm:pt-10">
          <div className="shell">
            <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
          </div>
          <div className="shell-narrow pb-12 pt-12 sm:pt-16 lg:max-w-[calc(56rem+var(--gutter)*2)]">
            <Eyebrow>{post.category}</Eyebrow>
            <h1 className="display-lg mt-6 text-forest">{post.title}</h1>
            <p className="lede mt-6 text-muted">{post.excerpt}</p>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-6 text-sm">
              <div>
                <dt className="text-muted">Written by</dt>
                <dd className="mt-1 font-semibold text-charcoal">{post.author}</dd>
              </div>
              <div>
                <dt className="text-muted">Published</dt>
                <dd className="mt-1 font-semibold text-charcoal">
                  <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                </dd>
              </div>
              <div>
                <dt className="text-muted">Reading time</dt>
                <dd className="mt-1 font-semibold text-charcoal">{post.readTime}</dd>
              </div>
            </dl>
          </div>
          <div className="shell">
            <Photo
              name={post.photo}
              preload
              sizes="(min-width: 1360px) 1320px, 100vw"
              className="aspect-[16/9] rounded-[1.75rem] lg:aspect-[21/9]"
            />
          </div>
        </header>

        <div className="bg-ivory py-16 sm:py-24">
          <div className="shell-narrow grid gap-14 lg:max-w-[calc(64rem+var(--gutter)*2)] lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-16">
            <div className="article-body max-w-[42rem]">
              {post.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <aside className="lg:pt-2">
              <div className="rounded-[1.25rem] bg-white p-6 lg:sticky lg:top-32">
                <p className="eyebrow text-copper-ink">Related service</p>
                <p className="title-md mt-3 text-forest">{service.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.audience}</p>
                <ArrowLink href={`/services/${service.slug}`} className="mt-5 text-sm">
                  Learn more<span className="sr-only"> about {service.title.toLowerCase()}</span>
                </ArrowLink>
                <Button href="/contact-us" size="md" className="mt-6 w-full">
                  Request a Quote
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <section className="section-y border-t border-line bg-white">
        <div className="shell">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="display-md text-forest">More articles</h2>
            <ArrowLink href="/blog">All articles</ArrowLink>
          </div>
          <ul className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <li key={p.slug}>
                <ArticleCard post={p} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  );
}
