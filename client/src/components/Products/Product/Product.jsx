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
    <Card className="card">
      <Card.Img className="cardImg" variant="top" src={product.img} />
      <Card.Body className="cardBody">
        <Link to={`/product/${product._id}`}>
          <Card.Title>{product.title}</Card.Title>
        </Link>
        <h4 className="">${product.price}</h4>
      </Card.Body>
    </Card>
  );
};
export default Product;
