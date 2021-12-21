import React from "react";
import { Link } from "react-router-dom";

import "./Auth.css";
import { Container, Button } from "react-bootstrap";
import { bgImage } from "../../images/bgImage.jpg";

const Register = () => {
  return (
    <div className="pageContainer">
      <div className="pageWrapper">
        <h2 className="pageTitle">CREATE AN ACCOUNT</h2>
        <form>
          <input placeholder="Name" />
          <input placeholder="Last Name" />
          <input placeholder="Username" />
          <input placeholder="Email" />
          <input placeholder="Password" />
          <input placeholder="Confirm Password" />
          <p className="pt-2">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </p>
          <Button>Create</Button>
          <Link to="/login">
            Already have an account?
            <br />
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
