import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Container, Form, Button } from "react-bootstrap";
import { signin } from "../../redux/actions/auth";
import ErrorPrompt from "../../shared/components/ErrorPrompt/ErrorPrompt";
import { CLEAR_AUTH_ERROR } from "../../redux/constants/actionTypes";

const Login = ({ errorStatus }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(signin(formData, history));
  };

  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  useEffect(() => {
    dispatch({ type: CLEAR_AUTH_ERROR });
  }, []);

  useEffect(() => {
    setTimeout(function () {
      dispatch({ type: CLEAR_AUTH_ERROR });
    }, 3000);
  }, [errorStatus, dispatch]);

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
      {errorStatus && <ErrorPrompt h5="Login Error:" h6={errorStatus} />}
    </Container>
  );
};

export default Login;
