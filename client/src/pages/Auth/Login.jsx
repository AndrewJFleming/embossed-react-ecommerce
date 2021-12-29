import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import "./Auth.css";
import { Container, Button } from "react-bootstrap";
import { bgImage } from "../../images/bgImage.jpg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="pageContainer">
      <div className="pageWrapper">
        <h2 className="pageTitle">SIGN IN</h2>
        <form>
          <input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* {isFetching && } */}
          <Button onClick={handleLogin} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <h6>Error</h6>}
          <Link to="#">Forgot you password?</Link>
          <Link to="/register">Register</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
