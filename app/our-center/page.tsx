import { CenterHero } from "../../components/ourCenter/center-hero";
import { CentersListing } from "../../components/ourCenter/centers-listing";
import { CenterGallery } from "../../components/ourCenter/center-gallery";
import { CenterCta } from "../../components/ourCenter/center-cta";
import { Footer } from "../../components/landingPage/footer";
export default function OurCenterPage() {
  return (
    <main>
      <CenterHero />
      <CentersListing />
      <CenterCta />
      <Footer/>
    </main>
  );
}
