import React from "react";

class EducationForm extends React.Component {
  render() {
    const { university, city, degree, subject, from, to } =
      this.props.education;
    return (
      <form action="#">
        <input
          type="text"
          placeholder="University name"
          name="university"
          value={university}
          onChange={(e) => this.props.handleChange(e, this.props.index)}
        />
        <input
          type="text"
          placeholder="City"
          name="city"
          value={city}
          onChange={(e) => this.props.handleChange(e, this.props.index)}
        />
        <input
          type="text"
          placeholder="Degree"
          name="degree"
          value={degree}
          onChange={(e) => this.props.handleChange(e, this.props.index)}
        />
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          value={subject}
          onChange={(e) => this.props.handleChange(e, this.props.index)}
        />
        <input
          type="text"
          placeholder="From"
          name="from"
          value={from}
          onChange={(e) => this.props.handleChange(e, this.props.index)}
        />
        <input
          type="text"
          placeholder="To"
          name="to"
          value={to}
          onChange={(e) => this.props.handleChange(e, this.props.index)}
        />
        <button
          type="button"
          onClick={() => this.props.handleDelete(this.props.index)}
        >
          Delete
        </button>
      </form>
    );
  }
}

export default EducationForm;
