"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/kalkaji-1.jpg",
  "/images/kn-1.jpeg",
  "/images/spr-1.jpg",
  "/images/Hero.png",
];

const galleryItems = [
  { label: "Main Study Area" },
  { label: "Computer Workstations" },
  { label: "Meeting Room" },
  { label: "Student Lounge" },
  { label: "Reception" },
  { label: "Center Exterior" },
  { label: "Silent Zone" },
  { label: "High-Speed WiFi Area" },
  { label: "Secure Entry" },
  { label: "24/7 Security" },
];

const tilesWithImages = galleryItems.map((item, i) => ({
  ...item,
  image: images[i % images.length],
}));

const track = [...tilesWithImages, ...tilesWithImages];

export function CenterGallery() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Decorators */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#1064c7]/8 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#0e7de8]/8 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#0e7de8] to-transparent opacity-40" />

      {/* Header */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#0e7de8]">
            Inside the Space
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#201657] sm:text-4xl lg:text-5xl">
            Center Gallery
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-500">
            A look at the rooms, zones, and amenities across our study centers.
          </p>
        </motion.div>
      </div>

      {/* ── Infinite carousel ── */}
      <div
        className="relative mt-14 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      >
        <motion.div
          className="flex gap-5"
          style={{ width: "max-content" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {track.map((item, i) => (
            <div
              key={i}
              className="group relative h-72 w-96 shrink-0 overflow-hidden rounded-[1.5rem] shadow-[0_12px_32px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_48px_rgba(15,23,42,0.18)] sm:h-80 sm:w-[26rem]"
            >
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 384px, 416px"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-base font-bold tracking-tight text-white drop-shadow-sm">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
