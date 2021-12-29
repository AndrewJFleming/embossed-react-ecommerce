import React from "react";
import { Link } from "react-router-dom";

import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="productContainer">
      <div className="circle"></div>
      <img src={product.img} alt="product thumb" />
      <div className="iconsWrapper">
        <div className="productIcon">
          <Link to={`/product/${product._id}`}>
            <p>{product.name}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
