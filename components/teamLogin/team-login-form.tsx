"use client";

import { motion } from "framer-motion";
import { Check, Eye, EyeOff, Lock, LogIn, User } from "lucide-react";
import { useState } from "react";

const inputBase =
  "w-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 shadow-sm outline-none transition-all duration-200 focus:border-[#0e7de8] focus:ring-2 focus:ring-[#0e7de8]/15";

const labelBase = "mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300";

export function TeamLoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanUser = username.trim();

    if (!cleanUser || password.trim().length < 6) {
      setError("Enter a valid username and password.");
      return;
    }

    setError(null);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="relative flex min-h-[calc(100vh-4.5rem)] items-center justify-center overflow-hidden bg-[#f8fafc] dark:bg-slate-800 py-16">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#1064c7]/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#0e7de8]/10 blur-3xl" />
        <motion.div initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
          <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-[#0e7de8]/10">
            <Check className="size-10 text-[#0e7de8]" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-[#201657] dark:text-white">Welcome back!</h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400">You&apos;re signed in to the team portal.</p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] dark:bg-slate-800 py-16 sm:py-20 lg:py-24">
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#1064c7]/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#0e7de8]/10 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#1064c7] to-transparent opacity-30" />

      <div className="relative mx-auto max-w-md px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <p className="text-xl font-semibold tracking-tight leading-none">
            <span className="text-[#201657] dark:text-white font-bold">STUDYZONE</span>
            <span className="text-[#0e7de8]">365</span>
          </p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#0e7de8]">Team Portal</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#201657] dark:text-white sm:text-4xl">
            Team Login
          </h1>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-slate-500 dark:text-slate-400">
            Sign in to manage center operations and updates.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-[0_14px_40px_rgba(15,23,42,0.07)]"
        >
          <div className="h-1 w-full bg-linear-to-r from-[#1064c7] via-[#0e7de8] to-[#201657]" />

          <form className="space-y-6 p-7 sm:p-9" onSubmit={submit}>
            <div>
              <label className={labelBase}>Username</label>
              <div className="relative">
                <User className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={`${inputBase} pl-11`}
                  placeholder="e.g. team.delhi"
                  autoComplete="username"
                />
              </div>
            </div>

            <div>
              <label className={labelBase}>Password</label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  className={`${inputBase} pl-11 pr-11`}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl p-2 text-slate-400 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-600 dark:hover:text-slate-300"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="rounded-2xl border border-[#0e7de8]/20 bg-[#0e7de8]/5 px-4 py-3 text-sm text-[#0e7de8]">
                {error}
              </div>
            )}

            <div className="flex items-center justify-between">
              <button
                type="button"
                className="text-xs font-semibold text-slate-500 dark:text-slate-400 transition-colors hover:text-[#0e7de8]"
              >
                Forgot password?
              </button>
              <span className="text-[11px] font-semibold text-slate-400">Admins only</span>
            </div>

            <button
              type="submit"
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0e7de8] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(14,125,232,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0a6fd4] active:scale-[0.98]"
            >
              <LogIn className="size-4" />
              Sign In
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
