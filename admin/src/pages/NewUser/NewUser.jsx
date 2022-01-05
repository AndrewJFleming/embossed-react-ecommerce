import React, { useState } from "react";

import { userRequest } from "../../requestMethods";
import { Container, Form, Button } from "react-bootstrap";

const NewUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [img, setImg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      username,
      email,
      password,
      img,
    };
    try {
      const res = await userRequest.post("/auth/register", newUser);
      window.location.replace("/user/" + res.data._id);
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
            placeholder={username}
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder={email}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            placeholder={password}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Avatar</Form.Label>
          <Form.Control
            type="text"
            placeholder={img}
            value={img}
            onChange={(e) => {
              setImg(e.target.value);
            }}
          />
          <Form.Text muted>
            Provide URL for existing image on the web.
          </Form.Text>
        </Form.Group>

        <Button onClick={handleSubmit}>Create</Button>
      </Form>
    </Container>
  );
};

export default NewUser;
