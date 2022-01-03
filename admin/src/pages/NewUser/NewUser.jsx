import React, { useState } from "react";

import { userRequest } from "../../requestMethods";
import "./NewUser.css";

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
      // window.location.replace("/user/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="newUserItem">
          <label>Avatar</label>
          <input
            type="text"
            placeholder="Image Url"
            value={img}
            onChange={(e) => {
              setImg(e.target.value);
            }}
          />
        </div>
        <button onClick={handleSubmit} className="newUserButton">
          Create
        </button>
      </form>
    </div>
  );
};

export default NewUser;
