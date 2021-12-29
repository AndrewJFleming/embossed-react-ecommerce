import React, { useState } from "react";
import { Link } from "react-router-dom";

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
import { useSelector } from "react-redux";

const TopNav = () => {
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(false);
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);

  const handleLogout = () => {
    // dispatch({ type: "LOGOUT" });
    setExpanded(false);
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
    <Navbar
      // className="fixed-top"
      expanded={expanded}
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
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
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/product-list" onClick={handleCollapse}>
              Products
            </Nav.Link>
          </Nav>
          <Nav>
            {user ? (
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
            {user && <span className="avatar">{user.username}</span>}
            <Nav.Link as={Link} to="/cart" onClick={handleCollapse}>
              <i className="fas fa-shopping-basket">&nbsp;{quantity}</i>
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
