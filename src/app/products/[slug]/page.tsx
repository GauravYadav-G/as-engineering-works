import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { productImageCaption, productImageNote } from "@/data/media";
import { solutions } from "@/data/solutions";
import { Reveal } from "@/components/reveal";
import { BreadcrumbStrip } from "@/components/page-hero";
import { InquiryForm } from "@/components/inquiry-form";
import { ProductCard } from "@/components/product-card";
import { IconArrowUpRight, IconCheck, IconDoc, IconPhone } from "@/components/icons";
import { getCategories, getProductBySlug, getProducts } from "@/lib/data";
import { formatPrice, site } from "@/lib/site";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return { title: "Machine not found" };
  }

  return {
    title: `${product.name} — ${product.price ? formatPrice(product.price, product.unit) : "Price on request"}`,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [{ url: product.image, alt: product.name }],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  const [categories, all] = await Promise.all([getCategories(), getProducts()]);
  const category = categories.find((item) => item.slug === product.categorySlug);
  const categoryNames = new Map(categories.map((item) => [item.slug, item.name]));
  const related = all
    .filter((item) => item.categorySlug === product.categorySlug && item.slug !== product.slug)
    .slice(0, 3);
  const relevantSolutions = solutions
    .filter((solution) => solution.productSlugs.includes(product.slug))
    .slice(0, 3);

  const quickSpecs = [
    { label: "Capacity", value: product.capacity ?? "On request" },
    { label: "Power", value: product.power ?? "Per config." },
    { label: "Min. order", value: product.moq },
    { label: "Delivery", value: "On enquiry" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: product.name,
        description: product.shortDescription,
        image: `${site.url}${product.image}`,
        brand: { "@type": "Brand", name: site.name },
        category: category?.name ?? "Food processing machinery",
        offers: product.price
          ? {
              "@type": "Offer",
              priceCurrency: "INR",
              price: product.price,
              seller: { "@type": "Organization", name: site.name },
            }
          : undefined,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Machines", item: `${site.url}/products` },
          {
            "@type": "ListItem",
            position: 3,
            name: product.name,
            item: `${site.url}/products/${product.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <BreadcrumbStrip
        items={[
          { href: "/products", label: "Machines" },
          {
            href: `/products?category=${product.categorySlug}`,
            label: categoryNames.get(product.categorySlug) ?? "Catalogue",
          },
          { label: product.name },
        ]}
      />

      <section className="bg-white py-12 md:py-16">
        <div className="wrap grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div>
            <div className="flex items-center justify-center overflow-hidden rounded-2xl border border-forest/[0.07] bg-white p-6 md:p-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={`${productImageCaption(product.slug)} for ${product.name}`}
                className="aspect-[4/3] w-full object-contain"
              />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {quickSpecs.map((spec) => (
                <div
                  key={spec.label}
                  className="rounded-xl border border-forest/[0.07] bg-bone px-3.5 py-3.5"
                >
                  <p className="font-mono text-[9px] tracking-[0.12em] text-sage uppercase">
                    {spec.label}
                  </p>
                  <p className="mt-1.5 text-[12px] leading-tight font-medium text-forest">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-4 text-[12px] leading-[1.65] text-sage">
              <span className="font-mono text-[10px] tracking-[0.08em] text-forest/70 uppercase">
                {productImageCaption(product.slug)} —
              </span>{" "}
              {productImageNote(product.slug)}
            </p>
          </div>

          <div className="lg:pt-1">
            <Link
              href={`/products?category=${product.categorySlug}`}
              className="eyebrow text-sage transition hover:text-forest"
            >
              {category?.name ?? "Food processing machinery"}
            </Link>
            <h1 className="display mt-3.5 text-[clamp(2rem,4vw,3rem)] text-forest">
              {product.name}
            </h1>
            <p className="mt-4 text-[15px] leading-[1.75] text-sage">{product.shortDescription}</p>

            <div className="mt-7 rounded-2xl border border-forest/[0.08] bg-bone p-6">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="font-mono text-[9.5px] tracking-[0.14em] text-sage uppercase">
                    Indicative price
                  </p>
                  <p className="display tabular mt-1.5 text-[clamp(1.6rem,2.8vw,2.1rem)] text-forest">
                    {formatPrice(product.price, product.unit)}
                  </p>
                </div>
                <span className="rounded-full border border-forest/15 bg-white px-3 py-1 font-mono text-[9.5px] tracking-[0.1em] text-forest/70 uppercase">
                  MOQ {product.moq}
                </span>
              </div>
              <dl className="mt-5 grid gap-2.5 border-t border-forest/[0.08] pt-5 text-[13px]">
                {[
                  { label: "Production capacity", value: product.capacity ?? "On request" },
                  { label: "Connected load / power", value: product.power ?? "As per configuration" },
                  { label: "Country of origin", value: "India" },
                  { label: "Customisation", value: "Custom design on request" },
                ].map((row) => (
                  <div key={row.label} className="flex items-start justify-between gap-4">
                    <dt className="text-sage">{row.label}</dt>
                    <dd className="max-w-[62%] text-right font-medium text-forest">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-[11px] leading-relaxed text-sage/80">
                Price shown is from the published listing. Request a current quotation for your
                chosen configuration, taxes and delivery.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#enquiry" className="btn btn-dark flex-1 px-6 py-3.5 text-[13px]">
                Request a quotation
                <IconArrowUpRight className="h-4 w-4 opacity-75" />
              </a>
              <a href={site.contact.phoneHref} className="btn btn-outline px-5 py-3.5 text-[13px]">
                <IconPhone className="h-4 w-4 text-sage" />
                {site.contact.phone}
              </a>
              <a
                href={`${site.contact.whatsapp}?text=${encodeURIComponent(
                  `Hello A.S. Engineering Works, I would like details on the ${product.name}.`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline px-5 py-3.5 text-[13px]"
              >
                WhatsApp
              </a>
            </div>

            <div className="mt-7 border-t border-forest/[0.07] pt-5">
              <Link href="/clients" className="text-[12.5px] text-sage transition hover:text-forest">
                Read published buyer reviews and client list →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="enquiry" className="border-y border-forest/[0.06] bg-bone py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <h2 className="display text-[clamp(1.6rem,2.6vw,2.1rem)] text-forest">
              About this machine
            </h2>
            <div className="prose-machine mt-4">
              <p>{product.description}</p>
            </div>

            {product.features.length > 0 && (
              <div className="mt-10">
                <p className="eyebrow text-sage">Highlights</p>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 rounded-xl border border-forest/[0.07] bg-white px-4 py-3 text-[13px] leading-relaxed text-forest/80"
                    >
                      <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-moss" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-10">
              <p className="eyebrow text-sage">Technical specifications</p>
              {product.specifications.length > 0 ? (
                <div className="mt-4 overflow-hidden rounded-xl border border-forest/[0.08] bg-white">
                  <table className="w-full border-collapse text-left text-[13px]">
                    <tbody>
                      {product.specifications.map((spec, index) => (
                        <tr
                          key={`${spec.label}-${index}`}
                          className="border-b border-forest/[0.06] last:border-0"
                        >
                          <th className="w-[44%] bg-bone/60 px-5 py-3.5 font-medium text-sage">
                            {spec.label}
                          </th>
                          <td className="px-5 py-3.5 font-medium text-forest">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="mt-4 rounded-xl border border-forest/[0.08] bg-white px-5 py-4 text-[13.5px] leading-[1.7] text-sage">
                  Detailed capacity, power and configuration for this listing are available on
                  request. Share your target output for a model-specific technical sheet.
                </div>
              )}
            </div>

            {relevantSolutions.length > 0 && (
              <div className="mt-10">
                <p className="eyebrow text-sage">Used in these lines</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {relevantSolutions.map((solution) => (
                    <Link
                      key={solution.slug}
                      href={`/solutions/${solution.slug}`}
                      className="group overflow-hidden rounded-xl border border-forest/[0.07] bg-white transition hover:border-forest/20"
                    >
                      <div className="aspect-[16/9] overflow-hidden bg-sand">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={solution.image}
                          alt={`${solution.name} — illustrative image`}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                      </div>
                      <div className="flex items-center justify-between gap-2 px-4 py-3">
                        <span className="text-[12.5px] font-medium text-forest">
                          {solution.shortName}
                        </span>
                        <IconArrowUpRight className="h-3.5 w-3.5 text-sage transition group-hover:text-forest" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-[#0e1113] px-6 py-5 text-white">
              <div className="flex items-center gap-3.5">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-brasslight">
                  <IconDoc className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[13.5px] font-medium">Detailed product brochure</p>
                  <p className="text-[12px] text-white/55">
                    Drawings, dimensions and utility requirements on request.
                  </p>
                </div>
              </div>
              <a href="#enquiry" className="btn btn-light px-4 py-2 text-[12px]">
                Ask for brochure
              </a>
            </div>
          </div>

          <div className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <InquiryForm
              product={{ slug: product.slug, name: product.name }}
              compact
              title="Enquire about this machine"
              description="Send your output target and location — we reply with a configured quotation."
            />
            <div className="rounded-2xl border border-forest/[0.08] bg-white p-6">
              <p className="eyebrow text-sage">Prefer to talk?</p>
              <a
                href={site.contact.phoneHref}
                className="display mt-2 block text-[21px] text-forest transition hover:opacity-75"
              >
                {site.contact.phone}
              </a>
              <a
                href={site.contact.emailHref}
                className="mt-1 block text-[13px] text-sage transition hover:text-forest"
              >
                {site.contact.email}
              </a>
              <p className="mt-4 border-t border-forest/[0.07] pt-3.5 text-[11.5px] leading-relaxed text-sage/85">
                {site.contact.address.lines.join(", ")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-white py-16 md:py-24">
          <div className="wrap">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow text-sage">Same category</p>
                <h2 className="display mt-2.5 text-[clamp(1.6rem,2.6vw,2.1rem)] text-forest">
                  More from {category?.name ?? "the catalogue"}
                </h2>
              </div>
              <Link
                href={`/products?category=${product.categorySlug}`}
                className="inline-flex items-center gap-1.5 border-b border-forest/20 pb-1 text-[13px] font-medium text-forest/80 transition hover:border-forest hover:text-forest"
              >
                View the range <IconArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => (
                <Reveal key={item.slug} delay={index * 80}>
                  <ProductCard
                    product={item}
                    categoryName={categoryNames.get(item.categorySlug) ?? "Food machinery"}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
