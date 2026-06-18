"use client";

import { ChevronDown, User, MapPin, Menu, Phone, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Button } from "../components/ui/button";
import { ThemeToggle } from "./theme-toggle";

const SUPPORT_NUMBER = "+91 93556 23363";
const SUPPORT_TEL = "tel:+919355623363";

const centerDropdownItems = [
  {
    label: "Delhi (Kalkaji)",
    area: "B-Block, Kalkaji, New Delhi",
    href: "/centers/kalkaji",
    color: "#1064c7",
  },
  {
    label: "Bangalore (Kalyan Nagar)",
    area: "HRBR Layout, Kalyan Nagar",
    href: "/centers/kalyan-nagar",
    color: "#0e7de8",
  },
  {
    label: "Bangalore (Sarjapur Road)",
    area: "Kasavanahalli, Bengaluru",
    href: "/centers/sarjapur",
    color: "#201657",
  },
];

const navLinks = [
  { label: "Programs", href: "/programs" },
  { label: "Centers", hasDropdown: true, href: "/centers" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const router = useRouter();

  // Desktop dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  };
  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 120);
  };

  // Mobile menu
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCentersOpen, setMobileCentersOpen] = useState(false);

  // Close mobile menu on route change / resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navigate = (href: string) => {
    setMobileOpen(false);
    setDropdownOpen(false);
    router.push(href);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/80 dark:border-slate-700/80 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-[0_1px_0_rgba(15,23,42,0.04)]">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <div className="shrink-0 space-y-0.5 cursor-pointer" onClick={() => navigate("/")}>
            <p className="text-xl font-semibold tracking-tight leading-none">
              <span className="text-[#201657] dark:text-white font-bold">STUDYZONE</span>
              <span className="text-[#0e7de8]">365</span>
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 sm:text-sm leading-none">
              Your space for live learning
            </p>
          </div>

          {/* Desktop nav — visible from xl up */}
          <nav className="hidden items-center gap-1 xl:flex rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-800/80 p-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  <button
                    type="button"
                    onClick={() => navigate(link.href!)}
                    className="group flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors hover:bg-white dark:hover:bg-slate-700 hover:text-[#0a6fd4] cursor-pointer active:scale-[0.98]"
                  >
                    {link.label}
                    <ChevronDown
                      className={`size-3.5 opacity-50 transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180 opacity-80" : "group-hover:translate-y-px"
                      }`}
                    />
                  </button>

                  {dropdownOpen && (
                    <div
                      className="absolute left-1/2 top-full mt-2 w-64 -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-[0_16px_40px_rgba(15,23,42,0.10)]"
                      onMouseEnter={openDropdown}
                      onMouseLeave={closeDropdown}
                    >
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rotate-45 border-l border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800" />
                      <div className="p-2">
                        <p className="mb-1 px-3 pt-1 pb-0.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400 dark:text-slate-500">
                          Our Locations
                        </p>
                        {centerDropdownItems.map((item) => (
                          <button
                            key={item.label}
                            type="button"
                            onClick={() => navigate(item.href)}
                            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-700"
                          >
                            <div
                              className="flex size-8 shrink-0 items-center justify-center rounded-lg"
                              style={{ backgroundColor: `${item.color}18` }}
                            >
                              <MapPin className="size-3.5" style={{ color: item.color }} />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-[#201657] dark:text-white">{item.label}</p>
                              <p className="text-[11px] text-slate-400 dark:text-slate-500">{item.area}</p>
                            </div>
                          </button>
                        ))}
                        <div className="mt-1 border-t border-slate-100 dark:border-slate-700/50 pt-1">
                          <button
                            type="button"
                            onClick={() => navigate("/centers")}
                            className="flex w-full items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold text-[#0e7de8] transition-colors hover:bg-[#0e7de8]/6"
                          >
                            View all centers
                            <ChevronDown className="size-3 -rotate-90" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={link.label}
                  type="button"
                  className="group flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors hover:bg-white dark:hover:bg-slate-700 hover:text-[#0a6fd4] cursor-pointer active:scale-[0.98]"
                  onClick={() => link.href && navigate(link.href)}
                >
                  {link.label}
                </button>
              )
            )}
          </nav>

          {/* Right side */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href={SUPPORT_TEL}
              className="hidden lg:inline-flex items-center gap-2 rounded-full border border-[#0e7de8]/15 dark:border-[#0e7de8]/20 bg-[#0e7de8]/6 dark:bg-[#0e7de8]/10 px-3.5 py-2 text-sm font-semibold text-[#0e7de8] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0e7de8] hover:text-white active:scale-[0.98]"
            >
              <span className="flex size-7 items-center justify-center rounded-full bg-white dark:bg-slate-900 text-[#0e7de8] shadow-sm">
                <Phone className="size-3.5" />
              </span>
              <span className="hidden xl:inline">{SUPPORT_NUMBER}</span>
              <span className="xl:hidden">Call Us</span>
            </a>

            <Button
              variant="outline"
              className="hidden h-9 rounded-md border-slate-300 dark:border-slate-600 px-4 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 dark:bg-slate-800 cursor-pointer active:scale-[0.98] sm:flex"
              onClick={() => navigate("/Login")}
            >
              <User className="size-4" />
              Login
            </Button>

            <ThemeToggle />

            {/* Hamburger — visible below xl */}
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((o) => !o)}
              className="flex size-9 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 shadow-sm transition-colors hover:border-[#0e7de8] hover:text-[#0e7de8] xl:hidden"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      {/* Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm xl:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden
        />
      )}

      {/* Slide-in panel */}
      <div
        className={`fixed inset-y-0 right-0 z-50 flex w-72 flex-col bg-white dark:bg-slate-900 shadow-[−20px_0_60px_rgba(15,23,42,0.12)] transition-transform duration-300 ease-in-out xl:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/50 px-5 py-4">
          <div className="space-y-0.5">
            <p className="text-lg font-bold leading-none">
              <span className="text-[#201657] dark:text-white">STUDYZONE</span>
              <span className="text-[#0e7de8]">365</span>
            </p>
            <p className="text-[11px] text-slate-400 dark:text-slate-500">Your space for live learning</p>
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="flex size-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-700 dark:hover:text-slate-300"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <li key={link.label}>
                  {/* Centers accordion */}
                  <button
                    type="button"
                    onClick={() => setMobileCentersOpen((o) => !o)}
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-[#0a6fd4]"
                  >
                    Centers
                    <ChevronDown
                      className={`size-4 text-slate-400 transition-transform duration-200 ${
                        mobileCentersOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Sub-items */}
                  {mobileCentersOpen && (
                    <ul className="mt-1 space-y-0.5 pl-3">
                      <li>
                        <button
                          type="button"
                          onClick={() => navigate("/centers")}
                          className="w-full rounded-xl px-4 py-2.5 text-left text-xs font-semibold text-[#0e7de8] transition-colors hover:bg-[#0e7de8]/6"
                        >
                          All Centers →
                        </button>
                      </li>
                      {centerDropdownItems.map((item) => (
                        <li key={item.label}>
                          <button
                            type="button"
                            onClick={() => navigate(item.href)}
                            className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-800"
                          >
                            <div
                              className="flex size-7 shrink-0 items-center justify-center rounded-lg"
                              style={{ backgroundColor: `${item.color}18` }}
                            >
                              <MapPin className="size-3" style={{ color: item.color }} />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-[#201657] dark:text-white">{item.label}</p>
                              <p className="text-[10px] text-slate-400 dark:text-slate-500">{item.area}</p>
                            </div>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => link.href && navigate(link.href)}
                    className="w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-[#0a6fd4]"
                  >
                    {link.label}
                  </button>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Panel footer */}
        <div className="border-t border-slate-100 dark:border-slate-700/50 px-5 py-4 space-y-3">
          <a
            href={SUPPORT_TEL}
            className="flex w-full items-center justify-between rounded-2xl border border-[#0e7de8]/15 dark:border-[#0e7de8]/20 bg-[#0e7de8]/6 dark:bg-[#0e7de8]/10 px-4 py-3 text-left text-[#0e7de8] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0e7de8] hover:text-white"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-white dark:bg-slate-900 shadow-sm">
                <Phone className="size-4" />
              </span>
              <span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.22em] opacity-70">Call Us</span>
                <span className="block text-sm font-semibold">{SUPPORT_NUMBER}</span>
              </span>
            </div>
          </a>

          <button
            type="button"
            onClick={() => navigate("/Login")}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-5 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#0e7de8] hover:text-[#0e7de8]"
          >
            <User className="size-4" />
            Login
          </button>
        </div>
      </div>
    </>
  );
}
