import React, { useState, useMemo } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
// import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
// import "../InputField/InputField.css";
// import "./PhoneNumber.css";

const PhoneNumberScreen = () => {
  const [value, setValue] = useState("");

  const changeHandler = (value) => {
    setValue(value);
  };

  return (
    <div>
      {/* <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label className="label-style label-mob">Phone Number*</Form.Label> */}
      <div>
        <PhoneInput
          required
          placeholder="Enter phone number"
          value={value}
          onChange={setValue}
          className="phone-style phone-mob"
        />
      </div>
      {/* </Form.Group> */}
    </div>
  );
};

export default PhoneNumberScreen;
