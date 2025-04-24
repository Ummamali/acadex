import React from "react";

export default function RefFormGroup({
  ref,
  id,
  label,
  inputProps,
  errorMessage,
}) {
  return (
    <div className="ref-form-group error">
      <label htmlFor={id}>{label}</label>
      <input id={id} ref={ref} {...inputProps} />
      <p className="err">{errorMessage}</p>
    </div>
  );
}
