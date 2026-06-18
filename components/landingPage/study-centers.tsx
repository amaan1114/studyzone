"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, Users, Monitor } from "lucide-react";

const centers = [
  {
    city: "Delhi (Kalkaji)",
    location: "Kalkaji, New Delhi",
    image: "/images/kalkaji-1.jpg",
    slug: "kalkaji",
    accentColor: "#1064c7",
    capacity: "25 Students",
    workstations: "20 Desks",
  },
  {
    city: "Bangalore (Kalyan Nagar)",
    location: "HRBR Layout (KN), Bengaluru",
    image: "/images/kn-1.jpeg",
    slug: "kalyan-nagar",
    accentColor: "#0e7de8",
    capacity: "50 Students",
    workstations: "35 Desks",
  },
  {
    city: "Bangalore (Sarjapur Road)",
    location: "Sarjapur Road, Bengaluru",
    image: "/images/spr-1.jpg",
    slug: "sarjapur",
    accentColor: "#201657",
    capacity: "65 Students",
    workstations: "60 Desks",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] as const },
  },
};

export function StudyCenters() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] dark:bg-slate-900 py-20 sm:py-24">
      {/* Background blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-blue-100/50 dark:bg-blue-950/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-100/40 dark:bg-blue-950/25 blur-3xl"
      />
      {/* Top separator line */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-200 dark:via-blue-800/40 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mx-auto mb-5 h-1.5 w-20 rounded-full bg-[#0e7de8]" />
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#0e7de8]">
            Locations
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#201657] dark:text-white sm:text-4xl md:text-5xl">
            Our Study Centers
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400 sm:text-base">
            Three purpose-built spaces across Delhi and Bangalore — designed for
            focus, comfort, and consistent daily use.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {centers.map((center) => (
            <motion.article
              key={center.slug}
              variants={cardVariants}
              className="group flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={center.image}
                  alt={center.city}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Card body */}
              <div className="flex flex-1 flex-col gap-4 p-6">
                {/* Name & location */}
                <div>
                  <h3
                    className="text-lg font-bold tracking-tight leading-tight"
                    style={{ color: center.accentColor }}
                  >
                    {center.city}
                  </h3>
                  <div className="mt-2 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                    <MapPin className="size-3.5 shrink-0 text-slate-400 dark:text-slate-500" />
                    <span>{center.location}</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-linear-to-r from-slate-200 via-slate-100 to-transparent dark:from-slate-700 dark:via-slate-800 dark:to-transparent" />

                {/* Stats row */}
                <div className="grid grid-cols-2 gap-3">
                  <div
                    className="flex items-center gap-2 rounded-xl px-3 py-2.5"
                    style={{ backgroundColor: `${center.accentColor}0d` }}
                  >
                    <Users className="size-3.5 shrink-0" style={{ color: center.accentColor }} />
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{center.capacity}</span>
                  </div>
                  <div
                    className="flex items-center gap-2 rounded-xl px-3 py-2.5"
                    style={{ backgroundColor: `${center.accentColor}0d` }}
                  >
                    <Monitor className="size-3.5 shrink-0" style={{ color: center.accentColor }} />
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{center.workstations}</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-auto pt-1">
                  <Link
                    href={`/centers/${center.slug}`}
                    className="group/btn flex w-full items-center justify-center gap-2 rounded-xl border-2 py-2.5 text-sm font-semibold transition-all duration-200 active:scale-[0.98]"
                    style={{
                      borderColor: center.accentColor,
                      color: center.accentColor,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = center.accentColor;
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = center.accentColor;
                    }}
                  >
                    View Gallery
                    <ArrowRight className="size-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom link */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="mt-12 text-center"
        >
          <Link
            href="/centers"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-6 py-3 text-sm font-semibold text-[#201657] dark:text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0e7de8] hover:text-[#0e7de8] active:scale-[0.98]"
          >
            Explore All Centers
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
