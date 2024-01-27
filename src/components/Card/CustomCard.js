import { faArrowRight, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Card from "react-bootstrap/Card";
import "./CustomCard.css";
const CustomCard = ({
  iconName = faUser,
  title = "",
  subtitle = "",
  onClick = () => {},
}) => {
  return (
    <Card className="card-welcome" onClick={onClick}>
      <Card.Body className="card-body-oas">
        <div className="polygon-box">
          <FontAwesomeIcon icon={iconName} className="user-icon" />
        </div>
        <div className="polygon-body">
          <div className=" card-inner-body">
            <Card.Title className="card-title-style">
              <b>{title}</b>
            </Card.Title>

            <Card.Text className="card-title-para">{subtitle}</Card.Text>
          </div>
        </div>
        <div className="right-arrow-icon">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
