import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Button, Container, Form, Card, ListGroup } from "react-bootstrap";
import { userRequest } from "../../../requestMethods";

const SingleUser = () => {
  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  const [user, setUser] = useState({});
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    isAdmin: false,
  });

  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  useEffect(() => {
    const getUser = async () => {
      const res = await userRequest.get("/users/find/" + userId);
      setUser(res.data);
      setFormData({
        username: res.data.username,
        email: res.data.email,
        isAdmin: res.data.isAdmin,
      });
    };
    getUser();
  }, [userId]);

  const handleUpdate = async () => {
    try {
      await userRequest.put(`/users/admin/${userId}`, formData);
      window.location.replace("/user/" + userId);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mb-5">
      <Container className="mt-3">
        <Link to="/users">
          <i class="fas fa-arrow-left">
            &nbsp;<span className="back-link-text">BACK</span>
          </i>
        </Link>
        <div className="mt-3 mb-2 d-flex justify-content-between align-items-center">
          <h1>User</h1>
          <Link to="/new-user">
            <Button variant="success">Create New</Button>
          </Link>
        </div>
      </Container>
      <Container className="mb-5">
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Card.Title>{user.username}</Card.Title>
          </Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <span className="listGroupLabel">User ID:&nbsp;</span>
              {userId}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="listGroupLabel">Email:&nbsp;</span>
              {user.email}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="listGroupLabel">Is Admin:&nbsp;</span>
              {user.isAdmin ? "Yes" : "No"}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
      <Container>
        <h2>Update User</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={formData.username}
              name="username"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder={formData.email}
              value={formData.email}
              name="email"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              name="password"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Admin Status</Form.Label>
            <Form.Check
              type="checkbox"
              label="Is Admin"
              checked={formData.isAdmin}
              onClick={(e) => {
                setFormData({
                  ...formData,
                  isAdmin: !formData.isAdmin,
                });
              }}
            />
          </Form.Group>

          <Button onClick={handleUpdate}>Update</Button>
        </Form>
      </Container>
    </div>
  );
};

export default SingleUser;
