"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  MapPin,
  Wifi,
  Volume2,
  Zap,
  Coffee,
  Check,
} from "lucide-react";

import { Button } from "../ui/button";

const features = [
  { icon: Wifi, title: "High-Speed", subtitle: "Internet" },
  { icon: Volume2, title: "Silent", subtitle: "Zones" },
  { icon: Zap, title: "Power", subtitle: "Backup" },
  { icon: Coffee, title: "Cafe", subtitle: "Access" },
];

const highlights = [
  "Delhi & Bangalore",
  "24/7 Access",
  "High-Speed WiFi",
  "Power Backup",
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden border-b border-slate-200/80 dark:border-slate-700/80 bg-white dark:bg-slate-900">
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        {/* Background decorations */}
        <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-pink-200/70 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-purple-200/60 blur-3xl" />

        {/* Additional background elements */}
        <div className="absolute top-1/3 right-1/4 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute top-1/2 left-1/3 h-96 w-96 rounded-full bg-pink-100/50 blur-2xl" />

          {/* Soft ambient wash */}
          <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-pink-50/60 via-white/20 to-transparent dark:from-pink-950/20 dark:via-transparent" />

          {/* Floating accent dots */}
          <div className="absolute right-16 top-16 grid grid-cols-3 gap-3 opacity-40">
            <span className="size-2 rounded-full bg-pink-300" />
            <span className="size-2 rounded-full bg-blue-300" />
            <span className="size-2 rounded-full bg-purple-300" />
            <span className="size-2 rounded-full bg-purple-300" />
            <span className="size-2 rounded-full bg-pink-300" />
            <span className="size-2 rounded-full bg-blue-300" />
            <span className="size-2 rounded-full bg-blue-300" />
            <span className="size-2 rounded-full bg-purple-300" />
            <span className="size-2 rounded-full bg-pink-300" />
          </div>

          <div className="absolute bottom-16 left-10 h-24 w-24 rounded-full border border-pink-200/70 bg-white/50 shadow-[0_0_0_8px_rgba(244,114,182,0.06)] backdrop-blur-sm" />
          <div className="absolute bottom-28 right-10 h-16 w-16 rounded-full border border-slate-200/70 bg-white/60 shadow-[0_0_0_6px_rgba(148,163,184,0.05)] backdrop-blur-sm" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 dark:bg-pink-950/30 dark:border-pink-800/40 px-4 py-2">
              <div className="size-2 rounded-full bg-pink-500" />
              <span className="text-xs font-semibold tracking-wide text-pink-600 uppercase">
                #1 Learning Spaces in India
              </span>
            </div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
            >
              <span className="text-[#201657] dark:text-white">Your Space For,</span>
              <br />
              <span className="text-[#f33255]"> Live Learning.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
            >
             StudyZone365 provides state-of-the-art physical study centers in Delhi and Bangalore with workstations, high-speed internet, and more for your live classes.
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8 grid grid-cols-2 gap-3"
            >
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-3">
                  <div className="flex items-center justify-center size-5 rounded bg-slate-100 dark:bg-slate-700">
                    <Check className="size-3.5 text-slate-700 dark:text-slate-300" />
                  </div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {highlight}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="h-12 px-8 rounded-lg bg-[#f33255] text-white font-semibold hover:bg-[#d92a49] transition-colors cursor-pointer"
              >
                Explore Centers
              </Button>
             
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 inline-flex flex-wrap items-center gap-2 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 px-4 py-3 shadow-sm backdrop-blur-sm"
            >
              <span className="rounded-full bg-slate-100 dark:bg-slate-700 px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                Delhi & Bangalore
              </span>
              <span className="rounded-full bg-slate-100 dark:bg-slate-700 px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                24/7 Access
              </span>
              <span className="rounded-full bg-slate-100 dark:bg-slate-700 px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                Focus-first desks
              </span>
            </motion.div>
          </motion.div>

          {/* Right Section - Image + Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700 shadow-lg overflow-hidden"
          >
            {/* Image Container */}
            <div className="relative h-72 md:h-80 lg:h-104 overflow-hidden">
              <Image
                src="/images/Hero.png"
                alt="StudyZone Hero Study Center"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/10 via-transparent to-transparent" />
              <div className="absolute left-4 top-4 rounded-full border border-white/60 dark:border-white/15 bg-white/90 dark:bg-slate-900/60 px-3 py-1 text-[11px] font-semibold tracking-wide text-slate-700 dark:text-slate-100 shadow-sm backdrop-blur-sm">
                Premium study rooms
              </div>
            </div>

            {/* Feature Cards - Single Row with Dividers */}
            <div className="grid grid-cols-4 divide-x divide-slate-200 dark:divide-slate-700 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="p-4 flex flex-col items-center gap-3 text-center"
                >
                  <div className="flex items-center justify-center size-12 rounded-lg bg-pink-100 dark:bg-pink-950/40 shrink-0">
                    <feature.icon className="size-6 text-slate-700 dark:text-slate-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white text-sm">
                      {feature.title}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{feature.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
