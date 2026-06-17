"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Users, Building2 } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
};

const highlights = [
  { label: "Study Centers", value: "3", icon: Building2 },
  { label: "Students Supported", value: "125+", icon: Users },
  { label: "Focus First", value: "365 Days", icon: BadgeCheck },
];

export function AboutUsHero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-900">
      <div className="absolute inset-0 bg-linear-to-br from-[#1064c7]/8 via-white dark:via-slate-900 to-[#f33255]/8" />
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#1064c7]/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#f33255]/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-4.5rem)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid w-full gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"
        >
          <div className="max-w-2xl">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-[#f33255]/15 bg-white/80 dark:bg-slate-800/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#f33255] shadow-sm backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-[#f33255]" />
              About StudyZone365
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-6 text-4xl font-bold tracking-tight text-[#201657] dark:text-white sm:text-5xl lg:text-6xl"
            >
              A calm, focused space built for serious learning.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg"
            >
              StudyZone365 creates modern physical study environments where students
              can stay disciplined, connected, and comfortable while they prepare for
              important goals.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#story"
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#f33255] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(243,50,85,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e62c4d] active:scale-[0.98]"
              >
                Learn More
                <ArrowRight className="size-4" />
              </a>

              <a
                href="#centers"
                className="inline-flex cursor-pointer items-center justify-center rounded-full border border-[#201657]/15 dark:border-slate-600 bg-white dark:bg-slate-800 px-6 py-3 text-sm font-semibold text-[#201657] dark:text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f33255] hover:text-[#f33255] active:scale-[0.98]"
              >
                Explore Centers
              </a>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="relative">
            <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-[2rem] bg-[#201657]/5 dark:bg-slate-700/30" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 dark:border-slate-700 bg-white/75 dark:bg-slate-800/75 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-md sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {highlights.map((highlight, index) => {
                  const Icon = highlight.icon;

                  return (
                    <motion.div
                      key={highlight.label}
                      variants={itemVariants}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="rounded-[1.5rem] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-3xl font-bold tracking-tight text-[#1064c7]">
                            {highlight.value}
                          </p>
                          <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">
                            {highlight.label}
                          </p>
                        </div>
                        <div className="flex size-12 items-center justify-center rounded-full bg-[#f33255]/10 text-[#f33255]">
                          <Icon className="size-5" />
                        </div>
                      </div>

                      <div className="mt-4 h-px w-full bg-linear-to-r from-slate-200 via-slate-100 to-transparent dark:from-slate-700 dark:via-slate-800 dark:to-transparent" />

                      <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">
                        {index === 0
                          ? "Focused study spaces across our locations."
                          : index === 1
                            ? "A growing community of learners using the same calm system."
                            : "Open daily for consistent, long-term preparation."}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
