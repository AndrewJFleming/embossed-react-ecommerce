import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import CartItem from "./CartItem/CartItem";
import { Container, Button, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  createCart,
  removeFromCart,
  changeQuantity,
} from "../../redux/actions/cart";
import { RESET_CART } from "../../redux/constants/actionTypes";
// import StripeCheckout from "react-stripe-checkout";

import { useLocation } from "react-router";
import "./Cart.css";

// const KEY = process.env.REACT_APP_STRIPE;

const Cart = ({ currentUserId, sales }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const [cartState, setCartState] = useState([]);
  const [shipping, setShipping] = useState(5.9);
  const [subtotal, setSubtotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const dispatch = useDispatch();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  //Set number of items in cart
  useEffect(() => {
    setCartCount(
      cartItems.reduce((quantity, item) => item.quantity + quantity, 0)
    );
  }, [cartItems]);

  useEffect(() => {
    let cartItemsCopy = cartItems;
    let i = 0;

    const findMatches = () => {
      cartItemsCopy.forEach((element) => {
        let result = sales.find((t) => t.productId === element.productId);
        if (result) {
          const newCartState = [...cartItemsCopy];
          newCartState[i] = {
            ...element,
            price: element.price - element.price * result.percentOff,
          };
          cartItemsCopy = newCartState;
          // console.log(
          //   `foreach: ${i}`,
          //   cartItemsCopy[0].price,
          //   cartItemsCopy[1].price,
          //   cartItemsCopy[2].price
          // );
        }
        ++i;
      });
      setCartState(cartItemsCopy);
      const sum = cartItemsCopy
        .reduce((price, item) => price + item.price * item.quantity, 0)
        .toFixed(2);
      setSubtotal(parseInt(sum));
    };

    findMatches();
  }, [cartItems, sales]);

  const qtyChangeHandler = (type, cartItemId, qty) => {
    if (type === "dec") {
      qty > 1 && dispatch(changeQuantity(cartItemId, qty - 1));
    } else {
      dispatch(changeQuantity(cartItemId, qty + 1));
    }
  };

  const removeFromCartHandler = (id, variant) => {
    dispatch(removeFromCart(id, variant));
  };

  const handleResetCart = () => {
    dispatch({ type: RESET_CART });
  };

  const handleCreateCart = (currentUserId, cartItems) => {
    dispatch(createCart(currentUserId, cartItems));
  };

  return (
    <Container className="my-5 minimum-height">
      <h2>MY CART</h2>
      <div className="top my-3">
        <Link to="/">
          <Button variant="outline-danger">CONTINUE SHOPPING</Button>
        </Link>
        <div>
          <h5>
            <i className="fas fa-shopping-cart"></i>({cartCount})
          </h5>
        </div>
      </div>
      <Row>
        <Col className="cartItems" xs={12} sm={12} md={8}>
          <div>
            {cartState.map((product) => (
              <CartItem
                key={`${product.cartItemId}`}
                product={product}
                removeHandler={removeFromCartHandler}
                qtyChangeHandler={qtyChangeHandler}
              />
            ))}
          </div>
        </Col>
        <Col xs={12} sm={12} md={4} className="summary">
          <h4 className="summary-title">ORDER SUMMARY</h4>
          <div className="summary-item">
            <h5>Subtotal:</h5>
            <p>$ {subtotal}</p>
          </div>
          <div className="summary-item">
            <h5>Estimated Shipping:</h5>
            <p>$ {shipping}</p>
          </div>
          <div className="summary-item">
            <h5>TOTAL:</h5>
            <p>$ {subtotal ? subtotal + shipping : 0}</p>
          </div>
          {/* <StripeCheckout>
            <button>CHECKOUT NOW</button>
            </StripeCheckout> */}
          <Button
            variant="warning"
            onClick={() => handleCreateCart(currentUserId, cartState)}
          >
            CHECKOUT NOW
          </Button>
        </Col>
      </Row>
      <Button variant="danger" onClick={handleResetCart}>
        Clear Cart
      </Button>
    </Container>
  );
};

export default Cart;
