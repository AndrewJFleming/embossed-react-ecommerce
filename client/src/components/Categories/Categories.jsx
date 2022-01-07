import React, { useEffect, useState } from "react";
import axios from "axios";

import { Row, Col } from "react-bootstrap";
import CategoryItem from "./CategoryItem/CategoryItem";
import { categories } from "../../data";

const Categories = () => {
  const [featuredCats, setFeaturedCats] = useState([]);

  useEffect(() => {
    const getFeaturedCats = async () => {
      const res = await axios.get("/categories");
      const isFeaturedCategory = res.data.filter((x) => !!x.isFeatured);
      setFeaturedCats(isFeaturedCategory);
    };
    getFeaturedCats();
  }, []);

  return (
    <Row>
      {featuredCats.slice(0, 3).map((item) => (
        <Col xs={12} sm={6} md={4} lg={4}>
          <CategoryItem category={item} key={item._id} />
        </Col>
      ))}
    </Row>
  );
};
export default Categories;
