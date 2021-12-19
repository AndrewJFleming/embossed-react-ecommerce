import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { CategoryItem } from "./CategoryItem/CategoryItem";
import { categories } from "../../../data";

export const Categories = () => {
  return (
    <Row>
      {categories.map((item) => (
        <Col xs={12} sm={6} md={4} lg={3}>
          <CategoryItem category={item} key={item.id} />
        </Col>
      ))}
    </Row>
  );
};
