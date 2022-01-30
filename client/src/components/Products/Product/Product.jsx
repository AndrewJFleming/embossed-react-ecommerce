import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Product.css";
import { Card } from "react-bootstrap";

const Product = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  const style = hovered ? { opacity: "1" } : {};

  return (
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
            {product.discount ? (
              <p className="sale-name">
                {product.saleName && `*${product.saleName}`}
              </p>
            ) : (
              product?.categories.slice(0, 3).map((c) => (
                <span key={c}>
                  <Link to={`/product-list/${c}`} className="product-list-cat">
                    {c}
                  </Link>
                  &nbsp;
                </span>
              ))
            )}
          </div>
          <div className={`${product.discount && "discount-notice"}`}>
            <h5>${product.price}</h5>
            <p>{product.discount && `${product.discount * 100}% OFF`}</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
export default Product;
