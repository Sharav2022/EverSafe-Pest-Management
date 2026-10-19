import { siteConfig } from "@/lib/site-config";

export type Faq = { question: string; answer: string };

// Published pricing FAQs (preserved verbatim from the original pricing page).
export const pricingFaqs: Faq[] = [
  {
    question: "Is there a contract or commitment?",
    answer:
      "No long-term contracts. Monthly plans can be paused or cancelled anytime after the initial service.",
  },
  {
    question: "What's included in the free inspection?",
    answer:
      "A full interior and exterior walkthrough, pest identification, and a tailored treatment recommendation.",
  },
  {
    question: "Do you guarantee your work?",
    answer:
      "Yes — every plan includes a re-service guarantee if pests return between scheduled visits.",
  },
];

// Practical reassurance shown on the homepage in place of unverified
// statistics and testimonials. Built only from published business details.
export const homeFaqs: Faq[] = [
  pricingFaqs[1],
  {
    question: "Can treatment be planned around children and pets?",
    answer:
      "Yes. Tell your technician about children, pets or anyone with sensitivities before the visit and the plan — products, placement and timing — will be adjusted. Products are always applied according to their label directions.",
  },
  pricingFaqs[0],
  {
    question: "Where are you based, and when can I reach you?",
    answer: `Our office is at ${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality}, ${siteConfig.address.addressRegion}. We're available ${siteConfig.hours[0].days}, ${siteConfig.hours[0].time}; Sunday: ${siteConfig.hours[1].time.toLowerCase()}.`,
  },
];
