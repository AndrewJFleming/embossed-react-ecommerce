import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Container,
  Table,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import { userRequest } from "../../requestMethods";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await userRequest.get("products");
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await userRequest.delete(`/products/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className="my-5">
      {/* {products.slice(0, 8).map((item) => (
        <Product product={item} key={item.id} />
      ))} */}
      <span className="mb-2 d-flex justify-content-between align-items-center">
        <h1>My Products</h1>
        <Link to="/new-user">
          <Button variant="success">Create New</Button>
        </Link>
      </span>

      <Table striped bordered responsive size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Desc</th>
            <th>Image</th>
            <th>InStock</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <td>
                <div className="productIdWrapper">{product._id}</div>
                <div>
                  <Link to={"/product/" + product._id}>
                    <i className="fas fa-edit editIcon"></i>
                  </Link>
                  <i
                    className="fas fa-trash-alt deleteIcon"
                    onClick={() => handleDelete(product._id)}
                  ></i>
                </div>
              </td>
              <td>{product.title}</td>
              <td>
                <OverlayTrigger overlay={<Tooltip>{product.desc}</Tooltip>}>
                  <span>
                    <span>{product.desc.substring(0, 35) + "..."}</span>
                  </span>
                </OverlayTrigger>
              </td>
              <td>
                <img
                  className="productThumb"
                  src={product.img}
                  alt={`${product.title}-thumb`}
                />
              </td>
              <td>{product.inStock ? "Yes" : "No"}</td>
              <td>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ProductList;
