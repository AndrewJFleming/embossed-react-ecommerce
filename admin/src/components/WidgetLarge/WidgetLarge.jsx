import React, { useState } from "react";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

import { orderData } from "../../dummyData";
import "./WidgetLarge.css";

const Button = ({ type, userId }) => {
  return (
    <Link to={"/user/" + userId}>
      <button className={`widgetLgButton ${type}`}>{type}</button>
    </Link>
  );
};

const WidgetLarge = () => {
  const [orders, setOrders] = useState(orderData);

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer Id</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {orders.map((order) => (
          <tr className="widgetLgTr" key={order._id}>
            <td className="widgetLgUser">
              <span className="widgetLgName">{order.userId}</span>
            </td>
            <td className="widgetLgDate">{format(order.createdAt)}</td>
            <td className="widgetLgAmount">${order.amount}</td>
            <td className="widgetLgStatus">
              <Button type={order.status} userId={order.userId} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default WidgetLarge;
