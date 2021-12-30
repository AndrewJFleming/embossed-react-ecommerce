import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/Product/Product";
import { Table, Button } from "react-bootstrap";
import { productRows } from "../../dummyData";
import "./ProductList.css";

const ProductList = () => {
  // const products = useSelector((state) => state.product.products);
  const [products, setProducts] = useState(productRows);

  const handleDelete = (id) => {
    setProducts(products.filter((item) => item._id !== id));
  };

  return (
    <div className="productList">
      {/* {products.slice(0, 8).map((item) => (
        <Product product={item} key={item.id} />
      ))} */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
            <th>Stock</th>
            <th>InStock</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <td>{product._id}</td>
              <td>{product.title}</td>
              <td>{product.desc}</td>
              <td>
                <img className="productThumb" src={product.img} />
              </td>
              <td>{product.stock}</td>
              <td>{product.inStock ? "Yes" : "No"}</td>
              <td>{product.price}</td>
              <td>
                <Link to={"/product/" + product._id}>
                  <Button variant="dark">Edit</Button>
                </Link>
                <Button
                  className="ml-2"
                  variant="danger"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
