"use client";

import { motion } from "framer-motion";
import { Building2, Monitor, Wifi } from "lucide-react";

const items = [
  {
    icon: Monitor,
    title: "Workstations & Devices",
    description:
      "Ready-to-use computers and quiet desks for uninterrupted live classes.",
  },
  {
    icon: Wifi,
    title: "Dual High-Speed Internet",
    description:
      "Reliable connectivity for classes, uploads, and separate browsing access.",
  },
  {
    icon: Building2,
    title: "Comfortable Study Centers",
    description:
      "Well-lit spaces in Delhi and Bangalore built for long focused sessions.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export function WhatWeProvide() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-900 py-20 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-12 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-100/45 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-200 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto mb-5 h-1.5 w-20 rounded-full bg-[#0e7de8]" />
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#0e7de8]">
            Built for deep focus
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#201657] dark:text-white sm:text-4xl md:text-5xl">
            What We Provide
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
            A simple, distraction-free setup with the essentials students need
            to stay consistent and productive.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mt-14 overflow-hidden rounded-[2rem] border border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-800/95 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm"
        >
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="border-b border-slate-200 dark:border-slate-700 px-8 py-8 sm:px-10 lg:border-b-0 lg:border-r bg-linear-to-br from-blue-50/60 to-white dark:from-blue-950/20 dark:to-slate-800">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Essentials that make the space feel complete
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Quiet work zones",
                  "Fast connectivity",
                  "Comfort-first seating",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-blue-100 dark:border-blue-800/40 bg-white dark:bg-slate-700 px-3 py-1 text-xs font-medium text-[#201657] dark:text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-8 h-px w-full bg-linear-to-r from-blue-200 via-slate-100 to-transparent dark:from-blue-800/40 dark:via-slate-700 dark:to-transparent" />
              <p className="mt-6 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
                A calm, focused environment with the few things students need
                most, presented in a cleaner layout that feels lighter than a
                standard card grid.
              </p>
            </div>

            <div className="divide-y divide-slate-200 dark:divide-slate-700">
              {items.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="group px-8 py-7 sm:px-10"
                >
                  <div className="flex items-start gap-5">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-blue-100 dark:border-blue-800/40 bg-blue-50 dark:bg-blue-950/30 text-[#0e7de8] transition-transform duration-200 group-hover:scale-[1.03]">
                      <item.icon className="size-6" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-3">
                          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0e7de8]">
                          0{index + 1}
                        </span>
                          <span className="h-px flex-1 bg-linear-to-r from-slate-200 via-slate-100 to-transparent dark:from-slate-700 dark:via-slate-800 dark:to-transparent" />
                      </div>

                        <p className="mt-3 text-lg font-semibold tracking-tight text-[#201657] dark:text-white sm:text-xl">
                        {item.title}
                      </p>

                      <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
