import "dotenv/config";

import { categories, clients, products, testimonials } from "./schema";
import { db, pool } from "./index";
import {
  categories as seedCategories,
  clients as seedClients,
  products as seedProducts,
  testimonials as seedTestimonials,
} from "../data/catalog";

async function main() {
  console.log("Seeding catalogue…");

  for (const category of seedCategories) {
    await db
      .insert(categories)
      .values(category)
      .onConflictDoUpdate({
        target: categories.slug,
        set: {
          name: category.name,
          kicker: category.kicker,
          description: category.description,
          image: category.image,
          sortOrder: category.sortOrder,
        },
      });
  }
  for (const item of seedProducts) {
    await db
      .insert(products)
      .values(item)
      .onConflictDoUpdate({
        target: products.slug,
        set: {
          name: item.name,
          categorySlug: item.categorySlug,
          price: item.price,
          unit: item.unit,
          moq: item.moq,
          capacity: item.capacity,
          power: item.power,
          image: item.image,
          shortDescription: item.shortDescription,
          description: item.description,
          specifications: item.specifications,
          features: item.features,
          badges: item.badges,
          featured: item.featured,
          sortOrder: item.sortOrder,
        },
      });
  }
  await db.delete(testimonials);
  await db.insert(testimonials).values(seedTestimonials);
  await db.delete(clients);
  await db.insert(clients).values(seedClients);

  const productCount = await db.select().from(products);
  const categoryCount = await db.select().from(categories);
  const testimonialCount = await db.select().from(testimonials);
  const clientCount = await db.select().from(clients);

  console.log(
    `Seeded ${categoryCount.length} categories, ${productCount.length} machines, ${testimonialCount.length} reviews and ${clientCount.length} clients.`,
  );
}

main()
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
