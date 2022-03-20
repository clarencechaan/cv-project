import React from "react";
import Form from "./components/Form";
import CV from "./components/CV";
import uniqid from "uniqid";
import "./styles/App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      personalInformation: {
        firstName: "",
        lastName: "",
        title: "",
        address: "",
        phone: "",
        email: "",
        description: "",
      },
      experiences: [
        {
          position: "",
          company: "",
          city: "",
          from: "",
          to: "",
          id: uniqid(),
        },
      ],
      educations: [
        {
          university: "",
          city: "",
          degree: "",
          subject: "",
          from: "",
          to: "",
          id: uniqid(),
        },
      ],
    };

    this.handlePersonalInformationChange =
      this.handlePersonalInformationChange.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.handleExperienceDelete = this.handleExperienceDelete.bind(this);
    this.handleEducationDelete = this.handleEducationDelete.bind(this);
    this.handleExperienceAdd = this.handleExperienceAdd.bind(this);
    this.handleEducationAdd = this.handleEducationAdd.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleLoadExample = this.handleLoadExample.bind(this);
  }

  handlePersonalInformationChange(e) {
    this.setState((prevState) => ({
      personalInformation: {
        ...prevState.personalInformation,
        [e.target.name]: e.target.value,
      },
    }));
  }

  handleExperienceChange(e, index) {
    this.setState((prevState) => ({
      experiences: [
        ...prevState.experiences.slice(0, index),
        { ...prevState.experiences[index], [e.target.name]: e.target.value },
        ...prevState.experiences.slice(index + 1),
      ],
    }));
  }

  handleEducationChange(e, index) {
    this.setState((prevState) => ({
      educations: [
        ...prevState.educations.slice(0, index),
        { ...prevState.educations[index], [e.target.name]: e.target.value },
        ...prevState.educations.slice(index + 1),
      ],
    }));
  }

  handleExperienceDelete(index) {
    this.setState((prevState) => ({
      experiences: [
        ...prevState.experiences.slice(0, index),
        ...prevState.experiences.slice(index + 1),
      ],
    }));
  }

  handleEducationDelete(index) {
    this.setState((prevState) => ({
      educations: [
        ...prevState.educations.slice(0, index),
        ...prevState.educations.slice(index + 1),
      ],
    }));
  }

  handleExperienceAdd() {
    this.setState((prevState) => ({
      experiences: [
        ...prevState.experiences,
        { position: "", company: "", city: "", from: "", to: "", id: uniqid() },
      ],
    }));
  }

  handleEducationAdd() {
    this.setState((prevState) => ({
      educations: [
        ...prevState.educations,
        {
          university: "",
          city: "",
          degree: "",
          subject: "",
          from: "",
          to: "",
          id: uniqid(),
        },
      ],
    }));
  }

  handleReset() {
    this.setState({
      personalInformation: {
        firstName: "",
        lastName: "",
        title: "",
        address: "",
        phone: "",
        email: "",
        description: "",
      },
      experiences: [
        {
          position: "",
          company: "",
          city: "",
          from: "",
          to: "",
          id: uniqid(),
        },
      ],
      educations: [
        {
          university: "",
          city: "",
          degree: "",
          subject: "",
          from: "",
          to: "",
          id: uniqid(),
        },
      ],
    });
  }

  handleLoadExample() {
    this.setState({
      personalInformation: {
        firstName: "John",
        lastName: "Smith",
        title: "Senior Web Developer",
        address: "647 Dundas St.",
        phone: "416-123-9999",
        email: "john.smith@gmail.com",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      experiences: [
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
      ],
      educations: [
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
      ],
    });
  }

  render() {
    const { personalInformation, experiences, educations } = this.state;
    return (
      <div className="App">
        <Form
          personalInformation={personalInformation}
          experiences={experiences}
          educations={educations}
          handlePersonalInformationChange={this.handlePersonalInformationChange}
          handleExperienceChange={this.handleExperienceChange}
          handleEducationChange={this.handleEducationChange}
          handleExperienceDelete={this.handleExperienceDelete}
          handleEducationDelete={this.handleEducationDelete}
          handleExperienceAdd={this.handleExperienceAdd}
          handleEducationAdd={this.handleEducationAdd}
          handleReset={this.handleReset}
          handleLoadExample={this.handleLoadExample}
        />
        <CV
          personalInformation={personalInformation}
          experiences={experiences}
          educations={educations}
        />
      </div>
    );
  }
}

export default App;
