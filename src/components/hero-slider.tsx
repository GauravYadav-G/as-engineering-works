"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { IconArrowRight, IconArrowUpRight } from "@/components/icons";

const slides = [
  {
    tab: "Soya chunks plant",
    eyebrow: "Textured Soya Protein · 2.5–3 Ton/Day Plants",
    title: "Soya Chunk & Nugget Making Plants.",
    description:
      "Complete commercial plants and heavy-duty twin-screw extruders for textured soya chunks, bari, soya chaap, and protein nuggets. High-torque barrels, precision cutter heads, and controlled drying systems.",
    image: "/images/soya-plant-hero.jpg",
    alt: "A.S. Engineering Works commercial soya chunks and nugget processing plant extruder",
    href: "/solutions/soya-nuggets",
    cta: "Soya chunk plants",
  },
  {
    tab: "Kurkure extruder",
    eyebrow: "Corn & Rice Meal Extrusion · 80–100 kg/hr",
    title: "Continuous Kurkure & Corn Stick Extruders.",
    description:
      "Heavy-duty rotary die friction extruders producing authentic irregular, crunchy curled kurkure collets. Matched with continuous roasting, frying and automated slurry flavouring systems.",
    image: "/images/kurkure-hero.jpg",
    alt: "A.S. Engineering Works continuous kurkure and corn stick extruder machine",
    href: "/solutions/kurkure-corn-sticks",
    cta: "Kurkure extruders",
  },
  {
    tab: "Puff extruder",
    eyebrow: "Corn Puffs, Rings & Cheese Balls · 100–250 kg/hr",
    title: "High-Speed Snacks & Corn Puff Extruders.",
    description:
      "High-yield food extruders with interchangeable precision dies for spherical cheese balls, tubular corn puffs, rings, twists, and kachri. Built for high expansion ratios and continuous output.",
    image: "/images/extruder-hero.jpg",
    alt: "A.S. Engineering Works commercial snacks and corn puff extruder machine",
    href: "/solutions/corn-puffs",
    cta: "Puff extruders",
  },
  {
    tab: "Pasta & macaroni",
    eyebrow: "Macaroni, Pasta & Vermicelli · Vacuum Extrusion",
    title: "Vacuum Pasta & Macaroni Extrusion Plants.",
    description:
      "Heavy-duty vacuum mixing and extrusion plants producing smooth, bubble-free macaroni, penne, spirals, and vermicelli with precision brass dies and multi-tier static drying systems.",
    image: "/images/pasta-hero.jpg",
    alt: "A.S. Engineering Works industrial vacuum pasta and macaroni extruder plant",
    href: "/solutions/pasta-macaroni",
    cta: "Pasta & macaroni plants",
  },
  {
    tab: "Turnkey lines",
    eyebrow: "Noida, India · 42+ Years of Legacy",
    title: "Complete Processing Lines, Engineered for Scale.",
    description:
      "Turnkey integrated snack plants: extruders, continuous fryers, rotary cell roasters, 24ft slurry flavour coating drums, and conveyors. Over 50,000 machines and 2,000 projects delivered worldwide.",
    image: "/images/hero-line.jpg",
    alt: "A.S. Engineering Works turnkey snack processing line",
    href: "/solutions",
    cta: "Explore turnkey lines",
  },
] as const;

const DURATION = 7500;

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const [seen, setSeen] = useState<number[]>([0, 1]);
  const [paused, setPaused] = useState(false);
  const regionRef = useRef<HTMLElement>(null);

  const show = useCallback((index: number) => {
    setSeen((current) => {
      const next = (index + 1) % slides.length;
      return Array.from(new Set([...current, index, next]));
    });
    setActive(index);
  }, []);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => show((active + 1) % slides.length), DURATION);
    return () => window.clearTimeout(timer);
  }, [active, paused, show]);

  const slide = slides[active];

  return (
    <section
      ref={regionRef}
      aria-label="Featured processing solutions"
      aria-roledescription="carousel"
      className="relative isolate overflow-hidden bg-[#0c0f11] text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!regionRef.current?.contains(event.relatedTarget as Node | null)) setPaused(false);
      }}
    >
      {slides.map((item, index) =>
        seen.includes(index) ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={item.image}
            src={item.image}
            alt={index === active ? item.alt : ""}
            aria-hidden={index !== active}
            fetchPriority={index === 0 ? "high" : "auto"}
            className={`absolute inset-0 -z-10 h-full w-full object-cover transition-[opacity,transform] ease-out ${
              index === active
                ? "scale-[1.045] opacity-100 duration-[9000ms]"
                : "scale-100 opacity-0 duration-[1100ms]"
            }`}
          />
        ) : null,
      )}
      <div className="absolute inset-0 -z-10 bg-[#0c0f11]/55 md:bg-transparent md:bg-gradient-to-r md:from-[#0c0f11]/90 md:via-[#0c0f11]/60 md:to-[#0c0f11]/15" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#0c0f11]/90 to-transparent" />

      <div className="wrap relative flex min-h-[540px] flex-col justify-center py-20 md:min-h-[620px] lg:min-h-[680px]">
        <div key={active} className="animate-rise max-w-[660px]">
          <p className="eyebrow text-brasslight">{slide.eyebrow}</p>
          <h1 className="display text-shadow-hero mt-5 text-[clamp(2.55rem,5.1vw,4.4rem)] text-white">
            {slide.title}
          </h1>
          <p className="mt-6 max-w-[540px] text-[17px] sm:text-[18.5px] leading-[1.8] font-normal text-white/80">
            {slide.description}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href={slide.href} className="btn btn-light px-7 py-3.5 text-[15px]">
              {slide.cta} <IconArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn btn-ghost-light px-7 py-3.5 text-[15px]">
              Request a quote <IconArrowUpRight className="h-4 w-4 opacity-80" />
            </Link>
          </div>
        </div>
        <p className="absolute right-5 bottom-4 font-mono text-[11px] tracking-[0.06em] text-white/50 sm:right-8 lg:right-12">
          Representative imagery
        </p>
      </div>

      <div className="border-t border-white/[0.1] bg-[#0c0f11]/65 backdrop-blur-md">
        <div className="wrap grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {slides.map((item, index) => {
            const isActive = active === index;
            return (
              <button
                key={item.tab}
                type="button"
                aria-label={`Show slide: ${item.tab}`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => show(index)}
                className={`relative px-2 py-4 text-left text-[12.5px] font-medium tracking-[0.01em] transition sm:px-4 sm:py-4.5 sm:text-[14px] ${
                  isActive ? "text-white font-semibold" : "text-white/50 hover:text-white/85"
                }`}
              >
                <span
                  className={`mr-2 font-mono text-[11px] tabular ${
                    isActive ? "text-brasslight font-semibold" : "text-white/30"
                  }`}
                >
                  0{index + 1}
                </span>
                {item.tab}
                <span className="absolute inset-x-0 top-[-1px] h-[1.5px] bg-white/[0.06]">
                  {isActive && (
                    <span
                      key={`${active}-${paused}`}
                      className="block h-full origin-left bg-white"
                      style={
                        paused
                          ? { transform: "scaleX(1)", animation: "none" }
                          : { animation: `tab-progress ${DURATION}ms linear forwards` }
                      }
                    />
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
