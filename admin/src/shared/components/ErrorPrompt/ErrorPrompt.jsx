import React from "react";

import { Alert } from "react-bootstrap";

const ErrorPrompt = ({ h5, h6 }) => {
  return (
    <Alert variant="danger">
      <h5>{h5}</h5>
      <h6>{h6}</h6>
    </Alert>
  );
};

export default ErrorPrompt;
