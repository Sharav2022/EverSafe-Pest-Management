import { Phone } from "lucide-react";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Disclosure } from "@/components/ui/Disclosure";
import { homeFaqs } from "@/data/faqs";
import { siteConfig } from "@/lib/site-config";

/** Straight answers in place of unverified statistics and testimonials. */
export function BeforeYouBook() {
  return (
    <section className="section-y bg-sage-100">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5" data-reveal>
          <Eyebrow>Before you book</Eyebrow>
          <h2 className="display-lg mt-6 text-forest">Straight answers, up&nbsp;front.</h2>
          <p className="lede mt-6 max-w-md text-muted">
            The questions people ask most before inviting us in. Anything else,
            just call.
          </p>
          <a
            href={siteConfig.phoneHref}
            className="mt-9 inline-flex min-h-12 items-center gap-3 font-display text-3xl text-forest transition-colors hover:text-copper-ink"
          >
            <Phone aria-hidden="true" className="h-6 w-6" strokeWidth={1.5} />
            {siteConfig.phone}
          </a>
        </div>
        <div className="border-t border-line lg:col-span-6 lg:col-start-7">
          {homeFaqs.map((faq, i) => (
            <Disclosure key={faq.question} question={faq.question} defaultOpen={i === 0}>
              {faq.answer}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}
