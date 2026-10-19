import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export default function NotFound() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
      <div className="shell grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Eyebrow>Error 404</Eyebrow>
          <h1 className="display-xl mt-6 text-forest">This page isn&rsquo;t here.</h1>
          <p className="lede mt-6 max-w-lg text-muted">
            The link may be out of date, or the page may have moved. These are
            good places to start.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/">Back to home</Button>
            <Button href="/contact-us" variant="outline" arrow={false}>
              Contact us
            </Button>
          </div>
        </div>
        <nav aria-label="Services" className="lg:col-span-4 lg:col-start-9">
          <p className="eyebrow text-muted">Services</p>
          <ul className="mt-4 border-t border-line">
            {services.map((s) => (
              <li key={s.slug} className="border-b border-line">
                <Link href={`/services/${s.slug}`} className="flex min-h-12 items-center font-semibold text-forest hover:underline">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
