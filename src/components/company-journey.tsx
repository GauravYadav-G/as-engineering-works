"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconCheck,
  IconDoc,
  IconExtrusion,
  IconFactory,
  IconGlobe,
  IconMapPin,
  IconShield,
} from "@/components/icons";

interface Milestone {
  id: string;
  year: string;
  period: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tags: { label: string; icon?: "pin" | "globe" | "doc" | "shield" | "factory" | "extrusion" }[];
  statNote?: string;
}

const milestones: Milestone[] = [
  {
    id: "m-1984",
    year: "1984",
    period: "Founding Era",
    badge: "Inception & First Workshop",
    title: "Workshop founded in Sector 8, Noida",
    subtitle: "Pioneering indigenous mechanical snack extruders",
    description:
      "A.S. Engineering Works commenced operations in 1984 as an indigenous machinery workshop in Sector 8, Noida under the leadership of Mr. Akhtar Ali Khan. Focusing on precision engineering and robust fabrication, the workshop produced foundational food extrusion dies and mechanical snack extruders to serve North India's emerging food manufacturers.",
    highlights: [
      "Founded by Mr. Akhtar Ali Khan with hands-on machinery fabrication",
      "Manufactured single-screw food extruders and mechanical processing equipment",
      "Supplied initial snack machines to regional processors across Delhi NCR",
    ],
    tags: [
      { label: "A-69, Sector 8, Noida", icon: "pin" },
      { label: "Founded 1984", icon: "factory" },
      { label: "Snack Extruders", icon: "extrusion" },
    ],
    statNote: "Established in Noida",
  },
  {
    id: "m-1996",
    year: "1996",
    period: "Extrusion Revolution",
    badge: "Indigenous Technology",
    title: "Expansion into puff, ring & pasta extrusion",
    subtitle: "Scaling with India's booming packaged snack sector",
    description:
      "As consumer demand for packaged snacks accelerated, A.S. Engineering Works innovated indigenous high-shear puff extruders for corn curls, cheese balls, and rings, alongside vacuum macaroni and vermicelli extrusion systems. Expanded direct machinery supply across the namkeen manufacturing hubs of Kanpur, Western Uttar Pradesh, and Delhi NCR.",
    highlights: [
      "Engineered high-torque puff extruders producing 100+ kg/hr",
      "Pioneered vacuum pasta and macaroni extruders with brass & SS dies",
      "Expanded distribution into Uttar Pradesh, Bihar, and Rajasthan food hubs",
    ],
    tags: [
      { label: "Corn Puffs & Rings", icon: "extrusion" },
      { label: "Pasta & Vermicelli", icon: "extrusion" },
      { label: "Kanpur & Delhi NCR Hubs", icon: "pin" },
    ],
    statNote: "Expanded to 4+ States",
  },
  {
    id: "m-2004",
    year: "2004",
    period: "Global Footprint",
    badge: "IEC Export Certification",
    title: "Awarded Import Export Code · Cross-border supply",
    subtitle: "Supplying international food processors in Sri-Lanka & Gulf",
    description:
      "Recognized by DGFT with an official Import Export Code (IEC 0504026763), marking the transition from a domestic leader to an international machinery exporter. Established longstanding export relationships with prominent Sri-Lankan food manufacturers — including CBL Foods International, Wijitha Group, Turney Biscuit, and RajaRatta — alongside shipments to Gulf nations.",
    highlights: [
      "DGFT Import Export Code issued: IEC 0504026763",
      "First international processing lines commissioned in Sri-Lanka",
      "Export container crating and tropical-environment engineering standards adopted",
    ],
    tags: [
      { label: "IEC 0504026763", icon: "doc" },
      { label: "Sri-Lanka & Gulf Exports", icon: "globe" },
      { label: "CBL Foods & Wijitha Group", icon: "shield" },
    ],
    statNote: "International Exporter",
  },
  {
    id: "m-2012",
    year: "2012",
    period: "Turnkey Plants",
    badge: "Sector 63 Expansion",
    title: "Complete continuous lines & Sector 63 facility",
    subtitle: "Continuous Kurkure lines, soya chunk plants & 24ft seasoning drums",
    description:
      "Transitioned from standalone units to complete turnkey plant solutions. Engineered continuous 80–100 kg/hr Kurkure production lines with authentic homemade textures, automatic Textured Soya Protein (TSP/bari) plants, and 24-foot slurry flavour coating drums. Expanded corporate and engineering operations to Plot No. G-195, Sector 63, Noida.",
    highlights: [
      "Engineered 80–100 kg/hr continuous Kurkure & corn stick lines",
      "Developed 2.5–3 ton/day automatic Textured Soya Protein (TSP) plants",
      "Expanded corporate & engineering unit at Plot G-195, Sector 63, Noida",
    ],
    tags: [
      { label: "Plot G-195, Sector 63, Noida", icon: "pin" },
      { label: "Kurkure Continuous Lines", icon: "factory" },
      { label: "Soya Nugget Plants", icon: "extrusion" },
    ],
    statNote: "Turnkey Line Engineering",
  },
  {
    id: "m-2017",
    year: "2017",
    period: "National Alliances",
    badge: "Trust-Seal Verified & GST",
    title: "National brand alliances & Trust-Seal verification",
    subtitle: "Trusted equipment partner to leading food FMCG corporations",
    description:
      "Unified operations under national GST (09AHNPK3689D1ZX) and achieved Trust-Seal verification. Solidified standing as the preferred equipment supplier for premier food corporations including Nanaji Namkeen, Kiwi Food India, Jay Bharat Food Processor (Bharat Masala), Ashoka Tea Company (Ashok Masale), Swadist, and Shah Namkeen.",
    highlights: [
      "National GST registration completed: 09AHNPK3689D1ZX",
      "Equipment supplier to Nanaji, Kiwi Food, Bharat Masala, and Ashok Masale",
      "Implemented strict multi-stage quality testing for raw materials & completed units",
    ],
    tags: [
      { label: "GST 09AHNPK3689D1ZX", icon: "doc" },
      { label: "Trust-Seal Verified", icon: "shield" },
      { label: "Nanaji · Kiwi · Bharat Masala", icon: "factory" },
    ],
    statNote: "National FMCG Supplier",
  },
  {
    id: "m-today",
    year: "2026+",
    period: "42+ Years Legacy",
    badge: "Industry Landmark Scale",
    title: "42+ years of legacy · 50,000+ machines delivered",
    subtitle: "Over 2,000 food processing plants commissioned worldwide",
    description:
      "Reaching over four decades of engineering resilience. With 50,000+ machines delivered and 2,000+ commercial processing lines commissioned across India, Sri-Lanka, and international markets, A.S. Engineering Works combines 42+ years of foundational workshop experience with modern high-yield extrusion and seasoning technologies.",
    highlights: [
      "42+ years of continuous food machinery manufacturing since 1984",
      "50,000+ food processing and extrusion machines built and delivered",
      "2,000+ complete commercial production plants and processing lines commissioned",
    ],
    tags: [
      { label: "42+ Years of Legacy", icon: "shield" },
      { label: "50,000+ Machines Delivered", icon: "factory" },
      { label: "2,000+ Plants Commissioned", icon: "globe" },
    ],
    statNote: "50,000+ Machines · 2,000+ Projects",
  },
];

function TagIcon({ type }: { type?: "pin" | "globe" | "doc" | "shield" | "factory" | "extrusion" }) {
  const iconClass = "h-3.5 w-3.5 shrink-0";
  switch (type) {
    case "pin":
      return <IconMapPin className={iconClass} />;
    case "globe":
      return <IconGlobe className={iconClass} />;
    case "doc":
      return <IconDoc className={iconClass} />;
    case "shield":
      return <IconShield className={iconClass} />;
    case "factory":
      return <IconFactory className={iconClass} />;
    case "extrusion":
      return <IconExtrusion className={iconClass} />;
    default:
      return <IconCheck className={iconClass} />;
  }
}

export function CompanyJourney() {
  const [activeId, setActiveId] = useState<string>("m-today");

  const scrollToMilestone = (id: string) => {
    setActiveId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section
      id="journey"
      aria-labelledby="journey-title"
      className="border-t border-white/[0.08] bg-[#0c0f12] py-20 text-white md:py-28"
    >
      <div className="wrap">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow text-brasslight">Company Journey · 1984 to 2026+</span>
              <h2
                id="journey-title"
                className="display mt-3.5 text-[clamp(2.1rem,4vw,3.25rem)] text-white"
              >
                42+ years of engineering legacy.
              </h2>
              <p className="mt-4 text-[16px] leading-[1.8] text-white/70 sm:text-[17.5px]">
                From a single mechanical workshop in Sector 8, Noida to over 50,000 machines and
                2,000+ complete processing plants commissioned across India and global export corridors.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link href="/products" className="btn btn-light px-6 py-3 text-[14.5px]">
                Browse catalogue
                <IconArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn btn-ghost-light px-6 py-3 text-[14.5px]">
                Contact factory
                <IconArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Milestone Progression Flowchart / Diagram Navigation Bar */}
        <Reveal delay={80} className="mt-12">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md sm:p-6">
            <p className="font-mono text-[11px] tracking-[0.14em] text-brasslight uppercase">
              Milestone Progression Flowchart
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6 lg:gap-2.5">
              {milestones.map((m, idx) => {
                const isSelected = activeId === m.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => scrollToMilestone(m.id)}
                    className={`group relative flex flex-col items-start rounded-xl border p-3.5 text-left transition-all duration-200 ${
                      isSelected
                        ? "border-brasslight bg-white/10 shadow-[0_0_24px_rgba(200,184,158,0.18)]"
                        : "border-white/10 bg-white/[0.02] hover:border-white/25 hover:bg-white/[0.05]"
                    }`}
                  >
                    <div className="flex w-full items-center justify-between gap-1.5">
                      <span className="font-mono text-[11.5px] font-semibold text-brasslight">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`rounded px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
                          isSelected ? "bg-brasslight text-[#0c0f12] font-semibold" : "bg-white/10 text-white/60"
                        }`}
                      >
                        {m.period}
                      </span>
                    </div>

                    <p className="display mt-2 text-[22px] font-semibold text-white sm:text-[24px]">
                      {m.year}
                    </p>
                    <p className="mt-1 line-clamp-1 text-[12.5px] text-white/75">{m.badge}</p>

                    {/* Progress connector indicator */}
                    {idx < milestones.length - 1 && (
                      <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 pointer-events-none text-white/25">
                        →
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Milestone Timeline Spine and Cards */}
        <div className="relative mt-16 space-y-10">
          {/* Vertical Connecting Line (Desktop) */}
          <div className="absolute left-[31px] top-6 bottom-6 hidden w-[2px] bg-gradient-to-b from-brasslight via-white/20 to-brasslight lg:block" />

          {milestones.map((m, index) => {
            const isHighlight = m.id === "m-today";

            return (
              <Reveal key={m.id} delay={index * 60}>
                <div
                  id={m.id}
                  className={`group relative scroll-mt-28 rounded-2xl border transition-all duration-300 lg:pl-20 ${
                    isHighlight
                      ? "border-brasslight/50 bg-gradient-to-br from-[#161a1e] to-[#0f1316] p-6 shadow-[0_20px_50px_-20px_rgba(200,184,158,0.15)] sm:p-8"
                      : "border-white/10 bg-white/[0.02] p-6 hover:border-white/20 hover:bg-white/[0.04] sm:p-8"
                  }`}
                >
                  {/* Timeline Node Badge on Desktop Spine */}
                  <div
                    className={`hidden lg:grid absolute left-4 top-8 h-8 w-8 place-items-center rounded-full border text-[11px] font-mono font-bold transition-transform duration-200 group-hover:scale-110 ${
                      isHighlight
                        ? "border-brasslight bg-brasslight text-[#0c0f12] shadow-[0_0_15px_rgba(200,184,158,0.5)]"
                        : "border-white/30 bg-[#0c0f12] text-white/90"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Top Bar inside Card */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="display tabular text-[32px] font-bold tracking-tight text-brasslight sm:text-[38px]">
                        {m.year}
                      </span>
                      <span className="rounded-full border border-brasslight/30 bg-brasslight/10 px-3 py-1 font-mono text-[11.5px] font-medium tracking-[0.08em] text-brasslight uppercase">
                        {m.badge}
                      </span>
                    </div>

                    {m.statNote && (
                      <span className="font-mono text-[12px] font-medium tracking-wide text-white/60">
                        {m.statNote}
                      </span>
                    )}
                  </div>

                  {/* Title & Narrative */}
                  <div className="mt-5">
                    <h3 className="display text-[22px] font-semibold text-white sm:text-[26px]">
                      {m.title}
                    </h3>
                    <p className="mt-1 text-[15px] font-medium text-brasslight/90">
                      {m.subtitle}
                    </p>
                    <p className="mt-4 text-[15.5px] leading-[1.8] text-white/75 sm:text-[16.5px]">
                      {m.description}
                    </p>
                  </div>

                  {/* Highlights checklist */}
                  <div className="mt-6 rounded-xl border border-white/[0.06] bg-black/30 p-4 sm:p-5">
                    <p className="font-mono text-[11px] tracking-[0.14em] text-white/50 uppercase">
                      Verified Milestones &amp; Capabilities
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {m.highlights.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-white/85">
                          <IconCheck className="mt-1 h-4 w-4 shrink-0 text-brasslight" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Authentic Metadata Tags */}
                  <div className="mt-5 flex flex-wrap gap-2 pt-2">
                    {m.tags.map((tag) => (
                      <span
                        key={tag.label}
                        className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 font-mono text-[12px] text-white/80"
                      >
                        <TagIcon type={tag.icon} />
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* 42+ Years Bottom Scale Banner */}
        <Reveal delay={120} className="mt-16">
          <div className="rounded-2xl border border-brasslight/30 bg-gradient-to-r from-[#14181c] via-[#1b2126] to-[#14181c] p-8 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <span className="eyebrow text-brasslight">Four Decades of Track Record</span>
                <h3 className="display mt-2 text-[26px] font-bold text-white sm:text-[32px]">
                  Built for durability. Backed by 42+ years.
                </h3>
                <p className="mt-3 text-[15px] leading-[1.8] text-white/70">
                  Whether configuring a single snack extruder or planning a full commercial factory,
                  our engineering leadership works directly with your output target and floor layout.
                </p>
                <div className="mt-6">
                  <Link href="/contact" className="btn btn-light px-6 py-3.5 text-[14.5px]">
                    Discuss your project with our engineers
                    <IconArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-px rounded-xl overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3 lg:col-span-7">
                <div className="bg-[#121619] p-6">
                  <p className="display tabular text-[34px] font-bold text-brasslight sm:text-[40px]">
                    <CountUp value={42} suffix="+" />
                  </p>
                  <p className="mt-1 text-[15px] font-semibold text-white">Years of legacy</p>
                  <p className="mt-1.5 font-mono text-[11.5px] text-white/50 uppercase">
                    Continuous Noida manufacturing since 1984
                  </p>
                </div>

                <div className="bg-[#121619] p-6">
                  <p className="display tabular text-[34px] font-bold text-brasslight sm:text-[40px]">
                    <CountUp value={50000} suffix="+" />
                  </p>
                  <p className="mt-1 text-[15px] font-semibold text-white">Machines delivered</p>
                  <p className="mt-1.5 font-mono text-[11.5px] text-white/50 uppercase">
                    Food processing &amp; extrusion equipment
                  </p>
                </div>

                <div className="bg-[#121619] p-6">
                  <p className="display tabular text-[34px] font-bold text-brasslight sm:text-[40px]">
                    <CountUp value={2000} suffix="+" />
                  </p>
                  <p className="mt-1 text-[15px] font-semibold text-white">Projects completed</p>
                  <p className="mt-1.5 font-mono text-[11.5px] text-white/50 uppercase">
                    Commercial plants &amp; processing lines
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
