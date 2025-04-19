import { createContext } from "react";
import EditStudentModal from "../Components/CustomModals/EditStudentModal";

const ControllerContext = createContext({
  editStudentId: null,
  deleteStudentId: null,
  startEditing: (studentId) => null,
  endEditing: () => null,
  startDeleting: (studentId) => null,
  cancelDeleting: () => null,
});

export default ControllerContext;
