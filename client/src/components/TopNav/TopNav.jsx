import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import NavLogo from "../../images/logo.png";
import "./TopNav.css";
import { useDispatch } from "react-redux";
import { RESET_CART, LOGOUT } from "../../redux/constants/actionTypes";
import { useSelector } from "react-redux";

const TopNav = ({ currentUser }) => {
  // const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const [topNavCats, setTopNavCats] = useState([]);

  useEffect(() => {
    const getTopNavCats = async () => {
      const res = await axios.get(
        process.env.REACT_APP_SERVER_URL + "/categories"
      );
      setTopNavCats(res.data);
    };
    getTopNavCats();
  }, []);

  useEffect(() => {
    const getCartCount = () => {
      setCartCount(
        cartItems.reduce((qty, item) => Number(item.quantity) + qty, 0)
      );
    };
    getCartCount();
  }, [cartItems]);

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

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   if (search) {
  //     window.location.replace("/?search=" + search);
  //   }
  // };

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
          <span className="pl-1">EMBOSSED</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="myResponsive">
          <Nav>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {topNavCats?.map((cat) => (
                <NavDropdown.Item
                  key={`${cat.title}-navItem`}
                  as={Link}
                  to={`/product-list/${cat.title}`}
                  onClick={handleCollapse}
                >
                  {cat.title}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
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
              <Link
                to={`account/${currentUser._id}`}
                className="avatar-link nav-link"
              >
                <span className="avatar">{currentUser.username}</span>
              </Link>
            )}
            <Nav.Link
              className="nav-cart-link nav-link"
              as={Link}
              to="/cart"
              onClick={handleCollapse}
            >
              <span className={`${cartCount && "positive-cart"}`}>
                <i className="fas fa-shopping-basket"></i>
                &nbsp;({cartCount})
              </span>
            </Nav.Link>
            {/* <Form className="d-flex navSearch" onSubmit={handleSearch}>
              <FormControl
                type="text"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button variant="outline-light" type="submit" className="ml-2">
                Search
              </Button>
            </Form> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
