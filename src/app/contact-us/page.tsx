import type { Metadata } from "next";
import { MapPin, PhoneCall, Mail, Clock3 } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Request a free pest control inspection or get in touch with EverSafe Pest Management.",
};

const info = [
  {
    icon: PhoneCall,
    title: "Call Us",
    lines: ["+1 437-833-9181", "Mon–Sat, 9am–7pm"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["hello@eversafepest.com", "We reply within 24 hours"],
  },
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["2600 Skymark Ave Unit 9, Suite 104", "Mississauga, ON L4W 5B2"],
  },
  {
    icon: Clock3,
    title: "Working Hours",
    lines: ["Mon–Sat: 9:00 AM – 7:00 PM", "Sunday: Emergency Only"],
  },
];

export default function ContactUsPage() {
  return (
    <>
      <PageHero title="Contact Us" crumb="Contact Us" />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-2xl font-bold text-brand-ink">
              Get in touch
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-brand-ink/60">
              Fill out the form or reach us directly — we typically respond
              within one business day.
            </p>

            <div className="mt-8 space-y-4">
              {info.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-2xl border border-brand-ink/10 p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-brand-lime">
                    <item.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-brand-ink">
                      {item.title}
                    </h3>
                    {item.lines.map((line) => (
                      <p key={line} className="text-sm text-brand-ink/60">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-brand-ink/10 p-8 lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
