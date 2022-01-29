import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";
import "./FeaturedSale.css";

const FeaturedSale = ({ sales }) => {
  const [featSale, setFeatSale] = useState(null);

  useEffect(() => {
    const featSales = sales.filter((sales) => sales?.isFeatured);
    //In case no sales are set as featured, feature the first sales array item.
    //In case multiple sales are set as featured, display the first featSales array item.
    setFeatSale(featSale ? featSales[0] : sales[0]);
  }, [sales]);

  return (
    <div
      className="newsletterWrapper"
      style={{ backgroundImage: `url(${featSale?.img})` }}
    >
      <Link
        className="featured-sale-link"
        to={`/product/${featSale?.productId}`}
      >
        <h2>{featSale?.title}</h2>
      </Link>
      <p>{featSale?.desc}</p>
    </div>
  );
};

export default FeaturedSale;
