import React from "react";
import Article from "././article";
import "../../scss/blog.scss";
import Img01 from "../../img/article01.jpg";
import Img02 from "../../img/article02.jpg";
import Img03 from "../../img/article03.jpg";
import Img04 from "../../img/article04.jpg";
import Img05 from "../../img/article05.jpg";
import Img06 from "../../img/article06.jpg";

const Blog = ({ itemListFromCategory }) => {
  const articleInfo = [
    {
      title: "RECIPE: CLAYPOT SESAME OIL CHICKEN RICE (麻油雞飯)",
      contents: `Hi there, this is Yingchi. 
      The Mogutable team has decided to start a mini series to share some of our favorite recipes. Starting from my go-to dish in the fall, the Claypot Sesame Oil Chicken Rice. Inspired by a Taiwanese dish Sesame Oil Chicken Soup (麻油雞), this dish is essentially a non-soup version of the Taiwanese dish. Same ingredients, same flavor, but with steamed rice.`,
      img: Img01,
    },
    {
      title: "INGREDIENTS",
      contents: `1. Toasted Sesame Oil (2-3 tbsp): Sesame oil is one of the ingredient you will see in many Asian cuisines. Its flavor and fragrance add an unique rich and nutty flavor to the dish. 
                
      2. Cooking Rice Wine (1 cup): Chinese cooking rice wine. You can also use Sake.
      
      3. Chicken Breast (6 oz): Chicken thigh is also a good option if you don't like chicken breast. Diced into one inch cubes. 
      
      4. Ginger (2 oz): Thinly sliced.
      
      5. Dried Goji Berry (1/4 cup)
      
      6. Cabbage (1/4 head): Chopped into one inch pieces. 
      
      7. Cooked White Rice (3-4 cups): It's better to use cold rice or rice in room temperature. 
      
      8. Salt, to taste `,
      img: Img02,
    },
    {
      title: "GUIDE: CERAMIC POTTERY VS. PORCELAIN",
      contents: `Goji berries are used in many soup dishes in Chinese cuisine. 
      My mom always says it's good for the eyes and asks us to eat it often. It adds this sweet taste and a beautiful rich color to the food. 
      
      Goji berries contain large amounts of vitamins A and C. It protects the eyes and provides immune system support. Studies also show that it helps with your sleep. Goji berries are available in most Asian markets. You can also get them on Amazon as well. `,
      img: Img03,
    },
    {
      title: "STEPS (01 OF 02)",
      contents: `1. Soak the goji berries in the cooking rice wine. Sit aside. This step gives the goji berries some of the flavors from the rice wine and also helps the berries to be moisturized. 

      2. Put sliced ginger in the clay pot (If you don't have a clay pot, regular wok or pan are good too), turn the heat on to low heat. Wait until the ginger looks a little bit dry.

      3. Add toasted sesame oil. Cook the ginger in low heat for about 2-3 minutes. It's important to use low heat only for this step as sesame oil will develop a bitter taste if the temperature gets too hot.

      4. Add the diced chicken breast. Use medium heat. Lightly cook it until the color of the meat changes.`,
      img: Img04,
    },
    {
      title: "STEPS (02 OF 02)",
      contents: `5. After the chicken is half done, add goji berries and rice wine. Cook for a couple of minutes. If it looks too dry, add some water.

      6. Add the cooked rice and the chopped cabbage. Stir them with the ginger and chicken evenly. 

      7. Close the lid and let it cook for 7-8 minutes.

      8. Turn off the gas. Sprinkle some salt and add some cold sesame oil on top to give it a bit more flavor. 

      9. Ready to serve! `,
      img: Img05,
    },
    {
      title: "",
      contents: `This is a dish that I learned to cook a few years back when I really missed a proper Taiwanese Sesame Oil Chicken Soup in a cold winter. The rice wine and ginger warm your body up. It's a very easy one-pot dish that doesn't require too many skills in cooking, and it's delicious! 
      
      I hope you will enjoy the dish as much as I do! If you decide to try this recipe, please feel free to give me some feedbacks or share a picture with me!  `,
      img: Img06,
    },
  ];

  return (
    <>
      <Article articleInfo={articleInfo}></Article>
    </>
  );
};

export default Blog;
