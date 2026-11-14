import type { MetadataRoute } from "next";

import { products } from "@/data/catalog";
import { solutions } from "@/data/solutions";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: "/", priority: 1 },
    { path: "/products", priority: 0.9 },
    { path: "/solutions", priority: 0.9 },
    { path: "/about", priority: 0.7 },
    { path: "/infrastructure", priority: 0.6 },
    { path: "/clients", priority: 0.6 },
    { path: "/contact", priority: 0.8 },
    { path: "/image-credits", priority: 0.2 },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route.path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route.priority,
    })),
    ...solutions.map((solution) => ({
      url: `${site.url}/solutions/${solution.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...products.map((product) => ({
      url: `${site.url}/products/${product.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
