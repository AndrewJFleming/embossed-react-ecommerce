import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Product.css";
import { Card } from "react-bootstrap";

const Product = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  const style = hovered ? { opacity: "1" } : {};

  return (
    // <div
    //   className="productContainer"
    //   onMouseEnter={() => setHovered(true)}
    //   onMouseLeave={() => setHovered(false)}
    // >
    //   <div className="circle"></div>
    //   <img src={product.img} alt="product thumb" />
    //   <div className="iconsWrapper" style={style}>
    //     <div className="productIcon">
    //       <Link to={`/product/${product._id}`}>
    //         <h5 className="">{product.title}</h5>
    //       </Link>
    //       <h5 className="">&nbsp;${product.price}</h5>
    //     </div>
    //   </div>
    // </div>
    <Card>
      <Link to={`/product/${product._id}`} className="product-link">
        <Card.Img className="cardImg" variant="top" src={product.img} />
      </Link>
      <Card.Body>
        <div className="card-inner">
          <div>
            <Link to={`/product/${product._id}`} className="product-link">
              <h5 className="product-title">{product.title}</h5>
            </Link>
            <p className="sale-name">
              {product.saleName && `*${product.saleName}`}
            </p>
          </div>
          <div className={`${product.discount && "discount-notice"}`}>
            <h5>${product.price}</h5>
            <p>{product.discount && `%${product.discount * 100} OFF`}</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
export default Product;
