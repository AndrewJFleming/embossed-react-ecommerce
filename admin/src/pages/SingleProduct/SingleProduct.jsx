import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Button, Card, ListGroup } from "react-bootstrap";
import { userRequest } from "../../requestMethods";
import "./SingleProduct.css";

const SingleProduct = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
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
      // setPost(res.data);
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
      <div className="productTitleContainer">
        <h1 className="productTitle">
          Product / <em>Update Product</em>
        </h1>
        <Link to="/new-product">
          <button className="productAddButton">Create New</button>
        </Link>
      </div>
      <div className="productTop d-flex">
        <img src={img} alt="" />
        <Card className="productCard">
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{desc}</Card.Text>
          </Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <span className="listGroupLabel">Product ID:&nbsp;</span>
              {productId}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="listGroupLabel">Price:&nbsp;</span>${price}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="listGroupLabel">In Stock:&nbsp;</span>
              {inStock ? "Yes" : "No"}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="listGroupLabel">Categories:&nbsp;</span>
              {categories.map((cat) => (
                <span>
                  &nbsp;&#8226;<em>{cat}</em>
                </span>
              ))}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input
              type="text"
              placeholder={title}
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <label>Product Description</label>
            <textarea
              type="text"
              placeholder={desc}
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
            <label>Price</label>
            <input
              type="text"
              placeholder={price}
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <div className="addProductItem">
              <label>Categories</label>
              <input
                type="text"
                placeholder={categories}
                value={categories}
                onChange={handleCat}
              />
            </div>
            <div className="addProductItem">
              <label>In Stock</label>
              <input
                onClick={handleInStock}
                checked={inStock}
                type="checkbox"
              />
            </div>
            <div className="addProductItem">
              <label>Photo</label>
              <input
                name="photo"
                type="text"
                placeholder={img}
                value={img}
                onChange={(e) => {
                  setImg(e.target.value);
                }}
              />
            </div>
            <Button onClick={handleUpdate} className="productButton">
              Update
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingleProduct;
