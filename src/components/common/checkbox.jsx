import React, { Component } from "react";

const Checkbox = ({ name, label, ...rest }) => {
  return (
    <div className="form-check">
      <input
        {...rest}
        className="form-check-input"
        type="checkbox"
        value=""
        id={name}
      />
      <label className="form-check-label" for={name}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
