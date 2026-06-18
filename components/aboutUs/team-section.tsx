"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    bio: "With over 15 years of experience in education, Rajesh leads our vision of transforming study experiences.",
    initials: "RK",
    accentColor: "#1064c7",
    bgColor: "bg-[#1064c7]/10",
  },
  {
    name: "Anita Patel",
    role: "Operations Director",
    bio: "Anita brings her expertise in facility management and student engagement to ensure the highest quality experience.",
    initials: "AP",
    accentColor: "#0e7de8",
    bgColor: "bg-[#0e7de8]/10",
  },
  {
    name: "Suresh Menon",
    role: "Technology Head",
    bio: "Suresh oversees our tech infrastructure, ensuring seamless connectivity and digital resources for students.",
    initials: "SM",
    accentColor: "#201657",
    bgColor: "bg-[#201657]/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
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

export function TeamSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] dark:bg-slate-800 py-20 sm:py-24 lg:py-28">
      {/* Decorative blobs */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#1064c7]/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#0e7de8]/10 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#1064c7] to-transparent opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#0e7de8]">
              The People Behind It
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#201657] dark:text-white sm:text-4xl lg:text-5xl">
              Meet our team.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-500 dark:text-slate-400 sm:text-lg">
              A small, focused group building study environments that actually work.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <motion.article
                key={member.name}
                variants={itemVariants}
                className="group flex flex-col rounded-[2rem] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-7 shadow-[0_14px_40px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0e7de8]/25 hover:shadow-[0_22px_55px_rgba(15,23,42,0.08)]"
              >
                {/* Avatar placeholder */}
                <div className="flex items-center gap-4">
                  <div
                    className={`flex size-16 shrink-0 items-center justify-center rounded-[1.25rem] ${member.bgColor} transition-transform duration-300 group-hover:scale-105`}
                  >
                    <span
                      className="text-xl font-bold"
                      style={{ color: member.accentColor }}
                    >
                      {member.initials}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-[#201657] dark:text-white">
                      {member.name}
                    </h3>
                    <p
                      className="mt-0.5 text-xs font-semibold uppercase tracking-[0.22em]"
                      style={{ color: member.accentColor }}
                    >
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-5 h-px w-full bg-linear-to-r from-slate-200 via-slate-100 to-transparent dark:from-slate-700 dark:via-slate-800 dark:to-transparent" />

                {/* Bio */}
                <p className="flex-1 text-sm leading-7 text-slate-500 dark:text-slate-400">{member.bio}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
