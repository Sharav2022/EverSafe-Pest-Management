// ON HOLD — not rendered anywhere on the site.
// These reviews share their names with the team and blog authors, so their
// authenticity and approval could not be confirmed. Replace with genuine,
// approved customer reviews (with permission) before displaying any of them.
export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Kristin Watson",
    role: "Homeowner, Maple Street",
    quote:
      "Excellent service from start to finish. The team was professional, punctual, and completely eliminated our pest problem. The technician explained everything clearly and followed up a week later to confirm it was gone.",
    rating: 5,
  },
  {
    name: "Amit Singh",
    role: "Warehouse Supervisor",
    quote:
      "We switched to Ever Safe for our warehouse and haven't looked back. Their digital reports make our health inspections effortless, and their technicians always work around our shift schedule.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    role: "Restaurant Owner",
    quote:
      "Reliable, affordable, and genuinely eco-conscious. They follow strict safety standards, which matters a lot for a working kitchen. Highly recommend for any commercial property.",
    rating: 5,
  },
  {
    name: "Kathryn Murphy",
    role: "Property Manager",
    quote:
      "Managing pest control across twelve units used to be a nightmare. Ever Safe's account manager keeps every property on schedule and tenants have stopped complaining entirely.",
    rating: 5,
  },
];
