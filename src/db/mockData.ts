import { db } from "./client";
import type {
  InsertProducts,
  InsertPreviewImages,
  InsertSizes,
  InsertProductSizes,
} from "./schema";
import { previewImages, product_sizes, products, sizes } from "./schema";

export const mockProducts: InsertProducts[] = [
  {
    id: 1,
    title: `Baka: Sand Hoodie`,
    price: "1 756.00 kr",
  },
  {
    id: 2,
    title: `Baka: Beige Hoodie`,
    price: "2 756.00 kr",
  },
  {
    id: 3,
    title: `Baka: Gray Hoodie`,
    price: "1 456.00 kr",
  },
  {
    id: 4,
    title: `Baka: Green Hoodie`,
    price: "2 000.00 kr",
    originalPrice: "2 500.00 kr",
    discountPercentage: " -20%",
  },
  {
    id: 5,
    title: `Baka: Wood-Green Cardigan`,
    price: "2 000.00 kr",
    originalPrice: "2 500.00 kr",
    discountPercentage: " -20%",
  },
  {
    id: 6,
    title: `Baka: Green Joggers`,
    price: "1 200.00 kr",
    originalPrice: "1 500.00 kr",
    discountPercentage: " -20%",
  },
  {
    id: 7,
    title: `Baka: Viol Hoodie`,
    price: "1 920.00 kr",
    originalPrice: "2 400.00 kr",
    discountPercentage: " -20%",
  },
  {
    id: 8,
    title: `Baka: Blue T-Shirt`,
    price: "1 280.00 kr",
    originalPrice: "1 600.00 kr",
    discountPercentage: " -20%",
  },
  {
    id: 9,
    title: `Baka: Red Joggers`,
    price: "1 200.00 kr",
    originalPrice: "1 500.00 kr",
    discountPercentage: " -20%",
  },
];

const mockPreviewImages: InsertPreviewImages[] = [
  // Baka: Sand Hoodie (id: mockProducts[0].id)
  {
    imageUrl: "/images/person1/homepic1.png",
    isActive: true,
    productId: mockProducts[0].id,
  },
  {
    imageUrl: "/images/person1/sand1.png",
    isActive: false,
    productId: mockProducts[0].id,
  },
  {
    imageUrl: "/images/person1/sand2.png",
    isActive: false,
    productId: mockProducts[0].id,
  },
  {
    imageUrl: "/images/person1/sand3.webp",
    isActive: false,
    productId: mockProducts[0].id,
  },
  {
    imageUrl: "/images/person1/sand5.webp",
    isActive: false,
    productId: mockProducts[0].id,
  },

  // Baka: Beige Hoodie (id: mockProducts[1].id)
  {
    imageUrl: "/images/person7/beige1.webp",
    isActive: false,
    productId: mockProducts[1].id,
  },
  {
    imageUrl: "/images/person7/beige2.png",
    isActive: false,
    productId: mockProducts[1].id,
  },
  {
    imageUrl: "/images/person7/beige3.png",
    isActive: false,
    productId: mockProducts[1].id,
  },
  {
    imageUrl: "/images/person7/beige4.webp",
    isActive: false,
    productId: mockProducts[1].id,
  },
  {
    imageUrl: "/images/person7/beige5.png",
    isActive: true,
    productId: mockProducts[1].id,
  },

  // Baka: Gray Hoodie (id: mockProducts[2].id)
  {
    imageUrl: "/images/person4/gray1.png",
    isActive: false,
    productId: mockProducts[2].id,
  },
  {
    imageUrl: "/images/person4/gray2.png",
    isActive: false,
    productId: mockProducts[2].id,
  },
  {
    imageUrl: "/images/person4/gray3.webp",
    isActive: false,
    productId: mockProducts[2].id,
  },
  {
    imageUrl: "/images/person4/gray4.png",
    isActive: false,
    productId: mockProducts[2].id,
  },
  {
    imageUrl: "/images/person4/gray5.png",
    isActive: true,
    productId: mockProducts[2].id,
  },

  // Baka: Green Hoodie (id: mockProducts[3].id)
  {
    imageUrl: "/images/Person2/green1.png",
    isActive: true,
    productId: mockProducts[3].id,
  },
  {
    imageUrl: "/images/Person2/green2.webp",
    isActive: false,
    productId: mockProducts[3].id,
  },
  {
    imageUrl: "/images/Person2/green3.webp",
    isActive: false,
    productId: mockProducts[3].id,
  },
  {
    imageUrl: "/images/Person2/green4.png",
    isActive: false,
    productId: mockProducts[3].id,
  },
  {
    imageUrl: "/images/Person2/green5.png",
    isActive: false,
    productId: mockProducts[3].id,
  },

  // Baka: Wood-Green Cardigan (id: mockProducts[4].id)
  {
    imageUrl: "/images/person6/woodgreen1.png",
    isActive: true,
    productId: mockProducts[4].id,
  },
  {
    imageUrl: "/images/person6/woodgreen2.webp",
    isActive: false,
    productId: mockProducts[4].id,
  },
  {
    imageUrl: "/images/person6/woodgreen3.png",
    isActive: false,
    productId: mockProducts[4].id,
  },
  {
    imageUrl: "/images/person6/woodgreen4.png",
    isActive: false,
    productId: mockProducts[4].id,
  },
  {
    imageUrl: "/images/person6/woodgreen5.png",
    isActive: false,
    productId: mockProducts[4].id,
  },

  // Baka: Green Joggers (id: mockProducts[5].id)
  {
    imageUrl: "/images/person9/joggers1.png",
    isActive: false,
    productId: mockProducts[5].id,
  },
  {
    imageUrl: "/images/person9/joggers2.webp",
    isActive: false,
    productId: mockProducts[5].id,
  },
  {
    imageUrl: "/images/person9/joggers3.png",
    isActive: false,
    productId: mockProducts[5].id,
  },
  {
    imageUrl: "/images/person9/joggers4.png",
    isActive: false,
    productId: mockProducts[5].id,
  },
  {
    imageUrl: "/images/person9/joggers5.png",
    isActive: true,
    productId: mockProducts[5].id,
  },

  // Baka: Viol Hoodie (id: mockProducts[6].id)
  {
    imageUrl: "/images/person3/viol1.png",
    isActive: true,
    productId: mockProducts[6].id,
  },
  {
    imageUrl: "/images/person3/viol2.webp",
    isActive: false,
    productId: mockProducts[6].id,
  },
  {
    imageUrl: "/images/person3/viol3.png",
    isActive: false,
    productId: mockProducts[6].id,
  },
  {
    imageUrl: "/images/person3/viol4.png",
    isActive: false,
    productId: mockProducts[6].id,
  },
  {
    imageUrl: "/images/person3/viol5.png",
    isActive: false,
    productId: mockProducts[6].id,
  },

  // Baka: Blue T-Shirt (id: mockProducts[7].id)
  {
    imageUrl: "/images/person5/blue1.webp",
    isActive: false,
    productId: mockProducts[7].id,
  },
  {
    imageUrl: "/images/person5/blue2.png",
    isActive: true,
    productId: mockProducts[7].id,
  },
  {
    imageUrl: "/images/person5/blue3.png",
    isActive: false,
    productId: mockProducts[7].id,
  },
  {
    imageUrl: "/images/person5/blue4.png",
    isActive: false,
    productId: mockProducts[7].id,
  },
  {
    imageUrl: "/images/person5/blue5.webp",
    isActive: false,
    productId: mockProducts[7].id,
  },

  // Baka: Red Joggers (id: mockProducts[8].id)
  {
    imageUrl: "/images/person10/red1.webp",
    isActive: false,
    productId: mockProducts[8].id,
  },
  {
    imageUrl: "/images/person10/red2.png",
    isActive: false,
    productId: mockProducts[8].id,
  },
  {
    imageUrl: "/images/person10/red3.webp",
    isActive: false,
    productId: mockProducts[8].id,
  },
  {
    imageUrl: "/images/person10/red4.png",
    isActive: true,
    productId: mockProducts[8].id,
  },
  {
    imageUrl: "/images/person10/red5.png",
    isActive: false,
    productId: mockProducts[8].id,
  },
];

const mockSizes: InsertSizes[] = [
  {
    id: 1,
    value: "XS",
  },
  {
    id: 2,
    value: "S",
  },
  {
    id: 3,
    value: "M",
  },
  {
    id: 4,
    value: "L",
  },
  {
    id: 5,
    value: "XL",
  },
];

const getMockProductSizes = (): InsertProductSizes[] => {
  const productSizes: InsertProductSizes[] = [];
  mockProducts.forEach((product) => {
    mockSizes.forEach((size) => {
      productSizes.push({ productId: product.id, sizeId: size.id });
    });
  });
  return productSizes;
};

const clearMockData = async () => {
  await db.delete(previewImages);
  await db.delete(product_sizes);
  await db.delete(products);
  await db.delete(sizes);
};

const insertMockData = async () => {
  await db.insert(products).values(mockProducts);
  await db.insert(previewImages).values(mockPreviewImages);
  await db.insert(sizes).values(mockSizes);
  await db.insert(product_sizes).values(getMockProductSizes());
};

const main = async () => {
  console.log("CLEARING DATA");
  await clearMockData();
  console.log("INSERTING DATA");
  await insertMockData();
  console.log("SHIT IS DONE");
};
main();
