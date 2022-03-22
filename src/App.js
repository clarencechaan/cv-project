import React, { useState } from "react";
import Form from "./components/Form";
import CV from "./components/CV";
import uniqid from "uniqid";
import "./styles/App.css";

function App() {
  const [personalInformation, setPersonalInformation] = useState({
    firstName: "",
    lastName: "",
    title: "",
    address: "",
    phone: "",
    email: "",
    description: "",
  });

  const [experiences, setExperiences] = useState([
    {
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
      id: uniqid(),
    },
  ]);

  const [educations, setEducations] = useState([
    {
      university: "",
      city: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
      id: uniqid(),
    },
  ]);

  function handlePersonalInformationChange(e) {
    setPersonalInformation((prevPersonalInformation) => ({
      ...prevPersonalInformation,
      [e.target.name]: e.target.value,
    }));
  }

  function handleExperienceChange(e, index) {
    setExperiences((prevExperiences) => [
      ...prevExperiences.slice(0, index),
      { ...prevExperiences[index], [e.target.name]: e.target.value },
      ...prevExperiences.slice(index + 1),
    ]);
  }

  function handleEducationChange(e, index) {
    setEducations((prevEducations) => [
      ...prevEducations.slice(0, index),
      { ...prevEducations[index], [e.target.name]: e.target.value },
      ...prevEducations.slice(index + 1),
    ]);
  }

  function handleExperienceDelete(index) {
    setExperiences((prevExperiences) => [
      ...prevExperiences.slice(0, index),
      ...prevExperiences.slice(index + 1),
    ]);
  }

  function handleEducationDelete(index) {
    setEducations((prevEducations) => [
      ...prevEducations.slice(0, index),
      ...prevEducations.slice(index + 1),
    ]);
  }

  function handleExperienceAdd() {
    setExperiences((prevExperiences) => [
      ...prevExperiences,
      { position: "", company: "", city: "", from: "", to: "", id: uniqid() },
    ]);
  }

  function handleEducationAdd() {
    setEducations((prevEducations) => [
      ...prevEducations,
      {
        university: "",
        city: "",
        degree: "",
        subject: "",
        from: "",
        to: "",
        id: uniqid(),
      },
    ]);
  }

  function handleReset() {
    setPersonalInformation({
      firstName: "",
      lastName: "",
      title: "",
      address: "",
      phone: "",
      email: "",
      description: "",
    });

    setExperiences([
      {
        position: "",
        company: "",
        city: "",
        from: "",
        to: "",
        id: uniqid(),
      },
    ]);

    setEducations([
      {
        university: "",
        city: "",
        degree: "",
        subject: "",
        from: "",
        to: "",
        id: uniqid(),
      },
    ]);
  }

  function handleLoadExample() {
    setPersonalInformation({
      firstName: "John",
      lastName: "Smith",
      title: "Senior Web Developer",
      address: "647 Dundas St.",
      phone: "416-123-9999",
      email: "john.smith@gmail.com",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    });

    setExperiences([
      {
        position: "Senior Web Developer",
        company: "Amazon.com, Inc.",
        city: "Seattle",
        from: "2017",
        to: "Present",
        id: uniqid(),
      },
      {
        position: "Junior Web Developer",
        company: "Microsoft Corporation",
        city: "Redmond",
        from: "2014",
        to: "2017",
        id: uniqid(),
      },
    ]);

    setEducations([
      {
        university: "University of Toronto",
        city: "Toronto",
        degree: "Master",
        subject: "Computer Science",
        from: "2012",
        to: "2014",
        id: uniqid(),
      },
      {
        university: "University of Waterloo",
        city: "Waterloo",
        degree: "Bachelor",
        subject: "Computer Science",
        from: "2008",
        to: "2012",
        id: uniqid(),
      },
    ]);
  }

  return (
    <div className="App">
      <Form
        personalInformation={personalInformation}
        experiences={experiences}
        educations={educations}
        handlePersonalInformationChange={handlePersonalInformationChange}
        handleExperienceChange={handleExperienceChange}
        handleEducationChange={handleEducationChange}
        handleExperienceDelete={handleExperienceDelete}
        handleEducationDelete={handleEducationDelete}
        handleExperienceAdd={handleExperienceAdd}
        handleEducationAdd={handleEducationAdd}
        handleReset={handleReset}
        handleLoadExample={handleLoadExample}
      />
      <CV
        personalInformation={personalInformation}
        experiences={experiences}
        educations={educations}
      />
    </div>
  );
}

export default App;
