import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container } from "react-bootstrap";
import { userRequest } from "../../requestMethods";
import "./NewUsers.css";

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
    <Container>
      <h3 className="widgetTitle">New Users</h3>
      <hr className="mt-0" />
      <ul className="NewUsersList">
        {users.map((user) => (
          <li className="NewUsersListItem" key={user._id}>
            {user.isAdmin ? (
              <i className="fas fa-user-shield"></i>
            ) : (
              <i className="fas fa-user standardUserIcon"></i>
            )}
            <Link to={"/user/" + user._id}>
              <h6 className="NewUsersUsername">
                {user.username}
                {user.isAdmin && <i className="fas fa-user-shield"></i>}
              </h6>
            </Link>
            <span className="NewUsersUsername">
              {new Intl.DateTimeFormat("en", {
                day: "2-digit",
                month: "short",
              }).format(new Date(user.createdAt))}
            </span>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default WidgetSmall;
