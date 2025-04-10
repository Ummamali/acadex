import { createContext } from "react";

const ModalContext = createContext({
  createStudentModal: false,
  openCreateStudentModal: () => null,
  closeCreateStudentModal: () => null,
  editStudentModal: false,
  openEditStudentModal: () => null,
  closeEditStudentModal: () => null,
});

export default ModalContext;
