import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { productRows } from "../../dummyData";
import { Button } from "react-bootstrap";
import "./SingleProduct.css";

const Product = () => {
  const [product, setProduct] = useState({});
  const location = useLocation();
  const productId = location.pathname.split("/")[2];

  useEffect(() => {
    const dummyProduct = productRows.find(
      (product) => product._id == productId
    );
    setProduct(dummyProduct);
  }, [productId]);

  return <div className="product">{product.name}</div>;
};

export default Product;
