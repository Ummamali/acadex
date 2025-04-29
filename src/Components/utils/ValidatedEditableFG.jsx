import React, { useRef, useState } from "react";

export default function ValidatedEditableFG({
  label,
  identity,
  value,
  setValue,
  validityStatuses,
  validate,
  inputProps,
  debounceTimeout = 200,
}) {
  const [isLocked, setIsLocked] = useState(true);
  const [provisionalValue, setProvisionalValue] = useState("");
  const debouncedValidate = useRef();

  const thisFieldvStatus = validityStatuses[identity].vStatus;
  const isInvalid = thisFieldvStatus === 3;
  const isSurelyValid = thisFieldvStatus === 2;
  return (
    <div
      className={`validated-state-fg ${
        isInvalid ? "invalid" : isSurelyValid ? "valid" : ""
      }`}
    >
      <div>
        <div className="state-form-group">
          <div className="flex items-center space-x-2 mb-1">
            <label htmlFor={identity} className="mb-0!">
              {label}
            </label>
            {isLocked ? (
              <button
                className="text-sm text-gray-700"
                onClick={() => {
                  setIsLocked(false);
                  setProvisionalValue(value);
                }}
              >
                <i className="fa-solid fa-pen"></i>
              </button>
            ) : (
              <div className="ml-auto space-x-2">
                <button
                  className="text-green-700 hover:bg-green-100 w-7 h-7 rounded-sm disabled:saturate-0 disabled:hover:bg-transparent"
                  disabled={isInvalid}
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
                    validate(identity, value);
                  }}
                >
                  <i className="fa-solid fa-xmark "></i>
                </button>
              </div>
            )}
          </div>
          <input
            id={identity}
            value={isLocked ? value : provisionalValue}
            onChange={(e) => {
              setProvisionalValue(e.target.value);
              clearTimeout(debouncedValidate.current);
              debouncedValidate.current = setTimeout(() => {
                console.log("validating " + identity + ".....");
                validate(identity, e.target.value);
              }, debounceTimeout);
            }}
            disabled={isLocked}
            {...inputProps}
          />
        </div>
      </div>
      <p className="err-msg">{validityStatuses[identity].msg}</p>
    </div>
  );
}
