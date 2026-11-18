import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { IconArrowUpRight, IconGlobe } from "@/components/icons";
import { getClientLogo } from "@/components/client-logo";
import { getClients, getTestimonials } from "@/lib/data";
import { site } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Clients & Buyer Reviews",
  description:
    "Food businesses in Delhi NCR, Kanpur, Odisha and Sri Lanka work with A.S. Engineering Works. See the published client list and buyer feedback.",
};

export default async function ClientsPage() {
  const [testimonials, clients] = await Promise.all([getTestimonials(), getClients()]);
  const lead = testimonials.find((item) => (item.quote?.length ?? 0) > 40);
  const rest = testimonials.filter((item) => item.id !== lead?.id);

  const grouped = clients.reduce<Record<string, string[]>>((accumulator, client) => {
    accumulator[client.region] = [...(accumulator[client.region] ?? []), client.name];
    return accumulator;
  }, {});
  const regions = Object.keys(grouped);

  return (
    <>
      <PageHero
        eyebrow="Clients & reviews"
        title={
          <>
            The food businesses <span className="text-brasslight">we work with.</span>
          </>
        }
        description="Built through long-term relationships with domestic and international clients. Below is our published client list and buyer feedback."
        breadcrumb={[{ label: "Clients" }]}
        image="/images/pages-hero/Gemini_Generated_Image_m1jeo3m1jeo3m1je.png"
      />

      {lead && (
        <section className="bg-bone pt-16 pb-10 md:pt-20">
          <div className="wrap">
            <figure className="grid gap-8 rounded-2xl bg-[#0e1113] p-8 text-white md:grid-cols-[1.5fr_0.5fr] md:items-end md:p-12">
              <div>
                <p className="eyebrow text-brasslight">Buyer review · {lead.reviewedOn}</p>
                <blockquote className="mt-5 max-w-3xl text-[clamp(1.35rem,2.3vw,1.85rem)] leading-[1.55] font-normal text-white/95">
                  “{lead.quote}”
                </blockquote>
              </div>
              <figcaption className="border-t border-white/12 pt-5 md:border-t-0 md:border-l md:pt-0 md:pl-8">
                <p className="text-[17px] font-semibold">{lead.name}</p>
                <p className="mt-1 text-[13.5px] text-white/60">{lead.location}</p>
                {lead.product && <p className="mt-3 text-[14px] text-brasslight font-medium">{lead.product}</p>}
              </figcaption>
            </figure>
          </div>
        </section>
      )}

      <section className="bg-bone py-12 pb-20 md:pb-24">
        <div className="wrap">
          <SectionHeading
            eyebrow="Buyer feedback"
            title="Published buyer feedback"
            description="Each entry shows the buyer's name, location and date and, where given, the machine it relates to and the seller's reply."
            align="between"
            link={{ href: "/contact", label: "Send an enquiry" }}
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((testimonial) => (
              <article
                key={testimonial.id}
                className="flex flex-col rounded-xl border border-forest/[0.07] bg-white p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-[16.5px] leading-snug font-semibold text-forest">
                    {testimonial.product || "Buyer feedback"}
                  </p>
                  <span className="shrink-0 font-mono text-[11px] text-sage/80">
                    {testimonial.reviewedOn}
                  </span>
                </div>
                {testimonial.quote && (
                  <p className="mt-2.5 text-[14.5px] leading-[1.7] text-forest/75">
                    “{testimonial.quote}”
                  </p>
                )}
                {testimonial.reply && (
                  <p className="mt-3.5 rounded-lg bg-bone px-3.5 py-2.5 text-[13px] leading-[1.65] text-sage">
                    <span className="font-semibold text-forest/85">Seller reply:</span>{" "}
                    {testimonial.reply}
                  </p>
                )}
                <div className="mt-auto flex items-center gap-3 pt-5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sand font-mono text-[12px] font-semibold text-forest/85">
                    {testimonial.name.slice(0, 1).toUpperCase()}
                  </span>
                  <div>
                    <p className="text-[14.5px] font-semibold text-forest">{testimonial.name}</p>
                    <p className="text-[12.5px] text-sage">{testimonial.location}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-forest/[0.06] bg-white py-20 md:py-24">
        <div className="wrap">
          <SectionHeading
            eyebrow="Client list"
            title="Selected clients by region"
            description="Names from the company's published client list, grouped by region."
            align="between"
            link={{ href: "/products", label: "See what we build" }}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {regions.map((region, index) => (
              <Reveal key={region} delay={Math.min(index, 3) * 80}>
              <div className="h-full rounded-xl border border-forest/[0.07] bg-bone p-6">
                <p className="eyebrow text-sage">{region}</p>
                <ul className="mt-4 space-y-3">
                  {grouped[region].map((name) => (
                    <li
                      key={name}
                      className="flex items-center gap-3 text-[14.5px] leading-snug text-forest/85"
                    >
                      <img
                        src={getClientLogo(name)}
                        alt={name}
                        width={28}
                        height={28}
                        className="h-7 w-7 shrink-0 object-contain"
                        loading="lazy"
                      />
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0e1113] py-16 text-white md:py-20">
        <div className="wrap flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-brasslight">Where we supply</p>
            <h2 className="display mt-3 text-[clamp(1.7rem,3vw,2.4rem)] text-white">
              Domestic and international clients
            </h2>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {site.markets.map((market) => (
                <span
                  key={market}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-[13.5px] text-white/80"
                >
                  <IconGlobe className="h-4 w-4 text-brasslight" /> {market}
                </span>
              ))}
            </div>
          </div>
          <Link href="/contact" className="btn btn-light shrink-0 text-[15px] px-7 py-3.5">
            Start an enquiry <IconArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
