"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
};

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #1064c7 0%, #0e7de8 40%, #0a6fd4 100%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="text-center"
        >
          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-white sm:text-5xl"
          >
            Ready to Study with Us?
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-2xl text-base text-slate-100 sm:text-lg"
          >
            Visit our centers in Delhi and Bangalore for a seamless live learning
            experience.
          </motion.p>

          {/* Button */}
          <motion.div variants={itemVariants} className="mt-8">
            <Button className="rounded-full bg-white px-8 py-3 font-semibold text-[#1064c7] shadow-lg transition-all duration-300 hover:bg-slate-100 hover:scale-105 hover:shadow-xl active:scale-[0.98] sm:px-12 sm:py-4 sm:text-base cursor-pointer">
              Contact Us
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
