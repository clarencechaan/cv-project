import React from "react";
import "../styles/Experience.css";

function Experience(props) {
  const { position, company, city, from, to } = props.experience;
  return (
    <div className="experience">
      <div className="date-container">
        {from} - {to}
      </div>
      <div>
        <p>{position}</p>
        <p>
          {company}, {city}
        </p>
      </div>
    </div>
  );
}

export default Experience;
