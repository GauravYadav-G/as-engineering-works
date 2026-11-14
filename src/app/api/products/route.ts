import { getProducts } from "@/lib/data";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const category = url.searchParams.get("category") ?? undefined;
  const q = url.searchParams.get("q") ?? undefined;
  const sortParam = url.searchParams.get("sort");
  const sort =
    sortParam === "price-asc" || sortParam === "price-desc" || sortParam === "name"
      ? sortParam
      : "featured";

  const products = await getProducts({ category, q, sort });

  return Response.json({
    ok: true,
    count: products.length,
    products: products.map((product) => ({
      slug: product.slug,
      name: product.name,
      category: product.categorySlug,
      price: product.price,
      unit: product.unit,
      capacity: product.capacity,
      image: product.image,
      url: `/products/${product.slug}`,
    })),
  });
}
