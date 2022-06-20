import "../../../scss/main.scss";
import React from "react";
import ItemList from "../../common/itemList";

const Category = (props) => {
  return (
    <div>
      {props.category ? (
        <>
          <div className="main-catergory-subTitle">ALL PRODUCTS</div>
          <div className="main-catergory-title"></div>
          <ItemList grid={4} lists={props.productInfo} />
        </>
      ) : props.search ? (
        <>
          <div className="main-catergory-subTitle">SEARCH RESULT</div>
          <div className="main-catergory-title">{props.keyword}</div>
          <ItemList grid={4} keyword={props.keyword} search={true} lists={props.productInfo} />
        </>
      ) : (
        <></>
      )}
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};
export default Category;
