import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Main from "./components/pages/main/main";
import Category from "./components/pages/category/category";
import Detail from "./components/pages/detail/detail";
import NotFound from "./components/pages/notFound.js";
import Blog from "./components/pages/blog/blog.js";
import ScrollTop from "./components/scrollRestoration";
import Cart from "./components/pages/cart/cart";

import NavBar from "./components/common/navBar";
import Footer from "./components/common/footer";

import productInfo from "./constants/productData";
import articleInfo from "./constants/blogData";

const App = () => {
  const [keyword, setKeyword] = useState("");

  const [cartStatus, setCartStatus] = useState(() => JSON.parse(window.localStorage.getItem("cartStatus")) || 0);

  useEffect(() => {
    window.localStorage.setItem("cartStatus", JSON.stringify(cartStatus));
  }, [cartStatus]);

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
