"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import type { Center } from "@/types/center";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
};

interface CenterDetailHeroProps {
  center: Center;
  otherCenters: Center[];
}

export function CenterDetailHero({ center, otherCenters }: CenterDetailHeroProps) {
  const isOpen = center.statusType === "open";

  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-900">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{ background: `radial-gradient(ellipse at 20% 50%, ${center.accentColor}, transparent 60%), radial-gradient(ellipse at 80% 50%, #0e7de8, transparent 60%)` }}
      />
      <div className="absolute -left-20 top-10 h-80 w-80 rounded-full blur-3xl opacity-10" style={{ backgroundColor: center.accentColor }} />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#0e7de8]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
          <Link href="/centers" className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 transition-colors hover:text-[#0e7de8]">
            <ArrowLeft className="size-3.5" />All Centers
          </Link>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="show"
          className="mt-8 grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">

          {/* Left */}
          <div>
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border bg-white/80 dark:bg-slate-800/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] shadow-sm"
                style={{ color: center.accentColor, borderColor: `${center.accentColor}30` }}>
                <MapPin className="size-3" />{center.city}
              </span>
              <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold ${
                isOpen ? "border-emerald-200 bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:border-emerald-800/40"
                       : "border-amber-200 bg-amber-50 text-amber-600 dark:bg-amber-950/30 dark:border-amber-800/40"}`}>
                <span className={`size-1.5 rounded-full ${isOpen ? "bg-emerald-500" : "bg-amber-500"}`} />
                {center.status}
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants}
              className="mt-5 text-4xl font-bold tracking-tight text-[#201657] dark:text-white sm:text-5xl lg:text-6xl">
              {center.name}<br />
              <span style={{ color: center.accentColor }} className="text-3xl sm:text-4xl lg:text-5xl">Center</span>
            </motion.h1>

            <motion.p variants={itemVariants}
              className="mt-5 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
              {center.tagline}
            </motion.p>

            <motion.div variants={itemVariants}
              className="mt-5 inline-flex items-start gap-2 rounded-2xl border border-slate-200 dark:border-slate-700 bg-[#f8fafc] dark:bg-slate-800 px-4 py-3 text-sm text-slate-500 dark:text-slate-400">
              <MapPin className="mt-0.5 size-4 shrink-0 text-slate-400" />{center.address}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 grid grid-cols-3 gap-3">
              {center.highlights.map((h) => (
                <div key={h.label}
                  className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-[#f8fafc] dark:bg-slate-800 px-4 py-4 text-center">
                  <p className="text-lg font-bold tracking-tight" style={{ color: center.accentColor }}>{h.value}</p>
                  <p className="mt-1 text-[11px] font-medium text-slate-500 dark:text-slate-400">{h.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${center.phone.replace(/\s/g, "")}`}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(14,125,232,0.25)] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
                style={{ backgroundColor: "#0e7de8" }}>
                <Phone className="size-4" />Contact Us<ArrowRight className="size-4" />
              </a>
              <a href={`mailto:${center.email}`}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-[#201657]/15 dark:border-slate-600 bg-white dark:bg-slate-800 px-6 py-3 text-sm font-semibold text-[#201657] dark:text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0e7de8] hover:text-[#0e7de8] active:scale-[0.98]">
                <Mail className="size-4" />Send Email
              </a>
            </motion.div>
          </div>

          {/* Right */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-[#201657]/5 dark:bg-slate-700/30" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
              <div className="grid grid-cols-3 divide-x divide-slate-100 dark:divide-slate-700 border-b border-slate-100 dark:border-slate-700">
                {center.stats.map((s) => (
                  <div key={s.label} className="flex flex-col items-center gap-1 px-3 py-5 text-center">
                    <p className="text-xl font-bold tracking-tight" style={{ color: center.accentColor }}>{s.value}</p>
                    <p className="text-[11px] text-slate-400">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="p-6 sm:p-7">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em]" style={{ color: center.accentColor }}>Facilities</p>
                <ul className="space-y-2.5">
                  {center.facilities.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="size-4 shrink-0" style={{ color: center.accentColor }} />{f}
                    </li>
                  ))}
                </ul>

                <div className="my-6 h-px w-full bg-linear-to-r from-slate-200 via-slate-100 to-transparent dark:from-slate-700 dark:via-slate-800 dark:to-transparent" />

                <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-slate-400">Other Centers</p>
                <div className="space-y-2">
                  {otherCenters.map((other) => (
                    <Link key={other.slug} href={`/centers/${other.slug}`}
                      className="flex items-center gap-3 rounded-xl border border-slate-100 dark:border-slate-700 bg-[#f8fafc] dark:bg-slate-800 px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-200 dark:hover:border-slate-600 hover:bg-white dark:hover:bg-slate-700 hover:shadow-sm">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg opacity-80"
                        style={{ backgroundColor: `${other.accentColor}18` }}>
                        <MapPin className="size-3.5" style={{ color: other.accentColor }} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-[#201657] dark:text-white">{other.name}</p>
                        <p className="text-[11px] text-slate-400">{other.city}</p>
                      </div>
                      <ArrowRight className="size-3.5 shrink-0 text-slate-300" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
