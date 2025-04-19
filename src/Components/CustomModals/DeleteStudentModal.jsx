import React, { useContext } from "react";
import Modal from "../utils/Modal/Modal";
import ModalContext from "../../store/ModalContext";

export default function DeleteStudentModal() {
  const modalCtx = useContext(ModalContext);
  return (
    <Modal close={modalCtx.closeDeleteStudentModal}>EditStudentModal</Modal>
  );
}
