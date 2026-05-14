import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ImportanceSection } from "@/components/sections/ImportanceSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { ObjectivesSection } from "@/components/sections/ObjectivesSection";
import { TopicsRoadmapSection } from "@/components/sections/TopicsRoadmapSection";
import { WorkflowDemoSection } from "@/components/sections/WorkflowDemoSection";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { StudentTypesSection } from "@/components/sections/StudentTypesSection";
import { InstructorSection } from "@/components/sections/InstructorSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
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
        <StudentTypesSection />
        <InstructorSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
