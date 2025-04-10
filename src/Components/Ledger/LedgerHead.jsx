import React, { useContext } from "react";
import ModalContext from "../../store/ModalContext";

export default function LedgerHead() {
  const modalCtx = useContext(ModalContext);
  return (
    <div className="py-4 px-6 bg-gray-200 flex justify-between">
      <div>
        <h2 className="text-lg">Your Records</h2>
        <p className="text-sm">
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
      <div>
        <p className="text-sm mb-1">
          Registered Students: <span className="font-semibold">90</span>
        </p>
        <button
          className="bg-accent block w-full px-3 py-1 rounded-sm text-white/90 shadow-sm"
          onClick={modalCtx.openCreateStudentModal}
        >
          Register
        </button>
      </div>
    </div>
  );
}
