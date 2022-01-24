import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  Row,
  Col,
  Button,
  Card,
  ListGroup,
  Container,
  Form,
} from "react-bootstrap";
import { userRequest } from "../../requestMethods";
import "./SingleCart.css";

const SingleCart = () => {
  const location = useLocation();
  const cartId = location.pathname.split("/")[2];
  const [cart, setCart] = useState();
  const [cartProducts, setCartProducts] = useState({
    userId: "",
    products: [],
  });

  const handleUpdate = async () => {
    try {
      await userRequest.put(`/products/${cartId}`, cartProducts);
      window.location.replace("/product/" + cartId);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getCart = async () => {
      const res = await userRequest.get("/carts/find/" + cartId);
      setCart(res.data);
      setCartProducts({
        userId: res.data.userId,
        products: res.data.products,
      });
    };
    getCart();
  }, [cartId]);

  useEffect(() => {
    console.log(cartProducts.products);
  }, [cartProducts]);

  return (
    <div className="mb-5">
      <Container className="mt-5 mb-2 d-flex justify-content-between align-items-center">
        <h1>Cart</h1>
        <Link to="/new-product">
          <Button variant="success">Create New</Button>
        </Link>
      </Container>
      <Container className="mb-3">
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <span className="listGroupLabel">Cart ID:&nbsp;</span>
              {cart?._id}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="listGroupLabel">User ID:&nbsp;</span>
              <Link to={`/user/${cart?.userId}`}>{cart?.userId}</Link>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
      <Container className="mb-3">
        <h3>Products</h3>
        <Row>
          {cart?.products.map((p) => (
            <Col xs={12} sm={6} md={4} lg={3} key={p._id}>
              <Card>
                <Card.Img
                  className="product-card-img"
                  variant="top"
                  src={p.img}
                />
                <Card.Body>
                  <h6>{p.title}</h6>

                  <div className="product-card-Id-wrapper">
                    <span className="product-card-Id">ProductID:&nbsp;</span>
                    <Link to={`/product/${p.productId}`}>{p.productId}</Link>
                  </div>
                  <div className="product-card-Id-wrapper mb-2">
                    <span className="product-card-Id">CartItemID:&nbsp;</span>
                    {p.cartItemId}
                  </div>
                  <ul>
                    <li>
                      <span className="listGroupLabel">Variant:&nbsp;</span>
                      {p.variant}
                    </li>
                    <li>
                      <span className="listGroupLabel">Price:&nbsp;</span>$
                      {p.price}
                    </li>
                    <li>
                      <span className="listGroupLabel">Qty:&nbsp;</span>
                      {p.quantity}
                    </li>
                    <li>
                      <span className="listGroupLabel">InStock?:&nbsp;</span>
                      {p.inStock ? <span>Yes</span> : <span>No</span>}
                    </li>
                  </ul>
                  {/* <ListGroup variant="flush">
                    <ListGroup.Item>
                      <span className="listGroupLabel">ProductID:&nbsp;</span>
                      {p.productId}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span className="listGroupLabel">CartItemID:&nbsp;</span>
                      {p.cartItemId}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span className="listGroupLabel">Variant:&nbsp;</span>
                      {p.variant}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span className="listGroupLabel">Price:&nbsp;</span>$
                      {p.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span className="listGroupLabel">Qty:&nbsp;</span>
                      {p.quantity}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span className="listGroupLabel">InStock?:&nbsp;</span>
                      {p.inStock ? <span>Yes</span> : <span>No</span>}
                    </ListGroup.Item>
                  </ListGroup> */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="mb-5">
        <h2>Update Cart Products</h2>
        {/* <Form>
          <Form.Group className="mb-3">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              value={formData.title}
              name="title"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              type="textarea"
              placeholder={formData.desc}
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
              placeholder={formData.categories}
              value={formData.categories}
              name="categories"
              onChange={handleSplit}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Variants</Form.Label>
            <Form.Control
              type="text"
              placeholder={formData.variants}
              value={formData.variants}
              name="variants"
              onChange={handleSplit}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Availability</Form.Label>
            <Form.Check
              onClick={(e) => {
                setFormData({
                  ...formData,
                  inStock: !formData.inStock,
                });
              }}
              checked={formData.inStock}
              type="checkbox"
              label="In Stock"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Photo</Form.Label>
            <Form.Control
              name="img"
              type="text"
              placeholder={formData.img}
              value={formData.img}
              onChange={handleChange}
            />
          </Form.Group>

          <Button onClick={handleUpdate}>Update</Button>
        </Form> */}
      </Container>
    </div>
  );
};

export default SingleCart;
