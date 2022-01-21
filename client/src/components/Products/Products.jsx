import React, { useState, useEffect } from "react";
import axios from "axios";

import { Row, Col } from "react-bootstrap";
import Product from "./Product/Product";
// import { popularProducts } from "../../data";

const Products = ({ cat, filters, sort, sales }) => {
  const [products, setProducts] = useState([]);
  const [productsProcessed, setProductsProcessed] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat ? `/products?category=${cat}` : "/products/"
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    let cartItemsCopy = products;
    let i = 0;

    const findMatches = () => {
      cartItemsCopy.forEach((element) => {
        let result = sales?.find((s) => s.productId === element._id);
        if (result) {
          const newCartState = [...cartItemsCopy];
          newCartState[i] = {
            ...element,
            price: element.price * result.percentOff,
            discount: result.percentOff,
            saleName: result.title,
          };
          cartItemsCopy = newCartState;
        }
        ++i;
      });
      setProductsProcessed(cartItemsCopy);
    };

    findMatches();
  }, [products, sales]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        productsProcessed.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [productsProcessed, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      );
    } else if (sort === "oldest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Row>
      {cat
        ? filteredProducts.map((item) => (
            <Col xs={12} sm={6} md={4} lg={3} key={item._id}>
              <Product product={item} />
            </Col>
          ))
        : productsProcessed.slice(0, 8).map((item) => (
            <Col xs={12} sm={6} md={4} lg={3} key={item._id}>
              <Product product={item} />
            </Col>
          ))}
    </Row>
  );
};
export default Products;
