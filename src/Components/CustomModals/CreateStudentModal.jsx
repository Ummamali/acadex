import React, { useContext, useRef, useState } from "react";
import Modal from "../utils/Modal/Modal";
import ModalContext from "../../store/ModalContext";
import RefFormGroup from "../utils/RefFormGroup";
import { postStudent } from "../../backend/connect";

export default function CreateStudentModal() {
  const modalCtx = useContext(ModalContext);
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const profileRef = useRef(null);
  const [profileUrl, setProfileUrl] = useState(null);

  function submitForm(e) {
    e.preventDefault();

    postStudent({
      studentObj: {
        name: nameRef.current.value,
        age: parseInt(ageRef.current.value),
      },
      studentImg: profileRef.current.files[0],
    });
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
          <RefFormGroup
            ref={nameRef}
            id="studentName"
            label="Name"
            errorMessage={"Bad bad user...."}
            inputProps={{ placeholder: "Enter student name here..." }}
          />
          <RefFormGroup
            ref={ageRef}
            id="studentAge"
            label="Age"
            inputProps={{ placeholder: "Enter student age here...." }}
          />
          <button
            type="submit"
            className="block text-white py-2.5 px-6 rounded-sm bg-accent"
          >
            Register Student
          </button>
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
