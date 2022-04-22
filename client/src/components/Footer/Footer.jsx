import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../redux/constants/actionTypes";
import { RESET_CART } from "../../redux/constants/actionTypes";
import NavLogo from "../../images/logo.png";

const Footer = ({ currentUser }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      dispatch({ type: LOGOUT });
      dispatch({ type: RESET_CART });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="footer-wrapper">
      <Container>
        <Row>
          <Col className="text-center footer-left p-2">
            <Link to="/" className="footer-logo-link">
              <img src={NavLogo} height="30" alt="site logo" />
              <span className="footer-logo">EMBOSSED</span>
            </Link>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur
            </p>
            <div className="social-container">
              <a
                href="https://github.com/AndrewJFleming"
                className="social-link"
              >
                <i className="fab fa-github-square"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/andrew-j-fleming-web-dev"
                className="social-link"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </Col>
          <Col className="text-center footer-center  p-2">
            <h5>Useful Links</h5>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/cart">
                <li>Cart</li>
              </Link>
              {currentUser ? (
                <React.Fragment>
                  <Link to={`/account/${currentUser._id}`}>
                    <li>My Account</li>
                  </Link>
                  <Link as={Link} to="/" onClick={handleLogout}>
                    <li>Logout</li>
                  </Link>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Link as={Link} to="/login">
                    <li>Login</li>
                  </Link>
                  <Link as={Link} to="/register">
                    <li>Register</li>
                  </Link>
                </React.Fragment>
              )}
            </ul>
          </Col>
          <Col className="text-center footer-right p-2">
            <h5>Contact</h5>
            <h6>Champ de Mars, 5 Av. Anatole France, 75007 Paris, France</h6>
            <h6> +1 123-345-6789</h6>
            <h6> contact@test.dev</h6>
            <img
              src="https://i.ibb.co/Qfvn4z6/payment.png"
              alt="footer payment options"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
