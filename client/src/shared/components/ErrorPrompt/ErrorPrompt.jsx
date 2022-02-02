import React from "react";

import { Alert } from "react-bootstrap";
import "./ErrorPrompt.css";

const ErrorPrompt = ({ h5, h6 }) => {
  return (
    <Alert variant="danger" className="error-prompt">
      <h5>{h5}</h5>
      <h6>{h6}</h6>
    </Alert>
  );
};

export default ErrorPrompt;
