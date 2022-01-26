import React, { useState } from "react";

import { userRequest } from "../../../requestMethods";
import { Container, Button, Form } from "react-bootstrap";

const NewProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    categories: [],
    variants: [],
    price: 0,
    inStock: false,
    img: "",
  });

  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const handleSplit = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.split(","),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await userRequest.post("/products", formData);
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
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="product name"
            value={formData.title}
            name="title"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="description"
            value={formData.desc}
            name="desc"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder={formData.price}
            value={formData.price}
            name="price"
            min="0"
            step="0.01"
            onChange={(e) => {
              setFormData({
                ...formData,
                price: e.target.valueAsNumber,
              });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Categories</Form.Label>
          <Form.Control
            type="text"
            placeholder="stationary,postcards"
            name="categories"
            value={formData.categories}
            onChange={handleSplit}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Variants</Form.Label>
          <Form.Control
            type="text"
            placeholder="red,blue"
            name="variants"
            value={formData.variants}
            onChange={handleSplit}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            checked={formData.inStock}
            label="In Stock"
            onClick={(e) => {
              setFormData({
                ...formData,
                inStock: !formData.inStock,
              });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Photo</Form.Label>
          <Form.Control
            type="text"
            placeholder={formData.img}
            value={formData.img}
            name="img"
            onChange={handleChange}
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
