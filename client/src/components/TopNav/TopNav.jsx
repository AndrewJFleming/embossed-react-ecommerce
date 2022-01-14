import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import NavLogo from "../../images/logo.png";
import "./TopNav.css";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../redux/constants/actionTypes";
import { RESET_CART } from "../../redux/constants/actionTypes";
import { useSelector } from "react-redux";

const TopNav = ({ currentUser }) => {
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.quantity) + qty, 0);
  };

  const handleLogout = () => {
    setExpanded(false);
    try {
      dispatch({ type: LOGOUT });
      dispatch({ type: RESET_CART });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search) {
      window.location.replace("/?search=" + search);
    }
  };

  const handleCollapse = () => {
    setExpanded(false);
  };

  return (
    <Navbar expanded={expanded} collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleCollapse}>
          <img
            src={NavLogo}
            height="30"
            className="d-inline-block align-top"
            alt="site logo"
          />
          <span className="navLogoText">EMBOSSED</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="myResponsive">
          <Nav>
            {currentUser ? (
              <Nav.Link as={Link} to="/" onClick={handleLogout}>
                Logout
              </Nav.Link>
            ) : (
              <React.Fragment>
                <Nav.Link as={Link} to="/login" onClick={handleCollapse}>
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register" onClick={handleCollapse}>
                  Register
                </Nav.Link>
              </React.Fragment>
            )}
          </Nav>
          <Nav>
            {currentUser && (
              <span className="avatar">{currentUser.username}</span>
            )}
            <Nav.Link as={Link} to="/cart" onClick={handleCollapse}>
              <i className="fas fa-shopping-basket">&nbsp;({getCartCount()})</i>
            </Nav.Link>
            <Form className="d-flex navSearch" onSubmit={handleSearch}>
              <FormControl
                type="text"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button variant="outline-light" type="submit" className="ml-1">
                Search
              </Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
