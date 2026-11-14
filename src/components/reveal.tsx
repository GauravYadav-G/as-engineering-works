"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/*
 * One shared IntersectionObserver for every revealed element on the page.
 * Elements start fully visible: the component only hides those that are still
 * below the fold, so a failed script leaves the content readable.
 */
type Entry = { cb: () => void };
const registry = new WeakMap<Element, Entry>();
let observer: IntersectionObserver | null = null;

function getObserver() {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) return null;
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          registry.get(entry.target)?.cb();
          registry.delete(entry.target);
          observer?.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.04 },
    );
  }
  return observer;
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  /** Stagger in milliseconds. */
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (prefersReducedMotion()) {
      setShown(true);
      return;
    }

    // Anything already on screen at mount simply stays visible.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      setShown(true);
      return;
    }

    setArmed(true);
    const io = getObserver();
    if (!io) {
      setShown(true);
      return;
    }

    registry.set(node, { cb: () => setShown(true) });
    io.observe(node);
    return () => {
      registry.delete(node);
      io.unobserve(node);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={delay && !shown ? { transitionDelay: `${delay}ms` } : undefined}
      className={[
        armed && !shown ? "reveal-armed" : "",
        shown ? "reveal-shown" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
