import React from "react";
import PersonalInformation from "./PersonalInformation";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import "../styles/Form.css";

function Form(props) {
  return (
    <div className="Form">
      <h2>Personal Information</h2>
      <PersonalInformation
        personalInformation={props.personalInformation}
        handleChange={props.handlePersonalInformationChange}
      />
      <h2>Experience</h2>
      {props.experiences.map((ex, idx) => (
        <ExperienceForm
          key={ex.id}
          index={idx}
          experience={ex}
          handleChange={props.handleExperienceChange}
          handleDelete={props.handleExperienceDelete}
        />
      ))}
      <button type="button" onClick={props.handleExperienceAdd}>
        Add
      </button>
      <h2>Education</h2>
      {props.educations.map((ed, idx) => (
        <EducationForm
          key={ed.id}
          index={idx}
          education={ed}
          handleChange={props.handleEducationChange}
          handleDelete={props.handleEducationDelete}
        />
      ))}
      <button type="button" onClick={props.handleEducationAdd}>
        Add
      </button>
      <button
        type="button"
        onClick={props.handleLoadExample}
        className="loadExample"
      >
        Load Example
      </button>
      <button type="button" onClick={props.handleReset} className="reset">
        Reset
      </button>
    </div>
  );
}

export default Form;
