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
              <p>{product.desc}</p>
              <p className="price">$&nbsp;{product.price}</p>
              <div className="filterContainer">
                <div className="filter">
                  <h4>Colors</h4>
                  <select id="colors">
                    {product.color?.map((c) => (
                      <option value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div className="filter">
                  <h4>Sizes</h4>
                  <select id="sizes">
                    {product.size?.map((s) => (
                      <option value={s}>{s}</option>
                    ))}
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
