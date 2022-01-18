import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import CartItem from "../../components/CartItem/CartItem";
import { Container, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  createCart,
  removeFromCart,
  changeQuantity,
} from "../../redux/actions/cart";
import { RESET_CART } from "../../redux/constants/actionTypes";
// import StripeCheckout from "react-stripe-checkout";

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
        // let result = test.find((t) => t.productId === element.productId);
        let result = sales.find((t) => t.productId === element.productId);
        if (result) {
          const newCartState = [...cartItemsCopy];
          newCartState[i] = {
            ...element,
            price: element.price * result.percentOff,
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

  // const qtyChangeHandler = (type, id, qty) => {
  //   if (type === "dec") {
  //     qty > 1 && dispatch(addToCart(id, qty - 1));
  //   } else {
  //     dispatch(addToCart(id, qty + 1));
  //   }
  // };
  // const qtyChangeHandler = (type, p, qty) => {
  //   if (type === "dec") {
  //     qty > 1 && dispatch(changeQuantity(p, qty - 1));
  //   } else {
  //     dispatch(changeQuantity(p, qty + 1));
  //   }
  // };
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
    <Container className="mb-5">
      <div>
        <h2>YOUR CART</h2>
        <div className="top">
          <Link to="/">
            <Button>CONTINUE SHOPPING</Button>
          </Link>
          <div>
            <h5>Shopping Cart({cartCount})</h5>
            {/* <h5>Your Wishlist (0)</h5> */}
          </div>
        </div>
        <div className="bottom">
          <div className="info">
            {cartState.map((product) => (
              <CartItem
                key={`${product.cartItemId}`}
                product={product}
                removeHandler={removeFromCartHandler}
                qtyChangeHandler={qtyChangeHandler}
              />
            ))}
          </div>
          <div className="summary">
            <h2 className="summaryTitle">ORDER SUMMARY</h2>
            <div className="summaryItem">
              <h5>Subtotal</h5>
              <p>$ {subtotal}</p>
            </div>
            <div className="summaryItem">
              <h5>Estimated Shipping</h5>
              <p>$ {shipping}</p>
            </div>
            {/* <div className="summaryItem">
              <h5>Shipping Discount</h5>
              <p>$ 0</p>
            </div> */}
            <div className="summaryItem">
              <h5>TOTAL</h5>
              <p>$ {subtotal ? subtotal + shipping : 0}</p>
            </div>
            {/* <StripeCheckout>
            <button>CHECKOUT NOW</button>
            </StripeCheckout> */}
            <Button onClick={() => handleCreateCart(currentUserId, cartState)}>
              CHECKOUT NOW
            </Button>
          </div>
        </div>
        <Button variant="danger" onClick={handleResetCart}>
          Clear Cart
        </Button>
      </div>
    </Container>
  );
};

export default Cart;
