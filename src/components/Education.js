import React from "react";

class Education extends React.Component {
  render() {
    const { university, city, degree, subject, from, to } =
      this.props.education;
    return (
      <div>
        <div>
          {from} - {to}
        </div>
        <div>
          <p>
            {university}, {city}
          </p>
          <p>Degree: {degree}</p>
          <p>Subject: {subject}</p>
        </div>
      </div>
    );
  }
}

export default Education;
