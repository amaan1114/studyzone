"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
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

const contactCards = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 93556 23363",
    href: "tel:+919355623363",
    accentColor: "#1064c7",
    note: "Mon–Sat, 9 AM – 6 PM",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@studyzone365.com",
    href: "mailto:info@studyzone365.com",
    accentColor: "#0e7de8",
    note: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Centers",
    value: "Delhi & Bangalore",
    href: "/centers",
    accentColor: "#201657",
    note: "3 locations across India",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "6 AM – 11 PM",
    href: "#contact-form",
    accentColor: "#1064c7",
    note: "Open 365 days a year",
  },
];

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-900">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#1064c7]/6 via-white dark:via-slate-900 to-[#0e7de8]/6" />
      <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-[#1064c7]/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#0e7de8]/10 blur-3xl" />
      <div className="absolute right-1/3 top-1/3 h-60 w-60 rounded-full bg-[#201657]/5 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-4.5rem)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid w-full gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"
        >
          {/* ── Left: copy ── */}
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-[#1064c7]/15 bg-white/80 dark:bg-slate-800/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#1064c7] shadow-sm backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-[#0e7de8]" />
              Get in Touch
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="mt-6 text-4xl font-bold tracking-tight text-[#201657] dark:text-white sm:text-5xl lg:text-6xl"
            >
              We'd love to{" "}
              <span className="text-[#0e7de8]">hear</span>{" "}
              from you.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg"
            >
              Get in touch with StudyZone365 for inquiries, feedback, or to
              schedule a visit to any of our study centers.
            </motion.p>

            {/* Quick contact chips */}
            <motion.div
              variants={itemVariants}
              className="mt-7 flex flex-wrap gap-2"
            >
              <a
                href="tel:+919355623363"
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 shadow-sm transition-colors hover:border-[#1064c7] hover:text-[#1064c7]"
              >
                <Phone className="size-3.5 text-[#1064c7]" />
                +91 93556 23363
              </a>
              <a
                href="mailto:info@studyzone365.com"
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 shadow-sm transition-colors hover:border-[#0e7de8] hover:text-[#0e7de8]"
              >
                <Mail className="size-3.5 text-[#0e7de8]" />
                info@studyzone365.com
              </a>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#contact-form"
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0e7de8] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(14,125,232,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0a6fd4] active:scale-[0.98]"
              >
                <MessageSquare className="size-4" />
                Send a Message
                <ArrowRight className="size-4" />
              </a>
              <a
                href="/centers"
                className="inline-flex cursor-pointer items-center justify-center rounded-full border border-[#201657]/15 dark:border-slate-600 bg-white dark:bg-slate-800 px-6 py-3 text-sm font-semibold text-[#201657] dark:text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0e7de8] hover:text-[#0e7de8] active:scale-[0.98]"
              >
                <MapPin className="size-4" />
                Visit a Center
              </a>
            </motion.div>
          </div>

          {/* ── Right: contact cards ── */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-[2rem] bg-[#201657]/5 dark:bg-slate-700/30" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-md sm:p-7">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Quick Contact
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {contactCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <a
                      key={card.label}
                      href={card.href}
                      className="group rounded-[1.5rem] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div
                          className="flex size-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                          style={{ backgroundColor: `${card.accentColor}14` }}
                        >
                          <Icon className="size-4" style={{ color: card.accentColor }} />
                        </div>
                        <ArrowRight className="size-3.5 text-slate-300 transition-colors group-hover:text-[#0e7de8]" />
                      </div>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: card.accentColor }}>
                        {card.label}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-[#201657] dark:text-white">{card.value}</p>
                      <div className="mt-3 h-px w-full bg-linear-to-r from-slate-200 via-slate-100 to-transparent dark:from-slate-700 dark:via-slate-800 dark:to-transparent" />
                      <p className="mt-3 text-[11px] text-slate-400">{card.note}</p>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
