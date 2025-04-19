import React, { useContext } from "react";
import ModalContext from "../../store/ModalContext";
import CreateStudentModal from "./CreateStudentModal";
import EditStudentModal from "./EditStudentModal";
import DeleteStudentModal from "./DeleteStudentModal";

export default function ModalsContainer() {
  const modalCtx = useContext(ModalContext);
  return (
    <>
      {modalCtx.createStudentModal && <CreateStudentModal />}
      {modalCtx.editStudentModal && <EditStudentModal />}
      {modalCtx.deleteStudentModal && <DeleteStudentModal />}
    </>
  );
}
