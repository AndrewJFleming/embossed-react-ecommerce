import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container, Table } from "react-bootstrap";
import { userRequest } from "../../requestMethods";
import "./WidgetLarge.css";

const Button = ({ type, orderId }) => {
  return (
    // <Link to={"/order/" + orderId}>
    <Link to="#">
      <button className={`widgetLgButton ${type}`}>
        {type}&nbsp;
        {/* <i className="fas fa-external-link-alt fa-xs"></i> */}
      </button>
    </Link>
  );
};

const WidgetLarge = () => {
  // const [orders, setOrders] = useState([]);
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
  // useEffect(() => {
  //   const getOrders = async () => {
  //     try {
  //       const res = await userRequest.get("orders");
  //       setOrders(res.data);
  //     } catch {}
  //   };
  //   getOrders();
  // }, []);

  return (
    <Container>
      <h3 className="widgetTitle">MyCarts</h3>
      <Table responsive size="sm" className="widgetLgTable">
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Cart Id</th>
            <th className="widgetLgTh">User Id</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Product Count</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((cart) => (
            <tr className="widgetLgTr" key={cart._id}>
              <td className="widgetLgUser">
                <Link to={"/cart/" + cart._id}>
                  <div className="orderUserIdWrapper longIdWrapper">
                    {cart._id}
                  </div>
                </Link>
              </td>
              <td className="widgetLgUser">
                <Link to={"/user/" + cart.userId}>
                  <div className="orderUserIdWrapper longIdWrapper">
                    {cart.userId}
                  </div>
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
