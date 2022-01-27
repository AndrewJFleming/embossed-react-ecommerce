import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container, Table } from "react-bootstrap";
import { userRequest } from "../../requestMethods";
import "./WidgetLarge.css";

const WidgetLarge = () => {
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
      <h3 className="widgetTitle">MyCarts</h3>
      <Table responsive size="sm" className="widgetLgTable">
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Cart Id</th>
            <th className="widgetLgTh">User Id</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Products</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((cart) => (
            <tr className="widgetLgTr" key={cart._id}>
              <td className="widgetLgUser">
                <Link to={"/cart/" + cart._id}>
                  <div className="widgetIdWrapper">{cart._id}</div>
                </Link>
              </td>
              <td className="widgetLgUser">
                <Link to={"/user/" + cart.userId}>
                  <div className="widgetIdWrapper">{cart.userId}</div>
                </Link>
              </td>
              <td className="widgetLgDate">
                {new Date(cart.createdAt).toDateString()}
              </td>
              <td className="widgetLgAmount">{cart.products.length}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default WidgetLarge;
