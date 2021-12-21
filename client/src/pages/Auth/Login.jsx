import React from "react";
import { Link } from "react-router-dom";

import "./Auth.css";
import { Container, Button } from "react-bootstrap";
import { bgImage } from "../../images/bgImage.jpg";

const Login = () => {
  return (
    <div className="pageContainer">
      <div className="pageWrapper">
        <h2 className="pageTitle">SIGN IN</h2>
        <form>
          <input placeholder="Username" />
          <input placeholder="Password" />
          <Button>LOGIN</Button>
          <Link to="#">Forgot you password?</Link>
          <Link to="/register">Register</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
