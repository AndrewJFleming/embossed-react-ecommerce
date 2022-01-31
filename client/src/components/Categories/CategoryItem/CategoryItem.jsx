import React from "react";
import { Link } from "react-router-dom";

import "./CategoryItem.css";

const CategoryItem = ({ category }) => {
  return (
    <div className="catItemWrapper">
      <Link to={`/product-list/${category.title}`}>
        <img src={category.img} alt={`${category.title} homepage cart thumb`} />
        <div className="catItemInfo">
          <h5>{category.title}</h5>
          <button>Explore</button>
        </div>
      </Link>
    </div>
  );
};
export default CategoryItem;
