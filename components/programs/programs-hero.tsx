"use client";

import { motion } from "framer-motion";

export function ProgramsHero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-900 py-16 md:py-20 border-b border-slate-200/60 dark:border-slate-800/80">
      {/* Background lights */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-blue-100/50 dark:bg-blue-950/20 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-indigo-100/50 dark:bg-indigo-950/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <span className="inline-block rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0e7de8] mb-4">
            StudyZone pathways
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-[#201657] dark:text-white sm:text-5xl">
            All Programs & Curriculums
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500 dark:text-slate-400">
            Browse through our comprehensive range of Academic Programs, Technology & Skills programs, and Executive Education tracks.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
