import "../../../scss/main.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ControlledCarousel from "./carouselFade";
import ItemList from "./itemList";

import blog01 from "../../../img/blog02.jpg";
import blog02 from "../../../img/blog03.jpg";
import blog03 from "../../../img/blog04.jpg";

function Main(props) {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const hideAll = () => {
    setShow(false);
    setShow2(false);
  };

  const blogArticles = [
    {
      id: 1,
      title: "RECIPE: CLAYPOT SESAME OIL CHICKEN RICE",
      price: "Inspired by a Taiwanese dish Sesame Oil Chicken Soup (麻油雞), this dish is essentially a non-soup version of the Taiwanese dish. ",
      src: blog03,
    },
    {
      id: 2,
      title: "WE ALL NEED SOME MATCHA IN OUR LIVES",
      price: "What comes to mind with the word “matcha”? A matcha latte? Your favorite cafe? ",
      src: blog01,
    },
    {
      id: 3,
      title: "GUIDE: CERAMIC POTTERY VS. PORCELAIN",
      price: "More often than not, “ceramics” is used as a blanket term to describe both pottery (earthenware) and porcelain. ",
      src: blog02,
    },
  ];

  return (
    <div>
      <ControlledCarousel onMouseEnter={hideAll} />
      <div className="main-catergory-subTitle">FEATURED PRODUCTS</div>
      <div className="main-catergory-title">NEW IN</div>
      <ItemList main={true} grid={4} lists={props.productInfo} linkTo={blogArticles.linkTo} />
      <div className="d-center">
        <Link className="customized-btn-wrapper" to="/category">
          <Button className="customized-btn" variant="outline-dark">
            VIEW ALL PRODUCTS
          </Button>
        </Link>
      </div>
      <div className="Hor-line"></div>
      <div className="main-catergory-subTitle"></div>
      <div className="main-catergory-title">BLOG</div>
      <ItemList grid={3} lists={blogArticles} />
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
export default Main;
