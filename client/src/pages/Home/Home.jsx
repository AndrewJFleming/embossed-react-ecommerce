import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import Newsletter from "../../components/Newsletter/Newsletter";
import Products from "../../components/Products/Products";
import Slider from "../../components/Slider/Slider";
import Categories from "../../components/Categories/Categories";

const Home = () => {
  return (
    <div>
      <Slider />
      <Container>
        <Row className="mt-5">
          <Col>
            <h3 className="text-center mb-4">Featured Categories</h3>
            <Categories />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h3 className="text-center mb-4">Products</h3>
            <Products />
          </Col>
        </Row>
      </Container>
      <Newsletter />
    </div>
  );
};

export default Home;
