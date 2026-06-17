"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

export function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });

    let frameId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    // Only start the loop when the tab is visible to avoid stale-time jumps
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        frameId = requestAnimationFrame(raf);
      } else {
        cancelAnimationFrame(frameId);
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      document.removeEventListener("visibilitychange", handleVisibility);
      lenis.destroy();
    };
  }, []);

  return children;
}
