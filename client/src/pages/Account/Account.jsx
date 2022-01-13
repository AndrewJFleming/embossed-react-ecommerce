import React, { useState, useEffect } from "react";
import axios from "axios";

import { Card, Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/actions/auth";
import "./Account.css";

const Account = ({ currentUser }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    currentPassword: "",
    password: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    setFormData({
      ...formData,
      username: currentUser.username,
      email: currentUser.email,
    });
  }, [currentUser]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    dispatch(updateUser(currentUser._id, formData));
  };

  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  return (
    <Container className="my-5">
      <h1>My Account</h1>

      <Card style={{ width: "100%", marginBottom: "2rem" }}>
        <Card.Body>
          <Card.Title>{currentUser.username}</Card.Title>
          <Card.Text>{currentUser.email}</Card.Text>
        </Card.Body>
      </Card>

      <div>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>New Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>New Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Current Password</Form.Label>
            <Form.Control
              type="text"
              name="currentPassword"
              placeholder="Current Password"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="text"
              name="password"
              placeholder="New Password"
              onChange={handleChange}
            />
          </Form.Group>
          <Button onClick={handleUpdate}>Update</Button>
        </Form>
      </div>
    </Container>
  );
};

export default Account;
