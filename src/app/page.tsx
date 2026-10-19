import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Reassurance } from "@/components/home/Reassurance";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { Difference } from "@/components/home/Difference";
import { Pathways } from "@/components/home/Pathways";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { Philosophy } from "@/components/home/Philosophy";
import { BeforeYouBook } from "@/components/home/BeforeYouBook";
import { PricingPreview } from "@/components/home/PricingPreview";
import { BlogPreview } from "@/components/home/BlogPreview";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Reassurance />
      <ServicesShowcase />
      <Difference />
      <Pathways />
      <ProcessSteps />
      <Philosophy />
      <BeforeYouBook />
      <PricingPreview />
      <BlogPreview />
      <CTASection />
    </>
  );
}
