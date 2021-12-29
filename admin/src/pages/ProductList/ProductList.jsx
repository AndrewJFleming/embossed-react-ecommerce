import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/Product/Product";

const ProductList = () => {
  // const products = useSelector((state) => state.product.products);
  const [products, setProducts] = useState([]);

  return (
    <div className="productList">
      {products.slice(0, 8).map((item) => (
        <Product item={item} key={item.id} />
      ))}
      <Product />
    </div>
  );
};

export default ProductList;
