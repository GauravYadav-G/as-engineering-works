import { asc, desc, eq } from "drizzle-orm";

import { db } from "@/db";
import {
  categories as categoriesTable,
  clients as clientsTable,
  inquiries as inquiriesTable,
  products as productsTable,
  testimonials as testimonialsTable,
  type Category,
  type Client,
  type Inquiry,
  type Product,
  type Testimonial,
} from "@/db/schema";
import {
  categories as seedCategories,
  clients as seedClients,
  products as seedProducts,
  testimonials as seedTestimonials,
} from "@/data/catalog";

const EPOCH = new Date("1984-01-01T00:00:00.000Z");

export const fallbackCategories: Category[] = seedCategories.map((category, index) => ({
  id: index + 1,
  ...category,
}));

export const fallbackProducts: Product[] = seedProducts.map((item, index) => ({
  id: index + 1,
  createdAt: EPOCH,
  ...item,
}));

export const fallbackTestimonials: Testimonial[] = seedTestimonials.map(
  (testimonial, index) => ({ id: index + 1, ...testimonial }),
);

export const fallbackClients: Client[] = seedClients.map((client, index) => ({
  id: index + 1,
  ...client,
}));

function logError(scope: string, error: unknown) {
  console.error(`[data:${scope}]`, error instanceof Error ? error.message : error);
}

export async function getCategories(): Promise<Category[]> {
  try {
    const rows = await db
      .select()
      .from(categoriesTable)
      .orderBy(asc(categoriesTable.sortOrder));
    if (rows.length > 0) return rows;
  } catch (error) {
    logError("categories", error);
  }
  return fallbackCategories;
}

export type ProductQuery = {
  category?: string;
  q?: string;
  sort?: "featured" | "price-asc" | "price-desc" | "name";
};

export async function getProducts(query: ProductQuery = {}): Promise<Product[]> {
  let rows: Product[];
  try {
    const result = await db.select().from(productsTable).orderBy(
      asc(productsTable.sortOrder),
    );
    rows = result.length > 0 ? result : fallbackProducts;
  } catch (error) {
    logError("products", error);
    rows = fallbackProducts;
  }

  let filtered = rows;
  if (query.category && query.category !== "all") {
    filtered = filtered.filter((item) => item.categorySlug === query.category);
  }

  const term = query.q?.trim().toLowerCase();
  if (term) {
    filtered = filtered.filter((item) =>
      [item.name, item.shortDescription, item.description, item.capacity ?? "", item.categorySlug]
        .join(" ")
        .toLowerCase()
        .includes(term),
    );
  }

  const sorted = [...filtered];
  switch (query.sort) {
    case "price-asc":
      sorted.sort((a, b) => (a.price ?? Number.MAX_SAFE_INTEGER) - (b.price ?? Number.MAX_SAFE_INTEGER));
      break;
    case "price-desc":
      sorted.sort((a, b) => (b.price ?? -1) - (a.price ?? -1));
      break;
    case "name":
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      sorted.sort((a, b) => {
        if (a.featured !== b.featured) return a.featured ? -1 : 1;
        return a.sortOrder - b.sortOrder;
      });
  }

  return sorted;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const [row] = await db
      .select()
      .from(productsTable)
      .where(eq(productsTable.slug, slug))
      .limit(1);
    if (row) return row;
  } catch (error) {
    logError("product", error);
  }
  return fallbackProducts.find((item) => item.slug === slug) ?? null;
}

export async function getFeaturedProducts(limit = 6): Promise<Product[]> {
  const rows = await getProducts();
  return rows.filter((item) => item.featured).slice(0, limit);
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const rows = await db
      .select()
      .from(testimonialsTable)
      .orderBy(asc(testimonialsTable.sortOrder));
    if (rows.length > 0) return rows;
  } catch (error) {
    logError("testimonials", error);
  }
  return fallbackTestimonials;
}

export async function getClients(): Promise<Client[]> {
  try {
    const rows = await db.select().from(clientsTable).orderBy(asc(clientsTable.sortOrder));
    if (rows.length > 0) return rows;
  } catch (error) {
    logError("clients", error);
  }
  return fallbackClients;
}

export async function getCatalogSummary() {
  const [categories, products] = await Promise.all([getCategories(), getProducts()]);
  return {
    categories,
    products,
    total: products.length,
    counts: categories.reduce<Record<string, number>>((accumulator, category) => {
      accumulator[category.slug] = products.filter(
        (product) => product.categorySlug === category.slug,
      ).length;
      return accumulator;
    }, {}),
  };
}

export type InquiryInput = {
  name: string;
  phone: string;
  email?: string | null;
  company?: string | null;
  country?: string | null;
  productSlug?: string | null;
  productName?: string | null;
  quantity?: string | null;
  message: string;
};

export async function createInquiry(input: InquiryInput): Promise<Inquiry> {
  const [row] = await db
    .insert(inquiriesTable)
    .values({
      name: input.name,
      phone: input.phone,
      email: input.email ?? null,
      company: input.company ?? null,
      country: input.country ?? null,
      productSlug: input.productSlug ?? null,
      productName: input.productName ?? null,
      quantity: input.quantity ?? null,
      message: input.message,
    })
    .returning();
  return row;
}

export async function getInquiries(): Promise<Inquiry[]> {
  try {
    return await db
      .select()
      .from(inquiriesTable)
      .orderBy(desc(inquiriesTable.createdAt))
      .limit(100);
  } catch (error) {
    logError("inquiries", error);
    return [];
  }
}

export async function updateInquiryStatus(id: number, status: string) {
  try {
    await db.update(inquiriesTable).set({ status }).where(eq(inquiriesTable.id, id));
    return true;
  } catch (error) {
    logError("inquiry-status", error);
    return false;
  }
}
