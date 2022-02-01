import React from "react";

import "./CartItem.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const CartItem = ({ product, qtyChangeHandler, removeHandler }) => {
  return (
    <div className="mb-4 cartitem d-flex ">
      <div>
        <img className="cartItem-image" src={product.img} alt="" />
      </div>
      <div className="px-3 d-flex mh-100 flex-column justify-content-between">
        <div>
          <Link to={`/product/${product.productId}`} className="cartItem-name">
            <h4>
              <b>Product:</b> {product.title}
            </h4>
          </Link>
          <p>
            <b>Product ID:</b> {product.productId}
          </p>
          <p>
            <b>Cart Item ID:</b> {product.cartItemId}
          </p>
          <p>
            <b>Variant:</b> {product.variant}
          </p>
          <p className="cartItem-price">$ {product.price * product.quantity}</p>
        </div>
        <div className="d-flex justify-content-between">
          <div className="amount-container">
            <Button variant="secondary">
              <i
                className="fas fa-minus"
                onClick={() =>
                  qtyChangeHandler("dec", product.cartItemId, product.quantity)
                }
              ></i>
            </Button>
            <p className="product-amount">{product.quantity}</p>
            <Button variant="secondary">
              <i
                className="fas fa-plus"
                onClick={() =>
                  qtyChangeHandler("inc", product.cartItemId, product.quantity)
                }
              ></i>
            </Button>
          </div>
          <button
            className="cartItem-deleteBtn"
            onClick={() => removeHandler(product.cartItemId, product.variant)}
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
