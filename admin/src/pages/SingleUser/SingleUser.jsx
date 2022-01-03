import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Button, Container, Form, Card, ListGroup } from "react-bootstrap";
import { userRequest } from "../../requestMethods";
import "./SingleUser.css";

const SingleUser = () => {
  const [user, setUser] = useState({});
  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [img, setImg] = useState("");

  useEffect(() => {
    const getPost = async () => {
      const res = await userRequest.get("/users/find/" + userId);
      setUser(res.data);
      setUsername(res.data.username);
      setEmail(res.data.email);
      setIsAdmin(res.data.isAdmin);
      setImg(res.data.img);
    };
    getPost();
  }, [userId]);

  const handleUpdate = async () => {
    try {
      await userRequest.put(`/users/${userId}`, {
        username,
        email,
        password,
        img,
      });
      window.location.replace("/user/" + userId);
    } catch (err) {
      console.log(err);
    }
  };

  const handleIsAdmin = () => setIsAdmin(!isAdmin);

  return (
    <div className="user">
      {/* <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={user.img} alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user.username}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <div className="userShowInfo">
              <span className="userShowInfoTitle">{user.transaction}</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">{user.email}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="username"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="user email"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Transaction Amount</label>
                <input
                  type="text"
                  placeholder="amount"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.unsplash.com/photo-1640590272119-e2c936055d33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  alt=""
                />
                <label htmlFor="file">
                  <Button>Upload</Button>
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <Button className="userUpdateButton">Update</Button>
            </div>
          </form>
        </div>
      </div> */}

      <Container className="productTitleContainer">
        <h1 className="productTitle">User</h1>
        <Link to="/new-user">
          <Button className="productAddButton">Create New</Button>
        </Link>
      </Container>
      <Container className="productTop d-flex mb-5">
        <img src={user.img} alt="" />
        <Card className="productCard">
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
        <h2 className="productTitle">Update User</h2>
        <Form>
          <div>
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
                name="photo"
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
                label="In Stock"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Photo</Form.Label>
              <Form.Control
                name="photo"
                type="text"
                placeholder={img}
                value={img}
                onChange={(e) => {
                  setImg(e.target.value);
                }}
              />
            </Form.Group>

            <Button onClick={handleUpdate} className="productButton">
              Update
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default SingleUser;
