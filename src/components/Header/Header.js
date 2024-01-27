import { Col, Container, Row } from "react-bootstrap";

import "./Header.css";
import headerLeftSec from "../../assets/header-left-section.png";

const Header = () => {
  return (
    <Container fluid className="header-parent">
      <img src={headerLeftSec} />
    </Container>
  );
};

export default Header;
