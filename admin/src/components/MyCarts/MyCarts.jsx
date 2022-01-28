import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container, Table } from "react-bootstrap";
import { userRequest } from "../../requestMethods";

const MyCarts = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const getCarts = async () => {
      try {
        const res = await userRequest.get("carts");
        setCarts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCarts();
  }, []);

  return (
    <Container>
      <h3 className="widgetTitle">My Carts</h3>
      <Table responsive size="sm">
        <thead>
          <tr>
            <th>Cart Id</th>
            <th>User Id</th>
            <th>Date</th>
            <th>Products</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((cart) => (
            <tr key={cart._id}>
              <td>
                <Link to={"/cart/" + cart._id}>
                  <div className="longIdWrapper">{cart._id}</div>
                </Link>
              </td>
              <td>
                <Link to={"/user/" + cart.userId}>
                  <div className="longIdWrapper">{cart.userId}</div>
                </Link>
              </td>
              <td>{new Date(cart.createdAt).toDateString()}</td>
              <td>{cart.products.length}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MyCarts;
