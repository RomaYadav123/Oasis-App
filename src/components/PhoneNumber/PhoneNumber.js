import React, { useState, useMemo } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "../InputField/InputField.css";

const PhoneNumberScreen = () => {
  const [value, setValue] = useState("");

  const changeHandler = (value) => {
    setValue(value);
  };

  return (
    <div>
      <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label className="label-style">Phone Number*</Form.Label>
        <div className="control-style">
          <PhoneInput
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
          />
        </div>
      </Form.Group>
    </div>
  );
};

export default PhoneNumberScreen;
