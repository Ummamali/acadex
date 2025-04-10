import React, { useState } from "react";
import ModalContext from "../../store/ModalContext";

export default function ModalCtxProvider({ children }) {
  // Modal open status
  const [createStudentModal, setCreateStudentModal] = useState(false);
  return (
    <ModalContext.Provider
      value={{
        createStudentModal: createStudentModal,
        openCreateStudentModal: () => setCreateStudentModal(true),
        closeCreateStudentModal: () => setCreateStudentModal(false),
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
