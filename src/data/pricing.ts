export type PricingPlan = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  popular?: boolean;
  features: string[];
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: "$49",
    cadence: "/ visit",
    description: "One-time treatment for a single, contained pest issue.",
    features: [
      "Full property inspection",
      "One targeted treatment visit",
      "30-day service guarantee",
      "Digital service report",
    ],
  },
  {
    name: "Standard",
    price: "$89",
    cadence: "/ month",
    description: "Ongoing quarterly protection for the whole property.",
    popular: true,
    features: [
      "Everything in Basic",
      "Quarterly exterior treatments",
      "Free re-service between visits",
      "Priority scheduling",
      "Seasonal pest-specific add-ons",
    ],
  },
  {
    name: "Premium",
    price: "$149",
    cadence: "/ month",
    description: "Comprehensive coverage for high pest-pressure properties.",
    features: [
      "Everything in Standard",
      "Monthly interior & exterior visits",
      "Termite monitoring stations included",
      "Rodent exclusion inspection",
      "24/7 emergency call-outs",
    ],
  },
];
