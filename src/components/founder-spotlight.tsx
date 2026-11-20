"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  IconCheck,
  IconClose,
  IconChevronLeft,
  IconChevronRight,
  IconMapPin,
  IconShield,
  IconStar,
  IconFactory,
} from "@/components/icons";

interface OwnerPhoto {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: "executive" | "award" | "consultation" | "operations" | "workshop";
  categoryLabel: string;
  location: string;
  year?: string;
  caption: string;
  aspect: "landscape" | "square" | "portrait";
}

const ownerPhotos: OwnerPhoto[] = [
  {
    id: "office-executive",
    src: "/images/owner/founder-executive-office.webp",
    alt: "Mr. Akhtar Ali Khan at the executive desk with A.S. Engineering Works signboard",
    title: "Executive Desk · Noida Headquarters",
    category: "executive",
    categoryLabel: "Executive Office",
    location: "A-69, Sector 8, Noida HQ",
    caption:
      "Founder Mr. Akhtar Ali Khan at the helm of A.S. Engineering Works head office in Noida. Overseeing design engineering, commercial operations, and turnkey plant dispatches across domestic and international markets.",
    aspect: "landscape",
  },
  {
    id: "award-felicitation",
    src: "/images/owner/founder-award.webp",
    alt: "Founder Mr. Akhtar Ali Khan holding the All India Saifi Welfare Association Excellence Award",
    title: "All India Saifi Welfare Association Award",
    category: "award",
    categoryLabel: "Industry Honor",
    location: "National Recognition",
    year: "Excellence Honor",
    caption:
      "Felicitated with the prestigious All India Saifi Welfare Association Award in recognition of lifetime dedication, technical innovation, and outstanding contributions to industrial food machinery engineering in India.",
    aspect: "square",
  },
  {
    id: "formal-portrait",
    src: "/images/owner/founder-portrait.webp",
    alt: "Executive portrait of Mr. Akhtar Ali Khan, Founder and Managing Director",
    title: "Mr. Akhtar Ali Khan · Managing Director",
    category: "executive",
    categoryLabel: "Founder Profile",
    location: "Noida, Uttar Pradesh",
    caption:
      "42+ years of guiding food machinery manufacturing in India. Leading an experienced engineering workforce supplying continuous snack extruders, pasta lines, and dryers to 2,000+ satisfied commercial food manufacturers.",
    aspect: "landscape",
  },
  {
    id: "technical-consultation",
    src: "/images/owner/founder-desk.webp",
    alt: "Mr. Akhtar Ali Khan reviewing machine specifications and drawings at desk",
    title: "Engineering Consultations & Plant Layouts",
    category: "consultation",
    categoryLabel: "Client Service",
    location: "A.S. Engineering Corporate Office",
    caption:
      "Personally reviewing customized machinery die profiles, throughput calculations, and client production layouts to ensure every customer receives equipment suited to their raw material requirements.",
    aspect: "portrait",
  },
  {
    id: "operations-management",
    src: "/images/owner/founder-office-standing.webp",
    alt: "Mr. Akhtar Ali Khan at executive office managing operations",
    title: "Operations & Quality Governance",
    category: "operations",
    categoryLabel: "Plant Governance",
    location: "Corporate Facility, Noida",
    caption:
      "Ensuring stringent quality parameters, timely delivery schedules, and responsive post-installation spares support across every commercial extrusion and drying machine leaving the Noida works.",
    aspect: "portrait",
  },
  {
    id: "workshop-oversight",
    src: "/images/real/akhtar-ali-khan-workshop.jpg",
    alt: "Founder Mr. Akhtar Ali Khan on the factory floor inspecting machinery assembly",
    title: "Shop Floor & Fabrication Oversight",
    category: "workshop",
    categoryLabel: "Shop Floor",
    location: "Manufacturing Workshop, Noida",
    caption:
      "Hands-on mechanical engineering on the shop floor: inspecting precision die tolerances, stainless steel welding, and dynamic trial runs before machine dispatches.",
    aspect: "portrait",
  },
];

export function FounderSpotlight() {
  const [activePhoto, setActivePhoto] = useState<OwnerPhoto | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Photographs (6)" },
    { id: "executive", label: "Executive Office" },
    { id: "award", label: "Awards & Honors" },
    { id: "consultation", label: "Client Consultations" },
    { id: "workshop", label: "Shop Floor & Works" },
  ];

  const filteredPhotos =
    activeCategory === "all"
      ? ownerPhotos
      : ownerPhotos.filter((p) =>
          activeCategory === "executive"
            ? p.category === "executive" || p.category === "operations"
            : p.category === activeCategory,
        );

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!activePhoto) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActivePhoto(null);
      } else if (e.key === "ArrowLeft") {
        const currentIndex = ownerPhotos.findIndex((p) => p.id === activePhoto.id);
        const prevIndex = (currentIndex - 1 + ownerPhotos.length) % ownerPhotos.length;
        setActivePhoto(ownerPhotos[prevIndex]);
      } else if (e.key === "ArrowRight") {
        const currentIndex = ownerPhotos.findIndex((p) => p.id === activePhoto.id);
        const nextIndex = (currentIndex + 1) % ownerPhotos.length;
        setActivePhoto(ownerPhotos[nextIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhoto]);

  return (
    <section className="border-t border-forest/[0.06] bg-white py-20 md:py-28">
      <div className="wrap">
        <SectionHeading
          eyebrow="Leadership & Founder"
          title={
            <>
              Guided by four decades of{" "}
              <span className="text-moss">engineering precision.</span>
            </>
          }
          description="A.S. Engineering Works was founded in 1984 under the visionary leadership of Mr. Akhtar Ali Khan. From hands-on fabrication on the workshop floor to guiding global plant deliveries, his dedication to heavy-duty reliability has shaped the company for over 42 years."
          align="between"
        />

        {/* Founder Feature Banner */}
        <Reveal className="mt-12 overflow-hidden rounded-3xl border border-forest/[0.08] bg-[#fbfaf6] shadow-sm">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] items-stretch">
            {/* Left: Founder Quote & Credentials */}
            <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-forest/10 bg-white px-3.5 py-1.5 shadow-2xs">
                  <span className="h-2 w-2 rounded-full bg-moss" />
                  <span className="font-mono text-[11px] font-medium tracking-[0.12em] text-forest uppercase">
                    Founder &amp; Managing Director
                  </span>
                </div>

                <h3 className="display mt-5 text-[clamp(1.8rem,3vw,2.5rem)] text-forest">
                  Mr. Akhtar Ali Khan
                </h3>
                <p className="font-mono text-[12.5px] text-sage">
                  Founder &amp; Chief Technical Mentor · Inception 1984, Noida
                </p>

                {/* Direct Quote Block */}
                <div className="relative mt-7 pl-6 border-l-2 border-moss">
                  <p className="text-[15.5px] leading-[1.8] italic text-forest/85 font-serif sm:text-[16.5px]">
                    &ldquo;When we commenced operations in 1984 in Sector 8, Noida, food extrusion
                    in India was in its formative era. My commitment has remained unchanged for 42
                    years: fabricate robust, dependable machinery using top-grade metallurgy and
                    precision engineering, so food processors can run continuous 24/7 operations
                    with complete reliability.&rdquo;
                  </p>
                  <p className="mt-3 font-mono text-[12px] text-moss uppercase tracking-wider font-semibold">
                    — Akhtar Ali Khan, Managing Director
                  </p>
                </div>

                {/* Key Leadership Highlights */}
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <div className="flex items-start gap-2.5 rounded-xl border border-forest/[0.06] bg-white p-3.5">
                    <IconStar className="h-4.5 w-4.5 text-brass shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[13px] font-semibold text-forest">42+ Years Legacy</p>
                      <p className="text-[12px] text-sage">Founded firm in 1984 in Noida</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-xl border border-forest/[0.06] bg-white p-3.5">
                    <IconShield className="h-4.5 w-4.5 text-moss shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[13px] font-semibold text-forest">Saifi Award Winner</p>
                      <p className="text-[12px] text-sage">Excellence in food machinery</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-xl border border-forest/[0.06] bg-white p-3.5">
                    <IconFactory className="h-4.5 w-4.5 text-sage shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[13px] font-semibold text-forest">50,000+ Deliveries</p>
                      <p className="text-[12px] text-sage">Personally guided production</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-xl border border-forest/[0.06] bg-white p-3.5">
                    <IconCheck className="h-4.5 w-4.5 text-moss shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[13px] font-semibold text-forest">Export Pioneer</p>
                      <p className="text-[12px] text-sage">IEC 0504026763 · Sri Lanka &amp; Gulf</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Note */}
              <div className="mt-8 pt-6 border-t border-forest/[0.08] flex items-center justify-between text-[12.5px] text-forest/70 font-mono">
                <span>Proprietorship Firm · Guided by Founder</span>
                <span className="text-moss font-semibold">Active Leadership</span>
              </div>
            </div>

            {/* Right: Featured Portrait & Executive Backdrop */}
            <div className="relative min-h-[380px] lg:min-h-full bg-sand/40 border-t lg:border-t-0 lg:border-l border-forest/[0.08] flex flex-col justify-end p-6 sm:p-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/owner/founder-portrait.webp"
                alt="Mr. Akhtar Ali Khan, Founder and Managing Director of A.S. Engineering Works"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

              <div className="relative z-10 text-white">
                <span className="inline-block rounded-full bg-white/20 backdrop-blur-md px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-white">
                  Executive Profile
                </span>
                <h4 className="mt-2 text-[20px] font-medium tracking-tight text-white">
                  Mr. Akhtar Ali Khan
                </h4>
                <p className="text-[13px] text-white/80 max-w-md">
                  Guiding every extrusion die profile, heavy fabrication, and customer relationship
                  since 1984 at Sector 8, Noida.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Gallery Section Header & Filter Tabs */}
        <div className="mt-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="eyebrow text-sage">Visual Archive</p>
            <h3 className="display text-[clamp(1.5rem,2.4vw,2rem)] text-forest mt-1">
              Founder in action at office, events &amp; workshop
            </h3>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-forest/[0.04] border border-forest/[0.06]">
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCategory(c.id)}
                className={`px-3 py-1.5 rounded-lg text-[12.5px] font-medium transition-all ${
                  activeCategory === c.id
                    ? "bg-forest text-white shadow-xs"
                    : "text-forest/70 hover:text-forest hover:bg-forest/[0.06]"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPhotos.map((photo, idx) => (
            <Reveal key={photo.id} delay={idx * 60}>
              <div
                role="button"
                tabIndex={0}
                className="group cursor-pointer flex flex-col h-full rounded-2xl border border-forest/[0.08] bg-white overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-moss"
                onClick={() => setActivePhoto(photo)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActivePhoto(photo);
                  }
                }}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand/30">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-mono font-medium tracking-wider text-forest uppercase shadow-xs">
                      {photo.categoryLabel}
                    </span>
                  </div>

                  {/* Click to expand hint */}
                  <div className="absolute bottom-3.5 right-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="rounded-full bg-white/90 px-2.5 py-1 font-mono text-[10.5px] font-semibold text-forest shadow-xs">
                      Click to view full photo
                    </span>
                  </div>
                </div>

                {/* Card Meta Content */}
                <div className="flex flex-1 flex-col justify-between p-5 bg-white">
                  <div>
                    <div className="flex items-center justify-between text-[11.5px] font-mono text-sage">
                      <span className="flex items-center gap-1">
                        <IconMapPin className="h-3 w-3 text-moss" />
                        {photo.location}
                      </span>
                      {photo.year && <span className="text-brass font-medium">{photo.year}</span>}
                    </div>
                    <h4 className="mt-2 text-[16px] font-semibold text-forest group-hover:text-moss transition-colors">
                      {photo.title}
                    </h4>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-forest/70 line-clamp-3">
                      {photo.caption}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-forest/[0.06] flex items-center justify-between font-mono text-[11.5px] text-moss font-medium">
                    <span>View full photograph</span>
                    <span className="text-[14px] transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-6 backdrop-blur-sm animate-fade-in"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              aria-label="Close dialog"
            >
              <IconClose className="h-5 w-5" />
            </button>

            {/* Large Image View */}
            <div className="relative md:w-3/5 bg-black flex items-center justify-center min-h-[320px] md:min-h-[500px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                className="max-h-[85vh] w-full object-contain"
              />

              {/* Prev / Next controls */}
              <div className="absolute inset-y-0 left-2 flex items-center">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = ownerPhotos.findIndex((p) => p.id === activePhoto.id);
                    const prevIndex =
                      (currentIndex - 1 + ownerPhotos.length) % ownerPhotos.length;
                    setActivePhoto(ownerPhotos[prevIndex]);
                  }}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-white/40 transition-colors"
                  aria-label="Previous photograph"
                >
                  <IconChevronLeft className="h-5 w-5" />
                </button>
              </div>
              <div className="absolute inset-y-0 right-2 flex items-center">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = ownerPhotos.findIndex((p) => p.id === activePhoto.id);
                    const nextIndex = (currentIndex + 1) % ownerPhotos.length;
                    setActivePhoto(ownerPhotos[nextIndex]);
                  }}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-white/40 transition-colors"
                  aria-label="Next photograph"
                >
                  <IconChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Sidebar Details */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[85vh]">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-forest/[0.06] px-3 py-1 font-mono text-[11px] font-medium text-forest uppercase tracking-wider">
                  {activePhoto.categoryLabel}
                </div>

                <h3 className="display mt-4 text-[22px] text-forest">
                  {activePhoto.title}
                </h3>

                <p className="mt-1 font-mono text-[12px] text-sage flex items-center gap-1.5">
                  <IconMapPin className="h-3.5 w-3.5 text-moss" />
                  {activePhoto.location}
                </p>

                <div className="mt-5 border-t border-forest/[0.08] pt-5">
                  <p className="text-[14.5px] leading-relaxed text-forest/80">
                    {activePhoto.caption}
                  </p>
                </div>

                <div className="mt-6 rounded-xl bg-sand/30 p-4 border border-forest/[0.06]">
                  <p className="font-mono text-[11px] text-sage uppercase tracking-wider">
                    Company Leadership
                  </p>
                  <p className="mt-1 text-[13.5px] font-medium text-forest">
                    Mr. Akhtar Ali Khan · Founder &amp; MD
                  </p>
                  <p className="text-[12px] text-forest/70">
                    A.S. Engineering Works, Noida (Since 1984)
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-forest/[0.08] flex items-center justify-between text-[12px] font-mono text-sage">
                <span>
                  Photo {ownerPhotos.findIndex((p) => p.id === activePhoto.id) + 1} of{" "}
                  {ownerPhotos.length}
                </span>
                <span className="text-forest/60">Press Esc or click outside to close</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
