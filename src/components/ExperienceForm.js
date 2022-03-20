import React from "react";


class ExperienceForm extends React.Component {
  render() {
    const { position, company, city, from, to } = this.props.experience;
    return (
      <form action="#">
        <input
          type="text"
          placeholder="Position"
          name="position"
          value={position}
          onChange={(e) => this.props.handleChange(e, this.props.index)}
        />
        <input
          type="text"
          placeholder="Company"
          name="company"
          value={company}
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
        <button type="button">Delete</button>
      </form>
    );
  }
}

export default ExperienceForm;
