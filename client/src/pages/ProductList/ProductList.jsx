import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

import FeaturedSale from "../../components/FeaturedSale/FeaturedSale";
import Products from "../../components/Products/Products";
import { Container } from "react-bootstrap";
import "./ProductList.css";

const ProductList = ({ sales }) => {
  const location = useLocation();
  const { category } = useParams();
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <div className="mt-5">
      <Container>
        <h2 className="page-title">{category}</h2>
        <div className="mt-4 d-flex justify-content-between">
          {category && (
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
        <Products cat={category} filters={filters} sort={sort} sales={sales} />
      </Container>
      <FeaturedSale sales={sales} />
    </div>
  );
};

export default ProductList;
