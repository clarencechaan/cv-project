import React from "react";
import PersonalInformation from "./PersonalInformation";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import "../styles/Form.css";

class Form extends React.Component {
  render() {
    return (
      <div className="Form">
        <h2>Personal Information</h2>
        <PersonalInformation
          personalInformation={this.props.personalInformation}
          handleChange={this.props.handlePersonalInformationChange}
        />
        <h2>Experience</h2>
        {this.props.experiences.map((ex, idx) => (
          <ExperienceForm
            key={ex.id}
            index={idx}
            experience={ex}
            handleChange={this.props.handleExperienceChange}
          />
        ))}
        <h2>Education</h2>
        {this.props.educations.map((ed, idx) => (
          <EducationForm
            key={ed.id}
            index={idx}
            education={ed}
            handleChange={this.props.handleEducationChange}
          />
        ))}
      </div>
    );
  }
}

export default Form;
