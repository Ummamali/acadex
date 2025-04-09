import React from "react";

export default function Header() {
  return (
    <header className="text-center py-4 px-4">
      <img
        src="/logo.png"
        alt="Main Logo"
        width={48}
        className="block mx-auto"
      />
      <h1 className="text-3xl tracking-wider mb-2 text-black/80">ACADEX</h1>
      <p className="max-w-xl mx-auto text-sm text-black/77">
        A secure and efficient platform for managing student records,
        enrollment, and academic data. Begin organizing and managing your
        student data effortlessly.
      </p>
    </header>
  );
}
