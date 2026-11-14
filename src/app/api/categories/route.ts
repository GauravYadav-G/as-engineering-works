import { getCatalogSummary } from "@/lib/data";

export const dynamic = "force-dynamic";

export async function GET() {
  const { categories, counts, total } = await getCatalogSummary();

  return Response.json({
    ok: true,
    total,
    categories: categories.map((category) => ({
      slug: category.slug,
      name: category.name,
      kicker: category.kicker,
      description: category.description,
      image: category.image,
      machines: counts[category.slug] ?? 0,
      url: `/products?category=${category.slug}`,
    })),
  });
}
