import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Container, Form, Button } from "react-bootstrap";
import { signin } from "../../redux/actions/auth";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(signin(formData, history));
  };

  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  return (
    <Container className="mt-5">
      <h1>Login</h1>
      <Form>
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
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            value={formData.password}
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
      <Button onClick={handleLogin}>Login</Button>
    </Container>
  );
};

export default Login;
