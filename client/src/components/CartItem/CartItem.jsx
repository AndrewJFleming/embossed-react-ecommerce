import React from "react";

import "./CartItem.css";
import { Link } from "react-router-dom";

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
        <b>ID:</b> {product.productId}
      </p>
      <p>
        <b>Variant:</b> {product.variants}
      </p>
      {/* <p>
        <b>Size:</b> {product.size}
      </p> */}
      <div className="amountContainer">
        <i
          className="fas fa-minus"
          onClick={() =>
            qtyChangeHandler("dec", product.productId, product.quantity)
          }
        ></i>
        <p className="productAmount">{product.quantity}</p>
        <i
          className="fas fa-plus"
          onClick={() =>
            qtyChangeHandler("inc", product.productId, product.quantity)
          }
        ></i>
      </div>
      <p className="productPrice">$ {product.price * product.quantity}</p>
      <button
        className="cartItem__deleteBtn"
        onClick={() => removeHandler(product.productId)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
