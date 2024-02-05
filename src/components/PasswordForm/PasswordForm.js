import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import PasswordChecklist from "react-password-checklist";
import "./PasswordForm.css";
import InputField from "../InputField/InputField";
const PasswordForm = ({
  name = "",
  label = "",
  type = "",
  onChange = () => {},
}) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="password-field-container">
      <InputField
        name="password"
        label="Create your Password*"
        type={showPassword ? "text" : "password"}
        onChange={onChange}
      />
      <span onClick={togglePasswordVisibility} className="envelope-style">
        {showPassword ? "hide" : "show"}
      </span>
    </div>
  );

};

export default PasswordForm;
