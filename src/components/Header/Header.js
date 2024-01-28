import { Col, Container, Row } from "react-bootstrap";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Navigate, useNavigate } from "react-router-dom";

const Header = ({ title = "", subTitle = "" }) => {
  const Navigate = useNavigate();
  const handleBackClick = () => {
    Navigate(-1);
  };
  return (
    <div className="parent-header">
      <div onClick={handleBackClick}>
        <FontAwesomeIcon icon={faChevronLeft} className="chevron-icon" />
        <span className="header-left">Back</span>
      </div>
      <div className="d-flex flex-column">
        <span className="step-style"> {title}</span>
        <span className="info-style">{subTitle}</span>
      </div>
    </div>
  );
};

export default Header;
