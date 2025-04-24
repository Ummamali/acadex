import React, { useContext, useEffect, useState } from "react";
import ControllerContext from "../../store/ControllerContext";
import ModalContext from "../../store/ModalContext";
import useRequest from "../../hooks/useRequest";

export default function ControllerCtxProvider({ children }) {
  const [editStudentId, setEditStudentId] = useState(null);
  const [deleteStudentId, setDeleteStudentId] = useState(null);

  // For controlling students data
  const {
    loadStatus: studentsLoadStatus,
    resObj: studentsResObj,
    sendRequest,
  } = useRequest(() => fetch("http://localhost:5500/students"), []);

  const [students, setStudents] = useState([]);

  const modalCtx = useContext(ModalContext);

  useEffect(() => {
    console.log("sending request");
    sendRequest();
  }, []);

  useEffect(() => {
    if (studentsLoadStatus === 2) {
      console.info("Students loaded from backend, now in local state");
      setStudents(studentsResObj);
    }
  }, [studentsLoadStatus, studentsResObj]);

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
        students,
        studentsLoadStatus,
      }}
    >
      {children}
    </ControllerContext.Provider>
  );
}
