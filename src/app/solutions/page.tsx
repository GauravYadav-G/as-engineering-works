import type { Metadata } from "next";
import Link from "next/link";

import { IconArrowRight, IconArrowUpRight, IconCheck } from "@/components/icons";
import { BreadcrumbStrip } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { solutions } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Snack Food Processing Solutions by Product",
  description:
    "Explore A.S. Engineering Works snack processing solutions by finished product: corn puffs, kurkure, soya nuggets, pasta, vermicelli, millet snacks, seasoning and roasting.",
};

export default function SolutionsPage() {
  return (
    <>
      <BreadcrumbStrip items={[{ label: "Processing lines" }]} />

      <section className="bg-white py-14 md:py-20">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow text-sage">Processing lines</p>
            <h1 className="display mt-4 max-w-[540px] text-[clamp(2.2rem,4.4vw,3.6rem)] text-forest">
              Start with the snack. Build the right line.
            </h1>
            <p className="mt-5 max-w-[540px] text-[16.5px] leading-[1.85] text-sage">
              The right equipment begins with what you want to make. Explore our processing
              solutions to see which extruders, roasters, dryers and seasoning systems from our
              catalogue fit each product.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[13.5px] font-medium text-forest/75">
              <span className="inline-flex items-center gap-1.5">
                <IconCheck className="h-4 w-4 text-moss" /> Machine combinations
              </span>
              <span className="inline-flex items-center gap-1.5">
                <IconCheck className="h-4 w-4 text-moss" /> Application-led selection
              </span>
              <span className="inline-flex items-center gap-1.5">
                <IconCheck className="h-4 w-4 text-moss" /> Custom configuration
              </span>
            </div>
            <Link href="/contact" className="btn btn-dark mt-8 text-[15px]">
              Discuss a processing line <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 h-[250px] overflow-hidden rounded-2xl bg-sand sm:h-[290px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/applications/seasoned-snacks.jpg"
                alt="Seasoned corn stick snack application"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-[145px] overflow-hidden rounded-xl bg-sand sm:h-[165px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/applications/pasta.jpg"
                alt="Pasta application"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-[145px] overflow-hidden rounded-xl bg-sand sm:h-[165px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/machines/snack-extruder.jpg"
                alt="Representative image of a snack extruder"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-forest/[0.06] bg-bone py-20 md:py-24">
        <div className="wrap">
          <div className="max-w-2xl">
            <p className="eyebrow text-sage">Solutions by product</p>
            <h2 className="display mt-3.5 text-[clamp(1.9rem,3.4vw,2.75rem)] text-forest">
              What are you making?
            </h2>
            <p className="mt-3.5 text-[14.5px] leading-[1.75] text-sage">
              Select a finished product to see a practical process overview and the published
              machinery A.S. Engineering Works offers for it.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => {
              const isWide = index === solutions.length - 1 && solutions.length % 3 === 1;
              return (
                <Reveal key={solution.slug} delay={(index % 3) * 70} className={isWide ? "sm:col-span-2 lg:col-span-3" : ""}>
                <Link
                  href={`/solutions/${solution.slug}`}
                  className={`group flex h-full overflow-hidden rounded-xl border border-forest/[0.07] bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-forest/[0.16] hover:shadow-[0_24px_48px_-28px_rgba(17,20,22,0.16)] ${
                    isWide ? "flex-col lg:grid lg:grid-cols-2" : "flex-col"
                  }`}
                >
                  <div className={`overflow-hidden bg-sand ${isWide ? "aspect-[16/10] lg:aspect-auto lg:h-full" : "aspect-[16/10]"}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={solution.image}
                      alt={`${solution.name} application`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className={`flex flex-1 flex-col ${isWide ? "justify-center p-7 lg:p-12" : "p-6"}`}>
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-mono text-[11px] tracking-[0.14em] text-sage uppercase">
                        {solution.eyebrow}
                      </p>
                      <span className="font-mono text-[11.5px] text-sage/75">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className={`mt-2.5 font-semibold text-forest transition-colors group-hover:text-moss ${isWide ? "text-[26px]" : "text-[21px]"}`}>
                      {solution.name}
                    </h3>
                    <p className={`mt-2 text-[14.5px] leading-[1.7] text-sage ${isWide ? "max-w-lg" : "line-clamp-3"}`}>
                      {solution.intro}
                    </p>
                    <div className="mt-auto flex items-center justify-between border-t border-forest/[0.07] pt-4 text-[14px] font-medium text-forest">
                      <span>Explore solution</span>
                      <IconArrowUpRight className="h-4 w-4 text-sage transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-forest" />
                    </div>
                  </div>
                </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#0e1113] py-16 text-white md:py-20">
        <div className="wrap flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-brasslight">Not sure which line?</p>
            <h2 className="display mt-3 max-w-[640px] text-[clamp(1.7rem,3vw,2.4rem)] text-white">
              Tell us your finished product and target output.
            </h2>
            <p className="mt-2.5 text-[14px] text-white/60">
              We will recommend relevant equipment from the current catalogue.
            </p>
          </div>
          <Link href="/contact" className="btn btn-light shrink-0">
            Send requirement <IconArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
