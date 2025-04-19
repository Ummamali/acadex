import React, { useState } from "react";
import ModalContext from "../../store/ModalContext";

export default function ModalCtxProvider({ children }) {
  // Modal open status
  const [createStudentModal, setCreateStudentModal] = useState(false);
  const [editStudentModal, setEditStudentModal] = useState(false);
  const [deleteStudentModal, setDeleteStudentModal] = useState(false);
  return (
    <ModalContext.Provider
      value={{
        createStudentModal: createStudentModal,
        openCreateStudentModal: () => setCreateStudentModal(true),
        closeCreateStudentModal: () => setCreateStudentModal(false),
        editStudentModal: editStudentModal,
        openEditStudentModal: () => setEditStudentModal(true),
        closeEditStudentModal: () => setEditStudentModal(false),
        deleteStudentModal: deleteStudentModal,
        openDeleteStudentModal: () => setDeleteStudentModal(true),
        closeDeleteStudentModal: () => setDeleteStudentModal(false),
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
