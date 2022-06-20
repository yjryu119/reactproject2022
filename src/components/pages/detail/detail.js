import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "../../../scss/detail.scss";
import PopupLayer from "../../common/popupLayer";

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
    if (layer === false) {
      setLayer(true);
      document.body.style.overflow = "hidden";
    } else if (layer === true) {
      setLayer(false);
    }
  };

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImg, setProductImg] = useState("");
  const [productSpec, setProductSpec] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [detailImgArray, setDetail] = useState({ detail01: null, detail02: null, detail03: null });

  useEffect(() => {
    setProductName(productInfo[location.pathname.substring(9)].title);
    setProductPrice(productInfo[location.pathname.substring(9)].price);
    setProductImg(productInfo[location.pathname.substring(9)].src);
    setProductSpec(productInfo[location.pathname.substring(9)].spec);
    setProductDescription(productInfo[location.pathname.substring(9)].description);

    setDetail({
      detail01: productInfo[location.pathname.substring(9)]?.detail01,
      detail02: productInfo[location.pathname.substring(9)]?.detail02,
      detail03: productInfo[location.pathname.substring(9)]?.detail03,
    });
  }, []);

  const cartInfo = [
    {
      productName,
      productPrice,
      productQuantity,
    },
  ];

  const passCartInfo = () => {
    if (cartStatus === 0) {
      setCartStatus(cartInfo);
    } else {
      let keyCollection = [];
      cartStatus.map((data, index) => {
        return keyCollection.push(data.productName);
      });

      if (keyCollection.includes(cartInfo[0].productName)) {
        let cartCopy = cartStatus;
        cartCopy.map((data, index) => {
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
  return (
    <>
      <div className={`${layer ? "detail scrollNone" : "detail"}`}>
        <div className="flexBox">
          <div className="scrollFixed ">
            <div style={{ fontWeight: 500 }}>{productName}</div>
            <div style={{ fontWeight: 500 }}>{productPrice}</div>
            <div className="detail">
              <div className="productDescription">{productDescription}</div>
              <div style={{ fontWeight: 500 }}>Product Specs:</div>
              <div className="productSpec">{productSpec}</div>
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
            <img alt="" src={productImg}></img>
            {detailImgArray?.detail01 ? <img alt="" src={detailImgArray?.detail01}></img> : <></>}
            {detailImgArray?.detail02 ? <img alt="" src={detailImgArray?.detail02}></img> : <></>}
            {detailImgArray?.detail03 ? <img alt="" src={detailImgArray?.detail03}></img> : <></>}
            <div className="d-center ">
              <Button
                className="customized-btn top-btn"
                variant=""
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                TOP
              </Button>
            </div>
          </div>
        </div>
      </div>
      <PopupLayer layer={layer} layerText={`${productQuantity} item(s) has been added to your cart.`} setLayer={setLayer} btnBottom={"CLOSE"}></PopupLayer>
    </>
  );
};

export default Detail;
