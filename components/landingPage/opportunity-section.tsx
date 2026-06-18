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

export function OpportunitySection() {
  return (
    <section className="relative overflow-hidden bg-[#1a3a70] py-16 sm:py-24">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-blue-500 opacity-10 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-slate-500 opacity-5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0e7de8] px-4 py-2 text-sm font-semibold text-white">
              Limited Time Opportunity
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="mt-6 text-3xl font-bold text-white sm:text-5xl"
          >
            IIM Kozhikode Executive PGP
            <br />
            <span className="text-white">(MBA) Program</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-2xl text-base text-slate-200 sm:text-lg"
          >
            Elevate your career with India's premier management institute. Phase 2
            applications closing on July 12, 2025!
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4"
          >
            <Button className="rounded-full bg-white px-8 py-3 font-semibold text-[#1a3a70] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-[0.98] sm:px-10 cursor-pointer">
              Apply Through Us
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-2 border-white bg-transparent px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#1a3a70] active:scale-[0.98] sm:px-10 cursor-pointer"
            >
              View Benefits
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
