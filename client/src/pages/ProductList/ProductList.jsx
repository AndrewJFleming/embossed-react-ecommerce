import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import "./ProductList.css";
import Newsletter from "../../components/Newsletter/Newsletter";
import Products from "../../components/Products/Products";
import { Container } from "react-bootstrap";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  console.log(filters);

  return (
    <div className="mt-5">
      <Container>
        <h2 className="pageTitle">Dresses</h2>
        <div className="filterContainer">
          <div className="filter">
            <h4>Filter Products:</h4>
            <select id="color" name="color" onChange={handleFilters}>
              <option value="white">White</option>
              <option value="black">Black</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
            </select>
            <select id="size" name="size" onChange={handleFilters}>
              <option value="xs">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
            </select>
          </div>
          <div className="filter">
            <h4>Sort Products:</h4>
            <select id="order" onChange={(e) => setSort(e.target.value)}>
              <option value="newest">Newest</option>
              <option value="asc">Price (asc)</option>
              <option value="desc">Price (desc)</option>
            </select>
          </div>
        </div>
      </Container>
      <Container className="mt-3">
        <Products cat={cat} filters={filters} sort={sort} />
      </Container>
      <Newsletter />
    </div>
  );
};

export default ProductList;
