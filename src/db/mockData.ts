import { db } from "./client";
import type { InsertProducts } from "./schema";
import { products } from "./schema";

const mockProducts: InsertProducts[] = [
  {
    title: `Baka: Sand Hoodie`,
    price: "1 756.00 kr",
  },
  {
    title: `Baka: Beige Hoodie`,
    price: "2 756.00 kr",
  },
  {
    title: `Baka: Gray Hoodie`,
    price: "1 456.00 kr",
  },
  {
    title: `Baka: Green Hoodie`,
    price: "2 000.00 kr",
    originalPrice: "2 500.00 kr",
    discountPercentage: " -20%",
  },
  {
    title: `Baka: Wood-Green Cardigan`,
    price: "2 000.00 kr",
    originalPrice: "2 500.00 kr",
    discountPercentage: " -20%",
  },
  {
    title: `Baka: Green Joggers`,
    price: "1 200.00 kr",
    originalPrice: "1 500.00 kr",
    discountPercentage: " -20%",
  },
  {
    title: `Baka: Viol Hoodie`,
    price: "1 920.00 kr",
    originalPrice: "2 400.00 kr",
    discountPercentage: " -20%",
  },
  {
    title: `Baka: Blue T-Shirt`,
    price: "1 280.00 kr",
    originalPrice: "1 600.00 kr",
    discountPercentage: " -20%",
  },
  {
    title: `Baka: Red Joggers`,
    price: "1 200.00 kr",
    originalPrice: "1 500.00 kr",
    discountPercentage: " -20%",
  },
];

const clearMockData = async () => {
  await db.delete(products);
};

const insertMockData = async () => {
  await db.insert(products).values(mockProducts);
};

const main = async () => {
  console.log("CLEARING DATA");
  await clearMockData();
  console.log("INSERTING DATA");
  await insertMockData();
  console.log("SHIT IS DONE JARA JARA");
};
main();
