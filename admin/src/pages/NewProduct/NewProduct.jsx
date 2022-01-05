import React, { useState } from "react";

import { userRequest } from "../../requestMethods";
import { Container, Button, Form } from "react-bootstrap";

const NewProduct = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [categories, setCategories] = useState([]);
  const [price, setPrice] = useState(0);
  const [inStock, setInStock] = useState(false);
  const [img, setImg] = useState("");

  const handleCats = (e) => {
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
    <Container className="my-5">
      <h1>New Product</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder={title}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder={desc}
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder={`$${price}`}
            value={`$${price}`}
            onChange={(e) => {
              setPrice(e.target.valueAsNumber);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Categories</Form.Label>
          <Form.Control
            type="email"
            placeholder="stationary,postcards"
            value={categories}
            onChange={handleCats}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            checked={inStock}
            label="In Stock"
            onClick={handleInStock}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Photo</Form.Label>
          <Form.Control
            type="text"
            placeholder={img}
            value={img}
            onChange={(e) => {
              setImg(e.target.value);
            }}
          />
          <Form.Text muted>
            Provide URL for existing image on the web.
          </Form.Text>
        </Form.Group>

        <Button onClick={handleSubmit}>Create</Button>
      </Form>
    </Container>
  );
};

export default NewProduct;
