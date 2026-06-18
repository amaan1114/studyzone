"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import centersData from "@/data/centers.json";
import type { Center } from "@/types/center";

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

export function ContactLocations() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Decorators */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#1064c7]/8 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#0e7de8]/8 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#0e7de8] to-transparent opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#0e7de8]">
            Find Us
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#201657] sm:text-4xl lg:text-5xl">
            Our Locations
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-500">
            Three purpose-built centers across Delhi and Bangalore — visit the one
            nearest to you.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-6 lg:grid-cols-3"
        >
          {centers.map((center) => (
            <motion.div
              key={center.slug}
              variants={itemVariants}
              className="group flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(15,23,42,0.09)]"
            >
              {/* Map embed */}
              <div className="relative h-52 w-full overflow-hidden">
                {/* "Open in Maps" pill */}
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(center.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#1064c7] shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
                >
                  Open in Maps
                  <ExternalLink className="size-3" />
                </a>

                <iframe
                  title={`${center.name} map`}
                  src={center.mapEmbedUrl}
                  width="100%"
                  height="208"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full"
                />
              </div>

              {/* Card body */}
              <div className="flex flex-1 flex-col gap-4 p-6">
                {/* Name */}
                <h3
                  className="text-lg font-bold tracking-tight"
                  style={{ color: center.accentColor }}
                >
                  {center.name}
                </h3>

                {/* Address */}
                <p className="flex items-start gap-2 text-sm leading-6 text-slate-500">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-slate-400" />
                  {center.address}
                </p>

                {/* View Details button */}
                <div className="mt-auto pt-2">
                  <Link
                    href={`/centers/${center.slug}`}
                    className="flex w-full items-center justify-center gap-2 rounded-full border-2 px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(14,125,232,0.18)] active:scale-[0.98]"
                    style={{
                      borderColor: center.accentColor,
                      color: center.accentColor,
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.backgroundColor = center.accentColor;
                      el.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.backgroundColor = "transparent";
                      el.style.color = center.accentColor;
                    }}
                  >
                    View Details
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
