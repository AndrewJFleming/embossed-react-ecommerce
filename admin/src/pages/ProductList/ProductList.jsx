import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/Product/Product";
import { productRows } from "../../dummyData";

const ProductList = () => {
  // const products = useSelector((state) => state.product.products);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productRows);
  }, []);

  return (
    <div className="productList">
      {products.slice(0, 8).map((item) => (
        <Product product={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductList;
