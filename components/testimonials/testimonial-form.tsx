"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Star, Upload, ArrowRight, Check, ChevronDown } from "lucide-react";
import { useRef, useState } from "react";

// ─── Questions ───────────────────────────────────────────────────────────────

const CENTERS = ["Delhi (Kalkaji)", "Bangalore (Kalyan Nagar)", "Bangalore (Sarjapur Road)"];
const TOTAL = 8; // total steps incl. submit screen

// ─── Slide variants ───────────────────────────────────────────────────────────

const slideIn = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const } },
  exit:    { opacity: 0, y: -30, transition: { duration: 0.22, ease: [0.7, 0, 0.84, 0] as const } },
};

// ─── Reusable input styles ────────────────────────────────────────────────────

const inputCls =
  "w-full border-0 border-b-2 border-slate-300 dark:border-slate-600 bg-transparent pb-2 text-xl text-[#201657] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-colors focus:border-[#f33255]";

const nextBtnCls =
  "mt-8 inline-flex items-center gap-2 rounded-full bg-[#f33255] px-7 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(243,50,85,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e62c4d] active:scale-[0.98]";

const labelCls = "text-xs font-semibold uppercase tracking-[0.3em] text-[#f33255]";
const questionCls = "mt-2 mb-3 text-2xl font-bold text-[#201657] dark:text-white sm:text-3xl";

// ─── Component ───────────────────────────────────────────────────────────────

export function TestimonialForm() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [center, setCenter] = useState("");
  const [testimonial, setTestimonial] = useState("");
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [fileName, setFileName] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const fileRef = useRef<HTMLInputElement>(null);

  const progress = ((step) / (TOTAL - 1)) * 100;

  const next = () => setStep((s) => s + 1);
  const handleKey = (e: React.KeyboardEvent, canAdvance: boolean) => {
    if (e.key === "Enter" && canAdvance) { e.preventDefault(); next(); }
  };

  if (submitted) {
    return (
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-[#f8fafc] dark:bg-slate-800 py-20">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          className="text-center">
          <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-[#f33255]/10">
            <Check className="size-10 text-[#f33255]" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-[#201657] dark:text-white">Thank you!</h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400">Your testimonial has been submitted successfully.</p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] dark:bg-slate-800 py-20 sm:py-24 lg:py-28">
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#1064c7]/8 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#f33255]/8 blur-3xl" />

      <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        {/* Header (only on step 0) */}
        {step === 0 && (
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#f33255]">Your Voice Matters</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#201657] dark:text-white sm:text-4xl lg:text-5xl">Share Your Experience</h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-500 dark:text-slate-400">
              We'd love to hear about your time at StudyZone365.
            </p>
          </motion.div>
        )}

        {/* Card */}
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-[0_14px_40px_rgba(15,23,42,0.07)]">
          {/* Progress bar */}
          <div className="h-1 w-full bg-slate-100 dark:bg-slate-700">
            <motion.div className="h-full bg-[#f33255]" animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }} />
          </div>

          <div className="relative min-h-[340px] p-8 sm:p-12">
            {/* Step counter */}
            <p className="mb-6 text-xs font-semibold text-slate-400">
              {step + 1} / {TOTAL}
            </p>

            <AnimatePresence mode="wait">
              {/* ── Step 0: Name ── */}
              {step === 0 && (
                <motion.div key="name" {...slideIn}>
                  <p className={labelCls}>Question 1</p>
                  <h3 className={questionCls}>What's your full name? <span className="text-[#f33255]">*</span></h3>
                  <input autoFocus className={inputCls} value={name} onChange={e => setName(e.target.value)}
                    placeholder="Priya Sharma" onKeyDown={e => handleKey(e, name.trim().length > 0)} />
                  <button className={nextBtnCls} onClick={next} disabled={!name.trim()}>
                    OK <ArrowRight className="size-4" />
                  </button>
                  <p className="mt-3 text-xs text-slate-400">Press <kbd className="rounded bg-slate-100 dark:bg-slate-700 px-1 py-0.5 text-[10px] font-mono">Enter ↵</kbd> to continue</p>
                </motion.div>
              )}

              {/* ── Step 1: Email ── */}
              {step === 1 && (
                <motion.div key="email" {...slideIn}>
                  <p className={labelCls}>Question 2</p>
                  <h3 className={questionCls}>Your email address? <span className="text-[#f33255]">*</span></h3>
                  <input autoFocus type="email" className={inputCls} value={email} onChange={e => setEmail(e.target.value)}
                    placeholder="priya@example.com" onKeyDown={e => handleKey(e, email.includes("@"))} />
                  <button className={nextBtnCls} onClick={next} disabled={!email.includes("@")}>
                    OK <ArrowRight className="size-4" />
                  </button>
                </motion.div>
              )}

              {/* ── Step 2: Occupation ── */}
              {step === 2 && (
                <motion.div key="occupation" {...slideIn}>
                  <p className={labelCls}>Question 3</p>
                  <h3 className={questionCls}>Your occupation or field of study? <span className="text-[#f33255]">*</span></h3>
                  <input autoFocus className={inputCls} value={occupation} onChange={e => setOccupation(e.target.value)}
                    placeholder="e.g. MBA, UPSC Aspirant, Engineer" onKeyDown={e => handleKey(e, occupation.trim().length > 0)} />
                  <button className={nextBtnCls} onClick={next} disabled={!occupation.trim()}>
                    OK <ArrowRight className="size-4" />
                  </button>
                </motion.div>
              )}

              {/* ── Step 3: Center ── */}
              {step === 3 && (
                <motion.div key="center" {...slideIn}>
                  <p className={labelCls}>Question 4</p>
                  <h3 className={questionCls}>Which study center did you visit? <span className="text-[#f33255]">*</span></h3>
                  <div className="mt-6 space-y-3">
                    {CENTERS.map((c, i) => (
                      <button key={c} type="button" onClick={() => { setCenter(c); setTimeout(next, 280); }}
                        className={`flex w-full items-center gap-3 rounded-2xl border px-5 py-3.5 text-left text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ${
                          center === c
                            ? "border-[#f33255] bg-[#f33255]/6 text-[#f33255]"
                            : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-[#f33255]/50"
                        }`}>
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-current text-[10px] font-bold opacity-60">
                          {String.fromCharCode(65 + i)}
                        </span>
                        {c}
                        {center === c && <Check className="ml-auto size-4" />}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ── Step 4: Testimonial ── */}
              {step === 4 && (
                <motion.div key="testimonial" {...slideIn}>
                  <p className={labelCls}>Question 5</p>
                  <h3 className={questionCls}>Share your experience in your own words. <span className="text-[#f33255]">*</span></h3>
                  <textarea autoFocus rows={4} className={`${inputCls} resize-none`} value={testimonial}
                    onChange={e => setTestimonial(e.target.value)} placeholder="What did you love most about StudyZone365?" />
                  <button className={nextBtnCls} onClick={next} disabled={testimonial.trim().length < 20}>
                    OK <ArrowRight className="size-4" />
                  </button>
                  <p className="mt-2 text-xs text-slate-400">Minimum 20 characters</p>
                </motion.div>
              )}

              {/* ── Step 5: Rating ── */}
              {step === 5 && (
                <motion.div key="rating" {...slideIn}>
                  <p className={labelCls}>Question 6</p>
                  <h3 className={questionCls}>How would you rate your experience? <span className="text-[#f33255]">*</span></h3>
                  <div className="mt-8 flex items-center gap-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button key={s} type="button" onClick={() => { setRating(s); setTimeout(next, 300); }}
                        onMouseEnter={() => setHovered(s)} onMouseLeave={() => setHovered(0)}
                        className="transition-transform hover:scale-110 active:scale-95" aria-label={`${s} stars`}>
                        <Star className={`size-10 transition-colors ${
                          s <= (hovered || rating) ? "fill-[#f33255] text-[#f33255]" : "fill-slate-100 dark:fill-slate-700 text-slate-300"}`} />
                      </button>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                    {hovered ? ["", "Poor", "Fair", "Good", "Very Good", "Excellent"][hovered] : rating ? ["", "Poor", "Fair", "Good", "Very Good", "Excellent"][rating] : "Tap a star"}
                  </p>
                </motion.div>
              )}

              {/* ── Step 6: Photo + consent ── */}
              {step === 6 && (
                <motion.div key="photo" {...slideIn}>
                  <p className={labelCls}>Question 7</p>
                  <h3 className={questionCls}>Add a photo? <span className="text-slate-400 font-normal text-xl">(optional)</span></h3>
                  <label className="mt-6 flex cursor-pointer items-center gap-4 rounded-2xl border border-dashed border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 px-5 py-4 transition-colors hover:border-[#1064c7] hover:bg-[#1064c7]/4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white dark:bg-slate-700 shadow-sm">
                      <Upload className="size-4 text-[#1064c7]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-300">{fileName || "Click to upload"}</p>
                      <p className="text-xs text-slate-400">Max 2 MB · JPG, JPEG, PNG</p>
                    </div>
                    <input ref={fileRef} type="file" accept=".jpg,.jpeg,.png" className="sr-only"
                      onChange={e => setFileName(e.target.files?.[0]?.name ?? "")} />
                  </label>

                  <label className="mt-6 flex cursor-pointer items-start gap-3">
                    <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)}
                      className="mt-1 size-4 rounded border-slate-300 accent-[#f33255]" />
                    <span className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                      I consent to <span className="font-semibold text-[#201657] dark:text-white">StudyZone365</span> using my testimonial and photo on their website and marketing materials.
                    </span>
                  </label>

                  <button className={nextBtnCls} onClick={next} disabled={!consent}>
                    Continue <ArrowRight className="size-4" />
                  </button>
                </motion.div>
              )}

              {/* ── Step 7: Submit ── */}
              {step === 7 && (
                <motion.div key="submit" {...slideIn} className="text-center">
                  <p className={labelCls}>Almost done!</p>
                  <h3 className="mt-2 text-2xl font-bold text-[#201657] dark:text-white sm:text-3xl">Ready to submit?</h3>
                  <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm">Submitting as <span className="font-semibold text-[#201657] dark:text-white">{name}</span> for <span className="font-semibold text-[#f33255]">{center}</span>.</p>
                  <button
                    onClick={() => setSubmitted(true)}
                    className="mt-8 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#f33255] px-10 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(243,50,85,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e62c4d] active:scale-[0.98]">
                    Submit Testimonial
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Back button */}
        {step > 0 && !submitted && (
          <button onClick={() => setStep(s => s - 1)}
            className="mt-4 text-xs text-slate-400 hover:text-[#f33255] transition-colors">
            ← Back
          </button>
        )}
      </div>
    </section>
  );
}
