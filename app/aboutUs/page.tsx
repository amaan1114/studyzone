import { AboutUsHero } from "../../components/aboutUs/about-us-hero";
import { MissionSection } from "../../components/aboutUs/mission-section";
import { CoreValuesSection } from "../../components/aboutUs/core-values-section";
import { TeamSection } from "../../components/aboutUs/team-section";
import { StatsSection } from "../../components/ui/stats-section";
import { Footer } from "../../components/landingPage/footer";
export default function AboutUsPage() {
  return (
    <main>
      <AboutUsHero />
      <MissionSection />
      <CoreValuesSection />
      <TeamSection />
      <StatsSection />
      <Footer/>
    </main>
  );
}