import React from "react";
import { Form } from "react-bootstrap";
import "./InputField.css";

const InputField = ({
  label = "",
  type = "",
  placeholder = "",
  feedback = "",
  defaultValue = "",
  onChange = () => {},
  name = "",
}) => {
  return (
    <Form.Group
      md="4"
      controlId={`validationCustom-${name}`}
      className="group-parent"
    >
      <Form.Label className="label-style">{label}</Form.Label>
      <Form.Control
        name={name}
        onChange={onChange}
        required
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="control-style"
      />
      <Form.Control.Feedback>{feedback}</Form.Control.Feedback>
    </Form.Group>
  );
};

export default InputField;
