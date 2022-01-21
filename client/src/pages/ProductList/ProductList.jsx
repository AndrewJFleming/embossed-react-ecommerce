import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import "./ProductList.css";
import FeaturedSale from "../../components/FeaturedSale/FeaturedSale";
import Products from "../../components/Products/Products";
import { Container } from "react-bootstrap";

const ProductList = ({ sales }) => {
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
    console.log(filters);
  };

  return (
    <div className="my-5">
      <Container>
        <h2 className="pageTitle">{cat}</h2>
        <div className="filterContainer">
          {cat && (
            <div className="filter">
              <h5>Filter by Variant:</h5>
              <select id="variants" name="variants" onChange={handleFilters}>
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="black">black</option>
              </select>
            </div>
          )}
          <div className="filter">
            <h5>Sort Products:</h5>
            <select id="order" onChange={(e) => setSort(e.target.value)}>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="asc">Price (asc)</option>
              <option value="desc">Price (desc)</option>
            </select>
          </div>
        </div>
      </Container>
      <Container className="mt-3">
        <Products cat={cat} filters={filters} sort={sort} sales={sales} />
      </Container>
      <FeaturedSale />
    </div>
  );
};

export default ProductList;
