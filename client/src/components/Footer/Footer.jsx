import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footerWrapper mt-5">
      <Container>
        <Row>
          <Col className="text-center footerLeft p-2">
            <h4>EMBOSSED</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur
            </p>
            <div className="socialContainer">
              <Link to="#" className="link socialLink">
                <i className="fab fa-github-square"></i>
              </Link>
              <Link to="#" className="link socialLink">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </Col>
          <Col className="text-center footerCenter  p-2">
            <h5>Useful Links</h5>
            <ul>
              <Link to="#" className="link">
                <li>Home</li>
              </Link>
              <Link to="#" className="link">
                <li>Wishlist</li>
              </Link>
              <Link to="#" className="link">
                <li>Order Tracking</li>
              </Link>
              <Link to="#" className="link">
                <li>Cart</li>
              </Link>
              <Link to="#" className="link">
                <li>Man Fashion</li>
              </Link>
              <Link to="#" className="link">
                <li>Woman Fashion</li>
              </Link>
              <Link to="#" className="link">
                <li>Accessories</li>
              </Link>
              <Link to="#" className="link">
                <li>My Account</li>
              </Link>
              <Link to="#" className="link">
                <li>Terms</li>
              </Link>
            </ul>
          </Col>
          <Col className="text-center footerRight p-2">
            <h5>Contact</h5>
            <h6>Champ de Mars, 5 Av. Anatole France, 75007 Paris, France</h6>
            <h6> +1 123-345-6789</h6>
            <h6> contact@test.dev</h6>
            <img src="https://i.ibb.co/Qfvn4z6/payment.png" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
