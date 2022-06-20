import React from "react";
import CheckoutList from "./chcekoutList";
import "../../../scss/cart.scss";

const Cart = ({ cartStatus, setCartStatus }) => {
  return (
    <>
      <div className="main-catergory-subTitle"></div>
      <div className="main-catergory-title">CART</div>
      {cartStatus !== 0 ? (
        <>
          <div className="wrapper cart">
            <CheckoutList setCartStatusFromCart={setCartStatus} cartStatusFromCart={cartStatus}></CheckoutList>
          </div>
        </>
      ) : (
        <>
          <div className="wrapper cart">
            <div className="main-catergory-subTitle">No items</div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
