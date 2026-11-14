import type { Metadata } from "next";
import Link from "next/link";

import { HeroSlider } from "@/components/hero-slider";
import { InquiryForm } from "@/components/inquiry-form";
import { ProcessRail } from "@/components/process-rail";
import { ProductCard } from "@/components/product-card";
import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { getClientLogo } from "@/components/client-logo";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconCheck,
  IconPhone,
} from "@/components/icons";
import { solutions } from "@/data/solutions";
import { getCatalogSummary, getClients, getTestimonials } from "@/lib/data";
import { faqs } from "@/lib/faqs";
import { site } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: {
    absolute: "A.S. Engineering Works — Food Processing Machinery Manufacturer, Noida",
  },
  description: site.description,
};

const lineHighlights = [
  {
    number: "01",
    title: "Corn puff & cheese ball lines",
    description:
      "Snack extruders paired with roasting and flavour coating equipment for corn puffs, cheese balls, rings and kachri.",
    image: "/images/machines/snack-extruder.jpg",
    alt: "Representative image of a snack extruder producing corn puffs",
    href: "/solutions/corn-puffs",
    details: ["Extrusion", "Roasting", "Flavour coating"],
  },
  {
    number: "02",
    title: "Kurkure & corn stick lines",
    description:
      "Kurkure making machines that give each piece a naturally varied length and diameter, with seasoning equipment to finish.",
    image: "/images/machines/kurkure-line.jpg",
    alt: "Representative image of a kurkure production line",
    href: "/solutions/kurkure-corn-sticks",
    details: ["Kurkure extruders", "80–100 kg/hr", "Seasoning"],
  },
  {
    number: "03",
    title: "Soya nugget & badi plants",
    description:
      "Textured soya protein machines for nuggets, chunks, chaap and badi — from single extruders to complete plants.",
    image: "/images/machines/soya-extruder.jpg",
    alt: "Representative image of a soya nugget extruder",
    href: "/solutions/soya-nuggets",
    details: ["Hopper mixing", "Protein extrusion", "Drying"],
  },
];

const equipmentSections = [
  {
    kicker: "Seasoning & coating",
    title: "Uniform flavour, batch after batch.",
    copy: "From a compact batch masala mixing machine to a 24 ft flavour coating system with dry masala and ghee spray, our seasoning equipment coats puffs, rings, namkeen and other snacks evenly.",
    points: ["Masala mixing", "Slurry kettles", "Flavour coating"],
    href: "/products?category=seasoning-systems",
    cta: "Seasoning equipment",
    image: "/images/machines/seasoning-drum.jpg",
    alt: "Representative image of a flavour coating drum seasoning corn snacks",
  },
  {
    kicker: "Roasting & drying",
    title: "Controlled heat. Repeatable texture.",
    copy: "Rotary cell roasters, snack roasters, tray dryers, continuous dryers and pasta static dryers built for industrial drying and roasting across snack and pasta lines.",
    points: ["Rotary roasters", "Tray dryers", "Static drying"],
    href: "/products?category=dryers-roasters",
    cta: "Thermal equipment",
    image: "/images/machines/dryer-roaster.jpg",
    alt: "Representative image of an industrial tray dryer and rotary roaster",
  },
  {
    kicker: "Product handling",
    title: "Seamless transfer between stages.",
    copy: "Inclined conveyor belts and screw conveyors move ingredients and finished product between machines across your factory floor, custom-sized to your layout.",
    points: ["Inclined belt conveyors", "Screw conveyors"],
    href: "/products?category=conveyors",
    cta: "Handling equipment",
    image: "/images/machines/belt-conveyor.jpg",
    alt: "Representative image of an inclined belt conveyor carrying snacks",
  },
];

const popularSlugs = [
  "corn-puff-making-machine",
  "kurkure-manufacturing-machine",
  "soya-chunk-machine",
  "pasta-making-machine",
  "rotary-cell-roaster",
  "flavor-coating-systems",
];

const videos = [
  { src: "/images/real/video-line.jpg", title: "Snack line running", id: "PkRV7NXZlYQ" },
  { src: "/images/real/video-soya.jpg", title: "Soya nuggets", id: "tvHn1GEE_tE" },
  { src: "/images/real/video-extruder.jpg", title: "Inside the workshop", id: "im38GoURAwI" },
];

export default async function HomePage() {
  const [{ categories, products }, testimonials, clients] = await Promise.all([
    getCatalogSummary(),
    getTestimonials(),
    getClients(),
  ]);
  const categoryNames = new Map(categories.map((category) => [category.slug, category.name]));
  const featured = popularSlugs
    .map((slug) => products.find((product) => product.slug === slug))
    .filter((product) => product !== undefined);
  const review = testimonials.find((item) => (item.quote?.length ?? 0) > 40);
  const clientNames = clients.slice(0, 12);
  const regionCount = new Set(clients.map((client) => client.region)).size;

  return (
    <>
      <HeroSlider />

      {/* Introduction */}
      <section className="border-b border-forest/[0.06] bg-white py-20 md:py-28">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[1fr_1.02fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-sage">About A.S. Engineering Works</p>
            <h2 className="display mt-4 max-w-[540px] text-[clamp(2rem,3.6vw,3.1rem)] text-forest">
              Built in Noida for food manufacturers since 1984.
            </h2>
            <p className="mt-6 max-w-[520px] text-[15px] leading-[1.82] text-sage">
              For over four decades, we have manufactured and exported snack extruders, kurkure
              machines, pasta and vermicelli equipment, soya nugget plants, industrial dryers,
              roasters and flavouring systems — regarded for dependable design and efficiency.
            </p>
            <p className="mt-4 max-w-[520px] text-[15px] leading-[1.82] text-sage">
              Every requirement begins with the product you want to make. Whether you are installing
              a single machine or configuring a full line, our team works directly to your output and
              floor space.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about" className="btn btn-dark">
                Our company <IconArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/products" className="btn btn-outline">
                Browse catalogue
              </Link>
            </div>

            <div className="mt-12 grid max-w-[460px] grid-cols-3 border-t border-forest/[0.08] pt-7">
              <div>
                <p className="display tabular text-[28px] text-forest sm:text-[32px]">1984</p>
                <p className="mt-1.5 font-mono text-[10px] tracking-[0.08em] text-sage uppercase">
                  Established
                </p>
              </div>
              <div>
                <p className="display tabular text-[28px] text-forest sm:text-[32px]">{products.length}</p>
                <p className="mt-1.5 font-mono text-[10px] tracking-[0.08em] text-sage uppercase">
                  Machines
                </p>
              </div>
              <div>
                <p className="display tabular text-[28px] text-forest sm:text-[32px]">{categories.length}</p>
                <p className="mt-1.5 font-mono text-[10px] tracking-[0.08em] text-sage uppercase">
                  Categories
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="grid grid-cols-2 gap-3.5">
            <div className="col-span-2 overflow-hidden rounded-2xl bg-sand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/machines/line-extruder.jpg"
                alt="Representative image of a snack extruder line"
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-xl bg-sand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/machines/pasta-die.jpg"
                alt="Representative image of a pasta extruder die"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-xl bg-sand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/machines/seasoning-spray.jpg"
                alt="Representative image of a flavour coating drum"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <ProcessRail />

      {/* Solutions by finished product */}
      <section id="solutions" className="border-t border-forest/[0.06] bg-bone py-20 md:py-28">
        <div className="wrap">
          <SectionHeading
            eyebrow="Solutions by product"
            title="What do you want to make?"
            description="Start with the finished snack. Each application brings together the matching extruders, dryers, roasters and seasoning machines from our catalogue."
            link={{ href: "/solutions", label: "All processing solutions" }}
            align="between"
          />

          <div className="mt-12 grid grid-cols-2 gap-3.5 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
            {solutions.map((solution, index) => (
              <Reveal key={solution.slug} delay={Math.min(index, 5) * 70}>
                <Link
                  href={`/solutions/${solution.slug}`}
                  className="group relative block overflow-hidden rounded-xl bg-forest"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={solution.image}
                    alt={`${solution.name} — illustrative image`}
                    loading="lazy"
                    className="aspect-[4/4.4] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4">
                    <span className="text-[14px] leading-snug font-medium text-white sm:text-[15px]">
                      {solution.shortName}
                    </span>
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition duration-200 group-hover:border-white group-hover:bg-white group-hover:text-forest">
                      <IconArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured processing lines */}
      <section className="border-t border-forest/[0.06] bg-white py-20 md:py-28">
        <div className="wrap">
          <SectionHeading
            eyebrow="Processing lines"
            title="Core production systems"
            description="Start with the primary machine, then add the thermal, seasoning and handling stages your recipe needs."
            link={{ href: "/solutions", label: "Explore all lines" }}
            align="between"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {lineHighlights.map((line, index) => (
              <Reveal key={line.number} delay={index * 90}>
                <Link
                  href={line.href}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-forest/[0.07] bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-forest/[0.16] hover:shadow-[0_24px_48px_-28px_rgba(17,20,22,0.16)]"
                >
                  <div className="aspect-[3/2] overflow-hidden bg-sand">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={line.image}
                      alt={line.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="font-mono text-[10px] tracking-[0.14em] text-sage">{line.number}</span>
                    <h3 className="mt-2 text-[20px] leading-snug font-medium tracking-[-0.02em] text-forest transition-colors group-hover:text-moss">
                      {line.title}
                    </h3>
                    <p className="mt-2.5 text-[13.5px] leading-[1.7] text-sage">{line.description}</p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {line.details.map((detail) => (
                        <span
                          key={detail}
                          className="rounded-full bg-bone px-3 py-1 text-[11px] font-medium text-forest/70"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex items-center gap-1.5 pt-6 text-[13px] font-medium text-forest">
                      Explore line{" "}
                      <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Seasoning, thermal & handling stages */}
      <section className="border-t border-forest/[0.06] bg-sand/70 py-20 md:py-28">
        <div className="wrap space-y-6">
          {equipmentSections.map((section, index) => (
            <Reveal key={section.kicker}>
              <div
                className="grid overflow-hidden rounded-2xl border border-forest/[0.06] bg-white lg:grid-cols-2"
              >
                <div
                  className={`flex flex-col justify-center p-8 sm:p-12 lg:p-16 ${index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                >
                  <p className="eyebrow text-sage">{section.kicker}</p>
                  <h2 className="display mt-3.5 text-[clamp(1.7rem,2.8vw,2.4rem)] text-forest">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-[14.5px] leading-[1.78] text-sage">{section.copy}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {section.points.map((point) => (
                      <span
                        key={point}
                        className="rounded-full border border-forest/10 px-3 py-1 text-[11.5px] text-forest/70"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                  <Link href={section.href} className="btn btn-outline mt-8 w-fit">
                    {section.cta} <IconArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
                <div
                  className={`relative min-h-[260px] bg-sand sm:min-h-[340px] ${index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={section.image}
                    alt={section.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Proof in numbers */}
      <section className="bg-[#0c0f11] text-white">
        <div className="wrap">
          <div className="grid grid-cols-2 gap-px bg-white/[0.08] lg:grid-cols-4">
            {[
              { value: 1984, animate: false, label: "Year established", note: "Noida, Uttar Pradesh" },
              { value: products.length, animate: true, label: "Machines listed", note: "Published catalogue" },
              { value: categories.length, animate: true, label: "Machine categories", note: "Extrusion to conveying" },
              { value: clients.length, animate: true, label: "Clients on our list", note: `${regionCount} regions` },
            ].map((stat, index) => (
              <Reveal key={stat.label} delay={index * 80} className="h-full">
                <div className="flex h-full flex-col justify-between gap-10 bg-[#0c0f11] px-6 py-12 lg:px-8 lg:py-16">
                  <p className="display text-[clamp(2.6rem,4.6vw,3.8rem)] font-medium tracking-[-0.03em] text-white">
                    {stat.animate ? <CountUp value={stat.value} /> : stat.value}
                  </p>
                  <div>
                    <p className="text-[14px] font-medium text-white/85">{stat.label}</p>
                    <p className="mt-1.5 font-mono text-[10px] tracking-[0.1em] text-white/40 uppercase">
                      {stat.note}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="border-t border-forest/[0.06] bg-white py-20 md:py-28">
        <div className="wrap">
          <SectionHeading
            eyebrow="How we work"
            title="From enquiry to installed machine."
            description="A clear, five-step path. Our own engineers and team handle each stage."
          />
          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {[
              {
                title: "Share your requirement",
                copy: "Tell us the product, hourly output, location and any existing machines.",
              },
              {
                title: "Configure the machine",
                copy: "We recommend suitable machines and customise capacity, dies and electricals where needed.",
              },
              {
                title: "Fabricate & assemble",
                copy: "Fabrication, designing and final assembly are carried out by our own engineers in Noida.",
              },
              {
                title: "Test & inspect",
                copy: "Machines are checked for durability, efficiency, performance and resistance to corrosion.",
              },
              {
                title: "Pack, dispatch & install",
                copy: "Customised packaging is available, and installation is offered on several machines. Scope is confirmed in your quotation.",
              },
            ].map((step, index) => (
              <Reveal key={step.title} delay={index * 80}>
                <div className="h-full border-t border-forest/[0.12] pt-6">
                  <span className="font-mono text-[11px] tracking-[0.12em] text-sage">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-[18px] font-medium tracking-[-0.02em] text-forest">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-[1.7] text-sage">{step.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Selected catalogue machines */}
      <section className="border-t border-forest/[0.06] bg-bone py-20 md:py-28">
        <div className="wrap">
          <SectionHeading
            eyebrow="Machine catalogue"
            title="Selected equipment"
            description="Indicative prices and specifications from our published listings. Open any machine for details or request a configured quotation."
            link={{ href: "/products", label: `View all ${products.length} machines` }}
            align="between"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product, index) => (
              <Reveal key={product.slug} delay={(index % 3) * 80}>
                <ProductCard
                  product={product}
                  categoryName={categoryNames.get(product.categorySlug) ?? "Food machinery"}
                />
              </Reveal>
            ))}
          </div>
          <p className="mt-6 font-mono text-[10.5px] text-sage/75">
            Representative machine illustrations shown. Ask us for current workshop photographs and video.
          </p>
        </div>
      </section>

      {/* Clients & buyer review */}
      <section className="border-t border-forest/[0.06] bg-white py-20 md:py-28">
        <div className="wrap">
          <SectionHeading
            eyebrow="Clients"
            title="Trusted across India and export markets"
            description="Food manufacturers across Delhi NCR, Kanpur, Odisha, Sri Lanka and the Gulf countries — drawn from our published client list."
            link={{ href: "/clients", label: "Clients & reviews" }}
            align="between"
          />
          <Reveal className="mt-12 grid grid-cols-2 overflow-hidden rounded-2xl border border-forest/[0.07] sm:grid-cols-3 lg:grid-cols-6">
            {clientNames.map((client) => (
              <div
                key={`${client.region}-${client.name}`}
                title={client.name}
                className="flex min-h-28 items-center justify-center border-r border-b border-forest/[0.07] p-6 transition-all duration-200 hover:bg-forest/[0.03]"
              >
                <img
                  src={getClientLogo(client.name)}
                  alt={client.name}
                  width={140}
                  height={60}
                  className="max-h-12 w-auto max-w-[85%] object-contain transition-transform duration-200 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </Reveal>

          {review && (
            <Reveal>
              <figure className="mt-8 grid overflow-hidden rounded-2xl border border-forest/[0.07] bg-bone md:grid-cols-[0.9fr_2.1fr]">
                <figcaption className="flex flex-col justify-center border-b border-forest/[0.07] p-7 md:border-r md:border-b-0 md:p-9">
                  <span className="eyebrow text-sage">Buyer review</span>
                  <span className="mt-3 text-[16px] font-medium text-forest">{review.name}</span>
                  <span className="mt-1 text-[12px] text-sage">
                    {review.location}
                    {review.product ? ` · ${review.product}` : ""}
                  </span>
                </figcaption>
                <blockquote className="flex items-center p-7 text-[16.5px] leading-[1.7] font-normal text-forest/85 md:p-10 md:text-[18.5px]">
                  “{review.quote}”
                </blockquote>
              </figure>
            </Reveal>
          )}
        </div>
      </section>

      {/* Company videos */}
      <section className="border-t border-forest/[0.06] bg-bone py-20 md:py-24">
        <div className="wrap">
          <SectionHeading
            eyebrow="Workshop footage"
            title="Machines in operation"
            description="Original videos from A.S. Engineering Works. Each opens on YouTube."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {videos.map((video, index) => (
              <Reveal key={video.id} delay={index * 80}>
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group overflow-hidden rounded-xl border border-forest/[0.07] bg-white transition hover:border-forest/[0.16]"
                >
                  <div className="relative aspect-video overflow-hidden bg-forest">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={video.src}
                      alt={`Video still: ${video.title}`}
                      loading="lazy"
                      className="h-full w-full scale-[1.08] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.13]"
                    />
                    <span className="absolute top-1/2 left-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 pl-0.5 text-[12px] text-forest shadow-lg backdrop-blur-md transition duration-200 group-hover:scale-105 group-hover:bg-white">
                      ▶
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3 px-5 py-4">
                    <span className="text-[13.5px] font-medium text-forest">{video.title}</span>
                    <IconArrowUpRight className="h-4 w-4 text-sage transition group-hover:text-forest" />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer questions */}
      <section className="border-t border-forest/[0.06] bg-white py-20 md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow text-sage">Before you enquire</p>
            <h2 className="display mt-3.5 text-[clamp(1.8rem,3vw,2.4rem)] text-forest">
              Questions buyers ask us
            </h2>
            <p className="mt-4 max-w-sm text-[14px] leading-[1.75] text-sage">
              Not sure which machine suits your product? Send a message with what you want to make
              and your target output.
            </p>
            <Link href="/contact" className="btn btn-outline mt-7">
              Ask a question
            </Link>
          </Reveal>

          <Reveal delay={100} className="divide-y divide-forest/[0.08] border-y border-forest/[0.08]">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group py-5" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-forest">
                  {faq.question}
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-forest/15 text-forest/70 transition group-open:border-forest group-open:text-forest">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5 transition group-open:rotate-45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 max-w-xl pr-8 text-[13.5px] leading-[1.75] text-sage">
                  {faq.answer}
                </p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Closing enquiry section */}
      <section className="bg-[#0e1113] py-20 text-white md:py-28">
        <div className="wrap grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:pt-4">
            <p className="eyebrow text-brasslight">Start a project</p>
            <h2 className="display mt-4 text-[clamp(2rem,3.6vw,3.1rem)] text-white">
              Tell us the product. We&apos;ll recommend the machine.
            </h2>
            <p className="mt-5 max-w-[440px] text-[14.5px] leading-[1.8] text-white/60">
              Share what you want to produce, your target hourly output and where the facility is
              located. We will reply with suitable machinery options and a quotation.
            </p>
            <a
              href={site.contact.phoneHref}
              className="mt-8 inline-flex items-center gap-3 text-[19px] font-medium tracking-tight text-white transition hover:text-brasslight"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/[0.06]">
                <IconPhone className="h-4 w-4 text-brasslight" />
              </span>
              {site.contact.phone}
            </a>
            <div className="mt-8 space-y-2.5 text-[13px] text-white/60">
              <p className="flex items-center gap-2.5">
                <IconCheck className="h-4 w-4 text-brasslight" /> Machine-specific quotations
              </p>
              <p className="flex items-center gap-2.5">
                <IconCheck className="h-4 w-4 text-brasslight" /> Custom designs on request
              </p>
              <p className="flex items-center gap-2.5">
                <IconCheck className="h-4 w-4 text-brasslight" /> India and export enquiries welcome
              </p>
            </div>
            <p className="mt-10 border-t border-white/[0.08] pt-5 font-mono text-[10.5px] text-white/40">
              GST 09AHNPK3689D1ZX · IEC 0504026763
            </p>
          </div>
          <InquiryForm
            machines={products.map((product) => ({ slug: product.slug, name: product.name }))}
            title="Request a machine quotation"
            description="A few details will help us recommend the right equipment for your product."
          />
        </div>
      </section>
    </>
  );
}
