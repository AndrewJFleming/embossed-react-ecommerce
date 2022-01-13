import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import "./Auth.css";
import { Container, Form, Button } from "react-bootstrap";
import { bgImage } from "../../images/bgImage.jpg";
import { signup } from "../../redux/actions/auth";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();

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
    <div className="pageContainer">
      <div className="pageWrapper">
        <h2 className="pageTitle">CREATE AN ACCOUNT</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Avatar</Form.Label>
            <Form.Control
              type="text"
              placeholder="Avatar"
              name="img"
              onChange={handleChange}
            />
            <Form.Text muted>
              Provide URL for existing image on the web.
            </Form.Text>
          </Form.Group>

          {/* <p className="pt-2">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </p> */}
          <Button onClick={handleRegister}>Register</Button>
          <Link to="/login">
            Already have an account?
            <br />
            Login
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default Register;
