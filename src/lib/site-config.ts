// Central site metadata used for SEO, sitemap, robots, and structured data.
// Update NEXT_PUBLIC_SITE_URL once the production domain is chosen.
export const siteConfig = {
  name: "Ever Safe Pest Management",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.eversafepest.com",
  description:
    "Ever Safe Pest Management delivers eco-friendly, certified pest control for homes and businesses — residential, commercial, termite, rodent, bed bug and mosquito treatments.",
  phone: "+1 437-833-9181",
  phoneHref: "tel:+14378339181",
  email: "hello@eversafepest.com",
  address: {
    streetAddress: "2600 Skymark Ave Unit 9, Suite 104",
    addressLocality: "Mississauga",
    addressRegion: "ON",
    postalCode: "L4W 5B2",
    addressCountry: "CA",
  },
};
