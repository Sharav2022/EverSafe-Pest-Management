import type { PhotoKey } from "@/lib/photos";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
  readTime: string;
  author: string;
  photo: PhotoKey;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "eco-friendly-pest-control-solutions-that-are-safe-for-family-pets",
    title: "Eco-Friendly Pest Control Solutions That Are Safe for Family & Pets",
    excerpt:
      "Pest control doesn't have to mean harsh chemicals. Here's how modern, eco-friendly treatments protect your home without putting your family or pets at risk.",
    content: [
      "Pest control has evolved far beyond blanket chemical spraying. Today's eco-friendly programs combine plant-based active ingredients, precise targeting, and mechanical exclusion to solve infestations while keeping households safe.",
      "Products used in modern residential treatments are registered for use in Canada and applied in the smallest effective dose, focused on cracks, crevices, and known pest pathways rather than open living spaces.",
      "Pairing chemical treatments with sanitation and exclusion work — sealing gaps, fixing screens, removing standing water — reduces how much product is needed over time, which is better for your family, pets, and the environment.",
      "If you have young children, pets, or family members with sensitivities, tell your technician up front. Every plan can be adjusted with pet-safe bait placements and low-odor formulations.",
    ],
    category: "Eco-Friendly",
    date: "2026-08-18",
    readTime: "4 min read",
    author: "Kristin Watson",
    photo: "seedlings",
  },
  {
    slug: "5-early-warning-signs-of-a-termite-infestation",
    title: "5 Early Warning Signs of a Termite Infestation in Your Home",
    excerpt:
      "Termites cause structural damage long before you notice them. Learn the five early signs every homeowner should watch for.",
    content: [
      "Termites can quietly damage the structure of a home for years before visible signs appear. Catching an infestation early can save thousands of dollars in repairs.",
      "Look for mud tubes along the foundation, hollow-sounding wood, discarded wings near windowsills, tiny pinholes in drywall, and doors or windows that suddenly stick.",
      "An annual termite inspection is the most reliable way to catch activity before it spreads, especially in older homes or properties near mature trees.",
    ],
    category: "Prevention",
    date: "2026-07-30",
    readTime: "3 min read",
    author: "Amit Singh",
    photo: "woodlandHouse",
  },
  {
    slug: "how-often-should-you-schedule-professional-pest-control",
    title: "How Often Should You Schedule Professional Pest Control?",
    excerpt:
      "Quarterly, monthly, or one-time — how do you know which service schedule is right for your property?",
    content: [
      "The right service frequency depends on your climate, the age of your home, and the type of pests common in your area.",
      "Most homes do well on a quarterly plan that treats the exterior perimeter every season, while high-pressure properties near water or dense vegetation may benefit from monthly visits.",
      "Commercial kitchens and food-handling facilities typically require monthly service to stay compliant with health inspections.",
    ],
    category: "Guides",
    date: "2026-07-12",
    readTime: "3 min read",
    author: "Michael Brown",
    photo: "suburbStreet",
  },
  {
    slug: "seasonal-pest-guide-what-to-expect-every-quarter",
    title: "Seasonal Pest Guide: What to Expect Every Quarter",
    excerpt:
      "Different pests peak in different seasons. Here's what to watch for from spring through winter.",
    content: [
      "Spring brings ants and termite swarmers as colonies become active again after winter dormancy.",
      "Summer is peak season for mosquitoes and cockroaches thanks to warmth and humidity.",
      "Fall is when rodents begin looking for warm places to nest indoors, and winter often reveals the gaps and cracks they used to get in.",
    ],
    category: "Guides",
    date: "2026-06-22",
    readTime: "5 min read",
    author: "Kathryn Murphy",
    photo: "cabinAutumn",
  },
  {
    slug: "commercial-pest-prevention-protecting-your-business-reputation",
    title: "Commercial Pest Prevention: Protecting Your Business Reputation",
    excerpt:
      "A single pest sighting can cost a business its reputation. Here's how proactive commercial pest programs protect your brand.",
    content: [
      "For restaurants, hospitality, and retail businesses, a single customer complaint about pests can spread online in hours.",
      "Proactive IPM programs use discreet monitoring stations, scheduled service documentation, and staff training to keep facilities audit-ready year-round.",
      "Choosing a provider that offers digital reporting means you can produce a clean service history whenever a health inspector asks for it.",
    ],
    category: "Commercial",
    date: "2026-05-30",
    readTime: "4 min read",
    author: "Michael Brown",
    photo: "restaurant",
  },
  {
    slug: "bed-bugs-101-detection-treatment-prevention-tips",
    title: "Bed Bugs 101: Detection, Treatment & Prevention Tips",
    excerpt:
      "Everything you need to know about spotting bed bugs early and preventing them from coming back.",
    content: [
      "Bed bugs are excellent hitchhikers, often arriving in luggage, used furniture, or secondhand clothing.",
      "Look for small rust-colored stains on sheets, a sweet musty odor, and tiny bites in clustered lines on the skin.",
      "Heat treatments remain the most reliable method for full elimination, since bed bugs and their eggs cannot survive prolonged high temperatures.",
    ],
    category: "Prevention",
    date: "2026-05-02",
    readTime: "4 min read",
    author: "Kristin Watson",
    photo: "bedroomCalm",
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatPostDate(date: string, month: "long" | "short" = "long") {
  // Dates are stored as calendar days; format in UTC so they never shift.
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-CA", {
    month,
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
