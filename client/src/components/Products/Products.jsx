import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Product from "./Product/Product";
import { popularProducts } from "../../data";

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {}, [cat]);

  return (
    <Row>
      {popularProducts.map((item) => (
        <Col xs={12} sm={6} md={4} lg={3}>
          <Product product={item} key={item.id} />
        </Col>
      ))}
    </Row>
  );
};
export default Products;
