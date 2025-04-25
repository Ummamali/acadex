import React, { useContext } from "react";
import ControllerContext from "../../store/ControllerContext";

export default function TopAlert() {
  const ctrlCtx = useContext(ControllerContext);
  return ctrlCtx.alert !== null ? (
    <div className="py-4 px-10 bg-gray-200 border border-gray-300 flex items-center justify-between">
      <p className="text-gray-800/90">
        <i className="fa-solid fa-circle-info mr-2"></i>
        {ctrlCtx.alert}
      </p>
      <button onClick={() => ctrlCtx.removeAlert()}>
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>
    </div>
  ) : null;
}
