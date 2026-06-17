import { ContactHero } from "@/components/contactUs/contact-hero";
import { ContactForm } from "@/components/contactUs/contact-form";
import { ContactLocations } from "@/components/contactUs/contact-locations";
import { Footer } from "@/components/landingPage/footer";

export default function ContactUsPage() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <ContactLocations />
      <Footer />
    </main>
  );
}
