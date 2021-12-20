import React from "react";

import { Row, Col } from "react-bootstrap";
import CategoryItem from "./CategoryItem/CategoryItem";
import { categories } from "../../data";

const Categories = () => {
  return (
    <Row>
      {categories.map((item) => (
        <Col xs={12} sm={6} md={4} lg={4}>
          <CategoryItem category={item} key={item.id} />
        </Col>
      ))}
    </Row>
  );
};
export default Categories;
