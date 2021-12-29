import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Product.css";

const Product = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  const style = hovered ? { opacity: "1" } : {};

  return (
    <div
      className="productContainer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="circle"></div>
      <img src={product.img} alt="product thumb" />
      <div className="iconsWrapper" style={style}>
        <div className="productIcon">
          <i className="fas fa-shopping-basket"></i>
        </div>
        <div className="productIcon">
          <Link to={`/product/${product._id}`}>
            <i className="fas fa-search"></i>
          </Link>
        </div>
        <div className="productIcon">
          <i className="fas fa-heart"></i>
        </div>
      </div>
    </div>
  );
};
export default Product;
