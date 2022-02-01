import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { signin } from "../../redux/actions/auth";
import "./Auth.css";
import { Button, Form } from "react-bootstrap";
import ErrorPrompt from "../../shared/components/ErrorPrompt/ErrorPrompt";
import { CLEAR_AUTH_ERROR } from "../../redux/constants/actionTypes";
// import { bgImage } from "../../images/bgImage.jpg";
// import { login } from "../../redux/apiCalls";

const Login = ({ errorStatus }) => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState(false);
  // const { isFetching, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch({ type: CLEAR_AUTH_ERROR });
  }, []);

  useEffect(() => {
    setError(errorStatus);
    setTimeout(function () {
      dispatch({ type: CLEAR_AUTH_ERROR });
    }, 2000);
  }, [errorStatus]);

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
    <div className="pageContainer">
      <div className="pageWrapper">
        <h2 className="page-title">SIGN IN</h2>
        <Form onSubmit={handleLogin}>
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
          <Button type="submit">LOGIN</Button>
          {/* {error && <h6>Error</h6>} */}
          {/* <Link to="#">Forgot you password?</Link> */}
          <Link to="/register">Register</Link>
        </Form>
        {error && (
          <ErrorPrompt
            h5="Error logging in..."
            h6="Are your login creds correct?"
          />
        )}
      </div>
    </div>
  );
};

export default Login;
