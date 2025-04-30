import { createContext } from "react";
import EditStudentModal from "../Components/CustomModals/EditStudentModal";

const ControllerContext = createContext({
  editStudentId: null,
  deleteStudentId: null,
  startEditing: (studentId) => null,
  endEditing: () => null,
  startDeleting: (studentId) => null,
  cancelDeleting: () => null,
  students: [],
  studentsLoadStatus: 0,
  setStudents: () => null,
  appendStudent: () => null,
  updateStudent: () => null,
  removeStudent: () => null,
  alert: null,
  raiseAlert: () => null,
  removeAlert: () => null,
});

export default ControllerContext;
