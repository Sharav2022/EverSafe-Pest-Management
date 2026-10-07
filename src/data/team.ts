export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: { label: string; href: string }[];
};

export const team: TeamMember[] = [
  {
    slug: "kathryn-murphy",
    name: "Kathryn Murphy",
    role: "Customer Success Manager",
    bio: "Kathryn leads client onboarding and makes sure every homeowner and business knows exactly what to expect at every visit.",
    image: "team-1",
    social: [
      { label: "LinkedIn", href: "#" },
      { label: "Twitter", href: "#" },
    ],
  },
  {
    slug: "michael-brown",
    name: "Michael Brown",
    role: "Chief Executive Officer",
    bio: "Michael founded EverSafe to bring transparent, eco-conscious pest control to homes and businesses across the region.",
    image: "team-2",
    social: [
      { label: "LinkedIn", href: "#" },
      { label: "Twitter", href: "#" },
    ],
  },
  {
    slug: "amit-singh",
    name: "Amit Singh",
    role: "Field Operations Supervisor",
    bio: "Amit oversees technician training and quality control, ensuring every treatment meets EverSafe's safety standard.",
    image: "team-3",
    social: [
      { label: "LinkedIn", href: "#" },
      { label: "Instagram", href: "#" },
    ],
  },
  {
    slug: "kristin-watson",
    name: "Kristin Watson",
    role: "Lead Pest Control Technician",
    bio: "Kristin is a licensed technician specializing in termite and bed bug remediation for residential clients.",
    image: "team-4",
    social: [
      { label: "LinkedIn", href: "#" },
      { label: "Twitter", href: "#" },
    ],
  },
];
