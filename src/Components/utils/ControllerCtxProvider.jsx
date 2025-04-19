import React, { useContext, useState } from "react";
import ControllerContext from "../../store/ControllerContext";
import ModalContext from "../../store/ModalContext";

export default function ControllerCtxProvider({ children }) {
  const [editStudentId, setEditStudentId] = useState(null);
  const [deleteStudentId, setDeleteStudentId] = useState(null);

  const modalCtx = useContext(ModalContext);

  // start editing functionality
  function startEditing(studentId) {
    setEditStudentId(studentId);
    modalCtx.openEditStudentModal();
  }

  function endEditing() {
    setEditStudentId(null);
    modalCtx.closeEditStudentModal();
  }

  function startDeleting(stuId) {
    modalCtx.openDeleteStudentModal();
    setDeleteStudentId(stuId);
  }

  function cancelDeleting() {
    modalCtx.closeDeleteStudentModal();
    setDeleteStudentId(null);
  }
  return (
    <ControllerContext.Provider
      value={{
        editStudentId,
        deleteStudentId,
        startEditing,
        endEditing,
        startDeleting,
        cancelDeleting,
      }}
    >
      {children}
    </ControllerContext.Provider>
  );
}
