import React, { useContext } from "react";
import ModalContext from "../../store/ModalContext";
import CreateStudentModal from "./CreateStudentModal";

export default function ModalsContainer() {
  const modalCtx = useContext(ModalContext);
  return <>{modalCtx.createStudentModal && <CreateStudentModal />}</>;
}
