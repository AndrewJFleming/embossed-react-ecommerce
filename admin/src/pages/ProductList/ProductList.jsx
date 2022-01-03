import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/Product/Product";
import { Table, Button } from "react-bootstrap";
// import { productRows } from "../../dummyData";
import { userRequest } from "../../requestMethods";
import { deleteProduct, getProducts } from "../../redux/apiCalls";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await userRequest.get("products");
        setProducts(res.data);
      } catch {}
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
              <td className="text-center">
                <div>
                  <Link to={"/product/" + product._id}>
                    {/* <Button variant="dark">Edit</Button> */}
                    <i className="fas fa-edit editIcon"></i>
                  </Link>
                  {/* <Button
                  className="ml-2"
                  variant="danger"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </Button> */}
                  <i
                    className="fas fa-trash-alt deleteIcon"
                    onClick={() => handleDelete(product._id)}
                  ></i>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
