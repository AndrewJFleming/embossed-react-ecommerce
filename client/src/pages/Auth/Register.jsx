import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import "./Auth.css";
import { Form, Button } from "react-bootstrap";
import bgImage from "../../images/auth-bg-img.jpeg";
import { signup } from "../../redux/actions/auth";
import ErrorPrompt from "../../shared/components/ErrorPrompt/ErrorPrompt";
import { CLEAR_AUTH_ERROR } from "../../redux/constants/actionTypes";

const Register = ({ errorStatus }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState(false);
  useEffect(() => {
    dispatch({ type: CLEAR_AUTH_ERROR });
  }, []);

  useEffect(() => {
    setError(errorStatus);
  }, [errorStatus]);

  const handleRegister = (e) => {
    e.preventDefault();

    dispatch(signup(formData, history));
  };

  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  return (
    <div
      className="pageContainer"
      style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${bgImage})`,
      }}
    >
      <div className="pageWrapper">
        <h2 className="page-title">CREATE AN ACCOUNT</h2>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </Form.Group>

          {/* <p className="pt-2">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </p> */}
          <Button type="submit">Register</Button>
          <Link to="/login">
            Already have an account?
            <br />
            Login
          </Link>
        </Form>
        {error && (
          <ErrorPrompt
            h5="Error signing up..."
            h6="Username or email may already be taken."
          />
        )}
      </div>
    </div>
  );
};

export default Register;
