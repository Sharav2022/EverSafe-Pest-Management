export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
];

export const pagesDropdown: NavLink[] = [
  { label: "Our Team", href: "/team" },
  { label: "Pricing Plans", href: "/pricing" },
  { label: "Gallery", href: "/gallery" },
];

export const contactLink: NavLink = { label: "Contact Us", href: "/contact-us" };
