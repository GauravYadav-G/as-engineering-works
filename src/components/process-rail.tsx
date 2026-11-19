import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { IconArrowUpRight } from "@/components/icons";

const stages = [
  {
    number: "01",
    name: "Processing",
    note: "Food processing plants and machines for complete snack production.",
    image: "/images/stages/processing.jpg",
    alt: "A.S. Engineering Works industrial food processing line in Noida",
    href: "/solutions",
  },
  {
    number: "02",
    name: "Extrusion",
    note: "Snack, soya and pasta extruders with interchangeable dies.",
    image: "/images/stages/extrusion.jpg",
    alt: "A.S. Engineering Works heavy-duty snack food extruder machine",
    href: "/products?category=snack-extruders",
  },
  {
    number: "03",
    name: "Frying",
    note: "Continuous frying systems for crispy snack production.",
    image: "/images/stages/frying.jpg",
    alt: "Commercial snack fryer with golden chips in hot bubbling oil",
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
    image: "/images/stages/conveying.jpg",
    alt: "A.S. Engineering Works stainless steel cleated conveyor belt system",
    href: "/products?category=conveyors",
  },
  {
    number: "06",
    name: "Drying",
    note: "Tray, static and continuous dryers for controlled drying.",
    image: "/images/machines/tray-dryer.jpg",
    alt: "A.S. Engineering Works continuous snack roaster and industrial drying plant",
    href: "/products?category=dryers-roasters",
  },
  {
    number: "07",
    name: "Weighing",
    note: "Multihead combination weighing equipment for precision portioning and filling.",
    image: "/images/stages/weighing.jpg",
    alt: "Multihead combination weigher of a VFFS packaging system",
    href: "/solutions",
  },
  {
    number: "08",
    name: "Packaging",
    note: "Vertical form fill seal equipment for continuous pouch packing.",
    image: "/images/stages/packaging.jpg",
    alt: "VFFS pouch packaging machine",
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
                className="display mt-3.5 text-[clamp(2.1rem,3.8vw,3.15rem)] text-forest"
              >
                Every stage of the snack journey.
              </h2>
            </div>
            <p className="max-w-md text-[16px] sm:text-[17.5px] leading-[1.75] text-sage">
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
                  <span className="tabular absolute top-5 left-5 font-mono text-[12.5px] font-medium tracking-[0.12em] text-white/90">
                    {stage.number}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 flex flex-col p-4 lg:p-5">
                    <p className="order-2 mt-2.5 max-w-[280px] text-[14px] leading-[1.6] text-white/85 transition-all duration-500 ease-out lg:order-1 lg:mt-0 lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-within:translate-y-0 lg:group-focus-within:opacity-100">
                      {stage.note}
                    </p>
                    <span className="order-3 mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-white/95 transition-opacity duration-500 lg:order-1 lg:mt-0 lg:mb-4 lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100">
                      Explore stage <IconArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                    <h3 className="order-1 text-[18px] leading-tight font-semibold tracking-[-0.015em] text-white transition-[font-size] duration-500 lg:order-2 lg:text-[17px] lg:group-hover:text-[21px]">
                      {stage.name}
                    </h3>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
