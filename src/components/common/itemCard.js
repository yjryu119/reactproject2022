import React from "react";
import { Card } from "react-bootstrap";

function ItemCard({ src, title, price }) {
  return (
    <Card>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{price}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ItemCard;
