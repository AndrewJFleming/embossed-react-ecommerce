import React from "react";

import "./Announcement.css";
import { Container } from "react-bootstrap";

const Announcement = ({ sales }) => {
  return (
    <div className="announcementWrapper w-100">
      <Container className="text-center d-flex justify-content-around">
        {sales.slice(0, 3).map((s) => (
          <span>
            {s?.title}&nbsp;
            {s?.percentOff * 100}% Off
          </span>
        ))}
      </Container>
    </div>
  );
};

export default Announcement;
