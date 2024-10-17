import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import {
  products,
  previewImages,
  sizes,
  product_sizes,
  relationForProducts,
  relationForPreviewImages,
  relationForSizes,
  relationForProductSizes,
} from "./schema";

const sqlite = new Database("./baka-app.db");

/* Drizzle variable for using database */
export const db = drizzle(sqlite, {
  /* setup for typeScript so drizzle knows about my schema */
  schema: {
    products,
    previewImages,
    sizes,
    product_sizes,
    relationForProducts,
    relationForPreviewImages,
    relationForSizes,
    relationForProductSizes,
  },
});

/* 
Example usage of db variable

db.query.products.findMany({
  with: { previewImages: true, product_sizes: true },
});

*/
