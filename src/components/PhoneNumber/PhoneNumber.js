import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./PhoneNumber.css";

const PhoneNumberScreen = () => {
  const [value, setValue] = useState("");

  const changeHandler = (phoneNumber) => {
    setValue(phoneNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted phone number:", value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PhoneInput
        required
        placeholder="Enter phone number"
        value={value}
        onChange={changeHandler}
        className="phone-style phone-mob"
      />
  
    </form>
  );
};

export default PhoneNumberScreen;
