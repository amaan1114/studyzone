"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  Atom,
  Coins,
  Code,
  Brain,
  Globe,
  Terminal,
  Briefcase,
  Lightbulb,
  BarChart3,
  Calendar,
  MapPin,
  Download,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import coursesData from "@/data/course.json";

// Category configuration
const categories = [
  {
    id: "Academic",
    title: "Academic Programs",
    includes: "Class 8-12, Subject Learning",
    description: "Build a strong academic foundation with concept-focused classroom instruction and personalized mentoring.",
    color: "indigo",
    activeGradient: "from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500",
    textColor: "text-indigo-600 dark:text-indigo-400",
    bgAccent: "bg-indigo-50/70 dark:bg-indigo-950/20",
    borderAccent: "border-indigo-200 dark:border-indigo-800/50",
    glowColor: "rgba(99, 102, 241, 0.15)",
    icon: GraduationCap,
  },
  {
    id: "Technology & Skills",
    title: "Technology & Skills",
    includes: "Coding, AI",
    description: "Master modern technical competencies, programming logic, and future-ready tech skills.",
    color: "emerald",
    activeGradient: "from-emerald-600 to-teal-600 dark:from-emerald-500 dark:to-teal-500",
    textColor: "text-emerald-600 dark:text-emerald-400",
    bgAccent: "bg-emerald-50/70 dark:bg-emerald-950/20",
    borderAccent: "border-emerald-200 dark:border-emerald-800/50",
    glowColor: "rgba(16, 185, 129, 0.15)",
    icon: Code,
  },
  {
    id: "Executive Education",
    title: "Executive Education",
    includes: "Management, Professional Programs",
    description: "Advance your leadership capabilities, data intelligence, and business decision-making power.",
    color: "amber",
    activeGradient: "from-amber-600 to-rose-600 dark:from-amber-500 dark:to-rose-500",
    textColor: "text-amber-600 dark:text-amber-400",
    bgAccent: "bg-amber-50/70 dark:bg-amber-950/20",
    borderAccent: "border-amber-200 dark:border-amber-800/50",
    glowColor: "rgba(245, 158, 11, 0.15)",
    icon: Briefcase,
  },
];

// Map course ID to specific lucide icon
const getCourseIcon = (id: string) => {
  switch (id) {
    case "grade-8-math-foundation":
      return Calculator;
    case "grade-10-science-program":
      return Atom;
    case "grade-11-12-commerce":
      return Coins;
    case "coding-foundation":
      return Code;
    case "ai-for-students":
      return Brain;
    case "web-development":
      return Globe;
    case "python-programming":
      return Terminal;
    case "executive-management":
      return Briefcase;
    case "leadership-development":
      return Lightbulb;
    case "business-analytics":
      return BarChart3;
    default:
      return BookOpen;
  }
};

// Formats center slug to pretty print name
const formatCenterName = (slug: string) => {
  switch (slug) {
    case "kalkaji":
      return "Delhi (Kalkaji)";
    case "sarjapur":
      return "Bangalore (Sarjapur)";
    case "kalyan-nagar":
      return "Bangalore (Kalyan Nagar)";
    default:
      return slug.charAt(0).toUpperCase() + slug.slice(1);
  }
};

// Category card container stagger
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// Stagger variants for filtered course items
const coursesContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.15,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.97,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

export function ProgramCategories() {
  const [activeTab, setActiveTab] = useState<string>("Academic");

  // Filter courses by category
  const filteredCourses = coursesData.filter(
    (course) => course.category === activeTab
  );

  return (
    <section className="relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/60 py-20 sm:py-24 border-b border-slate-200/80 dark:border-slate-800/80">
      {/* Background Ambient Lights */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-100/40 dark:bg-blue-950/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-indigo-100/40 dark:bg-indigo-950/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="mx-auto mb-5 h-1.5 w-20 rounded-full bg-[#0e7de8]"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.05, ease: [0.23, 1, 0.32, 1] }}
            className="text-xs font-semibold uppercase tracking-[0.32em] text-[#0e7de8]"
          >
            Explore Curriculums
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="mt-4 text-3xl font-bold tracking-tight text-[#201657] dark:text-white sm:text-4xl md:text-5xl"
          >
            Program Categories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-500 dark:text-slate-400 sm:text-base"
          >
            Select a pathway to explore live structured programs available at our modern study hubs in Delhi and Bangalore.
          </motion.p>
        </div>

        {/* Categories Grid (Interactive Tab Triggers) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-3 mb-16"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeTab === category.id;
            const count = coursesData.filter((c) => c.category === category.id).length;

            return (
              <motion.button
                key={category.id}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
                }}
                onClick={() => setActiveTab(category.id)}
                className={`relative flex flex-col items-start text-left p-6 sm:p-8 rounded-[2rem] border transition-all duration-300 outline-none cursor-pointer group active:scale-[0.98] ${
                  isActive
                    ? "bg-white dark:bg-slate-800 shadow-[0_20px_40px_rgba(15,23,42,0.06)] dark:shadow-[0_20px_45px_rgba(0,0,0,0.25)] border-[#0e7de8]/30 dark:border-slate-700"
                    : "bg-white/50 dark:bg-slate-800/30 border-slate-200/60 dark:border-slate-800/60 hover:bg-white dark:hover:bg-slate-800/60 hover:shadow-md"
                }`}
                style={{
                  boxShadow: isActive ? `0 15px 30px ${category.glowColor}` : undefined,
                }}
              >
                {/* Active Indicator Line */}
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryBorder"
                    className="absolute inset-x-8 top-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-b-full"
                    transition={{ type: "spring", stiffness: 120, damping: 15 }}
                  />
                )}

                {/* Header Row */}
                <div className="flex w-full items-center justify-between gap-4 mb-5">
                  <div
                    className={`flex size-12 items-center justify-center rounded-2xl border transition-all duration-300 ${
                      isActive
                        ? `${category.bgAccent} ${category.borderAccent} ${category.textColor} scale-110`
                        : "bg-slate-100 dark:bg-slate-800 border-slate-200/50 dark:border-slate-700/50 text-slate-500 dark:text-slate-400 group-hover:scale-105"
                    }`}
                  >
                    <Icon className="size-5" />
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wider uppercase transition-colors ${
                      isActive
                        ? `${category.bgAccent} ${category.textColor}`
                        : "bg-slate-100 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    {count} {count === 1 ? "Program" : "Programs"}
                  </span>
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-bold tracking-tight text-[#201657] dark:text-white mb-2">
                  {category.title}
                </h3>
                <p className={`text-xs font-medium mb-3 tracking-wide uppercase ${isActive ? category.textColor : "text-slate-400 dark:text-slate-500"}`}>
                  Includes: {category.includes}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mt-1">
                  {category.description}
                </p>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Selected Category Course Grid */}
        <div className="min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={coursesContainerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredCourses.map((course) => {
                const CourseIcon = getCourseIcon(course.id);
                const activeCat = categories.find((c) => c.id === activeTab);
                const color = activeCat?.color || "blue";

                // Map styling categories
                const cardHeaderGrads: Record<string, string> = {
                  indigo: "from-indigo-600/5 via-purple-600/2 to-transparent dark:from-indigo-950/20 dark:via-purple-950/5",
                  emerald: "from-emerald-600/5 via-teal-600/2 to-transparent dark:from-emerald-950/20 dark:via-teal-950/5",
                  amber: "from-amber-600/5 via-rose-600/2 to-transparent dark:from-amber-950/20 dark:via-rose-950/5",
                };

                const iconBorderColors: Record<string, string> = {
                  indigo: "border-indigo-100 dark:border-indigo-900/50 bg-indigo-50/50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400",
                  emerald: "border-emerald-100 dark:border-emerald-900/50 bg-emerald-50/50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400",
                  amber: "border-amber-100 dark:border-amber-900/50 bg-amber-50/50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400",
                };

                return (
                  <motion.article
                    key={course.id}
                    variants={itemVariants}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/90 shadow-[0_8px_30px_rgba(15,23,42,0.03)] dark:shadow-[0_10px_35px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-black/20"
                  >
                    {/* Header Graphic */}
                    <div className={`h-24 relative overflow-hidden bg-gradient-to-br ${cardHeaderGrads[color]}`}>
                      {/* Grid Pattern overlays */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:14px_14px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)]" />
                      
                      {/* Float bubble decorator */}
                      <div className="absolute -right-4 -top-4 size-16 rounded-full bg-slate-200/10 dark:bg-white/5 blur-sm" />
                      
                      {/* Interactive Floating Course Icon */}
                      <div className={`absolute bottom-4 left-6 flex size-12 items-center justify-center rounded-2xl border backdrop-blur-md transition-transform duration-300 group-hover:scale-110 ${iconBorderColors[color]}`}>
                        <CourseIcon className="size-5" />
                      </div>

                      {/* Accent Tag */}
                      <div className="absolute right-6 bottom-4 rounded-full bg-slate-100 dark:bg-slate-800/80 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 border border-slate-200/30 dark:border-slate-700/30">
                        {course.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-6 pt-5">
                      {/* Title & Description */}
                      <div className="mb-4">
                        <h4 className="text-lg font-bold tracking-tight text-[#201657] dark:text-white leading-snug group-hover:text-[#0e7de8] transition-colors duration-200">
                          {course.title}
                        </h4>
                        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                          {course.description}
                        </p>
                      </div>

                      {/* Divider */}
                      <div className="h-px w-full bg-linear-to-r from-slate-100 via-slate-200 to-transparent dark:from-slate-800 dark:via-slate-700 dark:to-transparent my-4" />

                      {/* Course Details (Duration, Centers) */}
                      <div className="space-y-3 mb-6">
                        {/* Duration */}
                        <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-600 dark:text-slate-300">
                          <Calendar className="size-4 shrink-0 text-slate-400 dark:text-slate-500" />
                          <span>Duration: {course.duration}</span>
                        </div>

                        {/* Available Centers */}
                        <div className="flex items-start gap-2.5">
                          <MapPin className="size-4 shrink-0 text-slate-400 dark:text-slate-500 mt-0.5" />
                          <div className="flex flex-col gap-1.5">
                            <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">Available at:</span>
                            <div className="flex flex-wrap gap-1">
                              {course.availableCenters.map((center) => (
                                <span
                                  key={center}
                                  className="inline-block rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200/40 dark:border-slate-700/60 px-2 py-0.5 text-[10px] font-medium text-slate-700 dark:text-slate-300"
                                >
                                  {formatCenterName(center)}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Buttons (DX focused actions) */}
                      <div className="mt-auto grid grid-cols-2 gap-2 pt-2">
                        {/* Download Syllabus */}
                        <a
                          href={course.brochure}
                          download
                          className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700/80 px-3 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 transition-all duration-200 active:scale-[0.97] hover:border-slate-300 dark:hover:border-slate-600"
                        >
                          <Download className="size-3.5" />
                          Syllabus
                        </a>

                        {/* Explore Program */}
                        <button
                          onClick={() => {
                            // Dummy interaction / navigation helper
                            alert(`Explore Program: ${course.title}. Details: Course Duration is ${course.duration}.`);
                          }}
                          className="flex items-center justify-center gap-1 rounded-xl bg-[#0e7de8] hover:bg-[#0a6fd4] text-white px-3 py-2.5 text-xs font-semibold transition-all duration-200 active:scale-[0.97] shadow-sm hover:shadow group/btn cursor-pointer"
                        >
                          Enroll Now
                          <ArrowRight className="size-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
