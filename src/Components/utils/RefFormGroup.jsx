import React from "react";

export default function RefFormGroup({ ref, id, label, inputProps }) {
  return (
    <div className="ref-form-group">
      <label htmlFor={id}>{label}</label>
      <input id={id} ref={ref} {...inputProps} />
    </div>
  );
}
