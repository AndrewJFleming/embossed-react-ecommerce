import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Button, Card, ListGroup, Container, Form } from "react-bootstrap";
import { userRequest } from "../../requestMethods";
import "./SingleProduct.css";

const SingleProduct = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [productCats, setProductCats] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [categories, setCategories] = useState([]);
  const [price, setPrice] = useState(null);
  const [inStock, setInStock] = useState(false);
  const [img, setImg] = useState("");

  const handleUpdate = async () => {
    try {
      await userRequest.put(`/products/${productId}`, {
        title,
        desc,
        categories,
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

  const handleInStock = () => setInStock(!inStock);

  useEffect(() => {
    const getPost = async () => {
      const res = await userRequest.get("/products/find/" + productId);
      setProduct(res.data);
      setProductCats(res.data.categories);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      setCategories(res.data.categories);
      setPrice(res.data.price);
      setInStock(res.data.inStock);
      setImg(res.data.img);
    };
    getPost();
  }, [productId]);

  return (
    <div className="product">
      <Container className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/new-product">
          <Button className="productAddButton">Create New</Button>
        </Link>
      </Container>
      <Container className="productTop d-flex mb-5">
        <img src={product.img} alt="" />
        <Card className="productCard">
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
              {productCats.map((cat) => (
                <span>
                  &nbsp;&#8226;<em>{cat}</em>
                </span>
              ))}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
      <Container>
        <h2 className="productTitle">Update Product</h2>
        <Form>
          <div>
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
                type="text"
                placeholder={price}
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
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

            <Button onClick={handleUpdate} className="productButton">
              Update
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default SingleProduct;
