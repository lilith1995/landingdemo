import React from "react";

import "./Section.scss";

const Section = ({ img, title, description }) => {
  return (
    <div className="component">
      <div className="section-graph">
        <img src={img} alt={title} />
      </div>
      <div className="section-content">
        <h4 className="title">{title}</h4>
        <p className="p-text">
          {description}
          <a href=" "> Learn more.</a>
        </p>
      </div>
    </div>
  );
};

export default Section;
