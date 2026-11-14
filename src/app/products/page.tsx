import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { IconArrowUpRight, IconSearch } from "@/components/icons";
import { getCategories, getProducts } from "@/lib/data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Food Processing Machines, Prices & Specifications",
  description:
    "Browse food processing machines from A.S. Engineering Works — snack extruders, kurkure plants, pasta and vermicelli lines, soya nugget plants, dryers, roasters, seasoning systems and conveyors.",
};

type SearchParams = Record<string, string | string[] | undefined>;

const single = (value: string | string[] | undefined) =>
  Array.isArray(value) ? value[0] : value;

const sortOptions = [
  { value: "featured", label: "Featured first" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "name", label: "Name A–Z" },
];

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const activeCategory = single(params.category) ?? "all";
  const q = single(params.q) ?? "";
  const sort = single(params.sort) ?? "featured";

  const [categories, products, allProducts] = await Promise.all([
    getCategories(),
    getProducts({
      category: activeCategory,
      q,
      sort: sort as "featured" | "price-asc" | "price-desc" | "name",
    }),
    getProducts(),
  ]);

  const counts = allProducts.reduce<Record<string, number>>((accumulator, product) => {
    accumulator[product.categorySlug] = (accumulator[product.categorySlug] ?? 0) + 1;
    return accumulator;
  }, {});
  const isFiltered = activeCategory !== "all" || q.length > 0;

  const category = categories.find((item) => item.slug === activeCategory);
  const categoryNames = new Map(categories.map((item) => [item.slug, item.name]));

  return (
    <>
      <PageHero
        eyebrow="Machine catalogue"
        title="Machines for every stage of the line."
        description="Extruders, dryers, roasters, seasoning and handling equipment from the A.S. Engineering Works catalogue. Prices are indicative ex-works figures from our listings."
        breadcrumb={[{ label: "Machines" }]}
        image="/images/extruder.jpg"
      />

      <section className="border-b border-forest/[0.06] bg-white py-5 lg:sticky lg:top-[78px] lg:z-30 lg:bg-white/95 lg:backdrop-blur-md">
        <div className="wrap">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/products"
              className={`rounded-full border px-4 py-2 text-[12px] font-medium transition ${
                activeCategory === "all"
                  ? "border-forest bg-forest text-white"
                  : "border-forest/12 bg-white text-forest/65 hover:border-forest/35 hover:text-forest"
              }`}
            >
              All machines
              <span className="ml-1.5 font-mono text-[10px] opacity-60 tabular">
                {allProducts.length}
              </span>
            </Link>
            {categories.map((item) => (
              <Link
                key={item.slug}
                href={`/products?category=${item.slug}`}
                className={`rounded-full border px-4 py-2 text-[12px] font-medium transition ${
                  activeCategory === item.slug
                    ? "border-forest bg-forest text-white"
                    : "border-forest/12 bg-white text-forest/65 hover:border-forest/35 hover:text-forest"
                }`}
              >
                {item.name}
                <span className="ml-1.5 font-mono text-[10px] opacity-60 tabular">
                  {counts[item.slug] ?? 0}
                </span>
              </Link>
            ))}
            {isFiltered && (
              <Link
                href="/products"
                className="ml-1 inline-flex items-center gap-1 px-2 py-2 text-[12px] font-medium text-sage underline-offset-4 transition hover:text-forest hover:underline"
              >
                Clear filters
              </Link>
            )}
          </div>

          <form
            action="/products"
            method="get"
            className="mt-4 grid gap-2.5 rounded-xl border border-forest/[0.08] bg-bone p-2 sm:grid-cols-[1fr_auto_auto]"
          >
            <input type="hidden" name="category" value={activeCategory} />
            <div className="relative">
              <IconSearch className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-sage" />
              <input
                type="search"
                name="q"
                defaultValue={q}
                placeholder="Search extruder, dryer, soya, pasta…"
                className="field border-0 bg-white pl-10"
                aria-label="Search machines"
              />
            </div>
            <select
              name="sort"
              defaultValue={sort}
              aria-label="Sort products"
              className="field border-0 bg-white sm:w-[190px]"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <button type="submit" className="btn btn-dark rounded-lg px-6 py-2.5 text-[12.5px]">
              Search
            </button>
          </form>
        </div>
      </section>

      <section className="bg-bone py-14 md:py-20">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-sage">
                {q ? `Results for “${q}”` : category ? category.kicker : "Full range"}
              </p>
              <h2 className="display mt-2.5 text-[clamp(1.6rem,2.6vw,2.15rem)] text-forest">
                {category ? category.name : q ? "Matching machines" : "All food processing machines"}
              </h2>
              <p className="mt-2.5 max-w-2xl text-[13.5px] leading-relaxed text-sage">
                {category
                  ? category.description
                  : "Choose a category or search the catalogue. Send an enquiry for a quotation on any machine."}
              </p>
            </div>
            <p className="font-mono text-[10.5px] tracking-[0.14em] text-sage uppercase">
              {products.length} {products.length === 1 ? "machine" : "machines"}
            </p>
          </div>

          {products.length === 0 ? (
            <div className="mt-12 rounded-2xl border border-forest/[0.08] bg-white p-12 text-center">
              <h3 className="text-[20px] font-medium text-forest">No machines matched that search.</h3>
              <p className="mx-auto mt-2 max-w-md text-[14px] text-sage">
                Try a different keyword, or tell us what you want to produce — we build custom
                machinery as well.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link href="/products" className="btn btn-dark px-5 py-2.5 text-[12.5px]">
                  Reset filters
                </Link>
                <Link href="/contact" className="btn btn-outline px-5 py-2.5 text-[12.5px]">
                  Request custom machine
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product, index) => (
                  <Reveal key={product.slug} delay={(index % 3) * 70}>
                    <ProductCard
                      product={product}
                      categoryName={categoryNames.get(product.categorySlug) ?? "Food machinery"}
                    />
                  </Reveal>
                ))}
              </div>
              <p className="mt-8 font-mono text-[10.5px] text-sage/75">
                Representative machine illustrations shown. Ask us for current photographs and video.
              </p>
            </>
          )}
        </div>
      </section>

      <section className="border-t border-forest/[0.06] bg-white py-16">
        <div className="wrap">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#0e1113] px-7 py-10 text-white md:flex-row md:items-center md:px-12">
            <div>
              <p className="eyebrow text-brasslight">Custom engineering</p>
              <h2 className="display mt-3 text-[clamp(1.6rem,2.8vw,2.2rem)]">
                Not finding your exact specification?
              </h2>
              <p className="mt-2.5 max-w-xl text-[14px] text-white/60">
                Machines can be custom designed to your requirements. Share your product and target
                output and we will advise.
              </p>
            </div>
            <Link href="/contact" className="btn btn-light shrink-0 px-6 py-3">
              Discuss requirement
              <IconArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
