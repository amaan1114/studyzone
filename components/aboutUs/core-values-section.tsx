"use client";

import { motion } from "framer-motion";
import { BookOpen, HeartHandshake, Globe2 } from "lucide-react";

const values = [
  {
    title: "Excellence in Education",
    description:
      "We strive to provide the highest quality study environments with cutting-edge technology and amenities.",
    icon: BookOpen,
  },
  {
    title: "Student Success",
    description:
      "Our primary focus is on ensuring the success and growth of every student who joins our community.",
    icon: HeartHandshake,
  },
  {
    title: "Accessibility",
    description:
      "We believe in making quality study spaces accessible to everyone, regardless of their background.",
    icon: Globe2,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
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

export function CoreValuesSection() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-900 py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#f33255] to-transparent opacity-70" />
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#f33255]/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#1064c7]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#f33255]">
              Our Core Values
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#201657] dark:text-white sm:text-4xl lg:text-5xl">
              What guides every StudyZone365 space.
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <motion.article
                  key={value.title}
                  variants={itemVariants}
                  className="group rounded-[2rem] border border-slate-200 dark:border-slate-700 bg-[#f8fafc] dark:bg-slate-800 p-7 shadow-[0_14px_40px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f33255]/25 hover:bg-white dark:hover:bg-slate-700 hover:shadow-[0_22px_55px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-white dark:bg-slate-900 text-[#f33255] shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <Icon className="size-6" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold tracking-tight text-[#201657] dark:text-white">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {value.description}
                  </p>

                  <div className="mt-6 h-px w-full bg-linear-to-r from-slate-200 via-slate-100 to-transparent dark:from-slate-700 dark:via-slate-800 dark:to-transparent" />

                  <p className="mt-5 text-sm font-semibold text-[#1064c7]">
                    Consistency over noise.
                  </p>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
