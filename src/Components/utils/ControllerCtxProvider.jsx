import React, { useContext, useState } from "react";
import ControllerContext from "../../store/ControllerContext";
import ModalContext from "../../store/ModalContext";

export default function ControllerCtxProvider({ children }) {
  const [editStudentId, setEditStudentId] = useState(null);
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
  return (
    <ControllerContext.Provider
      value={{
        editStudentId: editStudentId,
        startEditing: startEditing,
        endEditing: endEditing,
      }}
    >
      {children}
    </ControllerContext.Provider>
  );
}
