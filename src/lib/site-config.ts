// Central site metadata used for SEO, sitemap, robots, and structured data.
// Update NEXT_PUBLIC_SITE_URL once the production domain is chosen.
export const siteConfig = {
  name: "Ever Safe Pest Management",
  shortName: "Ever Safe",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.eversafepest.com",
  description:
    "Ever Safe Pest Management provides inspection-led pest control for homes and businesses from Mississauga, Ontario — residential, commercial, termite, bed bug, rodent, mosquito and cockroach services.",
  phone: "+1 437-833-9181",
  phoneHref: "tel:+14378339181",
  email: "info@eversafepest.com",
  emailHref: "mailto:info@eversafepest.com",
  address: {
    streetAddress: "2600 Skymark Ave Unit 9, Suite 104",
    addressLocality: "Mississauga",
    addressRegion: "ON",
    postalCode: "L4W 5B2",
    addressCountry: "CA",
  },
  // Published business hours. Confirm with the client before changing.
  hours: [
    { days: "Monday – Saturday", time: "9:00 AM – 7:00 PM" },
    { days: "Sunday", time: "Emergency calls only" },
  ],
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=2600+Skymark+Ave+Unit+9+Suite+104+Mississauga+ON+L4W+5B2",
};
