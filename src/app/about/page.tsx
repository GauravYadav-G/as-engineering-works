import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { CompanyJourney } from "@/components/company-journey";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconCheck,
  IconGlobe,
  IconShield,
} from "@/components/icons";
import { getClients } from "@/lib/data";
import { site } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "About A.S. Engineering Works — Food Machinery Manufacturer Since 1984",
  description:
    "Established in 1984 in Noida, A.S. Engineering Works manufactures and exports food extrusion machines, food processing plants and industrial dryers under the leadership of Akhtar Ali Khan.",
};

export default async function AboutPage() {
  const clients = await getClients();
  const deliveryFootprint = Array.from(new Set(clients.map((client) => client.region)));

  return (
    <>
      <PageHero
        eyebrow="About us · Since 1984"
        title={
          <>
            Built in Noida.
            <br />
            Running in snack factories <span className="text-brasslight">worldwide.</span>
          </>
        }
        description="A.S. Engineering Works commenced operations in 1984 as a manufacturer and exporter of a comprehensive range of food extrusion machines, under the guidance of Mr. Akhtar Ali Khan."
        breadcrumb={[{ label: "About" }]}
        image="/images/hero-line.jpg"
      />

      <section className="bg-bone py-20 md:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20">
          <div>
            <p className="eyebrow text-sage">Our story</p>
            <h2 className="display mt-4 text-[clamp(1.9rem,3.4vw,2.75rem)] text-forest">
              A machinery workshop that grew with India&apos;s snack industry.
            </h2>
            <div className="prose-machine mt-6 space-y-4">
              <p>
                We, <strong className="font-medium text-forest">A.S. Engineering Works</strong>,
                commenced our operations in <strong className="font-medium text-forest">1984</strong>{" "}
                as the manufacturer and exporter of a comprehensive range of food extrusion machines.
                Our product portfolio comprises food processing machines, extruder machines and
                industrial dryers. Our products are extensively patronised by players in the food
                industry and are highly regarded for their optimal performance.
              </p>
              <p>
                We design and create these offerings with cutting-edge technology and premium quality
                materials. Several snack manufacturers avail these machines from us as per their exact
                requirements. With their short work cycles, these machines offer high efficiency to
                customers.
              </p>
              <p>
                We have a state-of-the-art infrastructure spread over a vast area, equipped with
                high-tech machinery and multiple amenities. The entire facility is segregated into
                divisions to ensure maximum efficiency and minimal duplication of work. Each unit is
                managed by dexterous professionals who are proficient in their respective areas of
                expertise — handpicked for their knowledge, experience and attitude.
              </p>
              <p>
                We are a proprietorship firm functioning under the visionary guidance of{" "}
                <strong className="font-medium text-forest">Mr. Akhtar Ali Khan</strong>. With his
                rich industry experience and leadership, the organisation has grown to serve a large
                clientele across the Gulf countries, Sri Lanka and India.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/products" className="btn btn-dark px-6 py-3">
                Explore machines
                <IconArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/infrastructure" className="btn btn-outline px-6 py-3">
                Inside our facility
              </Link>
            </div>

            <div className="mt-10 grid max-w-[540px] grid-cols-3 border-t border-forest/[0.08] pt-7">
              <div>
                <p className="display tabular text-[30px] font-semibold text-forest sm:text-[34px]">42+</p>
                <p className="mt-1.5 font-mono text-[11px] tracking-[0.08em] text-sage uppercase">
                  Years of legacy
                </p>
              </div>
              <div>
                <p className="display tabular text-[30px] font-semibold text-forest sm:text-[34px]">50,000+</p>
                <p className="mt-1.5 font-mono text-[11px] tracking-[0.08em] text-sage uppercase">
                  Machines delivered
                </p>
              </div>
              <div>
                <p className="display tabular text-[30px] font-semibold text-forest sm:text-[34px]">2,000+</p>
                <p className="mt-1.5 font-mono text-[11px] tracking-[0.08em] text-sage uppercase">
                  Projects completed
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="overflow-hidden rounded-2xl border border-forest/[0.07] bg-sand">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/real/akhtar-ali-khan-workshop.jpg"
                  alt="Founder Mr. Akhtar Ali Khan at the A.S. Engineering Works workshop in Noida"
                  loading="lazy"
                  className="aspect-[5/4] w-full object-cover object-[center_28%]"
                />
              </div>
              <p className="mt-2.5 font-mono text-[11.5px] text-sage/80">
                Founder Mr. Akhtar Ali Khan at A.S. Engineering Works workshop, Noida
              </p>
            </div>
            <div className="rounded-2xl border border-forest/[0.07] bg-white p-7">
              <p className="eyebrow text-sage">Vision</p>
              <p className="mt-3 text-[15px] leading-[1.8] text-forest/75">{site.vision}</p>
              <p className="eyebrow mt-7 text-sage">Mission</p>
              <p className="mt-3 text-[15px] leading-[1.8] text-forest/75">{site.mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 42+ Years Company Journey & Milestone Flowchart Diagram */}
      <CompanyJourney />

      <section className="border-y border-forest/[0.06] bg-white py-20 md:py-24">
        <div className="wrap">
          <SectionHeading
            eyebrow="Company factsheet"
            title="Statutory and business profile"
            description="Published registration details, capacity and commercial profile from our listings."
            align="between"
            link={{ href: "/contact", label: "Request documentation" }}
          />

          <div className="mt-12 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            {site.facts.map((fact, index) => (
              <Reveal key={fact.label} delay={(index % 3) * 60} className="border-t border-forest/[0.09] pt-4">
                <p className="font-mono text-[11px] tracking-[0.14em] text-sage uppercase">
                  {fact.label}
                </p>
                <p className="mt-1.5 text-[16.5px] font-semibold text-forest">{fact.value}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone py-20 md:py-28">
        <div className="wrap grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Quality assurance"
              title="Quality is checked, not assumed."
              description="We are a quality-conscious concern and pay utmost importance to quality parameters. Our policy is to meet customer application and satisfaction by supplying quality-oriented products, with strict attention to each machine we manufacture."
            />
            <div className="prose-machine mt-5">
              <p>
                Our quality inspection team is responsible for inspecting quality right from raw
                materials to final production. We conduct various tests so that machines function in
                the desired manner, and check specifications, dimensions, weight and measurements so
                they stand at par with international competition.
              </p>
            </div>
            <p className="mt-8 font-mono text-[11.5px] tracking-[0.14em] text-sage uppercase">
              Each finished machine is tested for
            </p>
            <ul className="mt-3.5 grid gap-2.5 sm:grid-cols-2">
              {site.quality.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 rounded-xl border border-forest/[0.07] bg-white px-4 py-3 text-[14.5px] text-forest/85"
                >
                  <IconCheck className="h-4 w-4 shrink-0 text-moss" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl bg-[#0e1113] p-7 text-white">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/[0.05] text-brasslight">
                  <IconShield className="h-4.5 w-4.5" />
                </span>
                <p className="eyebrow text-brasslight">Company profile</p>
              </div>
              <dl className="mt-6 divide-y divide-white/[0.08]">
                <div className="flex items-center justify-between gap-4 py-3.5">
                  <dt className="text-[14.5px] text-white/60">Primary competitive advantage</dt>
                  <dd className="text-right text-[14.5px] font-medium">Experienced R&amp;D department</dd>
                </div>
                <div className="flex items-center justify-between gap-4 py-3.5">
                  <dt className="text-[14.5px] text-white/60">Quality testing facilities</dt>
                  <dd className="text-right text-[14.5px] font-medium">Yes</dd>
                </div>
                <div className="flex items-center justify-between gap-4 py-3.5">
                  <dt className="text-[14.5px] text-white/60">Customized packaging</dt>
                  <dd className="text-right text-[14.5px] font-medium">Yes</dd>
                </div>
                <div className="flex items-center justify-between gap-4 py-3.5">
                  <dt className="text-[14.5px] text-white/60">Banker</dt>
                  <dd className="text-right text-[14.5px] font-medium">Bank of Baroda</dd>
                </div>
              </dl>
            </div>
            <div className="rounded-2xl border border-forest/[0.07] bg-white p-7">
              <p className="eyebrow text-sage">Our team</p>
              <p className="mt-3 text-[15px] leading-[1.8] text-forest/75">
                Our team includes qualified engineers, technical associates and food experts who test
                each product during the production stage. Experienced instructors train floor workers
                at regular intervals to minimise risk and familiarise them with the production
                process. As a workforce we operate under pressure round the clock with coordination
                and harmony across departments.
              </p>
              <p className="mt-5 inline-flex items-center gap-1.5 font-mono text-[11.5px] tracking-[0.12em] text-sage uppercase">
                <IconCheck className="h-4 w-4 text-moss" /> 11–25 skilled people
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-forest/[0.06] bg-white py-20">
        <div className="wrap">
          <SectionHeading
            eyebrow="Delivery footprint"
            title="Where our machines are running"
            description="A wide and satisfied client base built through long-term relationships with domestic and international clients."
            link={{ href: "/clients", label: "See client list" }}
            align="between"
          />
          <div className="mt-8 flex flex-wrap gap-2.5">
            {deliveryFootprint.map((region) => (
              <span
                key={region}
                className="inline-flex items-center gap-2 rounded-full border border-forest/12 bg-bone px-4 py-2.5 text-[14px] text-forest/85"
              >
                <IconGlobe className="h-4 w-4 text-sage" />
                {region}
              </span>
            ))}
            <span className="inline-flex items-center gap-2 rounded-full border border-forest/12 bg-bone px-4 py-2.5 text-[14px] text-forest/85">
              <IconGlobe className="h-4 w-4 text-sage" />
              Export enquiries welcome
            </span>
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#0e1113] px-7 py-10 text-white md:flex-row md:items-center md:px-12">
            <div>
              <p className="eyebrow text-brasslight">Verification</p>
              <h3 className="display mt-2.5 text-[clamp(1.6rem,2.8vw,2.2rem)]">
                Trust-seal verified manufacturer
              </h3>
              <p className="mt-2.5 max-w-xl text-[15px] leading-relaxed text-white/65">
                Our profile, GST and IEC details are published openly so buyers can verify before
                ordering.
              </p>
            </div>
            <Link href="/contact" className="btn btn-light shrink-0 px-6 py-3.5 text-[15px]">
              Verify &amp; enquire
              <IconArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
