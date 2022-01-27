import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container } from "react-bootstrap";
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
    <Container className="pb-3">
      <h3 className="widgetTitle">New Users</h3>
      <hr className="mt-0" />
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={
                user.img ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              }
              alt={`${user.username}-thumb`}
              className="widgetSmImg"
            />
            <Link to={"/user/" + user._id}>
              <h5 className="widgetSmUsername">
                {user.username}
                {user.isAdmin && <i className="fas fa-user-shield"></i>}
              </h5>
            </Link>
            &nbsp;
            {new Intl.DateTimeFormat("en", {
              day: "2-digit",
              month: "short",
            }).format(new Date(user.createdAt))}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default WidgetSmall;
