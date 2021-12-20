import React, { useState } from "react";

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
          <i class="fas fa-shopping-basket"></i>
        </div>
        <div className="productIcon">
          <i class="fas fa-search"></i>
        </div>
        <div className="productIcon">
          <i class="fas fa-heart"></i>
        </div>
      </div>
    </div>
  );
};
export default Product;
