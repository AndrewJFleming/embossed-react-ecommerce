import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { productRows } from "../../dummyData";
import { Button } from "react-bootstrap";
import { userRequest } from "../../requestMethods";
import "./SingleProduct.css";

const SingleProduct = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [categories, setCategories] = useState([]);
  const [price, setPrice] = useState(null);
  const [inStock, setInStock] = useState(false);
  const [img, setImg] = useState("");

  // const handleUpdate = async () => {
  //   setError(false);
  //   try {
  //     await axios.put(`/posts/${post._id}`, {
  //       username: user.username,
  //       title,
  //       description,
  //       categories,
  //       featured,
  //       photo: newPhoto.image,
  //     });
  //     setUpdateMode(false);
  //   } catch (err) {
  //     console.log(err);
  //     setError(true);
  //   }
  // };

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

  // useEffect(() => {
  //   const dummyProduct = productRows.find(
  //     (product) => product._id == productId
  //   );
  //   setProduct(dummyProduct);
  // }, [productId]);

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
            <img src={img} alt="" className="productInfoImg" />
            <span className="productName">{title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{productId}</span>
            </div>
            {/* <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">5123</span>
            </div> */}
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">{inStock ? "Yes" : "No"}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder={title} />
            <label>Product Description</label>
            <textarea type="text" placeholder={desc} />
            <label>Price</label>
            <input type="text" placeholder={price} />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={img} alt="" className="productUploadImg" />
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
