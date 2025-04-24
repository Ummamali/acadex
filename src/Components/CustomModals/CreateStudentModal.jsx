import React, { useContext, useRef } from "react";
import Modal from "../utils/Modal/Modal";
import ModalContext from "../../store/ModalContext";
import RefFormGroup from "../utils/RefFormGroup";

export default function CreateStudentModal() {
  const modalCtx = useContext(ModalContext);

  const nameRef = useRef(null);
  const ageRef = useRef(null);
  return (
    <Modal close={modalCtx.closeCreateStudentModal}>
      <div>
        <h3>Register a New Student</h3>
      </div>
      <form action="" className="space-y-3">
        <RefFormGroup
          ref={nameRef}
          id="studentName"
          label="Name"
          errorMessage={"Bad bad user...."}
        />
        <RefFormGroup ref={ageRef} id="studentAge" label="Age" />
      </form>
    </Modal>
  );
}
