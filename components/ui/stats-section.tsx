"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 3, suffix: "", label: "Study Centers" },
  { value: 365, suffix: "", label: "Days Availability" },
  { value: 125, suffix: "+", label: "Students Enrolled" },
  { value: 95, suffix: "%", label: "Satisfaction Rate" },
];

function CountUp({
  target,
  suffix,
  duration = 1800,
  start,
}: {
  target: number;
  suffix: string;
  duration?: number;
  start: boolean;
}) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;

    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [start, target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
};

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-900 py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#f33255] to-transparent opacity-50" />
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#f33255]/8 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#1064c7]/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="overflow-hidden rounded-[2rem] border border-[#f33255]/30 bg-white dark:bg-slate-800 shadow-[0_14px_40px_rgba(243,50,85,0.06)]"
        >
          <div className="grid divide-y divide-slate-100 dark:divide-slate-700 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="group flex flex-col items-center justify-center gap-2 px-8 py-10 text-center transition-colors duration-300 hover:bg-[#f8fafc] dark:hover:bg-slate-700"
              >
                <p className="text-4xl font-bold tracking-tight text-[#1064c7] sm:text-5xl">
                  <CountUp
                    target={stat.value}
                    suffix={stat.suffix}
                    duration={1600 + index * 100}
                    start={isInView}
                  />
                </p>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
