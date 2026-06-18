"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Target,
  MapPin,
  RotateCcw,
  Calendar,
  Download,
  ArrowRight,
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

export function ProgramFinder() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Academic");
  const [selectedCity, setSelectedCity] = useState<string>("All");
  const [selectedCenter, setSelectedCenter] = useState<string>("All");
  
  // Custom dropdown open states
  const [isCityOpen, setIsCityOpen] = useState(false);
  const [isCenterOpen, setIsCenterOpen] = useState(false);

  // Dropdown refs for click-outside logic
  const cityRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cityRef.current && !cityRef.current.contains(event.target as Node)) {
        setIsCityOpen(false);
      }
      if (centerRef.current && !centerRef.current.contains(event.target as Node)) {
        setIsCenterOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter centers based on selected city
  const filteredCenters = centersData.filter((center) => {
    if (selectedCity === "All") return true;
    return center.city === selectedCity;
  });

  // Automatically reset selected center if it's not valid for the new city
  useEffect(() => {
    if (selectedCenter !== "All") {
      const isValid = filteredCenters.some((c) => c.slug === selectedCenter);
      if (!isValid) {
        setSelectedCenter("All");
      }
    }
  }, [selectedCity, selectedCenter, filteredCenters]);

  // Filter logic: selectedCategory + selectedCenter -> filter coursesData
  const filteredCourses = coursesData.filter((course) => {
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    
    // Check if course matches the selected center (or any center under the selected city)
    let matchesCenter = false;
    if (selectedCenter === "All") {
      if (selectedCity === "All") {
        matchesCenter = true; // All cities, all centers
      } else {
        // Must match any center in the selected city
        const cityCenters = centersData.filter((c) => c.city === selectedCity).map((c) => c.slug);
        matchesCenter = course.availableCenters.some((slug) => cityCenters.includes(slug));
      }
    } else {
      matchesCenter = course.availableCenters.includes(selectedCenter);
    }

    return matchesCategory && matchesCenter;
  });

  const handleReset = () => {
    setSelectedCategory("Academic");
    setSelectedCity("All");
    setSelectedCenter("All");
  };

  const categoriesList = ["Academic", "Technology & Skills", "Executive Education"];

  return (
    <section className="relative overflow-hidden bg-slate-50/20 dark:bg-slate-950 py-20 sm:py-24 border-b border-slate-200/80 dark:border-slate-800/80">
      
      {/* Visual Accents */}
      <div className="pointer-events-none absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-blue-100/30 dark:bg-blue-950/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-1/4 h-96 w-96 rounded-full bg-indigo-100/30 dark:bg-indigo-950/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: Goal Selection Header & Cards */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#201657] dark:text-white leading-tight">
            Select your goal
            <span className="block text-[#0e7de8] mt-2 font-bold text-2xl sm:text-3xl md:text-4xl">
              to explore our courses
            </span>
          </h2>

          {/* Three Interactive Goal Cards */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
            
            {/* Card 1: Doctor (Executive Education) */}
            <button
              onClick={() => setSelectedCategory("Executive Education")}
              className={`flex flex-col items-center p-6 w-48 rounded-[2rem] bg-white dark:bg-slate-800 border-2 transition-all duration-300 shadow-sm outline-none cursor-pointer active:scale-[0.96] group hover:-translate-y-1 ${
                selectedCategory === "Executive Education"
                  ? "border-[#0e7de8] shadow-md ring-4 ring-[#0e7de8]/10"
                  : "border-slate-200/60 dark:border-slate-700/60 hover:border-slate-300 dark:hover:border-slate-600"
              }`}
            >
              <div className="size-24 rounded-full overflow-hidden flex items-center justify-center bg-sky-50 dark:bg-slate-700/50 mb-4 transition-transform duration-300 group-hover:scale-105">
                {/* Doctor Avatar Vector */}
                <svg viewBox="0 0 120 120" className="size-20">
                  <circle cx="60" cy="60" r="55" fill="#f0f9ff" />
                  <path d="M30 65 C20 40 30 20 60 20 C90 20 100 40 90 65 Z" fill="#1e293b" />
                  <rect x="52" y="70" width="16" height="15" rx="4" fill="#fed7aa" />
                  <circle cx="60" cy="55" r="22" fill="#ffedd5" />
                  <path d="M38 50 C45 35 58 35 60 42 C62 35 75 35 82 50 C86 42 84 30 60 30 C36 30 34 42 38 50 Z" fill="#1e293b" />
                  <path d="M40 38 Q60 32 80 38" stroke="#0ea5e9" strokeWidth="6" fill="none" strokeLinecap="round" />
                  <circle cx="60" cy="35" r="7" fill="#cbd5e1" stroke="#0ea5e9" strokeWidth="2" />
                  <circle cx="60" cy="35" r="3" fill="#f8fafc" />
                  <circle cx="52" cy="53" r="2" fill="#1e293b" />
                  <circle cx="68" cy="53" r="2" fill="#1e293b" />
                  <path d="M54 62 Q60 67 66 62" stroke="#e11d48" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <circle cx="46" cy="58" r="2" fill="#fecdd3" />
                  <circle cx="74" cy="58" r="2" fill="#fecdd3" />
                  <path d="M35 90 C35 75 45 78 60 78 C75 78 85 75 85 90 Z" fill="#0284c7" />
                  <path d="M50 78 L60 90 L70 78 Z" fill="#ffedd5" />
                </svg>
              </div>
              <span className="text-sm font-bold text-[#201657] dark:text-white">
                Doctor
              </span>
              <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium mt-1">
                Executive Education
              </span>
            </button>

            {/* Card 2: Engineer (Technology & Skills) */}
            <button
              onClick={() => setSelectedCategory("Technology & Skills")}
              className={`flex flex-col items-center p-6 w-48 rounded-[2rem] bg-white dark:bg-slate-800 border-2 transition-all duration-300 shadow-sm outline-none cursor-pointer active:scale-[0.96] group hover:-translate-y-1 ${
                selectedCategory === "Technology & Skills"
                  ? "border-[#0e7de8] shadow-md ring-4 ring-[#0e7de8]/10"
                  : "border-slate-200/60 dark:border-slate-700/60 hover:border-slate-300 dark:hover:border-slate-600"
              }`}
            >
              <div className="size-24 rounded-full overflow-hidden flex items-center justify-center bg-amber-50 dark:bg-slate-700/50 mb-4 transition-transform duration-300 group-hover:scale-105">
                {/* Engineer Avatar Vector */}
                <svg viewBox="0 0 120 120" className="size-20">
                  <circle cx="60" cy="60" r="55" fill="#fef3c7" />
                  <path d="M30 65 C20 40 30 20 60 20 C90 20 100 40 90 65 Z" fill="#1e293b" />
                  <rect x="52" y="70" width="16" height="15" rx="4" fill="#fed7aa" />
                  <circle cx="60" cy="55" r="22" fill="#ffedd5" />
                  <circle cx="52" cy="53" r="2" fill="#1e293b" />
                  <circle cx="68" cy="53" r="2" fill="#1e293b" />
                  <path d="M54 62 Q60 67 66 62" stroke="#1e293b" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <path d="M36 45 C36 25 84 25 84 45 Z" fill="#eab308" />
                  <path d="M30 44 C30 42 90 42 90 44 Z" fill="#ca8a04" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round" />
                  <path d="M54 28 C56 22 64 22 66 28 Z" fill="#ca8a04" />
                  <path d="M35 90 C35 75 45 78 60 78 C75 78 85 75 85 90 Z" fill="#0ea5e9" />
                  <path d="M50 78 L60 90 L70 78 Z" fill="#ffedd5" />
                </svg>
              </div>
              <span className="text-sm font-bold text-[#201657] dark:text-white">
                Engineer
              </span>
              <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium mt-1">
                Technology & Skills
              </span>
            </button>

            {/* Card 3: 6-10th (Academic Programs) */}
            <button
              onClick={() => setSelectedCategory("Academic")}
              className={`flex flex-col items-center p-6 w-48 rounded-[2rem] bg-white dark:bg-slate-800 border-2 transition-all duration-300 shadow-sm outline-none cursor-pointer active:scale-[0.96] group hover:-translate-y-1 ${
                selectedCategory === "Academic"
                  ? "border-[#0e7de8] shadow-md ring-4 ring-[#0e7de8]/10"
                  : "border-slate-200/60 dark:border-slate-700/60 hover:border-slate-300 dark:hover:border-slate-600"
              }`}
            >
              <div className="size-24 rounded-full overflow-hidden flex items-center justify-center bg-emerald-50 dark:bg-slate-700/50 mb-4 transition-transform duration-300 group-hover:scale-105">
                {/* Rocket Avatar Vector */}
                <svg viewBox="0 0 120 120" className="size-20">
                  <circle cx="60" cy="60" r="55" fill="#ecfdf5" />
                  <clipPath id="circle-clip">
                    <circle cx="60" cy="60" r="55" />
                  </clipPath>
                  <g clipPath="url(#circle-clip)">
                    <path d="M10 80 C20 70 40 70 50 82 C60 72 80 72 90 85 C100 80 110 85 120 90 L120 120 L10 120 Z" fill="#f8fafc" opacity="0.9" />
                    <path d="M-10 95 C10 85 30 85 45 98 C60 88 80 88 95 100 L95 120 L-10 120 Z" fill="#e2e8f0" opacity="0.8" />
                    <g transform="translate(42, 22) rotate(15)">
                      <path d="M12 45 C6 55 10 65 18 72 C26 65 30 55 24 45 Z" fill="#f97316" />
                      <path d="M15 45 C10 50 12 58 18 62 C24 58 26 50 21 45 Z" fill="#eab308" />
                      <path d="M4 42 L0 30 L10 38 Z" fill="#059669" />
                      <path d="M32 42 L36 30 L26 38 Z" fill="#059669" />
                      <rect x="8" y="10" width="20" height="34" rx="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
                      <path d="M8 12 C8 12 18 -4 18 -4 C18 -4 28 12 28 12 Z" fill="#059669" />
                      <circle cx="18" cy="22" r="5" fill="#38bdf8" stroke="#059669" strokeWidth="1.5" />
                    </g>
                  </g>
                </svg>
              </div>
              <span className="text-sm font-bold text-[#201657] dark:text-white">
                6-10th
              </span>
              <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium mt-1">
                Academic Programs
              </span>
            </button>

          </div>
        </div>

        {/* Section 2: Discover courses & filtering board */}
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#201657] dark:text-white leading-snug">
            Discover <span className="text-[#0e7de8]">our courses</span>
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Choose from wide range of programs designed to help you excel
          </p>
        </div>

        {/* Main Grid-pattern Search Card (Hexagon Panel) */}
        <div className="relative bg-sky-50/40 dark:bg-slate-900/50 p-6 sm:p-8 rounded-[2rem] border border-sky-100 dark:border-slate-800 shadow-xs mb-12 max-w-5xl mx-auto">
          {/* Hexagon Grid Pattern SVG overlay wrapped in a clip container */}
          <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">
            <svg width="100%" height="100%" className="absolute inset-0 opacity-10 dark:opacity-5" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hexagons" width="28" height="48.48" patternUnits="userSpaceOnUse" patternTransform="scale(1)">
                  <path d="M14 0 L28 8.08 L28 24.24 L14 32.32 L0 24.24 L0 8.08 Z M0 48.48 L14 40.4 L28 48.48 M14 40.4 L14 32.32" fill="none" stroke="#0ea5e9" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hexagons)" />
            </svg>
          </div>

          {/* Top Row: Title + Dropdowns */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#201657] dark:text-white leading-tight">
                Nearest branch offering courses for you selected
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1">
                You can explore other branches using the location selector
              </p>
            </div>

            {/* Dependent Dropdowns Bar */}
            <div className="flex flex-wrap sm:flex-nowrap gap-3">
              
              {/* City Dropdown */}
              <div ref={cityRef} className="relative z-30 w-full sm:w-44">
                <button
                  onClick={() => {
                    setIsCityOpen(!isCityOpen);
                    setIsCenterOpen(false);
                  }}
                  className="flex w-full items-center justify-between gap-2.5 h-11 px-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-200 text-xs active:scale-[0.98] transition-all shadow-xs cursor-pointer text-left"
                >
                  <span className="truncate flex items-center gap-1.5">
                    <MapPin className="size-3.5 text-[#0e7de8] shrink-0" />
                    {selectedCity === "All" ? "All Cities" : selectedCity}
                  </span>
                  <ChevronDown className={`size-3.5 text-slate-400 transition-transform duration-200 ${isCityOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {isCityOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.96, y: 4 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.96, y: 4 }}
                      transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
                      style={{ transformOrigin: "top" }}
                      className="absolute left-0 right-0 mt-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg overflow-hidden"
                    >
                      <div className="p-1">
                        <button
                          onClick={() => {
                            setSelectedCity("All");
                            setIsCityOpen(false);
                          }}
                          className={`flex w-full items-center justify-between px-2.5 py-2 text-xs rounded-lg text-left transition-colors cursor-pointer ${
                            selectedCity === "All" ? "bg-[#0e7de8]/10 text-[#0e7de8] font-bold" : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                          }`}
                        >
                          All Cities
                        </button>
                        {["Delhi", "Bangalore"].map((city) => (
                          <button
                            key={city}
                            onClick={() => {
                              setSelectedCity(city);
                              setIsCityOpen(false);
                            }}
                            className={`flex w-full items-center justify-between px-2.5 py-2 text-xs rounded-lg text-left transition-colors cursor-pointer ${
                              selectedCity === city ? "bg-[#0e7de8]/10 text-[#0e7de8] font-bold" : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                            }`}
                          >
                            {city}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Dependent Center Dropdown */}
              <div ref={centerRef} className="relative z-20 w-full sm:w-52">
                <button
                  onClick={() => {
                    setIsCenterOpen(!isCenterOpen);
                    setIsCityOpen(false);
                  }}
                  className="flex w-full items-center justify-between gap-2.5 h-11 px-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-200 text-xs active:scale-[0.98] transition-all shadow-xs cursor-pointer text-left"
                >
                  <span className="truncate flex items-center gap-1.5">
                    <Target className="size-3.5 text-[#0e7de8] shrink-0" />
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
                      transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
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
                        {filteredCenters.map((center) => (
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
          </div>

        </div>

        {/* Results / Filtered Program Cards Section */}
        <div className="max-w-5xl mx-auto min-h-[300px]">
          <AnimatePresence mode="popLayout">
            {filteredCourses.length > 0 ? (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
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
                      className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-200/80 dark:border-slate-850 bg-white dark:bg-slate-800/90 shadow-[0_4px_20px_rgba(15,23,42,0.02)] hover:shadow-lg dark:hover:shadow-black/20 hover:-translate-y-1 transition-all duration-300"
                    >
                      {/* Card Gradient Header */}
                      <div className={`h-24 relative overflow-hidden bg-gradient-to-br ${cardHeaderGrads[catColor]}`}>
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:14px_14px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)]" />
                        <div className="absolute -right-4 -top-4 size-16 rounded-full bg-slate-200/10 dark:bg-white/5 blur-sm" />
                        
                        {/* Course Icon */}
                        <div className={`absolute bottom-4 left-6 flex size-12 items-center justify-center rounded-2xl border backdrop-blur-md transition-transform duration-300 group-hover:scale-110 ${iconBorderColors[catColor]}`}>
                          <CourseIcon className="size-5" />
                        </div>

                        {/* Category Tag */}
                        <div className="absolute right-6 bottom-4 rounded-full bg-slate-100 dark:bg-slate-800/80 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 border border-slate-200/30 dark:border-slate-700/30">
                          {course.category}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-1 flex-col p-6 pt-5">
                        <div className="mb-4">
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

                        {/* Actions */}
                        <div className="mt-auto grid grid-cols-2 gap-2 pt-2">
                          <a
                            href={course.brochure}
                            download
                            className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700/80 px-3 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 transition-all duration-200 active:scale-[0.97] hover:border-slate-300 dark:hover:border-slate-600"
                          >
                            <Download className="size-3.5" />
                            Syllabus
                          </a>

                          <button
                            onClick={() => {
                              alert(`Enrollment Request details: Course is ${course.title}. Duration is ${course.duration}.`);
                            }}
                            className="flex items-center justify-center gap-1 rounded-xl bg-[#0e7de8] hover:bg-[#0a6fd4] text-white px-3 py-2.5 text-xs font-semibold transition-all duration-200 active:scale-[0.97] shadow-sm hover:shadow group/btn"
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
            ) : (
              // Empty State
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="flex flex-col items-center justify-center text-center p-12 rounded-[2rem] border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/20 dark:bg-slate-900/10 min-h-[300px]"
              >
                <div className="flex size-14 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 mb-4">
                  <BookOpen className="size-6" />
                </div>
                <h4 className="text-lg font-bold text-[#201657] dark:text-white mb-2">
                  No courses match your selections
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mb-6">
                  We couldn't find any courses matching your combination of Category and Location. Try changing the filters.
                </p>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0e7de8] hover:bg-[#0a6fd4] text-white px-4 py-2.5 text-xs font-semibold transition-all duration-200 active:scale-[0.97]"
                >
                  <RotateCcw className="size-3.5" />
                  Reset Finder
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
