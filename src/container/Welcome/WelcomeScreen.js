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

const WelcomeScreen = () => {
  const handleIndividualClick = () => {
    console.log("Indidvidual card clicked !");
  };

  const handleBusinessClick = () => {
    console.log("Business card clicked !");
  };

  return (
    <Container fluid className="parent-welcome">
      <Row>
        <Col lg={5} className="welcome-left ">
          <img src={headerLeftSec} className="welcome-side-img" />
        </Col>

        <Col lg={7}>
          <div className="welcome-header">
            <span className="auth-details">
              Already have an account?
              <a href="./register" className="register-style">
                <b>Sign In</b>
              </a>
            </span>
          </div>

          <div className="welcome-section">
            <div className="section-body">
              <h2 className="body-title">Join Us!</h2>
              <p className="para-content">
                To begin this journey, tell us what type of account you'd be
                opening.
              </p>
            </div>

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
        </Col>
      </Row>
    </Container>
  );
};

export default WelcomeScreen;
