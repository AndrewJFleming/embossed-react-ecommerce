import React from "react";

import { Card } from "react-bootstrap";

export const Product = ({ product }) => {
  return (
    <Card>
      <Card.Img variant="top" src={product.img} />
    </Card>
  );
};
