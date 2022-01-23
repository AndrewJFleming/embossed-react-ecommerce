import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Button, Card, ListGroup, Container, Form } from "react-bootstrap";
import { userRequest } from "../../requestMethods";
import "./SingleProduct.css";

const SingleProduct = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [categories, setCategories] = useState([]);
  const [variants, setVariants] = useState([]);
  const [price, setPrice] = useState(0);
  const [inStock, setInStock] = useState(false);
  const [img, setImg] = useState("");

  const handleUpdate = async () => {
    try {
      await userRequest.put(`/products/${productId}`, {
        title,
        desc,
        categories,
        variants,
        price,
        inStock,
        img,
      });
      window.location.replace("/product/" + productId);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCat = (e) => {
    setCategories(e.target.value.split(","));
  };
  const handleVariants = (e) => {
    setVariants(e.target.value.split(","));
  };

  const handleInStock = () => setInStock(!inStock);

  useEffect(() => {
    const getPost = async () => {
      const res = await userRequest.get("/products/find/" + productId);
      setProduct(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      setCategories(res.data.categories);
      setVariants(res.data.variants);
      setPrice(res.data.price);
      setInStock(res.data.inStock);
      setImg(res.data.img);
    };
    getPost();
  }, [productId]);

  return (
    <div className="mb-5">
      <Container className="mt-5 mb-2 d-flex justify-content-between align-items-center">
        <h1>Product</h1>
        <Link to="/new-product">
          <Button variant="success">Create New</Button>
        </Link>
      </Container>
      <Container className="d-flex mb-5">
        <img
          className="productImg"
          src={product.img}
          alt={`${product.title}-product`}
        />
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.desc}</Card.Text>
          </Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <span className="listGroupLabel">Product ID:&nbsp;</span>
              {productId}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="listGroupLabel">Price:&nbsp;</span>$
              {product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="listGroupLabel">In Stock:&nbsp;</span>
              {product.inStock ? "Yes" : "No"}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="listGroupLabel">Categories:&nbsp;</span>
              {categories.map((c) => (
                <span>
                  &nbsp;&#8226;<em>{c}</em>
                </span>
              ))}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="listGroupLabel">Variants:&nbsp;</span>
              {variants.map((v) => (
                <span>
                  &nbsp;&#8226;<em>{v}</em>
                </span>
              ))}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
      <Container className="mb-5">
        <h2>Update Product</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              type="textarea"
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
              placeholder={price}
              value={price}
              onChange={(e) => {
                setPrice(e.target.valueAsNumber);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Categories</Form.Label>
            <Form.Control
              type="text"
              placeholder={categories}
              value={categories}
              onChange={handleCat}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Variants</Form.Label>
            <Form.Control
              type="text"
              placeholder={variants}
              value={variants}
              onChange={handleVariants}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Availability</Form.Label>
            <Form.Check
              onClick={handleInStock}
              checked={inStock}
              type="checkbox"
              label="In Stock"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Photo</Form.Label>
            <Form.Control
              name="photo"
              type="text"
              placeholder={img}
              value={img}
              onChange={(e) => {
                setImg(e.target.value);
              }}
            />
          </Form.Group>

          <Button onClick={handleUpdate}>Update</Button>
        </Form>
      </Container>
    </div>
  );
};

export default SingleProduct;
