import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import { Container, Col, Row, Button } from "react-bootstrap";
import FeaturedSale from "../../components/FeaturedSale/FeaturedSale";
import { publicRequest } from "../../requestMethods";
import { addToCart } from "../../redux/actions/cart";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CLEAR_ADD_NOTICE } from "../../redux/constants/actionTypes";
import "./SingleProduct.css";

const SingleProduct = ({ sales }) => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState("");
  const [discountNotice, setDiscountNotice] = useState(null);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    dispatch({ type: CLEAR_ADD_NOTICE });
  }, [dispatch]);

  useEffect(() => {
    let fetchedProduct;
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(
          "https://embossed-react-ecommerce.herokuapp.com/products/find/" + id
        );
        fetchedProduct = res.data;
        if (res.data.variants[0]) {
          setVariant(res.data.variants[0]);
        }
      } catch {
        console.log("error occurred fetching product");
      }

      const findDiscount = () => {
        let result = sales.find((t) => t.productId === fetchedProduct?._id);
        if (result) {
          setDiscountNotice(result.percentOff * 100);
          const updatedProduct = {
            ...fetchedProduct,
            price:
              fetchedProduct.price - fetchedProduct.price * result.percentOff,
          };
          fetchedProduct = updatedProduct;
        }
      };

      findDiscount();
      setProduct(fetchedProduct);
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
    <div className="mt-5 singleProduct">
      {product && (
        <Container>
          <Row>
            <Col xs={12} sm={6} md={6} lg={4}>
              <div>
                <img className="w-100" src={product.img} />
              </div>
            </Col>
            <Col xs={12} sm={6} md={6} lg={8}>
              <div>
                <h4 className="single-product-title">{product.title}</h4>
                <span className="pId">PRODUCT ID: {product._id}</span>
                <p>{product.desc}</p>
                <h5>Categories</h5>
                {product.categories.map((c) => (
                  <span key={c}>
                    <Link
                      to={`/product-list/${c}`}
                      className="single-product-cat"
                    >
                      {c}
                    </Link>
                    &nbsp;
                  </span>
                ))}
                <p
                  className={`price ${discountNotice ? "discount-notice" : ""}`}
                >
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
                        <option value={v} key={v}>
                          {v}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="add-container d-flex w-100">
                  <div className="amount-container">
                    <i
                      className="fas fa-minus"
                      onClick={() => handleQuanity("dec")}
                    ></i>
                    <p className="product-amount">{quantity}</p>
                    <i
                      className="fas fa-plus"
                      onClick={() => handleQuanity("inc")}
                    ></i>
                  </div>
                  <div className="add-button-wrapper">
                    <Button variant="warning" onClick={handleAdd}>
                      ADD TO CART
                    </Button>
                    {cart.addToCartNotice && (
                      <h6
                        className={`notice-alert ${
                          cart.addToCartNotice === "Already added..." &&
                          "discount-notice"
                        }`}
                      >
                        {cart.addToCartNotice}
                      </h6>
                    )}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )}
      <FeaturedSale sales={sales} />
    </div>
  );
};

export default SingleProduct;
