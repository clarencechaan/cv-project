import React from "react";
import '../styles/Experience.css'

class Experience extends React.Component {
  render() {
    const { position, company, city, from, to } = this.props.experience;
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
}

export default Experience;
