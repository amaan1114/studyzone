import { notFound } from "next/navigation";
import centersData from "@/data/centers.json";
import type { Center } from "@/types/center";
import { CenterDetailHero } from "@/components/ourCenter/center-detail-hero";
import { CenterDetailGallery } from "@/components/ourCenter/center-detail-gallery";
import { CenterLocationContact } from "@/components/ourCenter/center-location-contact";
import { CenterDetailCta } from "@/components/ourCenter/center-detail-cta";
import { Footer } from "@/components/landingPage/footer";

const centers = centersData as Center[];

export function generateStaticParams() {
  return centers.map((c) => ({ slug: c.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function CenterPage({ params }: Props) {
  const { slug } = await params;
  const center = centers.find((c) => c.slug === slug);

  if (!center) notFound();

  const otherCenters = centers.filter((c) => c.slug !== slug);

  return (
    <main>
      <CenterDetailHero center={center} otherCenters={otherCenters} />
      <CenterDetailGallery center={center} />
      <CenterLocationContact center={center} />
      <CenterDetailCta center={center} />
      <Footer/>

    </main>
  );
}
