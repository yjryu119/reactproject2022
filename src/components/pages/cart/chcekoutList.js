import React, { useEffect } from "react";

import { Table, Button } from "react-bootstrap";

const CheckoutList = ({ cartStatusFromCart, setCartStatusFromCart }) => {
  let cartCopy;
  const deleteItem = (index) => {
    cartCopy = [...cartStatusFromCart];
    cartCopy.splice(index, 1);
    setCartStatusFromCart(cartCopy);
    if (cartCopy[0] === undefined) {
      setCartStatusFromCart(0);
    }
  };

  return (
    <>
      <Table responsive>
        <thead>
          <tr>
            <th></th>
            <th key={"name"}>product Name</th>
            <th key={"price"}>product Price</th>
            <th key={"quantity"}>product Quantity</th>
            <th key={"delete"}></th>
          </tr>
        </thead>
        <tbody>
          {cartStatusFromCart !== 0 ? (
            cartStatusFromCart.map((data, index) => (
              <>
                <tr>
                  <td>{index + 1}</td>
                  <th>{data.productName}</th>
                  <th>{`$ ${Number(data.productPrice.substring(1)) * Number(data?.productQuantity)}`}</th>
                  <th>{data.productQuantity}</th>
                  <th>
                    <Button
                      className="customized-btn"
                      id="deleteBtn"
                      variant="outline-dark"
                      onClick={() => {
                        deleteItem(index);
                      }}
                    >
                      delete
                    </Button>
                  </th>
                </tr>
              </>
            ))
          ) : (
            <></>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default CheckoutList;
