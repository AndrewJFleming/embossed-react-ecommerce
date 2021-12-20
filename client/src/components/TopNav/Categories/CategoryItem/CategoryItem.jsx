import React from "react";

import "./CategoryItem.css";
import { Card } from "react-bootstrap";

const CategoryItem = ({ category }) => {
  return (
    <div className="catItemWrapper">
      <img src={category.img} />
      <div className="catItemInfo">
        <h5>{category.title}</h5>
        <button>Explore</button>
      </div>
    </div>
  );
};
export default CategoryItem;
