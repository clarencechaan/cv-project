import React from "react";
import "../styles/PersonalInformation.css";

function PersonalInformation(props) {
  const { firstName, lastName, title, address, phone, email, description } =
    props.personalInformation;
  return (
    <form action="#">
      <input
        type="text"
        placeholder="First name"
        value={firstName}
        name="firstName"
        onChange={props.handleChange}
      />
      <input
        type="text"
        placeholder="Last name"
        value={lastName}
        name="lastName"
        onChange={props.handleChange}
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        name="title"
        onChange={props.handleChange}
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        name="address"
        onChange={props.handleChange}
      />
      <input
        type="phone"
        placeholder="Phone number"
        value={phone}
        name="phone"
        onChange={props.handleChange}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        name="email"
        onChange={props.handleChange}
      />
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="6"
        placeholder="Description"
        value={description}
        onChange={props.handleChange}
      ></textarea>
    </form>
  );
}

export default PersonalInformation;
