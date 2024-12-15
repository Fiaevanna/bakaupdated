import { relations } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

/* setting up tables and there references */
export const products = sqliteTable("products", {
  id: integer("id",{ mode: 'number' }).primaryKey({ autoIncrement: true }).notNull(),
  title: text("title").notNull(),
  price: text("price").notNull(),
  originalPrice: text("originalPrice"),
  discountPercentage: text("discountPercentage"),
});

export const previewImages = sqliteTable("previewImages", {
  id: integer("id",{ mode: 'number' }).primaryKey({ autoIncrement: true }).notNull(),
  productId: integer("productId").references(() => products.id).notNull(),
  imageUrl: text("imageUrl").notNull(),
  isActive: integer("isActive", { mode: "boolean" }).notNull(),
});

export const sizes = sqliteTable("sizes", {
  id: integer("id",{ mode: 'number' }).primaryKey({ autoIncrement: true }).notNull(),
  value: text("value").notNull(),
});

/* junction-table (koppling) */
export const product_sizes = sqliteTable("product_sizes", {
  productId: integer("productId").references(() => products.id).notNull(),
  sizeId: integer("sizeId").references(() => sizes.id).notNull(),
});

/* setting up the relations between tables */

export const relationForProducts = relations(products, ({ many }) => ({
  previewImages: many(previewImages),
  product_sizes: many(product_sizes),
}));

export const relationForPreviewImages = relations(previewImages, ({ one }) => ({
  product: one(products, {
    fields: [previewImages.productId],
    references: [products.id],
  }),
}));

export const relationForSizes = relations(sizes, ({ many }) => ({
  product_sizes: many(product_sizes),
}));

export const relationForProductSizes = relations(product_sizes, ({ one }) => ({
  size: one(sizes, {
    fields: [product_sizes.sizeId],
    references: [sizes.id],
  }),
  product: one(products, {
    fields: [product_sizes.productId],
    references: [products.id],
  }),
}));

export type SelectProducts = typeof products.$inferSelect;
export type InsertProducts = typeof products.$inferInsert;

export type SelectPreviewImages = typeof previewImages.$inferSelect;
export type InsertPreviewImages = typeof previewImages.$inferInsert;

export type SelectSizes = typeof sizes.$inferSelect;
export type InsertSizes = typeof sizes.$inferInsert;


export type SelectProductSizes = typeof product_sizes.$inferSelect;
export type InsertProductSizes = typeof product_sizes.$inferInsert;
