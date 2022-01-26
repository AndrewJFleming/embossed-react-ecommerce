import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { userRequest } from "../../requestMethods";
import { Container, Table, Button } from "react-bootstrap";
import "./CartList.css";

const CartList = () => {
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

  // const handleDelete = async (id) => {
  //   try {
  //     await userRequest.delete(`/users/${id}`);
  //     window.location.replace("/users/");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <Container className="my-5">
      <span className="mb-2 d-flex justify-content-between align-items-center">
        <h1>My Carts</h1>
        {/* <Link to="/new-user">
          <Button variant="success">Create New</Button>
        </Link> */}
      </span>

      <Table striped bordered responsive size="sm">
        <thead>
          <tr>
            <th>Cart ID</th>
            <th>User ID</th>
            <th>Products Count</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((cart) => (
            <tr>
              <td>
                <div className="longIdWrapper">{cart._id}</div>
                <div>
                  <Link to={"/cart/" + cart._id}>
                    <i className="fas fa-edit editIcon"></i>
                  </Link>
                  {/* <i
                    className="fas fa-trash-alt deleteIcon"
                    onClick={() => handleDelete(user._id)}
                  ></i> */}
                </div>
              </td>
              <td>
                <div className="longIdWrapper">{cart.userId}</div>
              </td>
              <td>{cart.products.length}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default CartList;
