import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import * as uuid from "uuid";

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
  const [allProducts, setAllProducts] = useState([]);
  const [addCartProduct, setAddCartProduct] = useState({
    productId: "",
  });
  const [variantOptions, setVariantOptions] = useState({
    variants: [],
  });
  const [formFields, setFormFields] = useState({
    title: "",
    price: 0,
    quantity: 0,
  });

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

  useEffect(() => {
    const found = allProducts.find(
      (product) => product._id === addCartProduct.productId
    );
    if (found) {
      setVariantOptions({
        ...variantOptions,
        variants: found?.variants,
      });

      setFormFields({
        ...formFields,
        userId: cartProducts.userId,
        cartItemId: uuid.v4(),
        title: found?.title,
        productId: found?._id,
        img: found?.img,
        price: found?.price,
        quantity: 1,
        variant: found?.variants[0],
      });
    } else {
      setVariantOptions({
        ...variantOptions,
        variants: [],
      });

      setFormFields({
        ...formFields,
        cartItemId: "",
        title: "",
        productId: "",
        img: "",
        price: 0,
        quantity: 0,
        variant: "",
      });
    }
  }, [allProducts, addCartProduct]);

  //Combined both updateHandlers into one.
  const handleUpdate = async (cartItemId) => {
    let updatedCart;
    if (typeof cartItemId === "string") {
      updatedCart = {
        userId: cartProducts.userId,
        products: cartProducts.products.filter(
          (p) => p.cartItemId !== cartItemId
        ),
      };
    } else {
      //handler for adding products has no prop
      //so cartItemId equals event object instead of string
      updatedCart = {
        userId: cartProducts.userId,
        products: [...cartProducts.products, formFields],
      };
    }
    try {
      await userRequest.put(`/carts/${cartId}`, updatedCart);
      window.location.replace("/cart/" + cartId);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mb-5">
      <Container className="mt-5 mb-2">
        <h1>Cart</h1>
      </Container>
      <Container className="mb-3">
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <span className="listGroupLabel">User ID:&nbsp;</span>
              <Link to={`/user/${cart?.userId}`}>{cart?.userId}</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="listGroupLabel">Cart ID:&nbsp;</span>
              {cart?._id}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="listGroupLabel">Total:&nbsp;</span>$
              {cart?.products
                .reduce((price, item) => price + item.price * item.quantity, 0)
                .toFixed(2)}
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
                  <div className="d-flex justify-content-between w-100">
                    <h6>{p.title}</h6>
                    <i
                      className="fas fa-trash-alt deleteIcon"
                      onClick={() => handleUpdate(p.cartItemId)}
                    ></i>
                  </div>
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
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="mb-5">
        <h2>Add Cart Product</h2>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3">
                <Form.Select
                  onChange={(e) => {
                    setAddCartProduct({
                      ...addCartProduct,
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
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  value={formFields.price}
                  min="0"
                  onChange={(e) => {
                    setFormFields({
                      ...formFields,
                      price: e.target.valueAsNumber,
                    });
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  value={formFields.quantity}
                  min="1"
                  onChange={(e) => {
                    setFormFields({
                      ...formFields,
                      quantity: e.target.valueAsNumber,
                    });
                  }}
                />
              </Form.Group>
              {variantOptions.variants.length > 0 && (
                <Form.Group className="mb-3">
                  <Form.Select
                    onChange={(e) => {
                      setFormFields({
                        ...formFields,
                        variant: e.target.value,
                      });
                    }}
                  >
                    <option>Variant</option>
                    {variantOptions.variants?.map((v) => (
                      <option value={v}>{v}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              )}
              <Button onClick={handleUpdate}>Add to Cart</Button>
            </Form>
          </Col>
          <Col>
            <Card className="my-2">
              {formFields.img ? (
                <Card.Img
                  className="product-card-img"
                  variant="top"
                  src={formFields?.img}
                />
              ) : (
                <h6
                  className="text-center p-5 m-0 font-italic"
                  style={{ opacity: "0.75", backgroundColor: "lightgray" }}
                >
                  Product Image
                </h6>
              )}
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <span className="listGroupLabel">Product ID:&nbsp;</span>
                  {formFields?.productId}
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className="listGroupLabel">Cart Item ID:&nbsp;</span>
                  {formFields?.cartItemId}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SingleCart;
