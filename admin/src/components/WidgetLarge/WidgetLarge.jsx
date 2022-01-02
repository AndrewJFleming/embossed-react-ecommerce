import React, { useState, useEffect } from "react";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

import { Table } from "react-bootstrap";
import { userRequest } from "../../requestMethods";
import "./WidgetLarge.css";

const Button = ({ type, userId }) => {
  return (
    <Link to={"/user/" + userId}>
      <button className={`widgetLgButton ${type}`}>
        {type}&nbsp;
        <i className="fas fa-external-link-alt fa-xs"></i>
      </button>
    </Link>
  );
};

const WidgetLarge = () => {
  // const [orders, setOrders] = useState(orderData);
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
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <Table className="widgetLgTable">
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
                  <span className="widgetLgName">{order.userId}</span>
                </Link>
              </td>
              <td className="widgetLgDate">
                {/* {format(order.createdAt)} */}
                {new Date(order.createdAt).toDateString()}
              </td>
              <td className="widgetLgAmount">${order.amount}</td>
              <td className="widgetLgStatus">
                <Button type={order.status} userId={order.userId} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default WidgetLarge;
