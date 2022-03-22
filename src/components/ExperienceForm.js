import React from "react";

function ExperienceForm(props) {
  const { position, company, city, from, to } = props.experience;
  return (
    <form action="#">
      <input
        type="text"
        placeholder="Position"
        name="position"
        value={position}
        onChange={(e) => props.handleChange(e, props.index)}
      />
      <input
        type="text"
        placeholder="Company"
        name="company"
        value={company}
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

export default ExperienceForm;
