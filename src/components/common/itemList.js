import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import ItemCard from "./itemCard";

function ItemList({ lists, grid, linkTo, setGrid, search, keyword, main }) {
  return (
    <div className="card-wrapper">
      {grid === 4 ? (
        search === true ? (
          <Row xs={1} md={4} className="g-4">
            {lists.map((result) => {
              return result.title.toLowerCase().indexOf(keyword) !== -1 ? (
                <Col>
                  <Link className="" to={"/product/" + result.id}>
                    <ItemCard title={result.title} src={result.src} price={result.price}></ItemCard>
                  </Link>
                </Col>
              ) : (
                <></>
              );
            })}
          </Row>
        ) : main === true ? (
          <Row xs={1} md={4} className="g-4 ">
            {lists.map((result, index) => {
              return index < 4 ? (
                <>
                  <Col>
                    <Link className="" to={"/product/" + result.id}>
                      <ItemCard title={result.title} src={result.src} price={result.price}></ItemCard>
                    </Link>
                  </Col>
                </>
              ) : (
                <></>
              );
            })}
          </Row>
        ) : (
          <Row xs={1} md={4} className="g-4">
            {lists.map((result) => (
              <Col>
                <Link className="" to={"/product/" + result.id}>
                  <ItemCard title={result.title} src={result.src} price={result.price}></ItemCard>
                </Link>
              </Col>
            ))}
          </Row>
        )
      ) : grid === 3 ? (
        <Row xs={1} md={3} className="g-4 grid-three-customized">
          {lists.map((result) => (
            <Col>
              <Link className="" to={"/blog/" + result.id}>
                <ItemCard title={result.title} src={result.src} price={result.price}></ItemCard>
              </Link>
            </Col>
          ))}
        </Row>
      ) : (
        <></>
      )}
    </div>
  );
}
export default ItemList;
