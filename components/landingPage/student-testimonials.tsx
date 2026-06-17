"use client";

import { motion } from "framer-motion";
import { MapPin, Quote, Star } from "lucide-react";

const stars = Array.from({ length: 5 });

export function StudentTestimonials() {
  return (
    <section className="relative overflow-hidden bg-slate-50/70 dark:bg-slate-800/80 py-20 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-12 h-80 w-80 rounded-full bg-pink-100/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-purple-100/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 h-1.5 w-20 rounded-full bg-[#f33255]" />          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#f33255]">
            Voices from the center
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#201657] dark:text-white sm:text-4xl md:text-5xl">
            What Our Students Say
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
          className="mx-auto mt-14 max-w-3xl"
        >
          <article className="overflow-hidden rounded-[2rem] border border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-sm">
            <div className="border-b border-slate-200 dark:border-slate-700 px-6 py-6 sm:px-8">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="flex size-16 shrink-0 items-center justify-center rounded-full border-4 border-white dark:border-slate-700 bg-slate-100 dark:bg-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.12)]">
                  <span className="text-lg font-bold text-slate-400 dark:text-slate-500">S</span>
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-lg font-bold leading-tight tracking-tight text-[#1064c7]">
                    Chinmayee Baitharu
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">
                    MBA
                  </p>
                  <div className="mt-2 flex items-center gap-1 text-[#f33255]">
                    <MapPin className="size-3.5" />
                    <span className="text-sm font-medium">Delhi (Kalkaji)</span>
                  </div>
                  <div className="mt-2 flex items-center gap-1 text-[#f33255]">
                    {stars.map((_, index) => (
                      <Star key={index} className="size-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 py-8 sm:px-8 sm:py-10">
              <div className="relative max-w-xl">
                <Quote className="absolute -left-1 -top-2 size-6 text-slate-300 dark:text-slate-600" />
                <p className="pl-6 text-[15px] leading-8 text-slate-600 dark:text-slate-400 sm:text-base">
                  I would like to express my appreciation for the overall experience
                  at the center. The environment is welcoming, well-organized, and
                  conducive to learning and engagement. There is a strong emphasis
                  on quality and a genuine effort to ensure participant satisfaction.
                  I look forward to continued interactions and would gladly recommend
                  the center to others.
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between gap-4 border-t border-slate-200 dark:border-slate-700 pt-6">
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  Shared by a verified learner
                </div>

                <button
                  type="button"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-[#f33255] px-5 text-sm font-semibold text-white shadow-sm transition-transform hover:bg-[#d92a49] active:scale-[0.98] cursor-pointer"
                >
                  Read More Testimonials
                </button>
              </div>
            </div>
          </article>
        </motion.div>
      </div>
    </section>
  );
}
