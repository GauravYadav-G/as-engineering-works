"use client";

import { useEffect, useRef, useState } from "react";

/*
 * Counts up to `value` once the element scrolls into view. The server renders
 * the final number, so content and SEO never depend on JavaScript, and reduced
 * motion users see the final number immediately.
 */
export function CountUp({
  value,
  duration = 1400,
  suffix = "",
}: {
  value: number;
  duration?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    let frame = 0;
    let started = false;

    const run = () => {
      started = true;
      setDisplay(0);
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(Math.round(value * eased));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started) {
            run();
            io.disconnect();
          }
        }
      },
      { threshold: 0.6 },
    );
    io.observe(node);

    return () => {
      io.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular">
      {display.toLocaleString("en-IN")}{suffix}
    </span>
  );
}
