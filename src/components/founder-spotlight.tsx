"use client";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  IconCheck,
  IconFactory,
  IconShield,
  IconStar,
} from "@/components/icons";

export function FounderSpotlight() {
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
                <h3 className="display text-[clamp(1.8rem,3vw,2.5rem)] text-forest">
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
      </div>
    </section>
  );
}
