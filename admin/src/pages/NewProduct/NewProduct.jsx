import React, { useState } from "react";

import { userRequest } from "../../requestMethods";
import { Button } from "react-bootstrap";
import "./NewProduct.css";

const NewProduct = () => {
  // const [inputs, setInputs] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [categories, setCategories] = useState([]);
  const [price, setPrice] = useState(null);
  const [inStock, setInStock] = useState(false);
  const [img, setImg] = useState("");

  // const handleChange = (e) => {
  //   setInputs((prev) => {
  //     return { ...prev, [e.target.name]: e.target.value };
  //   });
  // };

  const handleCat = (e) => {
    setCategories(e.target.value.split(","));
  };

  const handleInStock = () => setInStock(!inStock);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      title,
      desc,
      categories,
      price,
      inStock,
      img,
    };
    try {
      const res = await userRequest.post("/products", newProduct);
      window.location.replace("/product/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" onChange={() => {}} />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            name="title"
            type="text"
            placeholder="title..."
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            name="desc"
            type="text"
            placeholder="description..."
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            name="price"
            type="number"
            placeholder="price..."
            onChange={(e) => {
              setPrice(e.target.valueAsNumber);
            }}
          />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input
            type="text"
            placeholder="notebooks,postcards"
            onChange={handleCat}
          />
        </div>
        <div className="addProductItem">
          <label>In Stock</label>
          <input onClick={handleInStock} checked={inStock} type="checkbox" />
        </div>
        <div className="addProductItem">
          <label>Photo</label>
          <input
            name="photo"
            type="text"
            placeholder="image url..."
            onChange={(e) => {
              setImg(e.target.value);
            }}
          />
        </div>
        <Button onClick={handleSubmit} className="addProductButton">
          Create
        </Button>
      </form>
    </div>
  );
};

export default NewProduct;
