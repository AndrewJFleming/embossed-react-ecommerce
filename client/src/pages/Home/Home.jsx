import React, { useEffect } from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import FeaturedSale from "../../components/FeaturedSale/FeaturedSale";
import Products from "../../components/Products/Products";
import Slider from "../../components/Slider/Slider";
import Categories from "../../components/Categories/Categories";

const Home = ({ sales }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <Products sales={sales} />
          </Col>
        </Row>
      </Container>
      {sales && <FeaturedSale sales={sales} />}
    </div>
  );
};

export default Home;
