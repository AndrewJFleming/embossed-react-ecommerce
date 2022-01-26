import React, { useState, useEffect } from "react";

import { userRequest } from "../../../requestMethods";
import { Container, Form, Button } from "react-bootstrap";
import "./NewSale.css";

const NewSale = () => {
  const [formData, setFormData] = useState({
    title: "",
    percentOff: 0,
    productId: "",
    isActive: false,
    isFeatured: false,
    img: "",
  });
  const [allProducts, setAllProducts] = useState([]);

  //Get products to populate select dropdown.
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await userRequest.get("products");
        setAllProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);

  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await userRequest.post("/sales/", formData);
      window.location.replace("/sale/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className="my-5">
      <h1>New Sale</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder={formData.title}
            value={formData.title}
            name="title"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Select
            onChange={(e) => {
              setFormData({
                ...formData,
                productId: e.target.value,
              });
            }}
          >
            <option>Select Product</option>
            {allProducts?.map((p) => (
              <option value={p._id}>{p.title}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Percent Off</Form.Label>
          <Form.Control
            type="number"
            value={formData.percentOff}
            min="0"
            max="1"
            step="0.01"
            name="percentOff"
            onChange={(e) => {
              setFormData({
                ...formData,
                percentOff: e.target.valueAsNumber,
              });
            }}
          />
          <Form.Text muted>
            Percentage the discounted product's price will be reduced by.
          </Form.Text>
          <Form.Text muted>
            *<em>Input desired discount in decimal form.</em>
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Is Active</Form.Label>
          <Form.Check
            className="checkbox-input"
            type="checkbox"
            checked={formData.isActive}
            onClick={(e) => {
              setFormData({
                ...formData,
                isActive: !formData.isActive,
              });
            }}
          />
          <Form.Text muted className="mt-4">
            Determine whether sale discount percentage will be applied to
            respective product.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Is Featured</Form.Label>
          <Form.Check
            className="checkbox-input"
            type="checkbox"
            checked={formData.isFeatured}
            onClick={(e) => {
              setFormData({
                ...formData,
                isFeatured: !formData.isFeatured,
              });
            }}
          />
          <Form.Text muted className="mt-4">
            Determine whether sale will be featured on site banner.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Sale Banner Image</Form.Label>
          <Form.Control
            type="text"
            value={formData.img}
            name="img"
            onChange={handleChange}
          />
          <Form.Text muted>
            BG Image that will be featured on sale banner.
          </Form.Text>
        </Form.Group>

        <Button onClick={handleSubmit}>Create</Button>
      </Form>
    </Container>
  );
};

export default NewSale;
