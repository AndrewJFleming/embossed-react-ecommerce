import React, { useState } from "react";

import { userRequest } from "../../../requestMethods";
import { Container, Form, Button } from "react-bootstrap";

const NewUser = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await userRequest.post("/users/signup", formData);
      window.location.replace("/user/" + res.data.result._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className="my-5">
      <h1>New User</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder={formData.username}
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

        <Form.Group className="mb-4">
          <Form.Check
            label="Is Admin"
            type="checkbox"
            checked={formData.isAdmin}
            onClick={(e) => {
              setFormData({
                ...formData,
                isAdmin: !formData.isAdmin,
              });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            placeholder={formData.password}
            value={formData.password}
            name="password"
            onChange={handleChange}
          />
        </Form.Group>

        <Button onClick={handleSubmit}>Create</Button>
      </Form>
    </Container>
  );
};

export default NewUser;
