import React from "react";
import { Link } from "react-router-dom";

import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="productContainer">
      <Link to={`/product/${product._id}`}>
        <img src={product.img} alt="product thumb" />
      </Link>
      <div className="infoWrapper">
        <h4>
          <Link to={`/product/${product._id}`}>{product.name}</Link>
        </h4>
        <p>Stock: {product.stock}</p>
        <p>Status: {product.status}</p>
        <p>Price: {product.price}</p>
      </div>
    </div>
  );
};

export default Product;
