import React, { useContext, useEffect, useRef, useState } from "react";
import Modal from "../utils/Modal/Modal";
import ModalContext from "../../store/ModalContext";
import ControllerContext from "../../store/ControllerContext";
import useRequest from "../../hooks/useRequest";
import useValidator, { syncValidateAll } from "../../hooks/useValidator";
import ValidatedRefFG from "../utils/ValidatedRefFG";
import ValidatedEditableFG from "../utils/ValidatedEditableFG";

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

export default function EditStudentModal() {
  const ctrlCtx = useContext(ControllerContext);
  const modalCtx = useContext(ModalContext);
  const studentObj = ctrlCtx.students[ctrlCtx.editStudentId];
  // Form fields values
  const [name, setName] = useState(studentObj.name);
  const [age, setAge] = useState(studentObj.age);
  const [profileUrl, setProfileUrl] = useState(studentObj.imageSrc);
  const profileRef = useRef(null);
  // const { loadStatus, sendRequest } = useRequest(patchStudent);
  const { validityStatuses, validate, dispatchValidity } = useValidator(
    identityList,
    validatorPredicates
  );

  function submitForm(e) {
    e.preventDefault();

    const currentValues = {
      studentName: name,
      studentAge: parseInt(age),
    };

    if (syncValidateAll(currentValues, validate)) {
      console.log("Form ready to be submitted");
      // sendRequest({
      //   studentObj: {
      //     name: currentValues.studentName,
      //     age: currentValues.studentAge,
      //   },
      //   studentImg: profileRef.current.files[0],
      // }).then((resObj) => {
      //   ctrlCtx.appendStudent(resObj.createdId, resObj.created);
      //   modalCtx.closeCreateStudentModal();
      //   ctrlCtx.raiseAlert("Student has been created successfully.");
      // });
    }
  }

  return (
    <Modal close={modalCtx.closeEditStudentModal}>
      <div className="mb-6">
        <h3 className="text-2xl">Edit Student</h3>
        <p className="text-sm text-black/70">
          Modify the student's details below and save your changes.
        </p>
      </div>
      <form action="" className="flex space-x-6" onSubmit={submitForm}>
        <div className="flex-1 space-y-3">
          <ValidatedEditableFG
            identity="studentName"
            label="Name"
            value={name}
            setValue={setName}
            validityStatuses={validityStatuses}
            dispatchValidity={dispatchValidity}
            validate={validate}
            inputProps={{
              placeholder: "Enter student name here...",
            }}
          />
          <ValidatedEditableFG
            identity="studentAge"
            label="Age"
            value={age}
            setValue={setAge}
            validityStatuses={validityStatuses}
            dispatchValidity={dispatchValidity}
            validate={validate}
            inputProps={{
              placeholder: "Enter student age here....",
              type: "number",
            }}
          />
          <div className="flex space-x-3 items-center">
            <button
              type="submit"
              className="block text-white py-2.5 px-6 rounded-sm bg-accent disabled:opacity-25 disabled:hover:cursor-not-allowed"
              // disabled={loadStatus === 1}
            >
              Register Student
            </button>
            {/* {loadStatus === 1 ? (
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
            ) : null} */}
          </div>
        </div>
        <div
          className="w-[120px] h-[120px] rounded-full text-center text-2xl text-black/70 bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-300/80 border border-gray-300"
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
