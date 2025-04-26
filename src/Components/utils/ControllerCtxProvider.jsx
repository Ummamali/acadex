import React, { useContext, useEffect, useState } from "react";
import ControllerContext from "../../store/ControllerContext";
import ModalContext from "../../store/ModalContext";
import useRequest from "../../hooks/useRequest";
import { getUrl } from "../../backend/backendConfig";

export default function ControllerCtxProvider({ children }) {
  const [editStudentId, setEditStudentId] = useState(null);
  const [deleteStudentId, setDeleteStudentId] = useState(null);
  const [students, setStudents] = useState([]);
  const [alert, setAlert] = useState(null);
  const modalCtx = useContext(ModalContext);

  // For controlling students data
  const {
    loadStatus: studentsLoadStatus,
    resObj: studentsResObj,
    sendRequest,
  } = useRequest(() => fetch(getUrl("students")), []);

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

  // Creation function
  function appendStudent(newStudentId, newStudentObj) {
    setStudents((prev) => ({ ...prev, [newStudentId]: newStudentObj }));
  }

  function removeStudent(studentId) {
    setStudents((prev) => {
      const studentsCp = { ...prev };
      delete studentsCp[studentId];
      return studentsCp;
    });
  }

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

  // Alerts and management
  function raiseAlert(alertMessage) {
    setAlert(alertMessage);
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  }

  function removeAlert() {
    setAlert(null);
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
        appendStudent,
        removeStudent,
        alert,
        raiseAlert,
        removeAlert,
      }}
    >
      {children}
    </ControllerContext.Provider>
  );
}
