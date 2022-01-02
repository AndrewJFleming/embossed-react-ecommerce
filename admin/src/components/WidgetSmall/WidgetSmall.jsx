import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { userRequest } from "../../requestMethods";
import "./WidgetSmall.css";

const WidgetSmall = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Members</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={
                user.img ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">
                {user.username}
                {user.isAdmin && <em className="adminBadge">Admin</em>}
              </span>
            </div>
            <Link to={"/user/" + user._id}>
              <i className="fas fa-external-link-alt fa-md"></i>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSmall;
