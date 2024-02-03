import React from "react";
import { Col, Form } from "react-bootstrap";
import "./InputField.css";

const InputField = ({
  label = "",
  type = "",
  placeholder = "",
  feedback = "",
  onChange = () => {},
  name = "",
  validateField = () => {},
}) => {
  return (
    <Form.Group
      as={Col}
      md="4"
      controlId={`validationCustom-${name}`}
      className="group-parent"
    >
      <Form.Label className="label-style">{label}</Form.Label>

      <Form.Control
        required
        name={name}
        onChange={(e) => {
          onChange(e);
          validateField(name, e.target.value); // Trigger field validation
        }}
        type={type}
        placeholder={placeholder}
        className="control-style control-mob"
      />
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    </Form.Group>
  );
};

export default InputField;
