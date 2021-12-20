import React from "react";

import { Card } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <Card>
      <Card.Img variant="top" src={product.img} />
    </Card>
  );
};
export default Product;
