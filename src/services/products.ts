
import { db } from "../db/client";

/* här ska in i product sen 
const result = await db.select().from(users); */

export const getProducts = async () => {
  const resultFromDb = await db.query.products.findMany({
    with: {
      previewImages: true,
      product_sizes: {
        with: {
          size: true,
        },
      },
    },
  });

  return resultFromDb;
};
  