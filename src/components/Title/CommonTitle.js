import React from "react";
import "./CommonTitle.css";

const CommonTitle = ({ title = "", para = "" }) => {
  return (
    <div className="section-body">
      <h2 className="body-title">{title}</h2>
      <p className="para-content">{para}</p>
    </div>
  );
};

export default CommonTitle;
