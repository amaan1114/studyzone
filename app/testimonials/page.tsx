import { TestimonialsHero } from "@/components/testimonials/testimonials-hero";
import { StudentTestimonials } from "@/components/landingPage/student-testimonials";
import { TestimonialForm } from "@/components/testimonials/testimonial-form";
import { TestimonialsCta } from "@/components/testimonials/testimonials-cta";
import { Footer } from "@/components/landingPage/footer";

export default function TestimonialsPage() {
  return (
    <main>
      <TestimonialsHero />
      <div id="testimonials">
        <StudentTestimonials />
      </div>
      <TestimonialForm />
      <TestimonialsCta />
      <Footer />
    </main>
  );
}
