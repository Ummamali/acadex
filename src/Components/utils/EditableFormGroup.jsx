import React, { useRef, useState } from "react";

export default function EditableFormGroup({
  id,
  label,
  value,
  setValue,
  inputProps,
}) {
  /*
  This state form group is better suited for editable fields (for fields in an EDIT form). If you don't want edit locking feature (mostly in simple forms), user Ref-FormGroup
  
  */
  const [isLocked, setIsLocked] = useState(true);
  const [provisionalValue, setProvisionalValue] = useState("");
  const inputRef = useRef(null);
  return (
    <div>
      <div className="state-form-group">
        <div className="flex items-center space-x-2 mb-1">
          <label htmlFor={id} className="mb-0!">
            {label}
          </label>
          {isLocked ? (
            <button
              className="text-sm text-gray-700"
              onClick={() => {
                inputRef.current.focus();
                setIsLocked(false);
                setProvisionalValue(value);
              }}
            >
              <i className="fa-solid fa-pen"></i>
            </button>
          ) : (
            <div className="ml-auto space-x-2">
              <button
                className="text-green-700 hover:bg-green-100 w-7 h-7 rounded-sm"
                // disabled={isInvalid}
                onClick={() => {
                  setValue(provisionalValue);
                  setIsLocked(true);
                }}
              >
                <i className="fa-solid fa-check"></i>
              </button>
              <button
                className="text-red-600 hover:bg-red-100 w-7 h-7 rounded-sm"
                onClick={() => {
                  setProvisionalValue("");
                  setIsLocked(true);
                }}
              >
                <i className="fa-solid fa-xmark "></i>
              </button>
            </div>
          )}
        </div>
        <input
          id={id}
          value={isLocked ? value : provisionalValue}
          onChange={(e) => setProvisionalValue(e.target.value)}
          disabled={isLocked}
          ref={inputRef}
          {...inputProps}
        />
      </div>
    </div>
  );
}
