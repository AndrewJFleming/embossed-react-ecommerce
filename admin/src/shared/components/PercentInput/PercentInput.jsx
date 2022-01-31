import React from "react";

import { Form } from "react-bootstrap";
import "./PercentInput.css";

const PercentInput = ({ formData, setFormData, reminder, setReminder }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>Percent Off</Form.Label>
      <Form.Control
        type="number"
        value={formData.percentOff}
        min="0.01"
        max="0.99"
        step="0.01"
        name="percentOff"
        //Limit input to value between 0.01 and 0.99
        onChange={(e) => {
          if (e.target.valueAsNumber < 1) {
            console.log("changed");
            setFormData({
              ...formData,
              percentOff: e.target.valueAsNumber,
            });
          } else {
            console.log("failed");
            setFormData({
              ...formData,
              percentOff: 0.01,
            });
            setReminder(true);
            setTimeout(function () {
              setReminder(false);
            }, 3000);
          }
        }}
      />
      <Form.Text muted>
        <em className={`${reminder && "reminder-styles"}`}>
          *Product discount can range between&nbsp;
          <span className="accepted-range">0.01</span> and&nbsp;
          <span className="accepted-range">0.99</span>.
        </em>
      </Form.Text>
    </Form.Group>
  );
};

export default PercentInput;
