"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { IconArrowRight, IconArrowUpRight } from "@/components/icons";

const slides = [
  {
    tab: "Complete lines",
    eyebrow: "Noida, India · Since 1984",
    title: "Food processing machinery, engineered for your product.",
    description:
      "Extruders, kurkure machines, pasta and soya nugget plants, dryers, roasters and flavouring systems — manufactured in Noida for food businesses in India and abroad.",
    image: "/images/hero/food-line.jpg",
    alt: "Hero — automated food production line",
    href: "/solutions",
    cta: "Explore processing lines",
  },
  {
    tab: "Corn puffs",
    eyebrow: "Corn puffs & cheese balls",
    title: "Corn puff and cheese ball extruders.",
    description:
      "Snack extruders listed from 100 kg per hour, paired with roasting and flavour coating equipment to complete the line.",
    image: "/images/hero/puffed-grain.jpg",
    alt: "Hero — puffed grain snack",
    href: "/solutions/corn-puffs",
    cta: "Corn puff solution",
  },
  {
    tab: "Kurkure",
    eyebrow: "Kurkure & corn sticks",
    title: "Kurkure machines with an authentic texture.",
    description:
      "Every piece varies naturally in length and diameter for a home-made look. Listed models produce 80 to 100 kg per hour.",
    image: "/images/hero/fried-snacks.jpg",
    alt: "Hero — golden fried snacks",
    href: "/solutions/kurkure-corn-sticks",
    cta: "Kurkure solution",
  },
  {
    tab: "Soya nuggets",
    eyebrow: "Textured soya protein",
    title: "Soya nugget machines and complete plants.",
    description:
      "Textured soya protein extruders for nuggets, chunks, chaap and badi — from standalone units to 2.5–3 ton per day plants.",
    image: "/images/hero/machinery.jpg",
    alt: "Hero — stainless steel machinery",
    href: "/solutions/soya-nuggets",
    cta: "Soya nugget solution",
  },
  {
    tab: "Pasta & macaroni",
    eyebrow: "Pasta, macaroni & vermicelli",
    title: "Vacuum pasta and macaroni extruders.",
    description:
      "Pasta machines that mix and extrude under vacuum, matched with tray and static dryers for 100–200 kg per hour output.",
    image: "/images/hero/pasta-extruding.jpg",
    alt: "Hero — pasta extruding from a machine",
    href: "/solutions/pasta-macaroni",
    cta: "Pasta solution",
  },
  {
    tab: "Seasoning",
    eyebrow: "Masala & flavour coating",
    title: "Flavour coating and masala mixing systems.",
    description:
      "From compact batch masala mixers to 24 ft continuous coating drums with dry masala and ghee spray.",
    image: "/images/hero/spice-blends.jpg",
    alt: "Hero — Indian spice blends",
    href: "/products?category=seasoning-systems",
    cta: "Seasoning equipment",
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
        <div key={active} className="animate-rise max-w-[640px]">
          <p className="eyebrow text-brasslight">{slide.eyebrow}</p>
          <h1 className="display text-shadow-hero mt-5 text-[clamp(2.35rem,4.7vw,4.15rem)] text-white">
            {slide.title}
          </h1>
          <p className="mt-6 max-w-[500px] text-[15.5px] leading-[1.75] font-normal text-white/75">
            {slide.description}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href={slide.href} className="btn btn-light px-6 py-3.5">
              {slide.cta} <IconArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn btn-ghost-light px-6 py-3.5">
              Request a quote <IconArrowUpRight className="h-3.5 w-3.5 opacity-80" />
            </Link>
          </div>
        </div>
        <p className="absolute right-5 bottom-4 font-mono text-[9.5px] tracking-[0.06em] text-white/45 sm:right-8 lg:right-12">
          Representative imagery
        </p>
      </div>

      <div className="border-t border-white/[0.1] bg-[#0c0f11]/65 backdrop-blur-md">
        <div className="wrap grid grid-cols-3 lg:grid-cols-6">
          {slides.map((item, index) => {
            const isActive = active === index;
            return (
              <button
                key={item.tab}
                type="button"
                aria-label={`Show slide: ${item.tab}`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => show(index)}
                className={`relative px-2 py-4 text-left text-[11px] font-medium tracking-[0.01em] transition sm:px-4 sm:py-4.5 sm:text-[12px] ${
                  isActive ? "text-white" : "text-white/45 hover:text-white/80"
                }`}
              >
                <span
                  className={`mr-2 font-mono text-[10px] tabular ${
                    isActive ? "text-brasslight" : "text-white/25"
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
