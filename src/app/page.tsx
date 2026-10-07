import { Hero } from "@/components/home/Hero";
import { TrustStats } from "@/components/home/TrustStats";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { OurStory } from "@/components/home/OurStory";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { TeamPreview } from "@/components/home/TeamPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { PricingPreview } from "@/components/home/PricingPreview";
import { BlogPreview } from "@/components/home/BlogPreview";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStats />
      <WhyChooseUs />
      <ServicesShowcase />
      <OurStory />
      <ProcessSteps />
      <TeamPreview />
      <Testimonials />
      <PricingPreview />
      <BlogPreview />
      <CTASection />
    </>
  );
}
