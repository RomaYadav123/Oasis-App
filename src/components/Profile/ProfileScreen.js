import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import headerLeftSec from "../../assets/header-left-section.png";
import "./ProfileScreen.css";
import GoogleIcon from "../../assets/google-icon-2.png";
import PasswordChecklist from "react-password-checklist";
import polygonIcon from "../../assets/polygon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBriefcase,
  faEye,
  faEyeSlash,
  faLock,
  faPerson,
  faUser,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import CustomCard from "../../components/Card/CustomCard";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import MainContainer from "../../components/MainContainer/MainContainer";
import CommonTitle from "../../components/Title/CommonTitle";
import CommonInputField from "../../components/InputField/InputField";
import InputField from "../../components/InputField/InputField";
import PasswordForm from "../../components/PasswordForm/PasswordForm";
import "../InputField/InputField.css";
import Country from "../Country/Country";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import PhoneNumberScreen from "../PhoneNumber/PhoneNumber";

const ProfileScreen = () => {
  const [value, setValue] = useState();
  const [validated, setValidated] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState({
    message: "",
    success: false,
  });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    country: "India",
  });

  const [validatedFields, setValidatedFields] = useState({
    fullName: false,
    email: false,
    password: false,
  });

  const [fullName, setFullName] = useState("");

  const validateField = (name, value) => {
    const isValid = value.trim() !== "";

    setValidatedFields((prevValidatedFields) => ({
      ...prevValidatedFields,
      [name]: isValid,
    }));
  };

  const isStepValid = () => {
    return Object.values(validatedFields).every((field) => field);
  };

  //full name validation starts here

  const handleFullNameChange = (e) => {
    const fullNameInput = e.target.value;

    if (/^\D+$/.test(fullNameInput)) {
      setFormData({
        ...formData,
        fullName: fullNameInput,
      });
      e.target.setCustomValidity("");
    } else {
      e.target.setCustomValidity(
        "First name should only contain non-numeric characters."
      );
    }
  };

  //full name validation ends here

  //email validation goes here //
  const handleEmailChange = (e) => {
    const emailInput = e.target.value;

    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailInput)) {
      setFormData({
        ...formData,
        email: emailInput,
      });
      e.target.setCustomValidity("");
    } else {
      e.target.setCustomValidity("Please enter a valid email address.");
    }
  };

  // email validation ends here

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidated(true);

    const isValid = isStepValid();

    if (!isValid) {
      console.log("isValid");
    }
    const requestData = {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
    };
    console.log("request data", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });
    setFormData({ ...formData, [name]: value });
  };
  const Navigate = useNavigate();
  const handleSaveClick = () => {
    Navigate("/profilesub");
  };

  return (
    <MainContainer>
      <Header title="STEP 02/03" subTitle="Residency Info." />
      <div className="box-wrapper ">
        <CommonTitle
          title="Complete your Profile!"
          para="For the purpose of industry regulation, Your details are required."
        />
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          // className="box-wrapper"
        >
          <PhoneNumberScreen />

          <InputField
            name="address"
            label=" Address*"
            type="text"
            onChange={handleChange}
            placeholder="Enter your address"
            feedback="Looks great!"
          />
          <div className="group-parent">
            <Country className="country-style " />
          </div>

          <div className="group-parent">
            <Button
              className="register-cta"
              type="submit"
              onClick={handleSaveClick}
            >
              <span className="reg-cta-text">Save & Continue</span>
            </Button>
          </div>
        </Form>

        <div className="lock-wrapper">
          <FontAwesomeIcon icon={faLock} className="lock-icon" />
          <span className="footer-text">Your Info is safely secured</span>
        </div>
      </div>
    </MainContainer>
  );
};

export default ProfileScreen;
