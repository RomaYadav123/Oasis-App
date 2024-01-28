import { Button, Col, Container, Row } from "react-bootstrap";
import headerLeftSec from "../../assets/header-left-section.png";
import "./WelcomeScreen.css";
import polygonIcon from "../../assets/polygon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBriefcase,
  faPerson,
  faUser,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import CustomCard from "../../components/Card/CustomCard";
import MainContainer from "../../components/MainContainer/MainContainer";
import CommonTitle from "../../components/Title/CommonTitle";

const WelcomeScreen = () => {
  const handleIndividualClick = () => {
    console.log("Indidvidual card clicked !");
  };

  const handleBusinessClick = () => {
    console.log("Business card clicked !");
  };

  return (
    <MainContainer>
      <div className="welcome-header">
        <span className="auth-details">
          Already have an account?
          <a href="./register" className="register-style">
            <b>Sign In</b>
          </a>
        </span>
      </div>

      <div className="welcome-section">
        <CommonTitle
          title="Join Us!"
          para="To begin this journey, tell us what type of account you'd be opening."
        />

        <CustomCard
          onClick={handleIndividualClick}
          iconName={faUser}
          title="Individual"
          subtitle="Personal account to manage all your acitivities."
        />

        <CustomCard
          onClick={handleBusinessClick}
          iconName={faBriefcase}
          title="Business"
          subtitle="Own or belong to a company, this is for you."
        />
      </div>
    </MainContainer>
  );
};

export default WelcomeScreen;
