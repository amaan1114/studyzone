"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "#home" },
      { label: "About Us", href: "#about" },
      { label: "Our Centers", href: "#centers" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
  {
    title: "Our Centers",
    links: [
      { label: "Delhi: Kalkaji, New Delhi", href: "#centers" },
      { label: "Bangalore: HRBR Layout", href: "#centers" },
      { label: "Bangalore: Kasavanahalli", href: "#centers" },
    ],
  },
];



const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

const MotionLink = motion(Link);

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#f8fafc] dark:bg-slate-800 text-[#201657] dark:text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#f33255] to-transparent opacity-70" />
      <div className="absolute -right-24 top-0 h-64 w-64 rounded-full bg-[#f33255] opacity-10 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#1064c7] opacity-10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]"
        >
          <motion.div variants={itemVariants} className="max-w-sm">
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2, ease: "easeOut" as const }}>
              <Link href="/" className="inline-flex cursor-pointer items-center gap-1 text-3xl font-bold tracking-tight">
                <span>StudyZone</span>
                <span className="text-[#f33255]">365</span>
              </Link>
            </motion.div>
            <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
              Providing modern physical study centers with focused learning spaces,
              reliable support, and a calm environment designed for serious study.
            </p>

          </motion.div>

          {footerLinks.map((group) => (
            <motion.div key={group.title} variants={itemVariants}>
              <h3 className="text-xl font-bold text-[#201657] dark:text-white">{group.title}</h3>
              <ul className="mt-5 space-y-3 text-slate-600 dark:text-slate-400">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <MotionLink
                      href={link.href}
                      className="inline-flex cursor-pointer items-center text-sm transition-colors duration-200 hover:text-[#f33255]"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" as const }}
                    >
                      {link.label}
                    </MotionLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-[#201657] dark:text-white">Contact Us</h3>
            <div className="mt-5 space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#f33255]" />
                <p>
                  Delhi and Bangalore study centers across prime learning locations.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-[#f33255]" />
                <motion.a href="tel:+919355623363" className="cursor-pointer transition-colors duration-200 hover:text-[#f33255]" whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2, ease: "easeOut" as const }}>
                  +91 93556 23363
                </motion.a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-[#f33255]" />
                <motion.a href="mailto:studyzone365.com@gmail.com" className="cursor-pointer transition-colors duration-200 hover:text-[#f33255]" whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2, ease: "easeOut" as const }}>
                  studyzone365.com@gmail.com
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-16 border-t border-[#201657]/10 dark:border-slate-700 pt-8 text-center text-sm text-slate-500 dark:text-slate-400 sm:flex sm:items-center sm:justify-between sm:text-left">
          <p>© 2025 StudyZone365. All Rights Reserved.</p>
          <p className="mt-2 sm:mt-0">Built for focused learning and consistent progress.</p>
        </div>
      </div>
    </footer>
  );
}
