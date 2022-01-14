import React, { useState, useEffect } from "react";

import { CLEAR_AUTH_ERROR } from "../../redux/constants/actionTypes";
import { Card, Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/actions/auth";
import "./Account.css";
import ErrorPrompt from "../../shared/components/ErrorPrompt/ErrorPrompt";

const Account = ({ currentUser, errorStatus }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    currentPassword: "",
  });
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: CLEAR_AUTH_ERROR });
    setFormData({
      ...formData,
      username: currentUser.username,
      email: currentUser.email,
    });
  }, [currentUser]);

  useEffect(() => {
    setError(errorStatus);
  }, [errorStatus]);

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
        <Form onSubmit={handleUpdate}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              value={formData.username}
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              value={formData.email}
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Current Password</Form.Label>
            <Form.Text className="text-muted">
              Input your currently registered password.
            </Form.Text>
            <Form.Control
              required
              type="text"
              name="currentPassword"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>New Password</Form.Label>
            <Form.Text className="text-muted">
              Input your new password.
            </Form.Text>
            <Form.Control type="text" name="password" onChange={handleChange} />
          </Form.Group>
          <Button type="submit">Update</Button>

          {error && (
            <ErrorPrompt
              h5="Error updating user..."
              h6="Is your current password correct?"
            />
          )}
        </Form>
      </div>
    </Container>
  );
};

export default Account;