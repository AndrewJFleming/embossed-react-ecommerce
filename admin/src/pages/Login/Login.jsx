import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Container, Form, Button } from "react-bootstrap";
import { login } from "../../redux/apiCalls";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container className="mt-5">
      <h1>Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Button onClick={handleLogin}>Login</Button>
    </Container>
  );
};

export default Login;
