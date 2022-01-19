import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Container, Col, Row, Button } from "react-bootstrap";
import "./SingleProduct.css";
import Newsletter from "../../components/Newsletter/Newsletter";
import { publicRequest } from "../../requestMethods";
import { addToCart } from "../../redux/actions/cart";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CLEAR_ADD_NOTICE } from "../../redux/constants/actionTypes";

const SingleProduct = ({ sales }) => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState("");
  const [discountNotice, setDiscountNotice] = useState(null);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const getProduct = async () => {
  //     try {
  //       const res = await publicRequest.get("/products/find/" + id);
  //       setProduct(res.data);
  //       if (res.data.variants[0]) {
  //         setVariant(res.data.variants[0]);
  //       }
  //       // if (res.data.color[0]) {
  //       //   setColor(res.data.color[0]);
  //       // }
  //       // if (res.data.size[0]) {
  //       //   setSize(res.data.size[0]);
  //       // }
  //     } catch {}
  //   };
  //   getProduct();
  // }, [id]);

  useEffect(() => {
    dispatch({ type: CLEAR_ADD_NOTICE });
  }, []);

  useEffect(() => {
    let fetchedProduct;
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        fetchedProduct = res.data;
        if (res.data.variants[0]) {
          setVariant(res.data.variants[0]);
        }
      } catch {
        console.log("error occurred fetching product");
      }
      let productCopy = fetchedProduct;

      const findDiscount = () => {
        let result = sales.find((t) => t.productId === productCopy?._id);
        if (result) {
          setDiscountNotice(result.percentOff * 100);
          const updatedProduct = {
            ...productCopy,
            price: productCopy.price * result.percentOff,
          };
          productCopy = updatedProduct;
          console.log(productCopy);
        }
      };

      findDiscount();
      setProduct(productCopy);
    };
    getProduct();
  }, [id, sales]);

  const handleQuanity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleAdd = () => {
    dispatch(addToCart(product._id, quantity, variant));
    setTimeout(function () {
      dispatch({ type: CLEAR_ADD_NOTICE });
    }, 2000);
  };

  return (
    <div className="my-5">
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
              <p className={`price ${discountNotice ? "discount-notice" : ""}`}>
                $&nbsp;{product.price}
                {discountNotice && (
                  <span className="percentage-off discount-notice">
                    &nbsp;
                    {discountNotice}% Off!
                  </span>
                )}
              </p>
              <div className="filterContainer">
                <div className="filter">
                  <h4>Variants</h4>
                  <select
                    id="variants"
                    onChange={(e) => setVariant(e.target.value)}
                  >
                    {product.variants?.map((v) => (
                      <option value={v}>{v}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="addContainer">
                <div className="amountContainer">
                  <i
                    className="fas fa-minus"
                    onClick={() => handleQuanity("dec")}
                  ></i>
                  <p className="productAmount">{quantity}</p>
                  <i
                    className="fas fa-plus"
                    onClick={() => handleQuanity("inc")}
                  ></i>
                </div>
                <Button onClick={handleAdd}>ADD TO CART</Button>
                {cart.addToCartNotice && (
                  <h6
                    className={`${
                      cart.addToCartNotice === "Already added..."
                        ? "discount-notice"
                        : ""
                    }`}
                  >
                    {cart.addToCartNotice}
                  </h6>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <Newsletter /> */}
    </div>
  );
};

export default SingleProduct;
