import React, { useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";
import FeaturedSale from "../../components/FeaturedSale/FeaturedSale";
import Products from "../../components/Products/Products";
import Slider from "../../components/Slider/Slider";
import Categories from "../../components/Categories/Categories";
import { useLocation } from "react-router";

const Home = ({ sales }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="minimum-height">
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
