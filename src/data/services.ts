import type { LucideIcon } from "lucide-react";
import { Bug, Home, Building2, Rat, Bed, Layers, Sprout } from "lucide-react";
import type { PhotoKey } from "@/lib/photos";

export type ServiceGroup = "property" | "specialist";

export type Service = {
  slug: string;
  title: string;
  /** Short label used in navigation and compact lists. */
  shortTitle: string;
  icon: LucideIcon;
  group: ServiceGroup;
  /** Who the service is for, in plain language. */
  audience: string;
  summary: string;
  description: string;
  photo: PhotoKey;
  secondaryPhoto: PhotoKey;
  /** Signs and situations that usually lead customers to this service. */
  situations: string[];
  features: string[];
  process: { title: string; description: string }[];
};

export const serviceGroups: Record<ServiceGroup, { label: string; description: string }> = {
  property: {
    label: "Property programs",
    description: "Ongoing protection planned around how a home or business is used.",
  },
  specialist: {
    label: "Specialist treatments",
    description: "Focused programs for specific pests and the conditions behind them.",
  },
};

export const services: Service[] = [
  {
    slug: "residential-pest-control",
    title: "Residential Pest Control",
    shortTitle: "Residential",
    icon: Home,
    group: "property",
    audience: "For homeowners and tenants",
    summary:
      "Whole-home protection plans that keep ants, spiders, and seasonal invaders outside where they belong.",
    description:
      "Our residential program combines a detailed inspection with targeted interior and exterior treatments, so your family can enjoy a healthier home year-round. We tailor every visit to your property, pets, and the pest pressure in your neighbourhood.",
    photo: "residentialHome",
    secondaryPhoto: "livingRoomDog",
    situations: [
      "Ants or spiders appearing indoors each season",
      "Gaps around doors, windows or the foundation",
      "A new home you want inspected before problems start",
      "Children or pets you want a treatment plan built around",
    ],
    features: [
      "Free initial inspection & pest risk assessment",
      "Interior and exterior perimeter treatments",
      "Treatment plans adjusted for children and pets, with products applied according to label directions",
      "Quarterly follow-up visits included",
    ],
    process: [
      { title: "Inspect", description: "We identify entry points, nests, and conducive conditions." },
      { title: "Treat", description: "Targeted application indoors and around the foundation." },
      { title: "Seal", description: "Minor exclusion work to block common entry points." },
      { title: "Monitor", description: "Scheduled revisits to keep protection active." },
    ],
  },
  {
    slug: "commercial-pest-control",
    title: "Commercial Pest Control",
    shortTitle: "Commercial",
    icon: Building2,
    group: "property",
    audience: "For offices, restaurants, warehouses and retail",
    summary:
      "Discreet, compliance-ready pest programs for offices, restaurants, warehouses, and retail spaces.",
    description:
      "Downtime and reputation matter. Our commercial technicians work around your schedule and provide full documentation to help you prepare for health and safety audits with confidence.",
    photo: "commercialOffice",
    secondaryPhoto: "restaurant",
    situations: [
      "Food-handling areas that need documented service",
      "Shared buildings with recurring pest complaints",
      "Warehouses and loading areas exposed to the outdoors",
      "Upcoming inspections or audits",
    ],
    features: [
      "Custom IPM (Integrated Pest Management) plans",
      "Digital service reports for audits & compliance",
      "After-hours and weekend scheduling",
      "Dedicated account technician",
    ],
    process: [
      { title: "Assess", description: "Site walk-through to map risk zones." },
      { title: "Design", description: "Custom IPM plan built around your operating hours." },
      { title: "Deploy", description: "Discreet monitoring stations and treatments." },
      { title: "Report", description: "Digital logs delivered after every visit." },
    ],
  },
  {
    slug: "termite-control",
    title: "Termite Control & Prevention",
    shortTitle: "Termites",
    icon: Layers,
    group: "specialist",
    audience: "For wood-framed homes and older structures",
    summary:
      "Baiting systems and liquid barriers designed to stop termite colonies before they cause damage.",
    description:
      "Termite activity is easy to miss because it happens out of sight. Our termite program combines a structural inspection with monitoring stations and liquid treatments aimed at the colony itself, not just the damage you can see.",
    photo: "termitePorchHome",
    secondaryPhoto: "woodlandHouse",
    situations: [
      "Mud tubes along the foundation",
      "Hollow-sounding or softened wood",
      "Discarded wings near windowsills",
      "Doors or windows that suddenly stick",
    ],
    features: [
      "Full structural termite inspection",
      "In-ground baiting station installation",
      "Liquid barrier treatments",
      "Annual re-inspection & damage warranty",
    ],
    process: [
      { title: "Detect", description: "Moisture meters and visual inspection of the structure." },
      { title: "Bait", description: "Stations installed around the property perimeter." },
      { title: "Eliminate", description: "Colony-level treatment, not just surface treatment." },
      { title: "Warranty", description: "Ongoing coverage with annual check-ups." },
    ],
  },
  {
    slug: "bed-bug-treatment",
    title: "Bed Bug Treatment",
    shortTitle: "Bed bugs",
    icon: Bed,
    group: "specialist",
    audience: "For homes, rentals and multi-unit buildings",
    summary:
      "Heat and targeted treatments planned to reach bed bugs at every life stage, with a follow-up visit to confirm results.",
    description:
      "Bed bugs hide in the smallest cracks and reproduce quickly. We combine heat remediation with residual treatments to reach every stage of the infestation, then return to confirm the results.",
    photo: "bedroomBright",
    secondaryPhoto: "bedroomCalm",
    situations: [
      "Small rust-coloured marks on sheets or mattress seams",
      "Clustered bites appearing overnight",
      "Recent travel or second-hand furniture",
      "A sweet, musty odour in the bedroom",
    ],
    features: [
      "K9-assisted bed bug detection available",
      "Whole-room heat treatment options",
      "Mattress and furniture-safe applications",
      "Follow-up visit included in every package",
    ],
    process: [
      { title: "Confirm", description: "Inspection to confirm infestation and mapping." },
      { title: "Prepare", description: "Simple prep checklist provided to the homeowner." },
      { title: "Treat", description: "Heat and/or targeted treatment of affected rooms." },
      { title: "Verify", description: "Follow-up visit to confirm the results." },
    ],
  },
  {
    slug: "rodent-control",
    title: "Rodent Control",
    shortTitle: "Rodents",
    icon: Rat,
    group: "specialist",
    audience: "For houses, rentals and commercial buildings",
    summary:
      "Humane trapping, exclusion, and sanitation services that keep mice and rats out.",
    description:
      "Rodents chew wiring, contaminate food, and spread rapidly. Our exclusion-first approach seals the entry points that let them in while safely removing existing populations.",
    photo: "rodentFarmhouse",
    secondaryPhoto: "cabinAutumn",
    situations: [
      "Droppings in cupboards, attics or garages",
      "Scratching in walls or ceilings at night",
      "Gnaw marks on food packaging or wiring",
      "Cold weather pushing activity indoors",
    ],
    features: [
      "Full exclusion & entry-point sealing",
      "Tamper-resistant bait stations",
      "Attic and crawlspace sanitation add-ons",
      "Ongoing monitoring for multi-unit properties",
    ],
    process: [
      { title: "Locate", description: "Trace droppings, gnaw marks, and nesting sites." },
      { title: "Exclude", description: "Seal entry points around the roofline and foundation." },
      { title: "Remove", description: "Humane trapping and safe bait station placement." },
      { title: "Sanitize", description: "Optional attic and insulation clean-up." },
    ],
  },
  {
    slug: "mosquito-cockroach-control",
    title: "Mosquito & Cockroach Control",
    shortTitle: "Mosquitoes & cockroaches",
    icon: Sprout,
    group: "specialist",
    audience: "For yards, kitchens and food-service spaces",
    summary:
      "Seasonal misting and targeted gel baiting to reclaim your yard and kitchen from flying and crawling pests.",
    description:
      "From backyard barbecues to late-night kitchens, mosquitoes and cockroaches thrive where moisture and food are easy to find. We treat breeding sites and hot spots so you can take your space back.",
    photo: "backyardGarden",
    secondaryPhoto: "kitchenBright",
    situations: [
      "Standing water in planters, gutters or low spots",
      "Mosquitoes keeping you off the deck in summer",
      "Cockroaches near sinks, appliances or drains",
      "Commercial kitchens that need regular service",
    ],
    features: [
      "Backyard misting system installation",
      "Standing-water breeding site treatment",
      "Gel baiting for kitchens & commercial units",
      "Monthly seasonal service plans",
    ],
    process: [
      { title: "Survey", description: "Identify standing water and cockroach harbourage areas." },
      { title: "Treat", description: "Barrier misting and targeted gel bait application." },
      { title: "Reduce", description: "Breeding-site reduction recommendations." },
      { title: "Repeat", description: "Monthly visits through peak season." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const genericServiceIcon = Bug;
