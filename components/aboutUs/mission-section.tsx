"use client";

import { motion } from "framer-motion";
import { Target, Sparkles } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
};

export function MissionSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] dark:bg-slate-800 py-20 sm:py-24 lg:py-28">
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#1064c7]/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#f33255]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center"
        >
          <motion.div variants={itemVariants} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#201657]/10 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#1064c7] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#f33255]" />
              Our Mission
            </div>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-[#201657] dark:text-white sm:text-4xl lg:text-5xl">
              We build study spaces that help people stay consistent.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
              StudyZone365 exists to make focused learning easier. We design calm,
              reliable environments where students can reduce distractions, build
              momentum, and keep moving toward long-term academic goals.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Comfortable physical environments",
                "Consistent daily access",
                "Quiet spaces for deeper focus",
                "Supportive learning community",
              ].map((point) => (
                <motion.div
                  key={point}
                  variants={itemVariants}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(15,23,42,0.08)]"
                >
                  <Sparkles className="size-4 shrink-0 text-[#f33255]" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-[#201657]/5 dark:bg-slate-700/30" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#1064c7]/10 text-[#1064c7]">
                  <Target className="size-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f33255]">
                    Focus first
                  </p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#201657] dark:text-white">
                    Our approach is simple and intentional.
                  </h3>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { value: "01", label: "Reduce noise" },
                  { value: "02", label: "Support routine" },
                  { value: "03", label: "Build confidence" },
                ].map((step) => (
                  <div
                    key={step.label}
                    className="rounded-2xl bg-[#f8fafc] dark:bg-slate-800 p-5 text-center"
                  >
                    <p className="text-2xl font-bold text-[#1064c7]">{step.value}</p>
                    <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">{step.label}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm leading-7 text-slate-500 dark:text-slate-400">
                Every choice in the space is meant to remove friction and keep attention
                where it belongs: on learning.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
