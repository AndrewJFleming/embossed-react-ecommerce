import React from "react";

import { Card } from "react-bootstrap";

const CategoryItem = ({ category }) => {
  return (
    <Card>
      <Card.Img variant="top" src={category.img} />

      <Card.Body>
        <Card.Title>{category.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};
export default CategoryItem;
