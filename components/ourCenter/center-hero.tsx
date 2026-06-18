"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Wifi, Zap, Volume2, Coffee, Clock } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
};

const amenities = [
  { icon: Wifi, label: "High-Speed WiFi" },
  { icon: Volume2, label: "Silent Zones" },
  { icon: Zap, label: "Power Backup" },
  { icon: Coffee, label: "Cafe Access" },
  { icon: Clock, label: "365 Days Open" },
];

const centers = [
  {
    city: "Delhi", area: "Kalkaji & South Delhi",
    accentColor: "#1064c7", bgAccent: "bg-[#1064c7]/8",
    description: "Quiet, air-conditioned workstations with high-speed internet in the heart of South Delhi.",
  },
  {
    city: "Bangalore", area: "Koramangala & JP Nagar",
    accentColor: "#0e7de8", bgAccent: "bg-[#0e7de8]/8",
    description: "Modern study spaces designed for Bangalore's ambitious learners and working professionals.",
  },
];

export function CenterHero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-900">
      <div className="absolute inset-0 bg-linear-to-br from-[#1064c7]/6 via-white dark:via-slate-900 to-[#0e7de8]/6" />
      <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-[#1064c7]/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#0e7de8]/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-4.5rem)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <motion.div variants={containerVariants} initial="hidden" animate="show"
          className="grid w-full gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

          <div className="max-w-2xl">
            <motion.div variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-[#1064c7]/15 bg-white/80 dark:bg-slate-800/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#1064c7] shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#0e7de8]" />
              Our Study Centers
            </motion.div>

            <motion.h1 variants={itemVariants}
              className="mt-6 text-4xl font-bold tracking-tight text-[#201657] dark:text-white sm:text-5xl lg:text-6xl">
              Spaces built for{" "}<span className="text-[#0e7de8]">serious</span>{" "}learners.
            </motion.h1>

            <motion.p variants={itemVariants}
              className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
              Modern physical study centers with dedicated workstations, high-speed internet, and a
              distraction-free environment — across Delhi and Bangalore.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-2">
              {amenities.map(({ icon: Icon, label }) => (
                <span key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 shadow-sm">
                  <Icon className="size-3.5 text-[#1064c7]" />{label}
                </span>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#centers"
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0e7de8] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(14,125,232,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0a6fd4] active:scale-[0.98]">
                Explore Centers <ArrowRight className="size-4" />
              </a>
              <a href="#amenities"
                className="inline-flex cursor-pointer items-center justify-center rounded-full border border-[#201657]/15 dark:border-slate-600 bg-white dark:bg-slate-800 px-6 py-3 text-sm font-semibold text-[#201657] dark:text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0e7de8] hover:text-[#0e7de8] active:scale-[0.98]">
                View Amenities
              </a>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="relative">
            <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-[2rem] bg-[#201657]/5 dark:bg-slate-700/30" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-md sm:p-7">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Our Locations</p>
              <div className="grid gap-4">
                {centers.map((center) => (
                  <motion.div key={center.city} variants={itemVariants}
                    className="group rounded-[1.5rem] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                    <div className="flex items-center gap-3">
                      <div className={`flex size-11 shrink-0 items-center justify-center rounded-2xl ${center.bgAccent}`}>
                        <MapPin className="size-5" style={{ color: center.accentColor }} />
                      </div>
                      <div>
                        <p className="text-lg font-bold tracking-tight" style={{ color: center.accentColor }}>{center.city}</p>
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{center.area}</p>
                      </div>
                    </div>
                    <div className="mt-4 h-px w-full bg-linear-to-r from-slate-200 via-slate-100 to-transparent dark:from-slate-700 dark:via-slate-800 dark:to-transparent" />
                    <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">{center.description}</p>
                  </motion.div>
                ))}
              </div>
              <p className="mt-5 text-center text-xs text-slate-400">More locations arriving soon across India.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
