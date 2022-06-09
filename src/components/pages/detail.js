import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "../../scss/detail.scss";
import PopupLayer from "../common/popupLayer";

import Detail01 from "../../img/detail01.jpg";
import Detail02 from "../../img/detail02.jpg";
import Detail03 from "../../img/detail03.jpg";

const Detail = ({ setCartItemLists, productInfo, setCartStatus, cartStatus }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [productQuantity, setProductQuantity] = useState(1);
  const btnIncrease = () => {
    if (productQuantity === 5) {
      setProductQuantity(5);
    } else {
      setProductQuantity(productQuantity + 1);
    }
  };
  const btnDecrease = () => {
    if (productQuantity === 0) {
      setProductQuantity(0);
    } else {
      setProductQuantity(productQuantity - 1);
    }
  };

  const [layer, setLayer] = useState(false);
  const setLayerStatus = () => {
    console.log("first" + layer);
    if (layer === false) {
      setLayer(true);
      console.log("passing" + layer);
      document.body.style.overflow = "hidden";
    } else if (layer === true) {
      setLayer(false);
      console.log("passing" + layer);
    }
  };

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  useEffect(() => {
    setProductName(productInfo[location.pathname.substring(9)].title);
    setProductPrice(productInfo[location.pathname.substring(9)].price);
  }, []);

  const cartInfo = [
    {
      productName,
      productPrice,
      productQuantity,
    },
  ];

  const passCartInfo = () => {
    console.log(cartStatus);

    if (cartStatus === 0) {
      setCartStatus(cartInfo);
    } else {
      console.log(cartStatus);

      let keyCollection = [];
      cartStatus.map((data, index) => {
        return keyCollection.push(data.productName);
        // const cartUpdateTrigger = () => {
        //   data.productQuantity = data.productQuantity + productQuantity;
        // };
        // return data.productName === productName ? cartUpdateTrigger() : setCartStatus(cartConcat);
      });
      console.log(keyCollection);
      console.log(cartStatus);

      if (keyCollection.includes(cartInfo[0].productName)) {
        console.log(cartStatus);

        let cartCopy = cartStatus;
        console.log(cartCopy);
        cartCopy.map((data, index) => {
          console.log(cartCopy.productQuantity);
          return data.productName === productName ? (data.productQuantity = data.productQuantity + productQuantity) : false;
        });

        setCartStatus(cartCopy);
      } else {
        let cartConcat = cartStatus.concat(cartInfo);
        cartStatus.map((data, index) => {
          return setCartStatus(cartConcat);
        });
      }
    }
  };
  console.log(cartStatus);

  return (
    <>
      <div className={`${layer ? "detail scrollNone" : "detail"}`}>
        <div className="flexBox">
          <div className="scrollFixed ">
            <div style={{ fontWeight: 500 }}>{productName}</div>
            <div style={{ fontWeight: 500 }}>{productPrice}</div>
            <div className="detail">
              <br />
              <br />
              Finally, a wine glass that combines a delicate aesthetic with the ease of comfort. Made for convenience and flexibility of use, this piece even has a hidden shot glass in its stem for
              ultimate versatility. Available in Clear or Smoke. Sold individually. Wine Glass in Smoke Wine Glass in Smoke DEPARTO WINE GLASS IN SMOKE $18 Pay in 4 interest-free installments for
              orders over $50 with Learn more 4 ADD TO CART Product Specs: L2.8" x W2.8" x H5.2" / 10 oz Ceramic Finally, a wine glass that combines a delicate aesthetic with the ease of
              comfort.Available in Clear or Smoke. Sold individually.
              <br />
              <br />
              <br />
              <span style={{ fontWeight: 500 }}>Product Specs:</span>
              <br />
              L2.8" x W2.8" x H5.2" / 10 oz Ceramic
              <br />
              <br />
            </div>

            <div className="quantityBtn">
              <button onClick={btnDecrease}>-</button>
              <span>{productQuantity}</span>
              <button onClick={btnIncrease}>+</button>
            </div>
            <Button
              className="customized-btn"
              variant="dark"
              onClick={() => {
                setLayerStatus();
                passCartInfo();
              }}
            >
              ADD CART
            </Button>
          </div>
          <div className="scrollAuto">
            <img alt="" src={Detail01}></img>
            <br />
            <br />
            <br />
            <img alt="" src={Detail02}></img>
            <br />
            <br />
            <br />
            <img alt="" src={Detail03}></img>
          </div>
        </div>
      </div>
      {/* <ItemList grid={"four"} titleLists={relatedProducts} src={relatedProducts.src} /> */}
      <PopupLayer layer={layer} layerText={`해당 상품 ${productQuantity}개가 장바구니에 담겼습니다.`} setLayer={setLayer} btnBottom={"CLOSE"}></PopupLayer>

      {/* <h3>{productId}번 글 입니다.</h3> */}
      {/* <div>{location.pathname}</div> */}
      {/* <div>{location.search}</div> */}
      {/* <div>{location.hash}</div> */}
      {/* <div>{location.state}</div> */}
      {/* <div>{location.key}</div> */}
      {/* <button onClick={() => navigate(-1, { replace: true })}>back</button> */}
    </>
  );
};

export default Detail;
