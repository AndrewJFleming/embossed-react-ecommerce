import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container, Table } from "react-bootstrap";
import { userRequest } from "../../requestMethods";
import "./FeaturedContent.css";

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

const FeaturedContent = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const getSales = async () => {
      try {
        const res = await userRequest.get("sales");
        setSales(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getSales();
  }, []);

  return (
    <Container>
      <h3 className="widgetTitle">
        Active Sales:&nbsp;
        <span style={{ fontSize: "smaller", fontWeight: "lighter" }}>
          <em>{sales.filter((s) => s.isActive).length}</em> active of&nbsp;
          <em>{sales.length}</em>
          &nbsp;existing sales
        </span>
      </h3>

      <Table responsive size="sm" className="widgetLgTable">
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Cat Name</th>
            <th className="widgetLgTh">Banner</th>
          </tr>
        </thead>
        <tbody>
          {sales.map(
            (s) =>
              s.isActive && (
                <tr className="widgetLgTr">
                  <td className="widgetLgUser">
                    <div>
                      <Link to={"/sale/" + s._id}>
                        <span>{s.title}</span>
                      </Link>
                      :
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "red",
                        }}
                      >
                        &nbsp;{s.percentOff * 100}%
                      </span>
                    </div>
                  </td>
                  <td className="widgetLgUser">
                    <div>
                      {s.isFeatured ? <span>Yes</span> : <span>No</span>}
                    </div>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default FeaturedContent;
