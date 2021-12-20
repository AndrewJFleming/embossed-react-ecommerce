import React from "react";

import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footerWrapper mt-5">
      <Container>
        <Row>
          <Col className="text-center">Left</Col>
          <Col className="text-center">Center</Col>
          <Col className="text-center">Right</Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
