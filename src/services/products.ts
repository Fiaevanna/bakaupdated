// person 1
import sand1 from "../assets/images/Person1/sand1.png";
import san2 from "../assets/images/Person1/sand2.png";
import sand3 from "../assets/images/Person1/sand3.webp";
import sand4 from "../assets/images/Person1/homepic1.png";
import sand5 from "../assets/images/Person1/sand5.webp";

/* person 2 */
import green1 from "../assets/images/Person2/green1.png";
import green2 from "../assets/images/Person2/green2.webp";
import green3 from "../assets/images/Person2/green3.webp";
import green4 from "../assets/images/Person2/green4.png";
import green5 from "../assets/images/Person2/green5.png";

/* person 3 */
import viol1 from "../assets/images/Person3/viol1.png";
import viol2 from "../assets/images/Person3/viol2.webp";
import viol3 from "../assets/images/Person3/viol3.png";
import viol4 from "../assets/images/Person3/viol4.png";
import viol5 from "../assets/images/Person3/viol5.png";

/* person 4 */
import grayHoodie1 from "../assets/images/Person4/gray1.png";
import grayHoodie2 from "../assets/images/Person4/gray2.png";
import grayHoodie3 from "../assets/images/Person4/gray3.webp";
import grayHoodie4 from "../assets/images/Person4/gray4.png";
import grayHoodie5 from "../assets/images/Person4/gray5.png";

/* person 7 */
import beige1 from "../assets/images/person7/beige1.webp";
import beige2 from "../assets/images/person7/beige2.png";
import beige3 from "../assets/images/person7/beige3.png";
import beige4 from "../assets/images/person7/beige4.webp";
import beige5 from "../assets/images/person7/beige5.png";

/* person 6 */
import woodgreen1 from "../assets/images/person6/woodgreen1.png";
import woodgreen2 from "../assets/images/person6/woodgreen2.webp";
import woodgreen3 from "../assets/images/person6/woodgreen3.png";
import woodgreen4 from "../assets/images/person6/woodgreen4.png";
import woodgreen5 from "../assets/images/person6/woodgreen5.png";

/* person 6 */
import joggers1 from "../assets/images/person9/joggers1.png";
import joggers2 from "../assets/images/person9/joggers2.webp";
import joggers3 from "../assets/images/person9/joggers3.png";
import joggers4 from "../assets/images/person9/joggers4.png";
import joggers5 from "../assets/images/person9/joggers5.png";

/* person 6 */
import blue1 from "../assets/images/person5/blue1.webp";
import blue2 from "../assets/images/person5/blue2.png";
import blue3 from "../assets/images/person5/blue3.png";
import blue4 from "../assets/images/person5/blue4.png";
import blue5 from "../assets/images/person5/blue5.webp";


/* här ska in i product sen 
const result = await db.select().from(users); */


export const getProducts = () => {
    return [
        {
          id: 1,
          title: `Baka: Sand Hoodie`,
          price: "1 756.00 kr",
          sizes: ["XS", "S", "M", "L", "XL"],
          originalPrice: "2 195.00 kr",
          discountPercentage: " -20%",
          preview: [
            {
              id: 2,
              imageUrl: sand1.src,
              isActive: false,
            },
            {
              id: 3,
              imageUrl: san2.src,
              isActive: false,
            },
            {
              id: 4,
              imageUrl: sand3.src,
              isActive: false,
            },
            {
              id: 5,
              imageUrl: sand4.src,
              isActive: true,
            },
            {
              id: 6,
              imageUrl: sand5.src,
              isActive: false,
            },
          ],
        },
        {
          id: 1,
          title: `Baka: Beige Hoodie`,
          price: "1 756.00 kr",
          sizes: ["XS", "S", "M", "L", "XL"],
          originalPrice: "2 195.00 kr",
          discountPercentage: " -20%",
          preview: [
            {
              id: 2,
              imageUrl: beige1.src,
              isActive: false,
            },
            {
              id: 3,
              imageUrl: beige2.src,
              isActive: false,
            },
            {
              id: 4,
              imageUrl: beige3.src,
              isActive: false,
            },
            {
              id: 5,
              imageUrl: beige4.src,
              isActive: false,
            },
            {
              id: 6,
              imageUrl: beige5.src,
              isActive: true,
            },
          ],
        },
        {
          id: 17,
          title: `Baka: Gray Hoodie`,
          price: "2 756.00 kr",
          sizes: ["XS", "S", "M", "L", "XL"],
          originalPrice: "2 195.00 kr",
          discountPercentage: " -20%",
      
          preview: [
            {
              id: 18,
              imageUrl: grayHoodie1.src,
              isActive: false,
            },
            {
              id: 19,
              imageUrl: grayHoodie2.src,
              isActive: false,
            },
            {
              id: 20,
              imageUrl: grayHoodie3.src,
              isActive: false,
            },
            {
              id: 21,
              imageUrl: grayHoodie4.src,
              isActive: false,
            },
            {
              id: 22,
              imageUrl: grayHoodie5.src,
              isActive: true,
            },
          ],
        },
        {
          id: 6,
          title: `Baka: Green Hoodie`,
          price: "1 756.00 kr",
          sizes: ["XS", "S", "M", "L", "XL"],
          originalPrice: "2 195.00 kr",
          discountPercentage: " -20%",
      
          preview: [
            {
              id: 7,
              imageUrl: green1.src,
              isActive: true,
            },
            {
              id: 8,
              imageUrl: green2.src,
              isActive: false,
            },
            {
              id: 9,
              imageUrl: green3.src,
              isActive: false,
            },
            {
              id: 10,
              imageUrl: green4.src,
              isActive: false,
            },
            {
              id: 11,
              imageUrl: green5.src,
              isActive: false,
            },
          ],
        },
        {
          id: 23,
          title: `Baka: Wood-Green Cardigan`,
          price: "1 756.00 kr",
          sizes: ["XS", "S", "M", "L", "XL"],
          originalPrice: "2 195.00 kr",
          discountPercentage: " -20%",
      
          preview: [
            {
              id: 24,
              imageUrl: woodgreen1.src,
              isActive: true,
            },
            {
              id: 25,
              imageUrl: woodgreen2.src,
              isActive: false,
            },
            {
              id: 26,
              imageUrl: woodgreen3.src,
              isActive: false,
            },
            {
              id: 27,
              imageUrl: woodgreen4.src,
              isActive: false,
            },
            {
              id: 28,
              imageUrl: woodgreen5.src,
              isActive: false,
            },
          ],
        },
        {
          id: 29,
          title: `Baka Green Joggers `,
          price: "1 756.00 kr",
          sizes: ["XS", "S", "M", "L", "XL"],
          originalPrice: "2 195.00 kr",
          discountPercentage: " -20%",
      
          preview: [
            {
              id: 30,
              imageUrl: joggers1.src,
              isActive: false,
            },
            {
              id: 31,
              imageUrl: joggers2.src,
              isActive: false,
            },
            {
              id: 32,
              imageUrl: joggers3.src,
              isActive: false,
            },
            {
              id: 33,
              imageUrl: joggers4.src,
              isActive: false,
            },
            {
              id: 34,
              imageUrl: joggers5.src,
              isActive: true,
            },
          ],
        },
        {
          id: 11,
          title: `Baka: Viol Hoodie`,
          price: "1 756.00 kr",
          sizes: ["XS", "S", "M", "L", "XL"],
          originalPrice: "2 195.00 kr",
          discountPercentage: " -20%",
      
          preview: [
            {
              id: 12,
              imageUrl: viol1.src,
              isActive: true,
            },
            {
              id: 13,
              imageUrl: viol3.src,
              isActive: false,
            },
            {
              id: 14,
              imageUrl: viol2.src,
              isActive: false,
            },
            {
              id: 15,
              imageUrl: viol4.src,
              isActive: false,
            },
            {
              id: 16,
              imageUrl: viol5.src,
              isActive: false,
            },
          ],
        },
        {
          id: 35,
          title: `Baka: Blue T-Shirt`,
          price: "1 756.00 kr",
          sizes: ["XS", "S", "M", "L", "XL"],
          originalPrice: "2 195.00 kr",
          discountPercentage: " -20%",
      
          preview: [
            {
              id: 36,
              imageUrl: blue1.src,
              isActive: false,
            },
            {
              id: 37,
              imageUrl: blue3.src,
              isActive: false,
            },
            {
              id: 38,
              imageUrl: blue2.src,
              isActive: true,
            },
            {
              id: 39,
              imageUrl: blue4.src,
              isActive: false,
            },
            {
              id: 40,
              imageUrl: blue5.src,
              isActive: false,
            },
          ],
        },
       
      ];
}