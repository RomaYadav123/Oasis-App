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
      {/* <PasswordChecklist
        rules={["specialChar", "number", "capital"]}
        minLength={8}
        value={password}
        messages={{
          minLength: "Password shall have 8 Characters",
          specialChar: "Include a Special Character.",
          number: "Include a Number",
          capital: "Include a Capital letter.",
        }}
      /> */}
      <span onClick={togglePasswordVisibility} className="envelope-style">
        {showPassword ? "hide" : "show"}
      </span>
    </div>
  );

  //   return (
  //     <div className="input-with-icon">
  //       <Form.Control
  //         required
  //         name={name}
  //         type={showPassword ? "text" : "password"}
  //         value={formData.password}
  //         onChange={handleChange}
  //         className="control-style"
  //       />
  //       <span onClick={togglePasswordVisibility} className="envelope-style">
  //         {showPassword ? "hide" : "show"}
  //       </span>
  //       <Form.Control.Feedback type="invalid">
  //         Please provide a strong password.
  //       </Form.Control.Feedback>
  //       <PasswordChecklist
  //         rules={["minLength", "specialChar", "number", "capital"]}
  //         minLength={8}
  //         value={formData.password}
  //         messages={{
  //           minLength: "Password shall have 8 Characters",
  //           specialChar: "Include a Special Character.",
  //           number: "Include a Number",
  //           capital: "Include a Capital letter.",
  //         }}
  //       />
  //     </div>
  //   );
};

export default PasswordForm;
