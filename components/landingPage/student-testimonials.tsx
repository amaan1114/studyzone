"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import testimonialsData from "@/data/testimonials.json";

interface Testimonial {
  id: number;
  name: string;
  initials: string;
  occupation: string;
  center: string;
  rating: number;
  quote: string;
}

const testimonials = testimonialsData as Testimonial[];
const AUTOPLAY_INTERVAL = 5000;

const slideVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 48 : -48,
  }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: [0.23, 1, 0.32, 1] as const },
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -48 : 48,
    transition: { duration: 0.25, ease: [0.7, 0, 0.84, 0] as const },
  }),
};

// Accent colors cycling per testimonial
const accentColors = ["#1064c7", "#0e7de8", "#1064c7", "#0e7de8"];

export function StudentTestimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (next: number) => {
      const bounded = (next + testimonials.length) % testimonials.length;
      setDirection(next > current ? 1 : -1);
      setCurrent(bounded);
    },
    [current]
  );

  const prev = () => go(current - 1);
  const next = () => go(current + 1);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(current + 1), AUTOPLAY_INTERVAL);
    return () => clearInterval(id);
  }, [current, paused, go]);

  const t = testimonials[current];
  const accent = accentColors[current] ?? "#0e7de8";

  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-900 py-20 sm:py-24">
      {/* Background blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-12 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mx-auto mb-5 h-1.5 w-20 rounded-full bg-[#0e7de8]" />
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#0e7de8]">
            Voices from the center
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#201657] dark:text-white sm:text-4xl md:text-5xl">
            What Our Students Say
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400 sm:text-base">
            Real experiences from learners who chose StudyZone365 as their
            second home for focused study.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="mx-auto mt-14 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Card */}
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-[0_16px_48px_rgba(15,23,42,0.09)]">
            {/* Accent top bar */}
            <div
              className="h-1 w-full transition-colors duration-500"
              style={{ backgroundColor: accent }}
            />

            <div className="p-8 sm:p-10">
              {/* Large decorative quote mark */}
              <div
                className="mb-6 flex size-12 items-center justify-center rounded-2xl transition-colors duration-500"
                style={{ backgroundColor: `${accent}14` }}
              >
                <Quote className="size-5" style={{ color: accent }} />
              </div>

              {/* Animated quote text */}
              <div className="relative min-h-[8rem]">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.p
                    key={t.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="text-[15px] leading-8 text-slate-600 dark:text-slate-300 sm:text-base"
                  >
                    &ldquo;{t.quote}&rdquo;
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Divider */}
              <div className="my-6 h-px w-full bg-linear-to-r from-slate-200 via-slate-100 to-transparent dark:from-slate-700 dark:via-slate-800 dark:to-transparent" />

              {/* Author row + controls */}
              <div className="flex items-center justify-between gap-4">
                {/* Author */}
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={`author-${t.id}`}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="flex items-center gap-4"
                  >
                    {/* Avatar */}
                    <div
                      className="flex size-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-sm transition-colors duration-500"
                      style={{ backgroundColor: accent }}
                    >
                      {t.initials}
                    </div>

                    <div>
                      <p
                        className="text-sm font-bold leading-tight tracking-tight transition-colors duration-500"
                        style={{ color: accent }}
                      >
                        {t.name}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                        {t.occupation}
                      </p>
                      <div className="mt-1.5 flex items-center gap-1 text-slate-400">
                        <MapPin className="size-3" />
                        <span className="text-[11px] font-medium">{t.center}</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Stars + nav */}
                <div className="flex flex-col items-end gap-3">
                  {/* Star rating */}
                  <div className="flex items-center gap-0.5" style={{ color: accent }}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-current" />
                    ))}
                  </div>

                  {/* Prev / Next */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={prev}
                      aria-label="Previous testimonial"
                      className="flex size-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 shadow-sm transition-all duration-200 hover:border-[#0e7de8] hover:text-[#0e7de8] active:scale-95"
                    >
                      <ChevronLeft className="size-4" />
                    </button>
                    <button
                      type="button"
                      onClick={next}
                      aria-label="Next testimonial"
                      className="flex size-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 shadow-sm transition-all duration-200 hover:border-[#0e7de8] hover:text-[#0e7de8] active:scale-95"
                    >
                      <ChevronRight className="size-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dot indicators + progress */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                aria-label={`Go to testimonial ${i + 1}`}
                className="relative h-1.5 overflow-hidden rounded-full transition-all duration-300"
                style={{ width: i === current ? "2rem" : "0.5rem", backgroundColor: i === current ? accent : "#cbd5e1" }}
              >
                {/* Autoplay progress fill on active dot */}
                {i === current && !paused && (
                  <motion.span
                    key={`progress-${current}`}
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{ backgroundColor: `${accent}60` }}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: AUTOPLAY_INTERVAL / 1000, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Read more link */}
          <div className="mt-8 text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-6 py-3 text-sm font-semibold text-[#201657] dark:text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0e7de8] hover:text-[#0e7de8] active:scale-[0.98]"
            >
              Read All Testimonials
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
