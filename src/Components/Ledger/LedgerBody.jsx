import React, { useContext } from "react";
import ControllerContext from "../../store/ControllerContext";

export default function LedgerBody() {
  const ctrlCtx = useContext(ControllerContext);
  return (
    <ul className="divide-y divide-gray-300">
      {ctrlCtx.studentsLoadStatus === 1 ? (
        <p className="text-center my-6">Loading...</p>
      ) : ctrlCtx.studentsLoadStatus === 3 ? (
        <p className="text-red-500 my-6 text-center">
          <i className="fa-solid fa-circle-exclamation"></i> Failed to load
          student data
        </p>
      ) : null}
      {Object.entries(ctrlCtx.students).map(([stuId, stuObj]) => (
        <li
          key={stuId}
          className="px-4 py-2.5 flex items-center hover:bg-gray-100/80"
        >
          <div className="w-10 h-10 bg-gray-300 overflow-hidden rounded-full">
            <img
              src={stuObj.imageSrc}
              alt={`${stuObj.name} Profile Picture`}
              className="block h-full w-full object-cover"
            />
          </div>
          <p className="ml-3">
            {stuObj.name} &middot;
            <span className="italic text-sm ml-1">{stuObj.age} years</span>
          </p>
          <div className="ml-auto space-x-4 text-sm">
            <button
              className="text-yellow-600"
              onClick={() => {
                ctrlCtx.startEditing(stuId);
              }}
            >
              <i className="fa-solid fa-pen"></i>
            </button>
            <button
              className="text-red-600"
              onClick={() => ctrlCtx.startDeleting(stuId)}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
