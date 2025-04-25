import React, { useContext, useRef, useState } from "react";
import Modal from "../utils/Modal/Modal";
import ModalContext from "../../store/ModalContext";
import RefFormGroup from "../utils/RefFormGroup";
import { postStudent } from "../../backend/connect";
import useRequest from "../../hooks/useRequest";
import ControllerContext from "../../store/ControllerContext";
import useValidator, { syncValidateAll } from "../../hooks/useValidator";
import ValidatedRefFG from "../utils/ValidatedRefFG";

const identityList = {
  studentName: "Invalid student name given...",
  studentAge: "Invalid student age, must be between 1 and 120...",
};

const validatorPredicates = {
  studentName: (name) => ({
    isValid: name.length > 4,
  }),
  studentAge: (age) => ({
    isValid: age > 0 && age < 120,
  }),
};

export default function CreateStudentModal() {
  const ctrlCtx = useContext(ControllerContext);
  const modalCtx = useContext(ModalContext);
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const profileRef = useRef(null);
  const [profileUrl, setProfileUrl] = useState(null);
  const { loadStatus, sendRequest } = useRequest(postStudent);
  const { validityStatuses, validate, dispatchValidity } = useValidator(
    identityList,
    validatorPredicates
  );

  function submitForm(e) {
    e.preventDefault();

    const currentValues = {
      studentName: nameRef.current.value,
      studentAge: parseInt(ageRef.current.value),
    };

    if (syncValidateAll(currentValues, validate)) {
      sendRequest({
        studentObj: {
          name: currentValues.studentName,
          age: currentValues.studentAge,
        },
        studentImg: profileRef.current.files[0],
      }).then((resObj) => {
        ctrlCtx.appendStudent(resObj.createdId, resObj.created);
      });
    }
  }

  return (
    <Modal close={modalCtx.closeCreateStudentModal}>
      <div className="mb-6">
        <h3 className="text-2xl">Register a New Student</h3>
        <p className="text-sm text-black/70">
          Provide student information to complete registration.
        </p>
      </div>
      <form action="" className="flex space-x-6" onSubmit={submitForm}>
        <div className="flex-1 space-y-3">
          <ValidatedRefFG
            ref={nameRef}
            identity="studentName"
            label="Name"
            validityStatuses={validityStatuses}
            dispatchValidity={dispatchValidity}
            inputProps={{
              placeholder: "Enter student name here...",
              onBlur: (e) => validate("studentName", e.target.value),
            }}
          />
          <ValidatedRefFG
            ref={ageRef}
            identity="studentAge"
            label="Age"
            validityStatuses={validityStatuses}
            dispatchValidity={dispatchValidity}
            inputProps={{
              placeholder: "Enter student age here....",
              onBlur: (e) => validate("studentAge", e.target.value),
            }}
          />
          <div className="flex space-x-3 items-center">
            <button
              type="submit"
              className="block text-white py-2.5 px-6 rounded-sm bg-accent disabled:opacity-25 disabled:hover:cursor-not-allowed"
              disabled={loadStatus === 1}
            >
              Register Student
            </button>
            {loadStatus === 1 ? (
              <p className="textx-gray-600 italic">
                <i className="fa-solid fa-spinner animate-spin mr-2"></i>
                Registering...
              </p>
            ) : loadStatus === 2 ? (
              <p className="text-green-600">
                <i className="fa-solid fa-circle-check"></i> Student registered
                successfully
              </p>
            ) : loadStatus === 3 ? (
              <p className="text-red-600">
                {" "}
                <i className="fa-solid fa-circle-exclamation"></i> Unable to
                register student
              </p>
            ) : null}
          </div>
        </div>
        <div
          className="w-[120px] h-[120px] rounded-full text-center text-2xl text-black/70 bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300/80 border border-gray-500"
          style={
            profileUrl !== null
              ? {
                  background: `url(${profileUrl}) no-repeat center center/cover`,
                }
              : undefined
          }
          onClick={() => profileRef.current.click()}
        >
          <input
            type="file"
            name="profile"
            id="profile"
            ref={profileRef}
            className="hidden"
            accept=".jpg, .jpeg, .png"
            onChange={(e) => {
              const img = e.target.files[0];
              if (img) {
                setProfileUrl(URL.createObjectURL(img));
              } else {
                setProfileUrl(null);
              }
            }}
          />
          {profileUrl === null ? <i className="fa-regular fa-image"></i> : null}
        </div>
      </form>
    </Modal>
  );
}
