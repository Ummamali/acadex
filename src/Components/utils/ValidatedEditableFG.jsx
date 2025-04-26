import React from "react";
import { vActions } from "../../hooks/useValidator";
import EditableFormGroup from "./EditableFormGroup";

export default function ValidatedEditableFG({
  identity,
  validityStatuses,
  dispatchValidity,
  inputProps,
  ...otherProps
}) {
  const isInvalid = validityStatuses[identity].vStatus === 3;
  const isSurelyValid = validityStatuses[identity].vStatus === 2;
  return (
    <div
      className={`validated-state-fg ${
        isInvalid ? "invalid" : isSurelyValid ? "valid" : ""
      }`}
    >
      <EditableFormGroup
        id={identity}
        inputProps={{
          onFocus: () => dispatchValidity(vActions.RESET({ identity })),
          "data-identity": identity,
          ...inputProps,
        }}
        {...otherProps}
      />
      <p className="err-msg">{validityStatuses[identity].msg}</p>
    </div>
  );
}
