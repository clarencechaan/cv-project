import React from "react";
import "../styles/PersonalInformation.css";

class PersonalInformation extends React.Component {
  render() {
    const { firstName, lastName, title, address, phone, email, description } =
      this.props.personalInformation;
    return (
      <form action="#">
        <input type="text" placeholder="First name" value={firstName} name="firstName" onChange={this.props.handleChange}/>
        <input type="text" placeholder="Last name" value={lastName} name="lastName" onChange={this.props.handleChange}/>
        <input type="text" placeholder="Title" value={title} name="title" onChange={this.props.handleChange}/>
        <input type="text" placeholder="Address" value={address} name="address" onChange={this.props.handleChange}/>
        <input type="phone" placeholder="Phone number" value={phone} name="phone" onChange={this.props.handleChange}/>
        <input type="email" placeholder="Email" value={email} name="email" onChange={this.props.handleChange}/>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          placeholder="Description"
          value={description}
          onChange={this.props.handleChange}
        ></textarea>
      </form>
    );
  }
}

export default PersonalInformation;
