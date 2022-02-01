import React from "react";
import { Link } from "react-router-dom";

import { Card } from "react-bootstrap";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <Card>
      <Link to={`/product/${product._id}`} className="productList-card-link">
        <Card.Img
          className="productList-card-image"
          variant="top"
          src={product.img}
        />
      </Link>
      <Card.Body>
        <div className="card-inner">
          <div>
            <Link
              to={`/product/${product._id}`}
              className="productList-card-link"
            >
              <h5 className="productList-card-title">{product.title}</h5>
            </Link>
            {product.discount ? (
              <p className="sale-name">
                {product.saleName && `*${product.saleName}`}
              </p>
            ) : (
              product?.categories.slice(0, 3).map((c) => (
                <span key={c}>
                  <Link
                    to={`/product-list/${c}`}
                    className="productList-card-cat"
                  >
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
