import React from "react";
import { Link, useHistory } from "react-router-dom";

import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../redux/constants/actionTypes";
import { RESET_CART } from "../../redux/constants/actionTypes";

const Footer = ({ currentUser }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    try {
      dispatch({ type: LOGOUT });
      dispatch({ type: RESET_CART });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="footerWrapper">
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
              <Link to="/" className="link">
                <li>Home</li>
              </Link>
              <Link to="cart" className="link">
                <li>Cart</li>
              </Link>
              {currentUser ? (
                <React.Fragment>
                  <Link to={`account/${currentUser._id}`} className="link">
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
