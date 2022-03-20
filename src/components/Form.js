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
            handleDelete={this.props.handleExperienceDelete}
          />
        ))}
        <button type="button" onClick={this.props.handleExperienceAdd}>
          Add
        </button>
        <h2>Education</h2>
        {this.props.educations.map((ed, idx) => (
          <EducationForm
            key={ed.id}
            index={idx}
            education={ed}
            handleChange={this.props.handleEducationChange}
            handleDelete={this.props.handleEducationDelete}
          />
        ))}
        <button type="button" onClick={this.props.handleEducationAdd}>
          Add
        </button>
        <button
          type="button"
          onClick={this.props.handleLoadExample}
          className="loadExample"
        >
          Load Example
        </button>
        <button
          type="button"
          onClick={this.props.handleReset}
          className="reset"
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Form;
