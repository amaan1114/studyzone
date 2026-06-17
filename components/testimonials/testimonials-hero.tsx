"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Quote, Users, BadgeCheck } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
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

const statCards = [
  {
    value: "125+",
    label: "Happy Students",
    icon: Users,
    note: "Members across all our centers.",
  },
  {
    value: "95%",
    label: "Satisfaction Rate",
    icon: BadgeCheck,
    note: "Based on verified learner feedback.",
  },
  {
    value: "5★",
    label: "Average Rating",
    icon: Star,
    note: "Consistently rated across locations.",
  },
];

const stars = Array.from({ length: 5 });

export function TestimonialsHero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-900">
      <div className="absolute inset-0 bg-linear-to-br from-[#1064c7]/6 via-white to-[#f33255]/6 dark:via-slate-900" />
      <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-[#1064c7]/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#f33255]/10 blur-3xl" />
      <div className="absolute right-1/3 top-1/3 h-60 w-60 rounded-full bg-[#201657]/5 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-4.5rem)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid w-full gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"
        >
          {/* ── Left: copy ── */}
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-[#f33255]/15 dark:border-[#f33255]/25 bg-white/80 dark:bg-slate-900/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#f33255] shadow-sm backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-[#f33255]" />
              Student Success Stories
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="mt-6 text-4xl font-bold tracking-tight text-[#201657] dark:text-white sm:text-5xl lg:text-6xl"
            >
              Hear from our{" "}
              <span className="text-[#f33255]">members.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg"
            >
              Real stories from students who chose StudyZone365 to stay consistent,
              focused, and on track toward their goals.
            </motion.p>

            {/* Star row */}
            <motion.div
              variants={itemVariants}
              className="mt-7 flex items-center gap-3"
            >
              <div className="flex items-center gap-0.5 text-[#f33255]">
                {stars.map((_, i) => (
                  <Star key={i} className="size-5 fill-current" />
                ))}
              </div>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                95% satisfaction rate across all centers
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#testimonials"
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#f33255] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(243,50,85,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e62c4d] active:scale-[0.98]"
              >
                Read Stories
                <ArrowRight className="size-4" />
              </a>
              <Link
                href="/our-center"
                className="inline-flex cursor-pointer items-center justify-center rounded-full border border-[#201657]/15 dark:border-slate-700 bg-white dark:bg-slate-900 px-6 py-3 text-sm font-semibold text-[#201657] dark:text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f33255] hover:text-[#f33255] active:scale-[0.98]"
              >
                Explore Centers
              </Link>
            </motion.div>
          </div>

          {/* ── Right: stat cards ── */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-[2rem] bg-[#201657]/5 dark:bg-white/5" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/70 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-md sm:p-7">

              {/* Quote preview */}
              <div className="mb-5 rounded-[1.5rem] border border-slate-100 dark:border-slate-700 bg-[#f8fafc] dark:bg-slate-800 p-5">
                <Quote className="size-5 text-[#f33255]/40" />
                <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-400 italic">
                  &quot;The environment is welcoming, well-organized, and conducive to learning. I would gladly recommend the center to others.&quot;
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#1064c7]/10 text-[10px] font-bold text-[#1064c7]">
                    CB
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#201657] dark:text-white">Chinmayee Baitharu</p>
                    <p className="text-[10px] text-slate-400">MBA · Delhi (Kalkaji)</p>
                  </div>
                </div>
              </div>

              {/* Stat cards */}
              <div className="grid gap-3 sm:grid-cols-3">
                {statCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.label}
                      className="rounded-[1.5rem] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-2xl font-bold tracking-tight text-[#1064c7]">
                          {card.value}
                        </p>
                        <div className="flex size-9 items-center justify-center rounded-full bg-[#f33255]/10 text-[#f33255]">
                          <Icon className="size-4" />
                        </div>
                      </div>
                      <p className="mt-1.5 text-xs font-medium text-slate-600 dark:text-slate-300">{card.label}</p>
                      <div className="mt-3 h-px w-full bg-linear-to-r from-slate-200 via-slate-100 to-transparent dark:from-slate-700 dark:via-slate-800" />
                      <p className="mt-3 text-[11px] leading-5 text-slate-400">{card.note}</p>
                    </div>
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
