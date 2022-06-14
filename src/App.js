import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/pages/main/main";
import Category from "./components/pages/category/category";
import Detail from "./components/pages/detail";
import NotFound from "./components/pages/notFound.js";
import Blog from "./components/pages/blog.js";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollTop from "./components/scrollRestoration";
import Cart from "./components/pages/cart";

import Test from "./components/pages/test";

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

const App = () => {
  const [keyword, setKeyword] = useState("");

  const [cartStatus, setCartStatus] = useState(() => JSON.parse(window.localStorage.getItem("cartStatus")) || 0);

  useEffect(() => {
    window.localStorage.setItem("cartStatus", JSON.stringify(cartStatus));
  }, [cartStatus]);

  console.log(cartStatus);

  const productInfo = [
    {
      id: 0,
      title: "WINE GLASS IN SMOKE",
      price: "$18",
      src: product01,
    },
    {
      id: 1,
      title: "LITTLE BOWL IN SLATE GRAY",
      price: "$16",
      src: product02,
    },
    {
      id: 2,
      title: "LITTLE BOWL IN TOBACCO",
      price: "$16",
      src: product03,
    },
    {
      id: 3,
      title: "LITTLE BOWL IN CHALK",
      price: "$16",
      src: product04,
    },
    {
      id: 4,
      title: "SUGAR & SPICE BOWL IN CHALK",
      price: "$38",
      src: product05,
    },
    {
      id: 5,
      title: "CERAMIC TEAPOT IN TABACCO",
      price: "$54",
      src: product06,
    },
    {
      id: 6,
      title: "LOW GLASS IN CLEAR",
      price: "$12",
      src: product07,
    },
    {
      id: 7,
      title: "HIGH GLASS IN SMOKE",
      price: "$14",
      src: product08,
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
          <Route path="/blog/:blogID" element={<Blog></Blog>}></Route>
          <Route path="/cart" element={<Cart cartStatus={cartStatus} setCartStatus={setCartStatus}></Cart>}></Route>
          <Route path="/test" element={<Test></Test>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
};

export default App;
