import React, { useState } from "react";

import { Button } from "react-bootstrap";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleClick} style={{ padding: 10, width: 100 }}>
        Login
      </Button>
    </div>
  );
};

export default Login;
