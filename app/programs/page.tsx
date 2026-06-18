"use client";

import { ProgramsHero } from "@/components/programs/programs-hero";
import { ProgramsList } from "@/components/programs/programs-list";
import { Footer } from "@/components/landingPage/footer";

export default function ProgramsPage() {
  return (
    <div className="flex-1 bg-slate-50/30 dark:bg-slate-950 flex flex-col min-h-screen">
      <ProgramsHero />
      <ProgramsList />
      <Footer />
    </div>
  );
}
