import React from "react";

import "./Announcement.css";
import { Container } from "react-bootstrap";

const Announcement = () => {
  return (
    <div className="announcementWrapper">
      <Container className="text-center">Summer sale! 50% OFF!</Container>
    </div>
  );
};

export default Announcement;
