import { services, serviceGroups, type ServiceGroup } from "@/data/services";

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  heading: string;
  links: NavLink[];
};

export type NavItem = NavLink & {
  /** Grouped destinations shown in the dropdown / mobile accordion. */
  groups?: NavGroup[];
};

function serviceLinks(group: ServiceGroup): NavGroup {
  return {
    heading: serviceGroups[group].label,
    links: services
      .filter((s) => s.group === group)
      .map((s) => ({ label: s.title, href: `/services/${s.slug}`, description: s.audience })),
  };
}

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    groups: [serviceLinks("property"), serviceLinks("specialist")],
  },
  {
    label: "About",
    href: "/about-us",
    groups: [
      {
        heading: "Company",
        links: [
          { label: "About Us", href: "/about-us", description: "Our approach and values" },
          { label: "Our Team", href: "/team", description: "The people behind Ever Safe" },
          { label: "Gallery", href: "/gallery", description: "The spaces we help protect" },
        ],
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact-us" },
];

export const quoteLink: NavLink = { label: "Request a Quote", href: "/contact-us" };

export const footerNav: NavGroup[] = [
  {
    heading: "Services",
    links: services.map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Our Team", href: "/team" },
      { label: "Gallery", href: "/gallery" },
      { label: "Pricing Plans", href: "/pricing" },
      { label: "Blog", href: "/blog" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
];
