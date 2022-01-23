import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Button, Container, Form, Card, ListGroup } from "react-bootstrap";
import { userRequest } from "../../requestMethods";
import "./SingleUser.css";

const SingleUser = () => {
  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await userRequest.get("/users/find/" + userId);
      setUser(res.data);
      setUsername(res.data.username);
      setEmail(res.data.email);
      setIsAdmin(res.data.isAdmin);
    };
    getPost();
  }, [userId]);

  const handleUpdate = async () => {
    try {
      await userRequest.put(`/users/admin/${userId}`, {
        // await userRequest.put(`/users/${userId}`, {
        username,
        email,
        password,
        isAdmin,
      });
      window.location.replace("/user/" + userId);
    } catch (err) {
      console.log(err);
    }
  };
  // const handleUpdate = async () => {
  //   try {
  //     await userRequest.put(`/users/${userId}`, {
  //       username,
  //       email,
  //       password,
  //     });
  //     window.location.replace("/user/" + userId);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleIsAdmin = () => setIsAdmin(!isAdmin);

  return (
    <div className="mb-5">
      <Container className="mt-5 mb-2 d-flex justify-content-between align-items-center">
        <h1>User</h1>
        <Link to="/new-user">
          <Button variant="success">Create New</Button>
        </Link>
      </Container>
      <Container className="mb-5">
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Card.Title>{user.username}</Card.Title>
          </Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <span className="listGroupLabel">User ID:&nbsp;</span>
              {userId}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="listGroupLabel">Email:&nbsp;</span>
              {user.email}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="listGroupLabel">Is Admin:&nbsp;</span>
              {user.isAdmin ? "Yes" : "No"}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
      <Container>
        <h2>Update User</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
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
            <Form.Label>New Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Admin Status</Form.Label>
            <Form.Check
              onClick={handleIsAdmin}
              checked={isAdmin}
              type="checkbox"
              label="Is Admin"
            />
          </Form.Group>

          <Button onClick={handleUpdate} className="productButton">
            Update
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default SingleUser;
