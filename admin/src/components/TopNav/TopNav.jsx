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
import "./TopNav.css";

const TopNav = () => {
  const [expanded, setExpanded] = useState(false);

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
          <span className="navLogoText">EMBOSSED Admin</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="myResponsive">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/products" onClick={handleCollapse}>
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/new-product" onClick={handleCollapse}>
              <em>New Product</em>
            </Nav.Link>
            <Nav.Link as={Link} to="/users" onClick={handleCollapse}>
              Users
            </Nav.Link>
            <Nav.Link as={Link} to="/new-user" onClick={handleCollapse}>
              <em>New User</em>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
