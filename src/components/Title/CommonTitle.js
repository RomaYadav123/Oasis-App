import React from "react";
import "./CommonTitle.css";

const CommonTitle = ({ title = "", para = "" }) => {
  return (
    <div className="section-body section-body-mob">
      <h2 className="body-title title-mob">{title}</h2>
      <p className="para-content para-mob">{para}</p>
    </div>
  );
};

export default CommonTitle;
