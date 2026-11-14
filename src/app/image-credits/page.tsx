import type { Metadata } from "next";
import Link from "next/link";

import { BreadcrumbStrip } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Image Credits & Photography",
  description:
    "Photography credits and licence information for the illustrative stage images used on the A.S. Engineering Works website.",
};

const licence = "https://creativecommons.org/licenses/by-sa/3.0/";

const credits = [
  {
    title: "Frying — potato chips in a fryer",
    author: "P. hammer",
    source: "https://commons.wikimedia.org/wiki/File:Potato_chips_in_fryer.jpg",
    changes:
      "Resized and compressed for the web; displayed with a dark gradient and a stage caption.",
    file: "/images/stages/frying.jpg",
  },
  {
    title: "Weighing & packaging — XtraVac VFFS system",
    author: "Jwallingford1",
    source:
      "https://commons.wikimedia.org/wiki/File:XtraVac_Multihead_weigher_inclined_vffs_vertical_form_fill_seal_packaging_machine_with_a_simple_conveyor_and_rotary_catching_table_-_Taken_at_Pack_Expo_Chicago_2014.jpg",
    changes:
      "Resized, then cropped into separate photographs of the weighing section and the packaging section. Both crops retain the original licence.",
    file: "/images/stages/vffs.jpg",
  },
];

export default function ImageCreditsPage() {
  return (
    <>
      <BreadcrumbStrip items={[{ label: "Image credits" }]} />
      <section className="bg-bone py-20 md:py-28">
        <div className="wrap max-w-4xl">
          <p className="eyebrow text-sage">Photography & licences</p>
          <h1 className="display mt-4 text-[clamp(2rem,4vw,3rem)] text-forest">
            Image credits
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-[1.8] text-sage">
            Stage photographs are illustrative. They do not represent machines in the A.S. Engineering
            Works catalogue or imply that the pictured equipment is supplied by the company.
          </p>

          <div className="mt-10 space-y-6">
            {credits.map((credit) => (
              <article key={credit.title} className="rounded-2xl border border-forest/[0.08] bg-white p-6 sm:p-8">
                <h2 className="text-xl font-medium tracking-tight text-forest">{credit.title}</h2>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex flex-wrap gap-x-2 gap-y-1">
                    <dt className="font-semibold text-sage">Photographer:</dt>
                    <dd className="font-medium text-forest">{credit.author}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-sage">Changes:</dt>
                    <dd className="mt-1 leading-relaxed text-forest/70">{credit.changes}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-sage">Licence:</dt>
                    <dd className="mt-1 leading-relaxed text-forest/70">
                      <a href={licence} target="_blank" rel="noreferrer" className="font-medium text-brand-700 underline underline-offset-2">
                        Creative Commons Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)
                      </a>
                      . The cropped/adapted images are shared under the same licence.
                    </dd>
                  </div>
                </dl>
                <div className="mt-5 flex flex-wrap gap-4 border-t border-forest/[0.07] pt-4 text-sm font-medium">
                  <a href={credit.source} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-forest hover:opacity-70">
                    Original photo &amp; author attribution <span aria-hidden>↗</span>
                  </a>
                  <a href={credit.file} target="_blank" rel="noreferrer" className="text-sage hover:text-forest">
                    View processed image <span aria-hidden>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-forest/[0.08] bg-white p-6 text-sm leading-[1.8] text-sage">
            <h2 className="text-base font-medium text-forest">Other imagery</h2>
            <p className="mt-2">
              Other machine images on this website are AI-generated representative illustrations, labelled
              as such. Snack application photographs are stock images from Pexels. The workshop video
              stills are from the original A.S. Engineering Works website.
            </p>
          </div>

          <Link href="/" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-forest hover:opacity-70">
            <span aria-hidden>←</span> Back to the website
          </Link>
        </div>
      </section>
    </>
  );
}
