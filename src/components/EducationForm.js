import React from "react";

function EducationForm(props) {
  const { university, city, degree, subject, from, to } = props.education;
  return (
    <form action="#">
      <input
        type="text"
        placeholder="University name"
        name="university"
        value={university}
        onChange={(e) => props.handleChange(e, props.index)}
      />
      <input
        type="text"
        placeholder="City"
        name="city"
        value={city}
        onChange={(e) => props.handleChange(e, props.index)}
      />
      <input
        type="text"
        placeholder="Degree"
        name="degree"
        value={degree}
        onChange={(e) => props.handleChange(e, props.index)}
      />
      <input
        type="text"
        placeholder="Subject"
        name="subject"
        value={subject}
        onChange={(e) => props.handleChange(e, props.index)}
      />
      <input
        type="text"
        placeholder="From"
        name="from"
        value={from}
        onChange={(e) => props.handleChange(e, props.index)}
      />
      <input
        type="text"
        placeholder="To"
        name="to"
        value={to}
        onChange={(e) => props.handleChange(e, props.index)}
      />
      <button type="button" onClick={() => props.handleDelete(props.index)}>
        Delete
      </button>
    </form>
  );
}

export default EducationForm;
