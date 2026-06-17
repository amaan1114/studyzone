import { Hero } from "../components/landingPage/hero";
import { WhatWeProvide } from "../components/landingPage/what-we-provide";
import { StudyCenters } from "../components/landingPage/study-centers";
import { StudentTestimonials } from "../components/landingPage/student-testimonials";
import { StatsSection } from "../components/ui/stats-section";
import { OpportunitySection } from "../components/landingPage/opportunity-section";
import { CTASection } from "../components/landingPage/cta-section";
import { Footer } from "../components/landingPage/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatWeProvide />
      <StudyCenters />
      <StudentTestimonials />
      <StatsSection />
      <OpportunitySection />
      <CTASection />
      <Footer />
    </main>
  );
}
