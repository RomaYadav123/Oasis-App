import { Col, Container, Row } from "react-bootstrap";
import headerLeftSec from "../../assets/header-left-section.png";
import "./MainContainer.css";

const MainContainer = ({ children }) => {
  return (
    <Container fluid className="parent-welcome">
      <Row>
        <Col lg={5} className="welcome-left">
          <img src={headerLeftSec} className="welcome-side-img" />
        </Col>

        <Col lg={7} className="welcome-left">
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default MainContainer;
