import React, { useContext } from "react";
import Modal from "../utils/Modal/Modal";
import ModalContext from "../../store/ModalContext";
import ControllerContext from "../../store/ControllerContext";

export default function EditStudentModal() {
  const ctrlCtx = useContext(ControllerContext);
  return (
    <Modal close={ctrlCtx.endEditing}>
      EditStudentModal {ctrlCtx.editStudentId}
    </Modal>
  );
}
