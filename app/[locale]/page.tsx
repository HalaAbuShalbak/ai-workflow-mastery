import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ImportanceSection } from "@/components/sections/ImportanceSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { ObjectivesSection } from "@/components/sections/ObjectivesSection";
import { TopicsRoadmapSection } from "@/components/sections/TopicsRoadmapSection";
import { WorkflowDemoSection } from "@/components/sections/WorkflowDemoSection";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { FaqSection } from "@/components/sections/FaqSection";
import { InstructorSection } from "@/components/sections/InstructorSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ConsultationSection } from "@/components/sections/ConsultationSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main" className="relative">
        <HeroSection />
        <ImportanceSection />
        <ComparisonSection />
        <ObjectivesSection />
        <TopicsRoadmapSection />
        <WorkflowDemoSection />
        <MethodologySection />
        <FaqSection />
        <InstructorSection />
        <TestimonialsSection />
        <ConsultationSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
