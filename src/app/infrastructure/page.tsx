import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { IconArrowUpRight, IconCheck } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Infrastructure & Manufacturing Facilities",
  description:
    "Manufacturing facility, research and development and quality testing at A.S. Engineering Works, Noida — manufacturer of food processing machines since 1984.",
};

export default function InfrastructurePage() {
  return (
    <>
      <PageHero
        eyebrow="Infrastructure & facilities"
        title={
          <>
            Where our machines <span className="text-brasslight">are made.</span>
          </>
        }
        description="A well established manufacturing unit in Noida, organised into divisions for efficient working, with research, development and quality testing alongside production."
        breadcrumb={[{ label: "Facility" }]}
        image="/images/hero-line.jpg"
      />

      <section className="bg-bone py-20 md:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Manufacturing facility"
              title="From plan to final assembly, under one roof."
            />
            <div className="prose-machine mt-5 space-y-4">
              <p>
                We possess a well established manufacturing unit which is equipped with the latest
                machines and tools. From preparation of plan to fabrication, designing and final
                assembling, each and every process is undertaken by our engineers, who have wide
                experience and knowledge of their field and can formulate products according to the
                desired measurements and technical specifications.
              </p>
              <p>
                As various food products are produced using these machines, they are also installed
                in clean and hygienic surroundings. All our machines are maintained and upgraded
                from time to time as per the latest technological innovations.
              </p>
            </div>
            <figure className="mt-7">
              <div className="overflow-hidden rounded-2xl border border-forest/[0.07] bg-sand">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/machines/line-extruder.jpg"
                  alt="Representative image of a snack extruder line"
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
              <figcaption className="mt-2.5 font-mono text-[10px] text-sage/75">
                Representative image
              </figcaption>
            </figure>
          </div>

          <div>
            <SectionHeading
              eyebrow="Research & development"
              title="Improvements driven by study and testing."
            />
            <div className="prose-machine mt-5 space-y-4">
              <p>
                Our research lab possesses the latest testing and research tools for enhancing the
                quality and performance of our products. Our researchers analyse the product,
                prepare market reports and conduct surveys regarding the performance of the
                products.
              </p>
              <p>
                They conduct an in-depth study of market forces and keep themselves updated with the
                latest technology and trends prevailing in the industry. It is on the basis of these
                reports and studies that improvements are made in the machines.
              </p>
            </div>
            <figure className="mt-7">
              <div className="overflow-hidden rounded-2xl border border-forest/[0.07] bg-sand">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/machines/dryer-roaster.jpg"
                  alt="Representative image of an industrial tray dryer and rotary roaster"
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
              <figcaption className="mt-2.5 font-mono text-[10px] text-sage/75">
                Representative image
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="border-y border-forest/[0.06] bg-white py-20 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Quality testing"
              title="Checked from raw material to final production."
              description="Our quality inspection team inspects quality from raw materials through final production. Machines are tested so they operate as specified and checked for dimensions, weight and measurements."
            />
            <p className="mt-8 font-mono text-[10px] tracking-[0.14em] text-sage uppercase">
              Each finished product is tested on
            </p>
            <ul className="mt-3.5 grid gap-2.5 sm:grid-cols-2">
              {site.quality.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 rounded-xl border border-forest/[0.07] bg-bone px-4 py-3 text-[13px] text-forest/80"
                >
                  <IconCheck className="h-4 w-4 shrink-0 text-moss" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading
              eyebrow="Our team"
              title="Engineers, technical associates and food experts."
              description="Our team includes qualified engineers, technical associates and food experts who test each product during production. Experienced instructors train floor workers regularly on safety and production procedures."
            />
            <dl className="mt-8 divide-y divide-forest/[0.08] border-y border-forest/[0.08] text-[13.5px]">
              <div className="flex items-center justify-between gap-4 py-3.5">
                <dt className="text-sage">Total number of employees</dt>
                <dd className="font-medium text-forest">11 to 25 people</dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-3.5">
                <dt className="text-sage">Primary competitive advantage</dt>
                <dd className="text-right font-medium text-forest">Experienced R&amp;D department</dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-3.5">
                <dt className="text-sage">Quality measures / testing facilities</dt>
                <dd className="font-medium text-forest">Yes</dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-3.5">
                <dt className="text-sage">Customized packaging</dt>
                <dd className="font-medium text-forest">Yes</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-[#0e1113] py-16 text-white md:py-20">
        <div className="wrap flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-brasslight">Visit or enquire</p>
            <h2 className="display mt-3 text-[clamp(1.7rem,3vw,2.4rem)] text-white">
              See the machines before you order.
            </h2>
            <p className="mt-2.5 max-w-xl text-[14px] leading-[1.7] text-white/60">
              {site.contact.address.lines.join(", ")}. Call {site.contact.phone} to arrange a visit,
              or ask us for photographs and video of the machine you are interested in.
            </p>
          </div>
          <Link href="/contact" className="btn btn-light shrink-0">
            Contact us <IconArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
