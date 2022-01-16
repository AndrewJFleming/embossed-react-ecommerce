import React from "react";

import "./CartItem.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const CartItem = ({ product, qtyChangeHandler, removeHandler }) => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img className="productImage" src={product.img} alt="" />
      </div>
      <Link to={`/product/${product.productId}`} className="cartItem__name">
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
      {/* <p>
        <b>Size:</b> {product.size}
      </p> */}
      <div className="amountContainer">
        <Button>
          <i
            className="fas fa-minus"
            onClick={() =>
              qtyChangeHandler("dec", product.cartItemId, product.quantity)
            }
          ></i>
        </Button>
        <p className="productAmount">{product.quantity}</p>
        <Button>
          <i
            className="fas fa-plus"
            onClick={() =>
              qtyChangeHandler("inc", product.cartItemId, product.quantity)
            }
          ></i>
        </Button>
      </div>
      <p className="productPrice">$ {product.price * product.quantity}</p>
      <button
        className="cartItem__deleteBtn"
        onClick={() => removeHandler(product.cartItemId, product.variant)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
