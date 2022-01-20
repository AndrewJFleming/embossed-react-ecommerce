import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import Newsletter from "../../components/Newsletter/Newsletter";
import Products from "../../components/Products/Products";
import Slider from "../../components/Slider/Slider";
import Categories from "../../components/Categories/Categories";

const Home = ({ sales }) => {
  return (
    <div className="mb-5">
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
            <Products sales={sales} />
          </Col>
        </Row>
      </Container>
      {/* <Newsletter /> */}
    </div>
  );
};

export default Home;
