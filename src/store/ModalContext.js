import { createContext } from "react";

const ModalContext = createContext({
  createStudentModal: false,
  openCreateStudentModal: () => null,
  closeCreateStudentModal: () => null,
  editStudentModal: false,
  openEditStudentModal: () => null,
  closeEditStudentModal: () => null,
  deleteStudentModal: false,
  openDeleteStudentModal: () => null,
  closeDeleteStudentModal: () => null,
});

export default ModalContext;
