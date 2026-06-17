"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, MessageSquareDashed, Send } from "lucide-react";
import { useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const LOCATIONS = ["Delhi (Kalkaji)", "Bangalore (Kalyan Nagar)", "Bangalore (Sarjapur Road)"];
const FEEDBACK_TYPES = ["General Feedback", "Complaint", "Suggestion", "Service Request", "Compliment", "Other"];
const TOTAL = 7;

// ─── Slide variants ───────────────────────────────────────────────────────────

const slideIn = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const } },
  exit:    { opacity: 0, y: -30, transition: { duration: 0.22, ease: [0.7, 0, 0.84, 0] as const } },
};

// ─── Shared styles ────────────────────────────────────────────────────────────

const inputCls =
  "w-full border-0 border-b-2 border-slate-300 dark:border-slate-600 bg-transparent pb-2 text-xl text-[#201657] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-colors focus:border-[#f33255]";

const nextBtnCls =
  "mt-8 inline-flex items-center gap-2 rounded-full bg-[#f33255] px-7 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(243,50,85,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e62c4d] active:scale-[0.98]";

const labelCls = "text-xs font-semibold uppercase tracking-[0.3em] text-[#f33255]";
const questionCls = "mt-2 mb-3 text-2xl font-bold text-[#201657] dark:text-white sm:text-3xl";

// ─── Component ────────────────────────────────────────────────────────────────

export function FeedbackForm() {
  const [step, setStep] = useState(0);
  const [anonymous, setAnonymous] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [feedbackType, setFeedbackType] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const progress = (step / (TOTAL - 1)) * 100;

  const next = () => setStep(s => s + 1);
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
          <h2 className="mt-6 text-3xl font-bold text-[#201657] dark:text-white">Feedback received!</h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400">Thank you for helping us improve StudyZone365.</p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] dark:bg-slate-800 py-20 sm:py-24 lg:py-28">
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#1064c7]/8 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#f33255]/8 blur-3xl" />

      <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        {/* Header (step 0 only) */}
        {step === 0 && (
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center">
            <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-2xl bg-[#f33255]/10">
              <MessageSquareDashed className="size-7 text-[#f33255]" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#f33255]">We're Listening</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#201657] dark:text-white sm:text-4xl lg:text-5xl">Share Your Thoughts</h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-500 dark:text-slate-400">
              Feedback, complaints, suggestions, or service requests — we want to hear it all.
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
            <p className="mb-6 text-xs font-semibold text-slate-400">{step + 1} / {TOTAL}</p>

            <AnimatePresence mode="wait">
              {/* ── Step 0: anonymous toggle + name ── */}
              {step === 0 && (
                <motion.div key="anon" {...slideIn}>
                  <p className={labelCls}>Question 1</p>
                  <h3 className={questionCls}>Would you like to submit anonymously?</h3>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    {["Yes, keep me anonymous", "No, include my details"].map((opt, i) => (
                      <button key={opt} type="button"
                        onClick={() => { setAnonymous(i === 0); setTimeout(next, 280); }}
                        className={`flex flex-1 items-center gap-3 rounded-2xl border px-5 py-3.5 text-sm font-medium transition-all hover:-translate-y-0.5 ${
                          (anonymous && i === 0) || (!anonymous && i === 1)
                            ? "border-[#f33255] bg-[#f33255]/6 text-[#f33255]"
                            : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-[#f33255]/50"
                        }`}>
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-current text-[10px] font-bold opacity-60">
                          {i === 0 ? "A" : "B"}
                        </span>
                        {opt}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ── Step 1: name (skip if anonymous) ── */}
              {step === 1 && !anonymous && (
                <motion.div key="name" {...slideIn}>
                  <p className={labelCls}>Question 2</p>
                  <h3 className={questionCls}>What's your name? <span className="text-[#f33255]">*</span></h3>
                  <input autoFocus className={inputCls} value={name} onChange={e => setName(e.target.value)}
                    placeholder="Arjun Singh" onKeyDown={e => handleKey(e, name.trim().length > 0)} />
                  <button className={nextBtnCls} onClick={next} disabled={!name.trim()}>
                    OK <ArrowRight className="size-4" />
                  </button>
                </motion.div>
              )}
              {step === 1 && anonymous && (
                <motion.div key="name-skip" {...slideIn}>
                  <p className={labelCls}>Noted!</p>
                  <h3 className={questionCls}>Your feedback will stay completely anonymous.</h3>
                  <button className={nextBtnCls} onClick={next}>Continue <ArrowRight className="size-4" /></button>
                </motion.div>
              )}

              {/* ── Step 2: email (skip if anonymous) ── */}
              {step === 2 && !anonymous && (
                <motion.div key="email" {...slideIn}>
                  <p className={labelCls}>Question 3</p>
                  <h3 className={questionCls}>Your email address? <span className="text-[#f33255]">*</span></h3>
                  <input autoFocus type="email" className={inputCls} value={email} onChange={e => setEmail(e.target.value)}
                    placeholder="arjun@example.com" onKeyDown={e => handleKey(e, email.includes("@"))} />
                  <button className={nextBtnCls} onClick={next} disabled={!email.includes("@")}>
                    OK <ArrowRight className="size-4" />
                  </button>
                </motion.div>
              )}
              {step === 2 && anonymous && (
                <motion.div key="email-skip" {...slideIn}>
                  <p className={labelCls}>Question 2</p>
                  <h3 className={questionCls}>Which study center are you giving feedback for? <span className="text-[#f33255]">*</span></h3>
                  <div className="mt-5 space-y-3">
                    {LOCATIONS.map((loc, i) => (
                      <button key={loc} type="button" onClick={() => { setLocation(loc); setTimeout(next, 280); }}
                        className={`flex w-full items-center gap-3 rounded-2xl border px-5 py-3.5 text-left text-sm font-medium transition-all hover:-translate-y-0.5 ${
                          location === loc ? "border-[#f33255] bg-[#f33255]/6 text-[#f33255]"
                            : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-[#f33255]/50"
                        }`}>
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-current text-[10px] font-bold opacity-60">
                          {String.fromCharCode(65 + i)}
                        </span>
                        {loc}
                        {location === loc && <Check className="ml-auto size-4" />}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ── Step 3: location (for non-anonymous) ── */}
              {step === 3 && !anonymous && (
                <motion.div key="location" {...slideIn}>
                  <p className={labelCls}>Question 4</p>
                  <h3 className={questionCls}>Which study center? <span className="text-[#f33255]">*</span></h3>
                  <div className="mt-5 space-y-3">
                    {LOCATIONS.map((loc, i) => (
                      <button key={loc} type="button" onClick={() => { setLocation(loc); setTimeout(next, 280); }}
                        className={`flex w-full items-center gap-3 rounded-2xl border px-5 py-3.5 text-left text-sm font-medium transition-all hover:-translate-y-0.5 ${
                          location === loc ? "border-[#f33255] bg-[#f33255]/6 text-[#f33255]"
                            : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-[#f33255]/50"
                        }`}>
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-current text-[10px] font-bold opacity-60">
                          {String.fromCharCode(65 + i)}
                        </span>
                        {loc}
                        {location === loc && <Check className="ml-auto size-4" />}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
              {step === 3 && anonymous && (
                <motion.div key="type-anon" {...slideIn}>
                  <p className={labelCls}>Question 3</p>
                  <h3 className={questionCls}>What type of feedback is this? <span className="text-[#f33255]">*</span></h3>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {FEEDBACK_TYPES.map((t, i) => (
                      <button key={t} type="button" onClick={() => { setFeedbackType(t); setTimeout(next, 280); }}
                        className={`flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 ${
                          feedbackType === t ? "border-[#f33255] bg-[#f33255]/6 text-[#f33255]"
                            : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-[#f33255]/50"
                        }`}>
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-current text-[9px] font-bold opacity-60">
                          {String.fromCharCode(65 + i)}
                        </span>
                        {t}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ── Step 4: feedback type (non-anonymous) ── */}
              {step === 4 && !anonymous && (
                <motion.div key="type" {...slideIn}>
                  <p className={labelCls}>Question 5</p>
                  <h3 className={questionCls}>What type of feedback? <span className="text-[#f33255]">*</span></h3>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {FEEDBACK_TYPES.map((t, i) => (
                      <button key={t} type="button" onClick={() => { setFeedbackType(t); setTimeout(next, 280); }}
                        className={`flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 ${
                          feedbackType === t ? "border-[#f33255] bg-[#f33255]/6 text-[#f33255]"
                            : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-[#f33255]/50"
                        }`}>
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-current text-[9px] font-bold opacity-60">
                          {String.fromCharCode(65 + i)}
                        </span>
                        {t}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
              {step === 4 && anonymous && (
                <motion.div key="msg-anon" {...slideIn}>
                  <p className={labelCls}>Question 4</p>
                  <h3 className={questionCls}>Your message <span className="text-[#f33255]">*</span></h3>
                  <textarea autoFocus rows={4} className={`${inputCls} resize-none`} value={message}
                    onChange={e => setMessage(e.target.value)} placeholder="Share your thoughts, suggestions, or concerns…" />
                  <button className={nextBtnCls} onClick={next} disabled={message.trim().length < 10}>
                    OK <ArrowRight className="size-4" />
                  </button>
                </motion.div>
              )}

              {/* ── Step 5: message (non-anonymous) ── */}
              {step === 5 && !anonymous && (
                <motion.div key="message" {...slideIn}>
                  <p className={labelCls}>Question 6</p>
                  <h3 className={questionCls}>Your message <span className="text-[#f33255]">*</span></h3>
                  <textarea autoFocus rows={4} className={`${inputCls} resize-none`} value={message}
                    onChange={e => setMessage(e.target.value)} placeholder="Share your thoughts, suggestions, or concerns…" />
                  <button className={nextBtnCls} onClick={next} disabled={message.trim().length < 10}>
                    OK <ArrowRight className="size-4" />
                  </button>
                </motion.div>
              )}
              {step === 5 && anonymous && (
                <motion.div key="submit-anon" {...slideIn} className="text-center">
                  <p className={labelCls}>All done!</p>
                  <h3 className="mt-2 text-2xl font-bold text-[#201657] dark:text-white sm:text-3xl">Ready to submit?</h3>
                  <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                    Submitting anonymous <span className="font-semibold text-[#f33255]">{feedbackType}</span> for <span className="font-semibold text-[#f33255]">{location}</span>.
                  </p>
                  <button onClick={() => setSubmitted(true)}
                    className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#f33255] px-10 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(243,50,85,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#e62c4d] active:scale-[0.98]">
                    <Send className="size-4" />Submit Feedback
                  </button>
                </motion.div>
              )}

              {/* ── Step 6: submit (non-anonymous) ── */}
              {step === 6 && !anonymous && (
                <motion.div key="submit" {...slideIn} className="text-center">
                  <p className={labelCls}>All done!</p>
                  <h3 className="mt-2 text-2xl font-bold text-[#201657] dark:text-white sm:text-3xl">Ready to submit?</h3>
                  <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                    Submitting as <span className="font-semibold text-[#201657] dark:text-white">{name}</span> — <span className="font-semibold text-[#f33255]">{feedbackType}</span> for <span className="font-semibold text-[#f33255]">{location}</span>.
                  </p>
                  <button onClick={() => setSubmitted(true)}
                    className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#f33255] px-10 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(243,50,85,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#e62c4d] active:scale-[0.98]">
                    <Send className="size-4" />Submit Feedback
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Back */}
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
