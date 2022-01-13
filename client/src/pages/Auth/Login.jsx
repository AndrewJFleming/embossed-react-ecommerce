import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { signin } from "../../redux/actions/auth";
import "./Auth.css";
import { Container, Button } from "react-bootstrap";
// import { bgImage } from "../../images/bgImage.jpg";
// import { login } from "../../redux/apiCalls";

const initialState = {
  username: "",
  password: "",
};

const Login = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();
  // const { isFetching, error } = useSelector((state) => state.user);

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   login(dispatch, { username, password });
  // };

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
        <h2 className="pageTitle">SIGN IN</h2>
        <form>
          <input
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />
          <input
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <Button onClick={handleLogin}>LOGIN</Button>
          {/* {error && <h6>Error</h6>} */}
          {/* <Link to="#">Forgot you password?</Link> */}
          <Link to="/register">Register</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
