import React from "react";
import { Link } from "react-router-dom";

import "./CategoryItem.css";
import { Card } from "react-bootstrap";

const CategoryItem = ({ category }) => {
  return (
    <div className="catItemWrapper">
      <Link to={`/product-list/${category.cat}`}>
        <img src={category.img} />
        <div className="catItemInfo">
          <h5>{category.title}</h5>
          <button>Explore</button>
        </div>
      </Link>
    </div>
  );
};
export default CategoryItem;
