import React from "react";
import { Link } from "react-router-dom";

import { Container } from "react-bootstrap";
import "./Announcement.css";

const Announcement = ({ sales }) => {
  return (
    <div className="announcementWrapper">
      <Container className="text-center d-flex justify-content-around">
        {sales.slice(0, 3).map((s) => (
          <Link to={`/product/${s?.productId}`} key={s._id}>
            {s?.title}&nbsp;
            {s?.percentOff * 100}% Off
          </Link>
        ))}
      </Container>
    </div>
  );
};

export default Announcement;
