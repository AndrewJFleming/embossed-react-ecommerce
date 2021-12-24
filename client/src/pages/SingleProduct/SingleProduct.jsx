import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Container, Col, Row, Button } from "react-bootstrap";
import "./SingleProduct.css";
import Newsletter from "../../components/Newsletter/Newsletter";
import { publicRequest } from "../../requestMethods";

const SingleProduct = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col xs={12} sm={6} md={6} lg={6}>
            <div className="imageContainer">
              <img className="w-100" src={product.img} />
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6}>
            <div className="infoContainer">
              <h4>{product.title}</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                venenatis, dolor in finibus malesuada, lectus ipsum porta nunc,
                at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex,
                eget tristique tortor pretium ut. Curabitur elit justo,
                consequat id condimentum ac, volutpat ornare.
              </p>
              <p className="price">$ 20</p>
              <div className="filterContainer">
                <div className="filter">
                  <h4>Colors</h4>
                  <select id="colors">
                    <option value="white">White</option>
                    <option value="black">Black</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                  </select>
                </div>
                <div className="filter">
                  <h4>Sizes</h4>
                  <select id="sizes">
                    <option value="xs">XS</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                  </select>
                </div>
              </div>
              <div className="addContainer">
                <div className="amountContainer">
                  <i class="fas fa-plus"></i>
                  <p className="productAmount">1</p>
                  <i class="fas fa-minus"></i>
                </div>
                <Button>ADD TO CART</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Newsletter />
    </div>
  );
};

export default SingleProduct;
