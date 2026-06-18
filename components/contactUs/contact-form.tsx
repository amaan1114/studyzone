"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Send, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";

const LOCATIONS = ["Delhi (Kalkaji)", "Bangalore (Kalyan Nagar)", "Bangalore (Sarjapur Road)"];
const TOTAL = 7;

const slideIn = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.22, ease: [0.7, 0, 0.84, 0] as const } },
};

const inputCls =
  "w-full border-0 border-b-2 border-slate-300 dark:border-slate-600 bg-transparent pb-2 text-xl text-[#201657] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-colors focus:border-[#0e7de8]";

const nextBtnCls =
  "mt-8 inline-flex items-center gap-2 rounded-full bg-[#0e7de8] px-7 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(14,125,232,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0a6fd4] active:scale-[0.98]";

const labelCls = "text-xs font-semibold uppercase tracking-[0.3em] text-[#0e7de8]";
const questionCls = "mt-2 mb-3 text-2xl font-bold text-[#201657] dark:text-white sm:text-3xl";

export function ContactForm() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [captcha, setCaptcha] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const phoneDigits = useMemo(() => phone.replace(/\D/g, ""), [phone]);
  const progress = (step / (TOTAL - 1)) * 100;

  const next = () => setStep((s) => s + 1);
  const handleKey = (e: React.KeyboardEvent, canAdvance: boolean) => {
    if (e.key === "Enter" && canAdvance) {
      e.preventDefault();
      next();
    }
  };

  if (submitted) {
    return (
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-[#f8fafc] dark:bg-slate-800 py-20">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
          <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-[#0e7de8]/10">
            <Check className="size-10 text-[#0e7de8]" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-[#201657] dark:text-white">Message sent!</h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400">Thanks for reaching out. We&apos;ll get back to you soon.</p>
        </motion.div>
      </section>
    );
  }

  return (
    <section
      id="contact-form"
      className="relative overflow-hidden bg-[#f8fafc] dark:bg-slate-800 py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#1064c7]/8 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#0e7de8]/8 blur-3xl" />
      <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        {step === 0 && (
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#0e7de8]">Reach Out</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#201657] dark:text-white sm:text-4xl lg:text-5xl">
              Send Us a Message
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-8 text-slate-500 dark:text-slate-400">
              Answer a few quick questions and we&apos;ll get back to you.
            </p>
          </motion.div>
        )}

        <div className="overflow-hidden rounded-[2rem] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-[0_14px_40px_rgba(15,23,42,0.07)]">
          <div className="h-1 w-full bg-slate-100 dark:bg-slate-700">
            <motion.div
              className="h-full bg-[#0e7de8]"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
            />
          </div>

          <div className="relative min-h-[340px] p-8 sm:p-12">
            <p className="mb-6 text-xs font-semibold text-slate-400">
              {step + 1} / {TOTAL}
            </p>

            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div key="name" {...slideIn}>
                  <p className={labelCls}>Question 1</p>
                  <h3 className={questionCls}>
                    What&apos;s your name? <span className="text-[#0e7de8]">*</span>
                  </h3>
                  <input
                    autoFocus
                    className={inputCls}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Rahul Verma"
                    onKeyDown={(e) => handleKey(e, name.trim().length > 0)}
                  />
                  <button className={nextBtnCls} onClick={next} disabled={!name.trim()}>
                    OK <ArrowRight className="size-4" />
                  </button>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div key="email" {...slideIn}>
                  <p className={labelCls}>Question 2</p>
                  <h3 className={questionCls}>
                    Your email address? <span className="text-[#0e7de8]">*</span>
                  </h3>
                  <input
                    autoFocus
                    type="email"
                    className={inputCls}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="rahul@example.com"
                    onKeyDown={(e) => handleKey(e, email.includes("@"))}
                  />
                  <button className={nextBtnCls} onClick={next} disabled={!email.includes("@")}>
                    OK <ArrowRight className="size-4" />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="phone" {...slideIn}>
                  <p className={labelCls}>Question 3</p>
                  <h3 className={questionCls}>
                    Your phone number? <span className="text-[#0e7de8]">*</span>
                  </h3>
                  <input
                    autoFocus
                    type="tel"
                    className={inputCls}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    onKeyDown={(e) => handleKey(e, phoneDigits.length >= 10)}
                  />
                  <button className={nextBtnCls} onClick={next} disabled={phoneDigits.length < 10}>
                    OK <ArrowRight className="size-4" />
                  </button>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="subject" {...slideIn}>
                  <p className={labelCls}>Question 4</p>
                  <h3 className={questionCls}>
                    What&apos;s this about? <span className="text-[#0e7de8]">*</span>
                  </h3>
                  <input
                    autoFocus
                    className={inputCls}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Inquiry about membership"
                    onKeyDown={(e) => handleKey(e, subject.trim().length > 0)}
                  />
                  <button className={nextBtnCls} onClick={next} disabled={!subject.trim()}>
                    OK <ArrowRight className="size-4" />
                  </button>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div key="location" {...slideIn}>
                  <p className={labelCls}>Question 5</p>
                  <h3 className={questionCls}>
                    Which center should we route this to? <span className="text-[#0e7de8]">*</span>
                  </h3>
                  <div className="mt-5 space-y-3">
                    {LOCATIONS.map((loc, i) => (
                      <button
                        key={loc}
                        type="button"
                        onClick={() => {
                          setLocation(loc);
                          setTimeout(next, 280);
                        }}
                        className={`flex w-full items-center gap-3 rounded-2xl border px-5 py-3.5 text-left text-sm font-medium transition-all hover:-translate-y-0.5 ${
                          location === loc
                            ? "border-[#0e7de8] bg-[#0e7de8]/6 text-[#0e7de8]"
                            : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-[#0e7de8]/50"
                        }`}
                      >
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

              {step === 5 && (
                <motion.div key="message" {...slideIn}>
                  <p className={labelCls}>Question 6</p>
                  <h3 className={questionCls}>
                    Your message <span className="text-[#0e7de8]">*</span>
                  </h3>
                  <textarea
                    autoFocus
                    rows={4}
                    className={`${inputCls} resize-none`}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us how we can help you…"
                  />
                  <button className={nextBtnCls} onClick={next} disabled={message.trim().length < 10}>
                    OK <ArrowRight className="size-4" />
                  </button>
                </motion.div>
              )}

              {step === 6 && (
                <motion.div key="submit" {...slideIn} className="text-center">
                  <p className={labelCls}>All done!</p>
                  <h3 className="mt-2 text-2xl font-bold text-[#201657] dark:text-white sm:text-3xl">Ready to send?</h3>
                  <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                    Sending as <span className="font-semibold text-[#201657] dark:text-white">{name}</span> about{" "}
                    <span className="font-semibold text-[#0e7de8]">{subject}</span> for{" "}
                    <span className="font-semibold text-[#0e7de8]">{location}</span>.
                  </p>

                  <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-5 py-4 shadow-sm">
                    <input
                      type="checkbox"
                      id="captcha-contact"
                      checked={captcha}
                      onChange={(e) => setCaptcha(e.target.checked)}
                      className="size-5 cursor-pointer rounded border-slate-300 accent-[#1064c7]"
                    />
                    <label
                      htmlFor="captcha-contact"
                      className="cursor-pointer select-none text-sm font-medium text-slate-600 dark:text-slate-300"
                    >
                      I&apos;m not a robot
                    </label>
                    <div className="ml-auto flex flex-col items-center gap-0.5">
                      <ShieldCheck className="size-7 text-[#1064c7]" />
                      <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">reCAPTCHA</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSubmitted(true)}
                    disabled={!captcha}
                    className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#0e7de8] px-10 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(14,125,232,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#0a6fd4] active:scale-[0.98]"
                  >
                    <Send className="size-4" />
                    Send Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {step > 0 && !submitted && (
          <button
            onClick={() => setStep((s) => s - 1)}
            className="mt-4 text-xs text-slate-400 transition-colors hover:text-[#0e7de8]"
          >
            ← Back
          </button>
        )}
      </div>
    </section>
  );
}
