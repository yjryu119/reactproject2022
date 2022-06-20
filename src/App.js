import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Main from "./components/pages/main/main";
import Category from "./components/pages/category/category";
import Detail from "./components/pages/detail";
import NotFound from "./components/pages/notFound.js";
import Blog from "./components/pages/blog.js";
import ScrollTop from "./components/scrollRestoration";
import Cart from "./components/pages/cart";

import NavBar from "./components/pages/main/navBar";
import Footer from "./components/pages/footer";

import product01 from "../src/img/product01.jpg";
import product02 from "../src/img/product02.jpg";
import product03 from "../src/img/product03.jpg";
import product04 from "../src/img/product04.jpg";
import product05 from "../src/img/product05.jpg";
import product06 from "../src/img/product06.jpg";
import product07 from "../src/img/product07.jpg";
import product08 from "../src/img/product08.jpg";

import product01_01 from "../src/img/product01_01.jpg";
import product01_02 from "../src/img/product01_02.jpg";
import product02_01 from "../src/img/product02_01.jpg";
import product03_01 from "../src/img/product03_01.jpg";
import product04_01 from "../src/img/product04_01.jpg";
import product05_01 from "../src/img/product05_01.jpg";
import product05_02 from "../src/img/product05_02.jpg";
import product05_03 from "../src/img/product05_03.jpg";
import product06_01 from "../src/img/product06_01.jpg";
import product06_02 from "../src/img/product06_02.jpg";
import product07_01 from "../src/img/product07_01.jpg";
import product08_01 from "../src/img/product08_01.jpg";

import article01_01 from "../src/img/article01.jpg";
import article01_02 from "../src/img/article02.jpg";
import article01_03 from "../src/img/article03.jpg";
import article01_04 from "../src/img/article04.jpg";
import article01_05 from "../src/img/article05.jpg";
import article01_06 from "../src/img/article06.jpg";

const App = () => {
  const [keyword, setKeyword] = useState("");

  const [cartStatus, setCartStatus] = useState(() => JSON.parse(window.localStorage.getItem("cartStatus")) || 0);

  useEffect(() => {
    window.localStorage.setItem("cartStatus", JSON.stringify(cartStatus));
  }, [cartStatus]);

  const productInfo = [
    {
      id: 0,
      title: "WINE GLASS IN SMOKE",
      price: "$18",
      spec: `L2.8" x W2.8" x H5.2" / 10 oz Ceramic`,
      description: `Finally, a wine glass that combines a delicate aesthetic with the ease of comfort. Made for convenience and flexibility of use, this piece even has a hidden shot glass in its stem for ultimate versatility. Available in Clear or Smoke. Sold individually. allments for orders over $50 with Learn more 4 ADD TO CART. Finally, a wine glass that combines a delicate aesthetic with the ease of comfort.Available in Clear or Smoke. Sold individually.`,
      src: product01,
      detail01: product01_01,
      detail02: product01_02,
    },
    {
      id: 1,
      title: "LITTLE BOWL IN SLATE GRAY",
      price: "$16",
      spec: `L4.4" x W4.9" x H1.7" Ceramic`,
      description: `This little stoneware bowl is as timeless as it is tactile: a wide angle from base to rim means there’s no need to compromise between function and form, and the half-lip edge offers a talking-point design feature without needing to say a word. Ideal for individual snacks, the Little Bowl’s rims can also be combined to create a playfully tessellating centrepiece.`,
      src: product02,
      detail01: product02_01,
    },
    {
      id: 2,
      title: "LITTLE BOWL IN TOBACCO",
      price: "$16",
      spec: `L4.4" x W4.9" x H1.7" Ceramic`,
      description: `This little stoneware bowl is as timeless as it is tactile: a wide angle from base to rim means there’s no need to compromise between function and form, and the half-lip edge offers a talking-point design feature without needing to say a word. Ideal for individual snacks, the Little Bowl’s rims can also be combined to create a playfully tessellating centrepiece.`,
      src: product03,
      detail01: product03_01,
    },
    {
      id: 3,
      title: "LITTLE BOWL IN CHALK",
      price: "$16",
      spec: `L4.4" x W4.9" x H1.7" Ceramic`,
      description: `This little stoneware bowl is as timeless as it is tactile: a wide angle from base to rim means there’s no need to compromise between function and form, and the half-lip edge offers a talking-point design feature without needing to say a word. Ideal for individual snacks, the Little Bowl’s rims can also be combined to create a playfully tessellating centrepiece.`,
      src: product04,
      detail01: product04_01,
    },
    {
      id: 4,
      title: "SUGAR & SPICE BOWL IN CHALK",
      price: "$38",
      spec: `L3" x W3.7" x H3.2" Ceramic`,
      description: `This sugar & spice bowl celebrates the satisfaction of a perfect fit. Three parts form one cohesive whole, igniting a robust dialogue between refined glazing and exposed stoneware that continues our legacy of elevated essentials. Fill with your favorite sweetener or loose leaf tea or store salts and spices to enlist in your next savory dish.`,
      src: product05,
      detail01: product05_01,
      detail02: product05_02,
      detail03: product05_03,
    },
    {
      id: 5,
      title: "CERAMIC TEAPOT IN TABACCO",
      price: "$54",
      spec: `L7" x W4.7" x H4.2" / 21 oz ceramic`,
      description: `This teapot is an ode to the pragmatic and the purposeful, offering a timeless silhouette in departo's signature tones. The stoneware pot and lid retain heat while the tapered lip propels an easy pour.`,
      src: product06,
      detail01: product06_01,
      detail02: product06_02,
    },
    {
      id: 6,
      title: "LOW GLASS IN CLEAR",
      price: "$12",
      spec: `L3.2" x W3.2" x H3.3" / 11 oz Ceramic`,
      description: `departo’s Low Glass proves that considered design should extend to even the simplest pieces. Made for convenience and flexibility of use, this is glassware that is as covetable as it is accessible. Ideal for wine, water or short cocktails, what better way to furnishing the everyday?`,
      src: product07,
      detail01: product07_01,
    },
    {
      id: 7,
      title: "HIGH GLASS IN SMOKE",
      price: "$14",
      spec: `L3.2 x W3.2 x H4.8" / 17 oz Ceramic`,
      description: `departo’s Low Glass proves that considered design should extend to even the simplest pieces. Made for convenience and flexibility of use, this is glassware that is as covetable as it is accessible. Ideal for wine, water or short cocktails, what better way to furnishing the everyday?`,
      src: product08,
      detail01: product08_01,
    },
  ];

  const articleInfo = [
    {
      title: "RECIPE: CLAYPOT SESAME OIL CHICKEN RICE (麻油雞飯)",
      contents: `Hi there, this is Yingchi. 
      The Mogutable team has decided to start a mini series to share some of our favorite recipes. Starting from my go-to dish in the fall, the Claypot Sesame Oil Chicken Rice. Inspired by a Taiwanese dish Sesame Oil Chicken Soup (麻油雞), this dish is essentially a non-soup version of the Taiwanese dish. Same ingredients, same flavor, but with steamed rice.`,
      img: article01_01,
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
      img: article01_02,
    },
    {
      title: "GUIDE: CERAMIC POTTERY VS. PORCELAIN",
      contents: `Goji berries are used in many soup dishes in Chinese cuisine. 
      My mom always says it's good for the eyes and asks us to eat it often. It adds this sweet taste and a beautiful rich color to the food. 
      
      Goji berries contain large amounts of vitamins A and C. It protects the eyes and provides immune system support. Studies also show that it helps with your sleep. Goji berries are available in most Asian markets. You can also get them on Amazon as well. `,
      img: article01_03,
    },
    {
      title: "STEPS (01 OF 02)",
      contents: `1. Soak the goji berries in the cooking rice wine. Sit aside. This step gives the goji berries some of the flavors from the rice wine and also helps the berries to be moisturized. 

      2. Put sliced ginger in the clay pot (If you don't have a clay pot, regular wok or pan are good too), turn the heat on to low heat. Wait until the ginger looks a little bit dry.

      3. Add toasted sesame oil. Cook the ginger in low heat for about 2-3 minutes. It's important to use low heat only for this step as sesame oil will develop a bitter taste if the temperature gets too hot.

      4. Add the diced chicken breast. Use medium heat. Lightly cook it until the color of the meat changes.`,
      img: article01_04,
    },
    {
      title: "STEPS (02 OF 02)",
      contents: `5. After the chicken is half done, add goji berries and rice wine. Cook for a couple of minutes. If it looks too dry, add some water.

      6. Add the cooked rice and the chopped cabbage. Stir them with the ginger and chicken evenly. 

      7. Close the lid and let it cook for 7-8 minutes.

      8. Turn off the gas. Sprinkle some salt and add some cold sesame oil on top to give it a bit more flavor. 

      9. Ready to serve! `,
      img: article01_05,
    },
    {
      title: "",
      contents: `This is a dish that I learned to cook a few years back when I really missed a proper Taiwanese Sesame Oil Chicken Soup in a cold winter. The rice wine and ginger warm your body up. It's a very easy one-pot dish that doesn't require too many skills in cooking, and it's delicious! 
      
      I hope you will enjoy the dish as much as I do! If you decide to try this recipe, please feel free to give me some feedbacks or share a picture with me!  `,
      img: article01_06,
    },
  ];

  return (
    <div className="App">
      <BrowserRouter basename="/reactproject2022/">
        <ScrollTop />
        <NavBar keyword={keyword} setKeyword={setKeyword}></NavBar>
        <Routes>
          <Route path="/" element={<Main productInfo={productInfo} keyword={keyword} setKeyword={setKeyword}></Main>}></Route>
          <Route path="/category" element={<Category category={true} productInfo={productInfo}></Category>}></Route>
          <Route path="/search" element={<Category search={true} keyword={keyword} productInfo={productInfo}></Category>}></Route>
          <Route path="/product/:productId" element={<Detail cartStatus={cartStatus} productInfo={productInfo} setCartStatus={setCartStatus}></Detail>}></Route>
          <Route path="/blog/:blogID" element={<Blog articleInfo={articleInfo}></Blog>}></Route>
          <Route path="/cart" element={<Cart cartStatus={cartStatus} setCartStatus={setCartStatus}></Cart>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
};

export default App;
