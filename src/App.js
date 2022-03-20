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
        firstName: "John",
        lastName: "Doe",
        title: "Senior Web Developer",
        address: "Example Street 10",
        phone: "647-123-9999",
        email: "john.doe@gmail.com",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.",
      },
      experiences: [
        {
          position: "Senior Web Developer",
          company: "Facebook Inc.",
          city: "Menlo Park",
          from: "2015",
          to: "Present",
          id: uniqid(),
        },
        { position: "", company: "", city: "", from: "", to: "", id: uniqid() },
      ],
      educations: [
        {
          university: "University of Technology",
          city: "Oklahoma",
          degree: "Master",
          subject: "Science",
          from: "2008",
          to: "2010",
          id: uniqid(),
        },
      ],
    };

    this.handlePersonalInformationChange =
      this.handlePersonalInformationChange.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
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
