import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Button } from "react-bootstrap";
import { userRows } from "../../dummyData";
import "./SingleUser.css";

const SingleUser = () => {
  const [user, setUser] = useState({});
  const location = useLocation();
  const userId = location.pathname.split("/")[2];

  useEffect(() => {
    const dummyUser = userRows.find((user) => user._id == userId);
    setUser(dummyUser);
  }, [userId]);

  return (
    <div className="user">
      <div className="userTitleContainer">
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
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              {/* <PermIdentity className="userShowIcon" /> */}
              <span className="userShowInfoTitle">
                {user.status ? "account active" : "account deactivated"}
              </span>
            </div>
            <div className="userShowInfo">
              {/* <PermIdentity className="userShowIcon" /> */}
              <span className="userShowInfoTitle">{user.transaction}</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              {/* <MailOutline className="userShowIcon" /> */}
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
              <div className="userUpdateItem">
                <label>Account Status</label>
                <select name="Account Status" id="accountStatus">
                  <option value="true">active</option>
                  <option value="false">inactive</option>
                </select>
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
      </div>
    </div>
  );
};

export default SingleUser;
