"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  Calendar,
  MapPin,
  Download,
  Send,
  X,
  Check,
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
  BookOpen,
  RotateCcw,
  ArrowRight,
} from "lucide-react";
import coursesData from "@/data/course.json";
import centersData from "@/data/centers.json";

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

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Academic":
      return "indigo";
    case "Technology & Skills":
      return "emerald";
    case "Executive Education":
      return "amber";
    default:
      return "blue";
  }
};

export function ProgramsList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCenter, setSelectedCenter] = useState("All");

  // Dropdown states
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isCenterOpen, setIsCenterOpen] = useState(false);

  // Dropdown refs
  const categoryRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  // Enquiry Modal state
  const [enquiryCourse, setEnquiryCourse] = useState<any>(null);
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    email: "",
    phone: "",
    center: "kalkaji",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
        setIsCategoryOpen(false);
      }
      if (centerRef.current && !centerRef.current.contains(event.target as Node)) {
        setIsCenterOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter coursesData based on search + dropdowns
  const filteredCourses = coursesData.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    const matchesCenter =
      selectedCenter === "All" || course.availableCenters.includes(selectedCenter);
    
    return matchesSearch && matchesCategory && matchesCenter;
  });

  const handleEnquireSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const closeEnquiryModal = () => {
    setEnquiryCourse(null);
    setIsSubmitted(false);
    setEnquiryForm({
      name: "",
      email: "",
      phone: "",
      center: "kalkaji",
      message: "",
    });
  };

  const categories = ["All", "Academic", "Technology & Skills", "Executive Education"];

  return (
    <section className="relative flex-1 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Controls Panel */}
        <div className="mb-10 grid gap-4 md:grid-cols-4 bg-white dark:bg-slate-900 p-4 rounded-3xl border border-slate-200/60 dark:border-slate-800 shadow-[0_4px_20px_rgba(15,23,42,0.02)]">
          
          {/* Search Input */}
          <div className="relative md:col-span-2">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search className="size-4 text-slate-400" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search programs by name or keyword..."
              className="w-full h-11 pl-10 pr-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-850 text-slate-700 dark:text-slate-200 text-xs font-semibold placeholder-slate-400 outline-none transition-colors focus:border-[#0e7de8] focus:ring-1 focus:ring-[#0e7de8]"
            />
          </div>

          {/* Category Dropdown */}
          <div ref={categoryRef} className="relative z-30">
            <button
              onClick={() => {
                setIsCategoryOpen(!isCategoryOpen);
                setIsCenterOpen(false);
              }}
              className="flex w-full items-center justify-between gap-2 h-11 px-3.5 rounded-2xl bg-slate-50/50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-200 text-xs active:scale-[0.98] transition-all cursor-pointer text-left"
            >
              <span className="truncate flex items-center gap-1.5">
                <SlidersHorizontal className="size-3.5 text-[#0e7de8] shrink-0" />
                {selectedCategory === "All" ? "All Categories" : selectedCategory}
              </span>
              <ChevronDown className={`size-3.5 text-slate-400 transition-transform duration-200 ${isCategoryOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {isCategoryOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 4 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 4 }}
                  transition={{ duration: 0.15 }}
                  style={{ transformOrigin: "top" }}
                  className="absolute left-0 right-0 mt-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg overflow-hidden"
                >
                  <div className="p-1">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => {
                          setSelectedCategory(cat);
                          setIsCategoryOpen(false);
                        }}
                        className={`flex w-full items-center justify-between px-2.5 py-2 text-xs rounded-lg text-left transition-colors cursor-pointer ${
                          selectedCategory === cat ? "bg-[#0e7de8]/10 text-[#0e7de8] font-bold" : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                        }`}
                      >
                        {cat === "All" ? "All Categories" : cat}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Center Dropdown */}
          <div ref={centerRef} className="relative z-25">
            <button
              onClick={() => {
                setIsCenterOpen(!isCenterOpen);
                setIsCategoryOpen(false);
              }}
              className="flex w-full items-center justify-between gap-2 h-11 px-3.5 rounded-2xl bg-slate-50/50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-200 text-xs active:scale-[0.98] transition-all cursor-pointer text-left"
            >
              <span className="truncate flex items-center gap-1.5">
                <MapPin className="size-3.5 text-[#0e7de8] shrink-0" />
                {selectedCenter === "All"
                  ? "All Centers"
                  : centersData.find((c) => c.slug === selectedCenter)?.name || selectedCenter}
              </span>
              <ChevronDown className={`size-3.5 text-slate-400 transition-transform duration-200 ${isCenterOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {isCenterOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 4 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 4 }}
                  transition={{ duration: 0.15 }}
                  style={{ transformOrigin: "top" }}
                  className="absolute left-0 right-0 mt-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg overflow-hidden"
                >
                  <div className="p-1">
                    <button
                      onClick={() => {
                        setSelectedCenter("All");
                        setIsCenterOpen(false);
                      }}
                      className={`flex w-full items-center justify-between px-2.5 py-2 text-xs rounded-lg text-left transition-colors cursor-pointer ${
                        selectedCenter === "All" ? "bg-[#0e7de8]/10 text-[#0e7de8] font-bold" : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                      }`}
                    >
                      All Centers
                    </button>
                    {centersData.map((center) => (
                      <button
                        key={center.slug}
                        onClick={() => {
                          setSelectedCenter(center.slug);
                          setIsCenterOpen(false);
                        }}
                        className={`flex w-full items-center justify-between px-2.5 py-2 text-xs rounded-lg text-left transition-colors cursor-pointer ${
                          selectedCenter === center.slug ? "bg-[#0e7de8]/10 text-[#0e7de8] font-bold" : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                        }`}
                      >
                        {center.name}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Results Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredCourses.length > 0 ? (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filteredCourses.map((course) => {
                  const CourseIcon = getCourseIcon(course.id);
                  const catColor = getCategoryColor(course.category);

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
                      layout
                      initial={{ opacity: 0, scale: 0.95, y: 15 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{ type: "spring", duration: 0.45, bounce: 0.1 }}
                      className="group flex flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900 shadow-sm hover:shadow-lg dark:hover:shadow-black/25 hover:-translate-y-1 transition-all duration-300"
                    >
                      {/* Course Image or Fallback Gradient Cover */}
                      <div className="relative h-44 w-full bg-slate-100 dark:bg-slate-800 overflow-hidden border-b border-slate-100 dark:border-slate-800">
                        {course.image ? (
                          <img
                            src={course.image}
                            alt={course.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                              if (fallback) fallback.style.display = "flex";
                            }}
                          />
                        ) : null}

                        {/* Fallback Graphic Cover */}
                        <div
                          style={{ display: course.image ? "none" : "flex" }}
                          className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br ${cardHeaderGrads[catColor]} p-6`}
                        >
                          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:14px_14px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)]" />
                          <div className={`flex size-14 items-center justify-center rounded-2xl border backdrop-blur-md transition-transform duration-300 group-hover:scale-110 ${iconBorderColors[catColor]}`}>
                            <CourseIcon className="size-6" />
                          </div>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="flex flex-1 flex-col p-6">
                        <div className="mb-4">
                          <span className={`inline-block rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider mb-2 border ${
                            course.category === "Academic"
                              ? "bg-indigo-50/70 border-indigo-100 text-indigo-600 dark:bg-indigo-950/20 dark:border-indigo-900/30 dark:text-indigo-400"
                              : course.category === "Technology & Skills"
                              ? "bg-emerald-50/70 border-emerald-100 text-emerald-600 dark:bg-emerald-950/20 dark:border-emerald-900/30 dark:text-emerald-400"
                              : "bg-amber-50/70 border-amber-100 text-amber-600 dark:bg-amber-950/20 dark:border-amber-900/30 dark:text-amber-400"
                          }`}>
                            {course.category}
                          </span>
                          <h4 className="text-lg font-bold tracking-tight text-[#201657] dark:text-white leading-snug group-hover:text-[#0e7de8] transition-colors duration-200">
                            {course.title}
                          </h4>
                          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                            {course.description}
                          </p>
                        </div>

                        <div className="h-px w-full bg-linear-to-r from-slate-100 via-slate-200 to-transparent dark:from-slate-800 dark:via-slate-700 dark:to-transparent my-4" />

                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-600 dark:text-slate-300">
                            <Calendar className="size-4 shrink-0 text-slate-400 dark:text-slate-500" />
                            <span>Duration: {course.duration}</span>
                          </div>

                          <div className="flex items-start gap-2.5">
                            <MapPin className="size-4 shrink-0 text-slate-400 dark:text-slate-500 mt-0.5" />
                            <div className="flex flex-col gap-1.5">
                              <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">Available at:</span>
                              <div className="flex flex-wrap gap-1">
                                {course.availableCenters.map((slug) => {
                                  const name = centersData.find((c) => c.slug === slug)?.name || slug;
                                  return (
                                    <span
                                      key={slug}
                                      className="inline-block rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200/40 dark:border-slate-700/60 px-2 py-0.5 text-[10px] font-medium text-slate-700 dark:text-slate-300"
                                    >
                                      {name}
                                    </span>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-auto grid grid-cols-2 gap-2 pt-2">
                          <a
                            href={course.brochure}
                            download
                            className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-750 px-3 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 transition-all duration-200 active:scale-[0.97] hover:border-slate-300 dark:hover:border-slate-600"
                          >
                            <Download className="size-3.5" />
                            Brochure
                          </a>

                          <button
                            onClick={() => setEnquiryCourse(course)}
                            className="flex items-center justify-center gap-1 rounded-xl bg-[#0e7de8] hover:bg-[#0a6fd4] text-white px-3 py-2.5 text-xs font-semibold transition-all duration-200 active:scale-[0.97] shadow-sm hover:shadow group/btn cursor-pointer"
                          >
                            Enquire
                            <ArrowRight className="size-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                          </button>
                        </div>

                      </div>
                    </motion.article>
                  );
                })}
              </motion.div>
            ) : (
              // Empty State
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="flex flex-col items-center justify-center text-center p-12 rounded-[2rem] border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/20 dark:bg-slate-900/10 min-h-[300px]"
              >
                <div className="flex size-14 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 mb-4">
                  <SlidersHorizontal className="size-6" />
                </div>
                <h4 className="text-lg font-bold text-[#201657] dark:text-white mb-2">
                  No matching programs found
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mb-6">
                  Try refining your search keyword or selecting a different category or center.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                    setSelectedCenter("All");
                  }}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0e7de8] hover:bg-[#0a6fd4] text-white px-4 py-2.5 text-xs font-semibold transition-all duration-200 active:scale-[0.97]"
                >
                  <RotateCcw className="size-3.5" />
                  Reset Search Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Enquiry Modal */}
      <AnimatePresence>
        {enquiryCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeEnquiryModal}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-xs"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-lg overflow-hidden rounded-[2.5rem] bg-white dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-850 shadow-2xl z-10"
            >
              
              {/* Close Button */}
              <button
                onClick={closeEnquiryModal}
                className="absolute top-6 right-6 flex size-8 items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer"
              >
                <X className="size-4" />
              </button>

              {!isSubmitted ? (
                <>
                  <div className="mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0e7de8] bg-blue-50 dark:bg-blue-950/40 px-2.5 py-1 rounded-md">
                      Admission Enquiry
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#201657] dark:text-white mt-3">
                      Enquire about {enquiryCourse.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Complete the form below and our advisors will reach out to you within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleEnquireSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={enquiryForm.name}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                        placeholder="Enter your name"
                        className="w-full h-11 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-850 text-slate-800 dark:text-slate-100 text-sm outline-none transition-colors focus:border-[#0e7de8] focus:ring-1 focus:ring-[#0e7de8]"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={enquiryForm.email}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                          placeholder="name@example.com"
                          className="w-full h-11 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-850 text-slate-800 dark:text-slate-100 text-sm outline-none transition-colors focus:border-[#0e7de8] focus:ring-1 focus:ring-[#0e7de8]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          value={enquiryForm.phone}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full h-11 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-850 text-slate-800 dark:text-slate-100 text-sm outline-none transition-colors focus:border-[#0e7de8] focus:ring-1 focus:ring-[#0e7de8]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">
                        Preferred Study Center
                      </label>
                      <select
                        value={enquiryForm.center}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, center: e.target.value })}
                        className="w-full h-11 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-850 text-slate-800 dark:text-slate-100 text-sm outline-none transition-colors focus:border-[#0e7de8]"
                      >
                        {centersData.map((center) => (
                          <option key={center.slug} value={center.slug} className="dark:bg-slate-800">
                            {center.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">
                        Special Instructions or Message
                      </label>
                      <textarea
                        rows={3}
                        value={enquiryForm.message}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                        placeholder="Any specific questions you have about the program..."
                        className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-850 text-slate-800 dark:text-slate-100 text-sm outline-none transition-colors focus:border-[#0e7de8] focus:ring-1 focus:ring-[#0e7de8] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 h-12 rounded-xl bg-[#0e7de8] hover:bg-[#0a6fd4] disabled:bg-slate-400 text-white font-semibold text-sm transition-all duration-200 active:scale-[0.98] shadow-sm hover:shadow cursor-pointer"
                    >
                      {isSubmitting ? (
                        <div className="size-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="size-4" />
                          Send Enquiry
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center text-center py-6">
                  <div className="flex size-16 items-center justify-center rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 text-emerald-500 border border-emerald-100 dark:border-emerald-900/50 mb-4">
                    <Check className="size-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#201657] dark:text-white">
                    Enquiry Submitted!
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mt-3 leading-relaxed">
                    Thank you, <strong className="text-slate-700 dark:text-slate-250">{enquiryForm.name}</strong>. Your enquiry for <strong>{enquiryCourse.title}</strong> has been received. Our team will contact you at <strong>{enquiryForm.email}</strong> shortly.
                  </p>
                  <button
                    onClick={closeEnquiryModal}
                    className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 px-6 text-xs font-semibold text-slate-700 dark:text-slate-200 transition-all duration-200 active:scale-[0.97] cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
