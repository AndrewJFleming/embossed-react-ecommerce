import React from "react";

import { Card } from "react-bootstrap";

export const CategoryItem = ({ item }) => {
  return (
    <Card>
      <Card.Img variant="top" src={item.img} />

      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.desc}</Card.Text>
      </Card.Body>
    </Card>
  );
};
