import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { IconArrowRight, IconArrowUpRight, IconCheck, IconPhone } from "@/components/icons";
import { InquiryForm } from "@/components/inquiry-form";
import { BreadcrumbStrip } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { getSolution, solutions } from "@/data/solutions";
import { getCategories, getProducts } from "@/lib/data";
import { site } from "@/lib/site";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const solution = getSolution((await params).slug);
  if (!solution) return { title: "Processing solution not found" };
  return {
    title: `${solution.name} Processing Solution`,
    description: solution.intro,
    openGraph: {
      title: `${solution.name} | A.S. Engineering Works`,
      description: solution.intro,
      images: [{ url: solution.image }],
    },
  };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  const [products, categories] = await Promise.all([getProducts(), getCategories()]);
  const linkedProducts = solution.productSlugs
    .map((itemSlug) => products.find((product) => product.slug === itemSlug))
    .filter((product) => product !== undefined);
  const categoryNames = new Map(categories.map((category) => [category.slug, category.name]));
  const related = solutions.filter((item) => item.slug !== solution.slug).slice(0, 3);

  return (
    <>
      <BreadcrumbStrip
        items={[{ href: "/solutions", label: "Processing lines" }, { label: solution.shortName }]}
      />

      <section className="bg-white py-14 md:py-20">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          <div>
            <p className="eyebrow text-sage">{solution.eyebrow}</p>
            <h1 className="display mt-4 text-[clamp(2.2rem,4.5vw,3.6rem)] text-forest">
              {solution.name}
            </h1>
            <p className="mt-4 text-[18px] leading-snug font-normal text-forest/75">
              {solution.tagline}
            </p>
            <p className="mt-4 max-w-xl text-[14.5px] leading-[1.8] text-sage">{solution.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#enquiry" className="btn btn-dark">
                Discuss this line <IconArrowRight className="h-4 w-4" />
              </a>
              <a href="#machinery" className="btn btn-outline">
                Relevant machines <IconArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
            <div className="mt-10 grid max-w-md grid-cols-3 border-t border-forest/[0.08] pt-6">
              <div>
                <p className="display tabular text-[28px] text-forest sm:text-[32px]">
                  {String(solution.steps.length).padStart(2, "0")}
                </p>
                <p className="mt-1 font-mono text-[11px] text-sage uppercase">Stages</p>
              </div>
              <div>
                <p className="display tabular text-[28px] text-forest sm:text-[32px]">
                  {String(linkedProducts.length).padStart(2, "0")}
                </p>
                <p className="mt-1 font-mono text-[11px] text-sage uppercase">Machines</p>
              </div>
              <div>
                <p className="display tabular text-[28px] text-forest sm:text-[32px]">1984</p>
                <p className="mt-1 font-mono text-[11px] text-sage uppercase">Est.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="overflow-hidden rounded-2xl border border-forest/[0.07] bg-sand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={solution.image}
                alt={`${solution.name} — illustrative image`}
                className="aspect-[5/4] w-full object-cover"
              />
            </div>
            <p className="mt-3 font-mono text-[11.5px] text-sage/80">Illustrative image</p>
          </div>
        </div>
      </section>

      <section className="border-y border-forest/[0.06] bg-bone py-16 md:py-24">
        <div className="wrap">
          <p className="eyebrow text-sage">Processing flow</p>
          <h2 className="display mt-3.5 text-[clamp(1.9rem,3.2vw,2.65rem)] text-forest">
            How the equipment works together
          </h2>
          <p className="mt-3 max-w-2xl text-[15.5px] leading-[1.8] text-sage">
            This is an application overview, not a fixed package. Every quoted setup is selected
            against your recipe and target output.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {solution.steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-xl border border-forest/[0.07] bg-white p-6"
              >
                <span className="font-mono text-[12px] font-semibold text-sage">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-[19px] font-semibold tracking-[-0.015em] text-forest">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.7] text-sage">{step.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-forest/[0.07] bg-white px-5 py-4 text-[14px] leading-[1.7] text-sage">
            <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-moss" />
            <span>{solution.note}</span>
          </div>
        </div>
      </section>

      <section id="machinery" className="bg-white py-16 md:py-24">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="eyebrow text-sage">Relevant equipment</p>
              <h2 className="display mt-3 text-[clamp(1.9rem,3.2vw,2.65rem)] text-forest">
                Machines for this solution
              </h2>
              <p className="mt-3 max-w-2xl text-[15.5px] leading-[1.8] text-sage">
                Published machines from A.S. Engineering Works. Individual specifications and prices
                are on each machine page.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 border-b border-forest/20 pb-1 text-[14.5px] font-medium text-forest/80 transition hover:border-forest hover:text-forest"
            >
              Browse all machines <IconArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {linkedProducts.map((product, index) => (
              <Reveal key={product.slug} delay={(index % 3) * 70}>
                <ProductCard
                  product={product}
                  categoryName={categoryNames.get(product.categorySlug) ?? "Food machinery"}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="enquiry" className="bg-[#0e1113] py-20 text-white md:py-24">
        <div className="wrap grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:pt-3">
            <p className="eyebrow text-brasslight">Plan your line</p>
            <h2 className="display mt-4 text-[clamp(2.1rem,3.6vw,3rem)] text-white">
              Let&apos;s talk about your {solution.shortName.toLowerCase()} setup.
            </h2>
            <p className="mt-4 max-w-[460px] text-[16px] leading-[1.8] text-white/65">
              Send your product, capacity and location and we will recommend relevant machines and a
              quotation for the equipment we can supply.
            </p>
            <a
              href={site.contact.phoneHref}
              className="mt-8 inline-flex items-center gap-3 text-[19px] font-semibold text-white transition hover:text-brasslight"
            >
              <IconPhone className="h-4.5 w-4.5 text-brasslight" />
              {site.contact.phone}
            </a>
          </div>
          <InquiryForm
            product={{ slug: `solution:${solution.slug}`, name: `${solution.name} processing solution` }}
            title="Discuss this processing line"
            description="Tell us what you want to make and your target output."
          />
        </div>
      </section>

      <section className="border-t border-forest/[0.06] bg-bone py-16 md:py-20">
        <div className="wrap">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-sage">Keep exploring</p>
              <h2 className="display mt-3 text-[clamp(1.6rem,2.6vw,2.1rem)] text-forest">
                Other processing solutions
              </h2>
            </div>
            <Link
              href="/solutions"
              className="hidden text-[13px] font-medium text-forest/75 transition hover:text-forest sm:inline-flex"
            >
              View all solutions →
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {related.map((item) => (
              <Link
                href={`/solutions/${item.slug}`}
                key={item.slug}
                className="group relative h-[210px] overflow-hidden rounded-xl bg-forest"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={`${item.name} application`}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <span className="absolute right-5 bottom-5 left-5 flex items-center justify-between text-[15px] font-medium text-white">
                  {item.shortName}
                  <IconArrowUpRight className="h-4 w-4 opacity-80" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
