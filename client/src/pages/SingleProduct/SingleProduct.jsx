import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Container, Col, Row, Button } from "react-bootstrap";
import "./SingleProduct.css";
import Newsletter from "../../components/Newsletter/Newsletter";
import { publicRequest } from "../../requestMethods";
// import { addProduct } from "../../redux/cartRedux";
import { addToCart } from "../../redux/actions/cart";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const SingleProduct = ({ sales }) => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState("");
  const [addNotice, setAddNotice] = useState(false);
  const [discountNotice, setDiscountNotice] = useState(null);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

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

  // const handleAdd = () => {
  //   dispatch(addProduct({ ...product, quantity, color, size }));
  // };

  const handleAdd = () => {
    dispatch(addToCart(product._id, quantity, variant));

    setAddNotice(true);
    setTimeout(() => {
      setAddNotice(false);
    }, 3000);
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
                {addNotice && (
                  <i class="fas fa-cart-plus">
                    <h6>Added</h6>
                  </i>
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
