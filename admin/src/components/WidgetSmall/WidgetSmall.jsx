import React, { useState } from "react";
import { Link } from "react-router-dom";

import { userRows } from "../../dummyData";
import "./WidgetSmall.css";

const WidgetSmall = () => {
  const [users, setUsers] = useState(userRows);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Members</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={
                user.avatar ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <Link to={"/user/" + user._id}>
              <button className="widgetSmButton">
                <i className="fas fa-eye widgetSmIcon"></i>
                Display
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSmall;
