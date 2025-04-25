import React, { useContext } from "react";
import Modal from "../utils/Modal/Modal";
import ControllerContext from "../../store/ControllerContext";
import useRequest from "../../hooks/useRequest.js";
import { requestDeleteStudent } from "../../backend/connect.js";

export default function DeleteStudentModal() {
  const ctrlCtx = useContext(ControllerContext);
  const studentObj = ctrlCtx.students[ctrlCtx.deleteStudentId];
  const { loadStatus, sendRequest } = useRequest(requestDeleteStudent);
  return (
    <Modal close={ctrlCtx.cancelDeleting}>
      <div className="mb-4">
        <p>Are you sure you want to delete student?</p>
        <p className="font-medium">
          {studentObj.name} ({studentObj.age} years){" "}
          {loadStatus === 2 ? "(Deleted Successfully)" : ""}
        </p>
        {loadStatus === 3 ? (
          <p className="text-red-700">Unable to delete student</p>
        ) : null}
      </div>
      <div className="flex space-x-4">
        <button
          className="py-2 px-8 rounded-sm bg-red-700 text-white/90 disabled:opacity-50"
          disabled={loadStatus === 1 || loadStatus === 2}
          onClick={() => {
            sendRequest(ctrlCtx.deleteStudentId).then((resObj) => {
              ctrlCtx.cancelDeleting();
              ctrlCtx.removeStudent(resObj.deletedId);
              ctrlCtx.raiseAlert("Student has been deleted successfully.");
            });
          }}
        >
          {loadStatus === 1 ? "Deleting...." : "Delete"}
        </button>
        <button onClick={ctrlCtx.cancelDeleting}>Cancel</button>
      </div>
    </Modal>
  );
}
