"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Users,
  Monitor,
  Wifi,
  Wind,
  ShoppingBag,
  UsersRound,
  ShieldCheck,
  Lock,
  Bus,
  Phone,
  Mail,
  PhoneCall,
  Images,
  ConciergeBell,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import centersData from "@/data/centers.json";
import type { Center } from "@/types/center";

const facilityIconMap: Record<string, React.ElementType> = {
  "Air-Conditioned Study Areas": Wind,
  "Small Pantry": ShoppingBag,
  "Meeting Room": UsersRound,
  "Secure Environment": ShieldCheck,
  "Adjacent to Metro Stations": Bus,
  "Fully-Equipped Computer Systems": Monitor,
  "24/7 Security": Lock,
  "Conference Room": ConciergeBell,
};

const statIconMap: Record<string, React.ElementType> = {
  Capacity: Users,
  Workstations: Monitor,
  Internet: Wifi,
};

const centers = centersData as Center[];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: "easeOut" as const },
  },
};

export function CentersListing() {
  return (
    <section
      id="centers"
      className="relative overflow-hidden bg-[#f8fafc] dark:bg-slate-800 py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#1064c7]/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#0e7de8]/10 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#1064c7] to-transparent opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#0e7de8]">
            All Locations
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#201657] dark:text-white sm:text-4xl lg:text-5xl">
            Explore our premium study environments.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-500 dark:text-slate-400">
            Three purpose-built centers across Delhi and Bangalore — each designed for
            focus, comfort, and consistent daily use.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-6 lg:grid-cols-3"
        >
          {centers.map((center) => (
            <motion.article
              key={center.slug}
              variants={itemVariants}
              className="group flex flex-col rounded-[2rem] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-[0_14px_40px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(15,23,42,0.09)]"
            >
              {/* ── Card header ── */}
              <div
                className="rounded-t-[2rem] px-7 pt-7 pb-5"
                style={{ backgroundColor: `${center.accentColor}12` }}
              >
                <span
                  className="inline-flex items-center gap-1.5 rounded-full border bg-white/70 dark:bg-slate-900/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]"
                  style={{
                    color: center.accentColor,
                    borderColor: `${center.accentColor}30`,
                  }}
                >
                  <MapPin className="size-3" />
                  {center.city}
                </span>

                <h3
                  className="mt-3 text-xl font-bold tracking-tight"
                  style={{ color: center.accentColor }}
                >
                  {center.name}
                </h3>

                <p className="mt-2 flex items-start gap-2 text-xs leading-5 text-slate-500">
                  <MapPin className="mt-0.5 size-3.5 shrink-0 text-slate-400" />
                  {center.address}
                </p>
              </div>

              {/* ── Stats row ── */}
              <div className="grid grid-cols-3 divide-x divide-slate-100 dark:divide-slate-700 border-y border-slate-100 dark:border-slate-700">
                {center.stats.map((stat) => {
                  const Icon = statIconMap[stat.label] ?? Monitor;
                  return (
                    <div
                      key={stat.label}
                      className="flex flex-col items-center gap-1 px-3 py-4 text-center"
                    >
                      <Icon
                        className="size-4 shrink-0"
                        style={{ color: center.accentColor }}
                      />
                      <p className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 leading-tight">
                        {stat.value}
                      </p>
                      <p className="text-[10px] text-slate-400">{stat.label}</p>
                    </div>
                  );
                })}
              </div>

              {/* ── Body ── */}
              <div className="flex flex-1 flex-col gap-6 px-7 py-6">
                <div>
                  <p
                    className="mb-3 text-xs font-bold uppercase tracking-[0.25em]"
                    style={{ color: center.accentColor }}
                  >
                    Facilities
                  </p>
                  <ul className="space-y-2">
                    {center.facilities.map((f) => {
                      const Icon = facilityIconMap[f] ?? ShieldCheck;
                      return (
                        <li
                          key={f}
                          className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-400"
                        >
                          <Icon className="size-3.5 shrink-0 text-slate-400" />
                          {f}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="h-px w-full bg-linear-to-r from-slate-200 via-slate-100 to-transparent dark:from-slate-700 dark:via-slate-800 dark:to-transparent" />

                <div>
                  <p
                    className="mb-3 text-xs font-bold uppercase tracking-[0.25em]"
                    style={{ color: center.accentColor }}
                  >
                    Contact Information
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                      <Mail className="size-3.5 shrink-0 text-slate-400" />
                      <a
                        href={`mailto:${center.email}`}
                        className="truncate transition-colors hover:text-[#1064c7]"
                      >
                        {center.email}
                      </a>
                    </li>
                    <li className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                      <Phone className="size-3.5 shrink-0 text-slate-400" />
                      <a
                        href={`tel:${center.phone.replace(/\s/g, "")}`}
                        className="transition-colors hover:text-[#1064c7]"
                      >
                        {center.phone}
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="mt-auto flex gap-3">
                  <a
                    href={`tel:${center.phone.replace(/\s/g, "")}`}
                    className="flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0e7de8] hover:text-[#0e7de8] active:scale-[0.98]"
                  >
                    <PhoneCall className="size-4" />
                    Contact Us
                  </a>
                  <Link
                    href={`/centers/${center.slug}`}
                    className="flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(14,125,232,0.22)] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
                    style={{ backgroundColor: "#0e7de8" }}
                  >
                    <Images className="size-4" />
                    View Center
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
