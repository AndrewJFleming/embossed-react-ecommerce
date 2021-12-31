import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { productRows } from "../../dummyData";
import { Button } from "react-bootstrap";
import "./SingleProduct.css";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const location = useLocation();
  const productId = location.pathname.split("/")[2];

  useEffect(() => {
    const dummyProduct = productRows.find(
      (product) => product._id == productId
    );
    setProduct(dummyProduct);
  }, [productId]);

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          {/* <Chart data={pStats} dataKey="Sales" title="Sales Performance" /> */}
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product.img} alt="" className="productInfoImg" />
            <span className="productName">{product.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{product._id}</span>
            </div>
            {/* <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">5123</span>
            </div> */}
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">
                {product.inStock ? "Yes" : "No"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder={product.title} />
            <label>Product Description</label>
            <textarea type="text" placeholder={product.desc} />
            <label>Price</label>
            <input type="text" placeholder={product.price} />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={product.img} alt="" className="productUploadImg" />
              <Button>Upload</Button>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <Button className="productButton">Update</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingleProduct;
