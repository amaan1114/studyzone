"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Train,
  Bus,
  Car,
  Landmark,
} from "lucide-react";
import type { Center } from "@/types/center";

const iconMap: Record<string, React.ElementType> = {
  metro: Train,
  bus: Bus,
  park: Car,
  land: Landmark,
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
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

interface Props {
  center: Center;
}

export function CenterLocationContact({ center }: Props) {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-900 py-20 sm:py-24 lg:py-28">
      {/* Decorators */}
      <div
        className="absolute -left-20 top-10 h-72 w-72 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: center.accentColor }}
      />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#f33255]/8 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#1064c7] to-transparent opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
          className="mx-auto max-w-2xl text-center"
        >
          <p
            className="text-xs font-semibold uppercase tracking-[0.32em]"
            style={{ color: center.accentColor }}
          >
            Find Us
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#201657] dark:text-white sm:text-4xl lg:text-5xl">
            Location &amp; Contact
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"
        >
          {/* ── Left: info card ── */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-6 rounded-[2rem] border border-slate-200 dark:border-slate-700 bg-[#f8fafc] dark:bg-slate-900 p-7 shadow-[0_14px_40px_rgba(15,23,42,0.05)] sm:p-8"
          >
            {/* Address */}
            <div>
              <p
                className="mb-3 text-xs font-bold uppercase tracking-[0.28em]"
                style={{ color: center.accentColor }}
              >
                Address
              </p>
              <div className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400 leading-6">
                <MapPin
                  className="mt-0.5 size-4 shrink-0"
                  style={{ color: center.accentColor }}
                />
                {center.address}
              </div>
            </div>

            <div className="h-px w-full bg-linear-to-r from-slate-200 via-slate-100 to-transparent dark:from-slate-700 dark:via-slate-800" />

            {/* Contact */}
            <div>
              <p
                className="mb-3 text-xs font-bold uppercase tracking-[0.28em]"
                style={{ color: center.accentColor }}
              >
                Contact
              </p>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href={`tel:${center.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 transition-colors hover:text-[#1064c7]"
                  >
                    <Phone className="size-4 shrink-0 text-slate-400" />
                    {center.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${center.email}`}
                    className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 transition-colors hover:text-[#1064c7]"
                  >
                    <Mail className="size-4 shrink-0 text-slate-400" />
                    {center.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="h-px w-full bg-linear-to-r from-slate-200 via-slate-100 to-transparent dark:from-slate-700 dark:via-slate-800" />

            {/* Hours */}
            <div>
              <p
                className="mb-3 text-xs font-bold uppercase tracking-[0.28em]"
                style={{ color: center.accentColor }}
              >
                Hours
              </p>
              <ul className="space-y-2.5">
                {center.hours.map((h) => (
                  <li key={h.label} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <Clock className="mt-0.5 size-4 shrink-0 text-slate-400" />
                    <span>
                      <span className="font-semibold text-slate-700 dark:text-slate-200">{h.label}: </span>
                      {h.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-px w-full bg-linear-to-r from-slate-200 via-slate-100 to-transparent dark:from-slate-700 dark:via-slate-800" />

            {/* Getting Here */}
            <div>
              <p
                className="mb-3 text-xs font-bold uppercase tracking-[0.28em]"
                style={{ color: center.accentColor }}
              >
                Getting Here
              </p>
              <ul className="space-y-2.5">
                {center.gettingHere.map((g, i) => {
                  const Icon = iconMap[g.icon] ?? MapPin;
                  return (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                      <Icon className="mt-0.5 size-4 shrink-0 text-slate-400" />
                      <span
                        dangerouslySetInnerHTML={{
                          __html: g.text.replace(
                            /^([^:]+:)/,
                            '<strong class="text-slate-700 dark:text-slate-200">$1</strong>',
                          ),
                        }}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* CTA */}
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(center.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f33255] hover:text-[#f33255] active:scale-[0.98]"
            >
              <MapPin className="size-4" />
              Open in Google Maps
            </a>
          </motion.div>

          {/* ── Right: map embed ── */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-[#201657]/5 dark:bg-white/5" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 dark:border-slate-700 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
              {/* Accent top bar */}
              <div
                className="h-1 w-full"
                style={{
                  background: `linear-gradient(to right, ${center.accentColor}, #f33255)`,
                }}
              />
              <iframe
                title={`${center.name} map`}
                src={center.mapEmbedUrl}
                width="100%"
                height="480"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
