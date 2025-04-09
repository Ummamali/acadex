import React from "react";
import LedgerHead from "./LedgerHead";
import LedgerBody from "./LedgerBody";

export default function Ledger() {
  return (
    <div className="max-w-4xl border border-gray-400 rounded-sm mx-auto">
      <LedgerHead />
      <LedgerBody />
    </div>
  );
}
