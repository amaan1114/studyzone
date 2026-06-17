"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";

const centers = [
  {
    city: "Delhi (Kalkaji)",
    location: "Kalkaji, New Delhi",
    image: "/images/kalkaji-1.jpg",
  },
  {
    city: "Bangalore (Kalyan Nagar)",
    location: "HRBR Layout (KN), Bengaluru",
    image: "/images/kn-1.jpeg",
  },
  {
    city: "Bangalore (Sarjapur Road)",
    location: "Sarjapur Road, Bengaluru",
    image: "/images/spr-1.jpg",
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

const cardVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export function StudyCenters() {
  return (
    <section className="relative overflow-x-clip bg-white dark:bg-slate-900 py-0">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-pink-100/50 dark:bg-pink-950/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-purple-100/40 dark:bg-purple-950/25 blur-3xl"
      />

      <div className="relative w-full">
        <motion.div
          className="mt-0 min-h-[300vh] space-y-0"
        >
          {centers.map((center, index) => (
            <motion.article
              key={center.city}
              style={{ zIndex: index + 1 }}
              className="sticky top-0 h-screen w-full overflow-hidden bg-white dark:bg-slate-900"
            >
              <div className="relative h-full w-full">
                <Image
                  src={center.image}
                  alt={center.city}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0f172a]/80 via-[#0f172a]/35 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-br from-[#1064c7]/20 via-transparent to-[#f33255]/10" />

                <div className="relative flex h-full items-end">
                  <div className="w-full px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
                    <div className="max-w-2xl rounded-[2rem] border border-white/15 bg-white/10 p-6 text-white backdrop-blur-md sm:p-8">
                      <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/80">
                        <span className="rounded-full bg-[#f33255] px-3 py-1 text-[10px] tracking-[0.32em] text-white shadow-sm">
                          0{index + 1}
                        </span>
                        <span>Study Center</span>
                      </div>

                      <h3 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                        {center.city}
                      </h3>

                      <div className="mt-5 h-px w-full bg-linear-to-r from-white/30 via-white/15 to-transparent" />

                      <div className="mt-5 flex items-start gap-2 text-sm text-white/85 sm:text-base">
                        <MapPin className="mt-0.5 size-4 shrink-0 text-[#f33255]" />
                        <span>{center.location}</span>
                      </div>

                      <button
                        type="button"
                        className="mt-8 inline-flex h-12 items-center justify-center rounded-full border border-white/25 bg-white/10 px-5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#201657] active:scale-[0.98] cursor-pointer"
                      >
                        View Gallery
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
