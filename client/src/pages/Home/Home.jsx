import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { Products } from "../../components/Products/Products";
import { Categories } from "../../components/TopNav/Categories/Categories";

const Home = () => {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col>
            <Categories />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Products />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
