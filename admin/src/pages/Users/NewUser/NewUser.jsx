import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { CLEAR_AUTH_ERROR } from "../../../redux/constants/actionTypes";
import { createUser } from "../../../redux/actions/auth";
import { userRequest } from "../../../requestMethods";
import { Container, Form, Button } from "react-bootstrap";
import ErrorPrompt from "../../../shared/components/ErrorPrompt/ErrorPrompt";

const NewUser = ({ errorStatus }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    isAdmin: false,
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(errorStatus);
    setTimeout(function () {
      dispatch({ type: CLEAR_AUTH_ERROR });
    }, 3000);
  }, [errorStatus, dispatch]);

  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createUser(formData, history));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await userRequest.post("/users/signup", formData);
  //     window.location.replace("/user/" + res.data.result._id);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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
        {error && <ErrorPrompt h5="Create Error:" h6={errorStatus} />}
      </Form>
    </Container>
  );
};

export default NewUser;
