import {
  boolean,
  integer,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export type Spec = { label: string; value: string };

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  kicker: text("kicker").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  categorySlug: text("category_slug").notNull(),
  price: integer("price"),
  unit: text("unit").notNull().default("Piece"),
  moq: text("moq").notNull().default("1 Piece"),
  capacity: text("capacity"),
  power: text("power"),
  image: text("image").notNull(),
  shortDescription: text("short_description").notNull(),
  description: text("description").notNull(),
  specifications: jsonb("specifications").$type<Spec[]>().notNull().default([]),
  features: jsonb("features").$type<string[]>().notNull().default([]),
  badges: jsonb("badges").$type<string[]>().notNull().default([]),
  featured: boolean("featured").notNull().default(false),
  sortOrder: integer("sort_order").notNull().default(0),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  location: text("location").notNull(),
  product: text("product").notNull(),
  rating: integer("rating").notNull().default(5),
  reviewedOn: text("reviewed_on").notNull(),
  quote: text("quote"),
  reply: text("reply"),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const clients = pgTable("clients", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  region: text("region").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  company: text("company"),
  email: text("email"),
  phone: text("phone").notNull(),
  country: text("country"),
  productSlug: text("product_slug"),
  productName: text("product_name"),
  quantity: text("quantity"),
  message: text("message").notNull(),
  status: text("status").notNull().default("new"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type Product = typeof products.$inferSelect;
export type NewProduct = typeof products.$inferInsert;
export type Category = typeof categories.$inferSelect;
export type Testimonial = typeof testimonials.$inferSelect;
export type Client = typeof clients.$inferSelect;
export type Inquiry = typeof inquiries.$inferSelect;
