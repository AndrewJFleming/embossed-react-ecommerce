import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Container,
  Table,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import { userRequest } from "../../../requestMethods";
import "./CategoryList.css";

const CategoryList = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      try {
        const res = await userRequest.get("categories");
        setCats(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCats();
  }, []);

  const handleDelete = async (id) => {
    try {
      await userRequest.delete(`/categories/${id}`);
      window.location.replace("/categories/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className="my-5">
      <span className="mb-2 d-flex justify-content-between align-items-center">
        <h1>My Categories</h1>
        <Link to="/new-category">
          <Button variant="success">Create New</Button>
        </Link>
      </span>

      <Table striped bordered responsive size="sm">
        <thead>
          <tr>
            <th>Cat ID</th>
            <th>Title</th>
            <th>Desc</th>
            <th>Image</th>
            <th>Is Slide</th>
            <th>Is Featured</th>
          </tr>
        </thead>
        <tbody>
          {cats.map((c) => (
            <tr>
              <td>
                <div className="longIdWrapper">{c._id}</div>
                <div>
                  <Link to={"/category/" + c._id}>
                    <i className="fas fa-edit editIcon"></i>
                  </Link>
                  <i
                    className="fas fa-trash-alt deleteIcon"
                    onClick={() => handleDelete(c._id)}
                  ></i>
                </div>
              </td>
              <td>{c.title}</td>
              <td>
                <OverlayTrigger overlay={<Tooltip>{cats.desc}</Tooltip>}>
                  <span>
                    <span>{c.desc.substring(0, 35) + "..."}</span>
                  </span>
                </OverlayTrigger>
              </td>
              <td>
                <img
                  className="productThumb"
                  src={c.img}
                  alt={`${c.title}-thumb`}
                />
              </td>
              <td>{c.isSlide ? "Yes" : "No"}</td>
              <td>{c.isFeatured ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default CategoryList;
