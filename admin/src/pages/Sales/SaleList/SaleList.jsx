import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { userRequest } from "../../../requestMethods";
import { Container, Table, Button } from "react-bootstrap";
import "./SaleList.css";

const SaleList = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const getSales = async () => {
      try {
        const res = await userRequest.get("sales");
        setSales(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getSales();
  }, []);

  const handleDelete = async (id) => {
    try {
      await userRequest.delete(`/sales/${id}`);
      window.location.replace("/sales/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className="my-5">
      <span className="mb-2 d-flex justify-content-between align-items-center">
        <h1>My Sales</h1>
        <Link to="/new-user">
          <Button variant="success">Create New</Button>
        </Link>
      </span>

      <Table striped bordered responsive size="sm">
        <thead>
          <tr>
            <th>SaleId</th>
            <th>Title</th>
            <th>Discount</th>
            <th>ProductId</th>
            <th>IsActive</th>
            <th>IsFeatured</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((s) => (
            <tr>
              <td>
                <div className="userIdWrapper">{s._id}</div>
                <div>
                  <Link to={"/sale/" + s._id}>
                    <i className="fas fa-edit editIcon"></i>
                  </Link>
                  <i
                    className="fas fa-trash-alt deleteIcon"
                    onClick={() => handleDelete(s._id)}
                  ></i>
                </div>
              </td>
              <td>{s.title}</td>
              <td>{s.percentOff * 100}%</td>
              <td>
                <Link to={"/product/" + s.productId}>
                  <div className="userIdWrapper">{s.productId}</div>
                </Link>
              </td>
              <td>{s.isActive ? <span>Yes</span> : <span>No</span>}</td>
              <td>{s.isFeatured ? <span>Yes</span> : <span>No</span>}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default SaleList;
