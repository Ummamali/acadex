import React, { useContext } from "react";
import ModalContext from "../../store/ModalContext";

const dummyStudents = {
  usman: { name: "Muhammad Usman", age: 26, imageSrc: "/user.jpg" },
  sana: { name: "Sana Khan", age: 24, imageSrc: "/user.jpg" },
  ali: { name: "Ali Raza", age: 25, imageSrc: "/user.jpg" },
  fatima: { name: "Fatima Zahra", age: 23, imageSrc: "/user.jpg" },
  ahmed: { name: "Ahmed Hassan", age: 27, imageSrc: "/user.jpg" },
  hira: { name: "Hira Malik", age: 22, imageSrc: "/user.jpg" },
  zain: { name: "Zain Ali", age: 28, imageSrc: "/user.jpg" },
  noor: { name: "Noor Fatima", age: 24, imageSrc: "/user.jpg" },
  bilal: { name: "Bilal Aslam", age: 26, imageSrc: "/user.jpg" },
  ayesha: { name: "Ayesha Siddiqui", age: 23, imageSrc: "/user.jpg" },
  arsalan: { name: "Arsalan Javed", age: 25, imageSrc: "/user.jpg" },
};

export default function LedgerBody() {
  const modalCtx = useContext(ModalContext);
  return (
    <ul className="divide-y divide-gray-300">
      {Object.entries(dummyStudents).map(([stuId, stuObj]) => (
        <li key={stuId} className="px-4 py-2.5 flex items-center">
          <div className="w-10 h-10 bg-green-300 overflow-hidden rounded-full">
            <img
              src={stuObj.imageSrc}
              alt={`${stuObj.name} Profile Picture`}
              className="object-cover"
            />
          </div>
          <p className="ml-3">
            {stuObj.name} &middot;
            <span className="italic text-sm ml-1">{stuObj.age} years</span>
          </p>
          <div className="ml-auto space-x-4 text-sm">
            <button
              className="text-yellow-600"
              onClick={() => modalCtx.openEditStudentModal()}
            >
              <i className="fa-solid fa-pen"></i>
            </button>
            <button className="text-red-600">
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
