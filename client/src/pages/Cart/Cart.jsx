import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";

import "./Cart.css";

const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [shipping, setShipping] = useState(5.9);
  return (
    <Container className="mb-5">
      <div>
        <h2>YOUR BAG</h2>
        <div className="top">
          <button className="topButton">CONTINUE SHOPPING</button>
          <div className="topText">
            <h5>Shopping Bag(2)</h5>
            <h5>Your Wishlist (0)</h5>
          </div>
          <button className="topButton">CHECKOUT NOW</button>
        </div>
        <div className="bottom">
          <div className="info">
            {cart.products.map((product) => (
              <React.Fragment>
                <div className="product">
                  <div className="productDetail">
                    <img className="productImage" src={product.img} alt="" />
                    <div className="details">
                      <h4>
                        <b>Product:</b> {product.title}
                      </h4>
                      <p>
                        <b>ID:</b> {product._id}
                      </p>
                      <p>
                        <b>Color:</b> {product.color}
                      </p>
                      <p>
                        <b>Size:</b> {product.size}
                      </p>
                    </div>
                  </div>
                  <div className="priceDetail">
                    <div className="productAmountContainer">
                      <i className="fas fa-plus"></i>
                      <p className="productAmount">{product.quantity}</p>
                      <i className="fas fa-minus"></i>
                    </div>
                    <p className="productPrice">
                      $ {product.price * product.quantity}
                    </p>
                  </div>
                </div>
                <hr />
              </React.Fragment>
            ))}
          </div>
          <div className="summary">
            <h2 className="summaryTitle">ORDER SUMMARY</h2>
            <div className="summaryItem">
              <h5>Subtotal</h5>
              <p>$ {cart.total}</p>
            </div>
            <div className="summaryItem">
              <h5>Estimated Shipping</h5>
              <p>$ {shipping}</p>
            </div>
            <div className="summaryItem">
              <h5>Shipping Discount</h5>
              <p>$ 0</p>
            </div>
            <div className="summaryItem">
              <h5>TOTAL</h5>
              <p>$ {cart.total ? cart.total + shipping : 0}</p>
            </div>
            {/* <StripeCheckout>
            <button>CHECKOUT NOW</button>
            </StripeCheckout> */}
            <button>CHECKOUT NOW</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
