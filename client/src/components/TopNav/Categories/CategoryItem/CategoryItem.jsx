import React from "react";

import { Card } from "react-bootstrap";

export const CategoryItem = ({ category }) => {
  return (
    <Card>
      <Card.Img variant="top" src={category.img} />

      <Card.Body>
        <Card.Title>{category.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};
