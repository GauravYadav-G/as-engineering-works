"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { IconChevronLeft, IconChevronRight } from "@/components/icons";

const slides = [
  {
    tab: "Soya chunks plant",
    eyebrow: "Textured Soya Protein · 2.5–3 Ton/Day Plants",
    title: "Soya Chunk & Nugget Plants",
    description:
      "Complete commercial plants and heavy-duty twin-screw extruders for textured soya chunks, bari, soya chaap, and protein nuggets. High-torque barrels, precision cutter heads, and controlled drying systems.",
    image: "/images/hero_slider/Gemini_Generated_Image_681d7x681d7x681d-clean.webp",
    alt: "A.S. Engineering Works commercial soya chunks and nugget processing plant extruder",
    href: "/solutions/soya-nuggets",
    cta: "Soya chunk plants",
  },
  {
    tab: "Kurkure extruder",
    eyebrow: "Corn & Rice Meal Extrusion · 80–100 kg/hr",
    title: "Continuous Kurkure Extruders",
    description:
      "Heavy-duty rotary die friction extruders producing authentic irregular, crunchy curled kurkure collets. Matched with continuous roasting, frying and automated slurry flavouring systems.",
    image: "/images/hero_slider/Gemini_Generated_Image_vduxz4vduxz4vdux-clean.webp",
    alt: "A.S. Engineering Works continuous kurkure and corn stick extruder machine",
    href: "/solutions/kurkure-corn-sticks",
    cta: "Kurkure extruders",
  },
  {
    tab: "Puff extruder",
    eyebrow: "Corn Puffs, Rings & Cheese Balls · 100–250 kg/hr",
    title: "Snacks & Corn Puff Extruders",
    description:
      "High-yield food extruders with interchangeable precision dies for spherical cheese balls, tubular corn puffs, rings, twists, and kachri. Built for high expansion ratios and continuous output.",
    image: "/images/hero_slider/Gemini_Generated_Image_nutrfonutrfonutr-clean.webp",
    alt: "A.S. Engineering Works commercial snacks and corn puff extruder machine",
    href: "/solutions/corn-puffs",
    cta: "Puff extruders",
  },
  {
    tab: "Pasta plant",
    eyebrow: "Macaroni, Pasta & Vermicelli · Vacuum Extrusion",
    title: "Vacuum Pasta Extrusion Plants",
    description:
      "Heavy-duty vacuum mixing and extrusion plants producing smooth, bubble-free macaroni, penne, spirals, and vermicelli with precision brass dies and multi-tier static drying systems.",
    image: "/images/hero_slider/Gemini_Generated_Image_w4my01w4my01w4my-clean.webp",
    alt: "A.S. Engineering Works industrial vacuum pasta and macaroni extruder plant",
    href: "/solutions/pasta-macaroni",
    cta: "Pasta plants",
  },
  {
    tab: "Macaroni plant",
    eyebrow: "Commercial Macaroni Extrusion · Continuous Plant",
    title: "Commercial Macaroni Plants",
    description:
      "Heavy-duty commercial macaroni extrusion plants producing smooth, uniform macaroni with stainless steel preconditioning, high-pressure extrusion barrels, and continuous drying.",
    image: "/images/hero_slider/Gemini_Generated_Image_1v8m4n1v8m4n1v8m-clean.webp",
    alt: "A.S. Engineering Works commercial macaroni making extruder plant",
    href: "/solutions/pasta-macaroni",
    cta: "Macaroni plants",
  },
] as const;

const DURATION = 7500;

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const [seen, setSeen] = useState<number[]>([0, 1]);
  const [paused, setPaused] = useState(false);
  const regionRef = useRef<HTMLElement>(null);
  const touchStartX = useRef(0);

  const show = useCallback((index: number) => {
    setSeen((current) => {
      const next = (index + 1) % slides.length;
      return Array.from(new Set([...current, index, next]));
    });
    setActive(index);
  }, []);

  const prev = useCallback(() => {
    show((active - 1 + slides.length) % slides.length);
  }, [active, show]);

  const next = useCallback(() => {
    show((active + 1) % slides.length);
  }, [active, show]);

  /* Touch swipe for mobile */
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const diff = touchStartX.current - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) next();
        else prev();
      }
    },
    [next, prev],
  );

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => show((active + 1) % slides.length), DURATION);
    return () => window.clearTimeout(timer);
  }, [active, paused, show]);

  return (
    <section
      ref={regionRef}
      aria-label="Featured processing solutions"
      aria-roledescription="carousel"
      className="relative isolate overflow-hidden bg-[#0c0f11] text-white w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[47/22] max-h-[87.5vh]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!regionRef.current?.contains(event.relatedTarget as Node | null)) setPaused(false);
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((item, index) =>
        seen.includes(index) ? (
          <Link
            key={item.image}
            href={item.href}
            aria-label={item.title}
            tabIndex={index === active ? 0 : -1}
            className={`absolute inset-0 block h-full w-full transition-opacity ease-out duration-[900ms] ${
              index === active ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image}
              alt={item.alt}
              fetchPriority={index === 0 ? "high" : "auto"}
              className="h-full w-full object-cover object-top"
            />
          </Link>
        ) : null,
      )}

      {/* Floating translucent arrow buttons on sides */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="hidden sm:grid absolute left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 sm:h-12 sm:w-12 place-items-center rounded-full border border-white/25 bg-black/35 text-white backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-black/60 hover:border-white/50 active:scale-95 shadow-[0_4px_16px_rgba(0,0,0,0.35)]"
      >
        <IconChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="hidden sm:grid absolute right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 sm:h-12 sm:w-12 place-items-center rounded-full border border-white/25 bg-black/35 text-white backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-black/60 hover:border-white/50 active:scale-95 shadow-[0_4px_16px_rgba(0,0,0,0.35)]"
      >
        <IconChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
    </section>
  );
}
