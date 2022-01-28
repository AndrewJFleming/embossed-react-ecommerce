import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container, Table } from "react-bootstrap";
import { userRequest } from "../../requestMethods";

const ActiveSales = () => {
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

      <Table responsive size="sm">
        <thead>
          <tr>
            <th>Sale Name</th>
            <th>Banner</th>
          </tr>
        </thead>
        <tbody>
          {sales.map(
            (s) =>
              s.isActive && (
                <tr>
                  <td>
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
                  <td>
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

export default ActiveSales;
