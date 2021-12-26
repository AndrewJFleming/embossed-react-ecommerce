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
  const [user, setUser] = useState(true);
  const quantity = useSelector((state) => state.cart.quantity);
  // const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    // dispatch({ type: "LOGOUT" });
    // setExpanded(false);
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
    // <Navbar bg="light" expand="lg">
    //   <Container>
    //     <Navbar.Brand as={Link} to="/">
    //       Embossed
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link as={Link} to="/cart">
    //           Cart
    //         </Nav.Link>
    //         <Nav.Link as={Link} to="/login">
    //           Login
    //         </Nav.Link>
    //         <Nav.Link as={Link} to="/register">
    //           Register
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
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
            {user && (
              <Nav.Link as={Link} to="/write" handler={handleLogout}>
                Logout
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {/* {user ? (
              <Link to="/settings" className="avatar" alt={user.username}>
                <span>{user.username}</span>
              </Link>
            ) : ( */}
            <React.Fragment>
              <Nav.Link as={Link} to="/product-list" handler={handleCollapse}>
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/product" handler={handleCollapse}>
                Single
              </Nav.Link>
              <Nav.Link as={Link} to="/login" handler={handleCollapse}>
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/register" handler={handleCollapse}>
                Register
              </Nav.Link>
            </React.Fragment>
            {/* )} */}
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/cart" handler={handleCollapse}>
              <i class="fas fa-shopping-basket">&nbsp;{quantity}</i>
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
