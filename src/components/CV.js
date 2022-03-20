import React from "react";
import Experience from "./Experience";
import Education from "./Education";
import "../styles/CV.css";

class CV extends React.Component {
  render() {
    const { firstName, lastName, title, address, phone, email, description } =
      this.props.personalInformation;
    return (
      <div className="CV">
        <div className="header">
          <div className="name">{firstName + " " + lastName}</div>
          <div className="title">{title}</div>
        </div>
        <div className="main">
          <h3>Description</h3>
          <p className="description"><em>{description}</em></p>
          <h3>Experience</h3>
          {this.props.experiences.map((ex) => (
            <Experience experience={ex} key={ex.id} />
          ))}
          <h3>Education</h3>
          {this.props.educations.map((ed) => (
            <Education education={ed} key={ed.id} />
          ))}
        </div>
        <div className="side">
          <h3>Personal Details</h3>
          <h4>Address</h4>
          <p>{address}</p>
          <h4>Phone Number</h4>
          <p>{phone}</p>
          <h4>Email</h4>
          <p>{email}</p>
        </div>
      </div>
    );
  }
}

export default CV;
