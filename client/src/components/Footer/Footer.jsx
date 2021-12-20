import React from "react";

import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>Left</Col>
        <Col>Center</Col>
        <Col>Right</Col>
      </Row>
    </Container>
  );
};
export default Footer;
