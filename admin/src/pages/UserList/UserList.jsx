import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Table, Button } from "react-bootstrap";
import { userRows } from "../../dummyData";
import "./UserList.css";

const UserList = () => {
  const [users, setUsers] = useState(userRows);

  const handleDelete = (id) => {
    setUsers(users.filter((item) => item._id !== id));
  };

  return (
    <div className="userList">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Status</th>
            <th>Transaction Volume</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user._id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.status}</td>
              <td>{user.transaction}</td>
              <td className="d-flex justify-content-around">
                <Link to={"/user/" + user._id}>
                  <Button variant="dark">Edit</Button>
                </Link>

                <Button
                  className="ml-2"
                  variant="danger"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserList;
