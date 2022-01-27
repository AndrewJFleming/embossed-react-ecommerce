import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Button, Card, ListGroup, Container, Form } from "react-bootstrap";
import { userRequest } from "../../../requestMethods";
import "./SingleCategory.css";

const SingleCategory = () => {
  const location = useLocation();
  const catId = location.pathname.split("/")[2];
  const [category, setCategory] = useState({});
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    isSlide: false,
    isFeatured: false,
    img: "",
  });

  const handleUpdate = async () => {
    try {
      await userRequest.put(`/categories/${catId}`, formData);
      window.location.replace("/category/" + catId);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  useEffect(() => {
    const getCat = async () => {
      const res = await userRequest.get("/categories/find/" + catId);
      setCategory(res.data);
      setFormData({
        title: res.data.title,
        desc: res.data.desc,
        isSlide: res.data.isSlide,
        isFeatured: res.data.isFeatured,
        img: res.data.img,
      });
    };
    getCat();
  }, [catId]);

  return (
    <div className="mb-5">
      <Container className="mt-3">
        <Link to="/categories">
          <i class="fas fa-arrow-left">
            &nbsp;<span className="back-link-text">BACK</span>
          </i>
        </Link>
        <div className="mt-3 mb-2 d-flex justify-content-between align-items-center">
          <h1>Category</h1>
          <Link to="/new-category">
            <Button variant="success">Create New</Button>
          </Link>
        </div>
      </Container>
      <Container className="d-flex mb-5">
        <img
          className="catImg"
          src={category.img}
          alt={`${category.title}-cat`}
        />
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Card.Title>{category.title}</Card.Title>
            <Card.Text>{category.desc}</Card.Text>
          </Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <span className="listGroupLabel">Category ID:&nbsp;</span>
              {catId}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="listGroupLabel">Is Slide:&nbsp;</span>
              {category.isSlide ? "Yes" : "No"}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="listGroupLabel">Is Featured:&nbsp;</span>
              {category.isFeatured ? "Yes" : "No"}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
      <Container className="mb-5">
        <h2>Update Category</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={formData.title}
              name="title"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="textarea"
              placeholder={formData.desc}
              value={formData.desc}
              name="desc"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Is Slide</Form.Label>
            <Form.Check
              onClick={(e) => {
                setFormData({
                  ...formData,
                  isSlide: !formData.isSlide,
                });
              }}
              checked={formData.isSlide}
              type="checkbox"
              label="Is Slide"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Is Featured</Form.Label>
            <Form.Check
              onClick={(e) => {
                setFormData({
                  ...formData,
                  isFeatured: !formData.isFeatured,
                });
              }}
              checked={formData.isFeatured}
              type="checkbox"
              label="Is Featured"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              name="img"
              type="text"
              placeholder={formData.img}
              value={formData.img}
              onChange={handleChange}
            />
          </Form.Group>

          <Button onClick={handleUpdate}>Update</Button>
        </Form>
      </Container>
    </div>
  );
};

export default SingleCategory;
