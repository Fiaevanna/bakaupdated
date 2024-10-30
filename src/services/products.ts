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
         
          title: `Baka: Sand Hoodie`,
          price: "1 756.00 kr",
          sizes: ["XS", "S", "M", "L", "XL"],
          originalPrice: "2 195.00 kr",
          discountPercentage: " -20%",
          preview: [
            {
              
              imageUrl: sand1.src,
              isActive: false,
            },
            {
              imageUrl: san2.src,
              isActive: false,
            },
            {
             
              imageUrl: sand3.src,
              isActive: false,
            },
            {
              
              imageUrl: sand4.src,
              isActive: true,
            },
            {
            
              imageUrl: sand5.src,
              isActive: false,
            },
          ],
        },
        {
         
          title: `Baka: Beige Hoodie`,
          price: "1 756.00 kr",
          sizes: ["XS", "S", "M", "L", "XL"],
          originalPrice: "2 195.00 kr",
          discountPercentage: " -20%",
          preview: [
            {
              
              imageUrl: beige1.src,
              isActive: false,
            },
            {
              
              imageUrl: beige2.src,
              isActive: false,
            },
            {
              
              imageUrl: beige3.src,
              isActive: false,
            },
            {
             
              imageUrl: beige4.src,
              isActive: false,
            },
            {
              
              imageUrl: beige5.src,
              isActive: true,
            },
          ],
        },
        {
         
          title: `Baka: Gray Hoodie`,
          price: "2 756.00 kr",
          sizes: ["XS", "S", "M", "L", "XL"],
          originalPrice: "2 195.00 kr",
          discountPercentage: " -20%",
      
          preview: [
            {
              
              imageUrl: grayHoodie1.src,
              isActive: false,
            },
            {
              
              imageUrl: grayHoodie2.src,
              isActive: false,
            },
            {
              
              imageUrl: grayHoodie3.src,
              isActive: false,
            },
            {
              
              imageUrl: grayHoodie4.src,
              isActive: false,
            },
            {
              
              imageUrl: grayHoodie5.src,
              isActive: true,
            },
          ],
        },
        {
          
          title: `Baka: Green Hoodie`,
          price: "1 756.00 kr",
          sizes: ["XS", "S", "M", "L", "XL"],
          originalPrice: "2 195.00 kr",
          discountPercentage: " -20%",
      
          preview: [
            {
              
              imageUrl: green1.src,
              isActive: true,
            },
            {
              
              imageUrl: green2.src,
              isActive: false,
            },
            {
              
              imageUrl: green3.src,
              isActive: false,
            },
            {
             
              imageUrl: green4.src,
              isActive: false,
            },
            {
              
              imageUrl: green5.src,
              isActive: false,
            },
          ],
        },
        {
          
          title: `Baka: Wood-Green Cardigan`,
          price: "1 756.00 kr",
          sizes: ["XS", "S", "M", "L", "XL"],
          originalPrice: "2 195.00 kr",
          discountPercentage: " -20%",
      
          preview: [
            {
              
              imageUrl: woodgreen1.src,
              isActive: true,
            },
            {
              
              imageUrl: woodgreen2.src,
              isActive: false,
            },
            {
             
              imageUrl: woodgreen3.src,
              isActive: false,
            },
            {
             
              imageUrl: woodgreen4.src,
              isActive: false,
            },
            {
              
              imageUrl: woodgreen5.src,
              isActive: false,
            },
          ],
        },
        {
         
          title: `Baka Green Joggers `,
          price: "1 756.00 kr",
          sizes: ["XS", "S", "M", "L", "XL"],
          originalPrice: "2 195.00 kr",
          discountPercentage: " -20%",
      
          preview: [
            {
              
              imageUrl: joggers1.src,
              isActive: false,
            },
            {
              
              imageUrl: joggers2.src,
              isActive: false,
            },
            {
             
              imageUrl: joggers3.src,
              isActive: false,
            },
            {
              
              imageUrl: joggers4.src,
              isActive: false,
            },
            {
            
              imageUrl: joggers5.src,
              isActive: true,
            },
          ],
        },
        {
          
          title: `Baka: Viol Hoodie`,
          price: "1 756.00 kr",
          sizes: ["XS", "S", "M", "L", "XL"],
          originalPrice: "2 195.00 kr",
          discountPercentage: " -20%",
      
          preview: [
            {
             
              imageUrl: viol1.src,
              isActive: true,
            },
            {
              
              imageUrl: viol3.src,
              isActive: false,
            },
            {
            
              imageUrl: viol2.src,
              isActive: false,
            },
            {
              
              imageUrl: viol4.src,
              isActive: false,
            },
            {
              
              imageUrl: viol5.src,
              isActive: false,
            },
          ],
        },
        {
       
          title: `Baka: Blue T-Shirt`,
          price: "1 756.00 kr",
          sizes: ["XS", "S", "M", "L", "XL"],
          originalPrice: "2 195.00 kr",
          discountPercentage: " -20%",
      
          preview: [
            {
            
              imageUrl: blue1.src,
              isActive: false,
            },
            {
            
              imageUrl: blue3.src,
              isActive: false,
            },
            {
            
              imageUrl: blue2.src,
              isActive: true,
            },
            {
              
              imageUrl: blue4.src,
              isActive: false,
            },
            {
              
              imageUrl: blue5.src,
              isActive: false,
            },
          ],
        },
       
      ];
}