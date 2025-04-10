import { createContext } from "react";
import EditStudentModal from "../Components/CustomModals/EditStudentModal";

const ControllerContext = createContext({
  editStudentId: null,
  startEditing: (studentId) => null,
});

export default ControllerContext;
