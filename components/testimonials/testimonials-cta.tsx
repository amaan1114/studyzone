"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function TestimonialsCta() {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-[#1064c7] via-[#5a3fa8] to-[#f33255] py-20 sm:py-24">
      {/* Depth overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_50%,rgba(0,0,0,0.12),transparent_60%)]" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          Join Our Community
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          className="mx-auto mt-5 max-w-xl text-base leading-8 text-white/80 sm:text-lg"
        >
          Experience the perfect study environment at StudyZone365.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          className="mt-8"
        >
          <a
            href="tel:+919355623363"
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#f33255] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e62c4d] active:scale-[0.98]"
          >
            Contact Us
            <ArrowRight className="size-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
