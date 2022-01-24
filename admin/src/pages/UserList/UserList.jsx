import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { userRequest } from "../../requestMethods";
import { Container, Table, Button } from "react-bootstrap";
import "./UserList.css";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await userRequest.delete(`/users/${id}`);
      window.location.replace("/users/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className="my-5">
      <span className="mb-2 d-flex justify-content-between align-items-center">
        <h1>My Users</h1>
        <Link to="/new-user">
          <Button variant="success">Create New</Button>
        </Link>
      </span>

      <Table striped bordered responsive size="sm">
        <thead>
          <tr>
            <th>UserID</th>
            <th>Username</th>
            <th>Email</th>
            <th>IsAdmin</th>
            {/* <th>Transaction</th> */}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>
                <div className="userIdWrapper">{user._id}</div>
                <div>
                  <Link to={"/user/" + user._id}>
                    <i className="fas fa-edit editIcon"></i>
                  </Link>
                  <i
                    className="fas fa-trash-alt deleteIcon"
                    onClick={() => handleDelete(user._id)}
                  ></i>
                </div>
              </td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                {user.isAdmin ? (
                  <i className="fas fa-user-shield"></i>
                ) : (
                  <i className="fas fa-user standardUserIcon"></i>
                )}
              </td>
              {/* <td>{user.transaction}</td> */}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default UserList;
