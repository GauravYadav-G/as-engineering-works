import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { IconArrowUpRight } from "@/components/icons";

/* All eight stages have an image. The three additional stage photographs are
 * illustrative stock, not machines represented in the A.S. Engineering catalogue.
 * Source and licence details are linked in the caption and on /image-credits.
 */
const stages = [
  {
    number: "01",
    name: "Processing",
    note: "Food processing plants and machines for complete snack production.",
    image: "/images/machines/processing-line.jpg",
    alt: "Representative image of a snack processing line",
    href: "/solutions",
  },
  {
    number: "02",
    name: "Extrusion",
    note: "Snack, soya and pasta extruders with interchangeable dies.",
    image: "/images/machines/snack-extruder-die.jpg",
    alt: "Representative image of an extruder die",
    href: "/products?category=snack-extruders",
  },
  {
    number: "03",
    name: "Frying",
    note: "An illustrative frying process for crispy snack production.",
    image: "/images/stages/frying.jpg",
    alt: "Potato chips frying in a fryer — illustrative stage photograph",
    href: "/solutions",
  },
  {
    number: "04",
    name: "Seasoning",
    note: "Masala mixing machines and continuous flavour coating drums.",
    image: "/images/machines/seasoning-spray.jpg",
    alt: "Representative image of flavour spray inside a coating drum",
    href: "/products?category=seasoning-systems",
  },
  {
    number: "05",
    name: "Conveying",
    note: "Inclined belt conveyors and screw conveyors for product transfer.",
    image: "/images/machines/conveyor-drive.jpg",
    alt: "Representative image of a conveyor drive unit",
    href: "/products?category=conveyors",
  },
  {
    number: "06",
    name: "Drying",
    note: "Tray, static and continuous dryers for controlled drying.",
    image: "/images/machines/tray-dryer.jpg",
    alt: "Representative image of a tray dryer",
    href: "/products?category=dryers-roasters",
  },
  {
    number: "07",
    name: "Weighing",
    note: "Illustrative multihead weighing equipment for portioning and filling.",
    image: "/images/stages/weighing.jpg",
    alt: "Multihead weigher of a VFFS packaging system — illustrative stage photograph",
    href: "/solutions",
  },
  {
    number: "08",
    name: "Packaging",
    note: "Illustrative vertical form fill seal equipment for pouch packing.",
    image: "/images/stages/packaging.jpg",
    alt: "VFFS pouch packaging machine — illustrative stage photograph",
    href: "/solutions",
  },
] as const;

export function ProcessRail() {
  return (
    <section aria-labelledby="process-rail-title" className="bg-white py-20 md:py-28">
      <div className="wrap">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow text-sage">Eight stages · one production line</p>
              <h2
                id="process-rail-title"
                className="display mt-3.5 text-[clamp(1.85rem,3.4vw,2.75rem)] text-forest"
              >
                Every stage of the snack journey.
              </h2>
            </div>
            <p className="max-w-sm text-[14px] leading-[1.75] text-sage">
              Start with the stage you need and explore the complete processing journey.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <ol className="hide-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 lg:gap-2.5 lg:overflow-visible">
            {stages.map((stage) => (
              <li
                key={stage.name}
                className="group shrink-0 basis-[74%] snap-start sm:basis-[42%] lg:flex-1 lg:basis-0 lg:transition-[flex] lg:duration-700 lg:ease-[cubic-bezier(0.22,1,0.36,1)] lg:hover:flex-[2.2] lg:focus-within:flex-[2.2]"
              >
                <Link
                  href={stage.href}
                  className="relative block h-[430px] overflow-hidden rounded-2xl bg-sand lg:h-[540px]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={stage.image}
                    alt={stage.alt}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-[#0c0f11]/90 via-[#0c0f11]/15 to-transparent"
                  />
                  <span className="tabular absolute top-5 left-5 font-mono text-[11px] tracking-[0.12em] text-white/85">
                    {stage.number}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 flex flex-col p-4 lg:p-5">
                    <p className="order-2 mt-2.5 max-w-[260px] text-[12.5px] leading-[1.6] text-white/75 transition-all duration-500 ease-out lg:order-1 lg:mt-0 lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-within:translate-y-0 lg:group-focus-within:opacity-100">
                      {stage.note}
                    </p>
                    <span className="order-3 mt-4 inline-flex items-center gap-1.5 text-[11px] font-medium text-white/90 transition-opacity duration-500 lg:order-1 lg:mt-0 lg:mb-4 lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100">
                      Explore stage <IconArrowUpRight className="h-3 w-3" />
                    </span>
                    <h3 className="order-1 text-[16px] leading-tight font-medium tracking-[-0.015em] text-white transition-[font-size] duration-500 lg:order-2 lg:text-[15px] lg:group-hover:text-[19px]">
                      {stage.name}
                    </h3>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </Reveal>

        <p className="mt-6 font-mono text-[10.5px] leading-relaxed text-sage/75">
          Illustrative stage photography.{" "}
          <Link href="/image-credits" className="font-medium text-forest/70 underline underline-offset-2 hover:text-forest">
            Image credits
          </Link>
        </p>
      </div>
    </section>
  );
}
