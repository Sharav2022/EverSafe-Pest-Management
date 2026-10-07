import type { LucideIcon } from "lucide-react";
import {
  Bug,
  Home,
  Building2,
  Rat,
  Bed,
  Layers,
  Sprout,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  description: string;
  image: string;
  features: string[];
  process: { title: string; description: string }[];
};

export const services: Service[] = [
  {
    slug: "residential-pest-control",
    title: "Residential Pest Control",
    icon: Home,
    summary:
      "Whole-home protection plans that keep ants, spiders, and seasonal invaders outside where they belong.",
    description:
      "Our residential program combines a detailed inspection with targeted interior and exterior treatments, so your family can enjoy a healthier home year-round. We tailor every visit to your property, pets, and the pest pressure in your neighborhood.",
    image: "technician-yard",
    features: [
      "Free initial inspection & pest risk assessment",
      "Interior and exterior perimeter treatments",
      "Pet and child-safe, EPA-registered products",
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
    icon: Building2,
    summary:
      "Discreet, compliance-ready pest programs for offices, restaurants, warehouses, and retail spaces.",
    description:
      "Downtime and reputation matter. Our commercial technicians work around your schedule and provide full documentation to help you pass health and safety audits with confidence.",
    image: "technician-commercial",
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
    icon: Layers,
    summary:
      "Advanced baiting systems and liquid barriers that stop termite colonies before they cause damage.",
    description:
      "Termites cause billions in damage every year because the signs are easy to miss. Our termite specialists install monitoring stations and liquid treatments engineered to eliminate the colony at the source.",
    image: "technician-house",
    features: [
      "Full structural termite inspection",
      "In-ground baiting station installation",
      "Liquid barrier treatments",
      "Annual re-inspection & damage warranty",
    ],
    process: [
      { title: "Detect", description: "Moisture meters and visual inspection of the structure." },
      { title: "Bait", description: "Stations installed around the property perimeter." },
      { title: "Eliminate", description: "Colony-level elimination, not just surface treatment." },
      { title: "Warranty", description: "Ongoing coverage with annual check-ups." },
    ],
  },
  {
    slug: "bed-bug-treatment",
    title: "Bed Bug Treatment",
    icon: Bed,
    summary:
      "Heat and targeted chemical treatments that eliminate bed bugs in every life stage, guaranteed.",
    description:
      "Bed bugs hide in the smallest cracks and reproduce quickly. We combine heat remediation with residual treatments to reach every stage of the infestation in a single, thorough visit.",
    image: "technician-indoor",
    features: [
      "K9-assisted bed bug detection available",
      "Whole-room heat treatment options",
      "Mattress and furniture-safe applications",
      "Follow-up visit included in every package",
    ],
    process: [
      { title: "Confirm", description: "Inspection to confirm infestation and mapping." },
      { title: "Prepare", description: "Simple prep checklist provided to the homeowner." },
      { title: "Treat", description: "Heat and/or chemical treatment of affected rooms." },
      { title: "Verify", description: "Follow-up visit to confirm full elimination." },
    ],
  },
  {
    slug: "rodent-control",
    title: "Rodent Control",
    icon: Rat,
    summary:
      "Humane trapping, exclusion, and sanitation services that keep mice and rats out for good.",
    description:
      "Rodents chew wiring, contaminate food, and spread rapidly. Our exclusion-first approach seals the entry points that attract them while safely removing existing populations.",
    image: "technician-exterior",
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
    icon: Sprout,
    summary:
      "Seasonal misting and targeted gel baiting to reclaim your yard and kitchen from flying and crawling pests.",
    description:
      "From backyard barbecues to late-night kitchens, mosquitoes and cockroaches thrive where moisture and food are easy to find. We treat breeding sites and hot spots so you can take your space back.",
    image: "technician-spray",
    features: [
      "Backyard misting system installation",
      "Standing-water breeding site treatment",
      "Gel baiting for kitchens & commercial units",
      "Monthly seasonal service plans",
    ],
    process: [
      { title: "Survey", description: "Identify standing water and cockroach harborage areas." },
      { title: "Treat", description: "Barrier misting and targeted gel bait application." },
      { title: "Reduce", description: "Breeding-site reduction recommendations." },
      { title: "Repeat", description: "Monthly visits through peak season." },
    ],
  },
];

export const genericServiceIcon = Bug;
