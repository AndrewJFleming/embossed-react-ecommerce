import React, { useState, useEffect } from "react";
import { format } from "timeago.js";
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
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);

  return (
    <Container>
      <h3 className="widgetTitle">Latest Transactions</h3>
      <Table responsive size="sm" className="widgetLgTable">
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer Id</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr className="widgetLgTr" key={order._id}>
              <td className="widgetLgUser">
                <Link to={"/user/" + order.userId}>
                  <div className="orderUserIdWrapper">{order.userId}</div>
                </Link>
              </td>
              <td className="widgetLgDate">
                {/* {format(order.createdAt)} */}
                {new Date(order.createdAt).toDateString()}
              </td>
              <td className="widgetLgAmount">${order.amount}</td>
              <td className="widgetLgStatus">
                <Button type={order.status} orderId={order._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default WidgetLarge;
