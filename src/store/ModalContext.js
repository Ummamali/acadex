import { createContext } from "react";

const ModalContext = createContext({
  createStudentModal: false,
  openCreateStudentModal: () => null,
  closeCreateStudentModal: () => null,
});

export default ModalContext;
