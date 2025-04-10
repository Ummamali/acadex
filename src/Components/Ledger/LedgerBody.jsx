import React from "react";

const dummyStudents = {
  usman: { name: "Muhammad Usman", age: 26, imageSrc: "/user.png" },
  sana: { name: "Sana Khan", age: 24, imageSrc: "/user.png" },
  ali: { name: "Ali Raza", age: 25, imageSrc: "/user.png" },
  fatima: { name: "Fatima Zahra", age: 23, imageSrc: "/user.png" },
  ahmed: { name: "Ahmed Hassan", age: 27, imageSrc: "/user.png" },
  hira: { name: "Hira Malik", age: 22, imageSrc: "/user.png" },
  zain: { name: "Zain Ali", age: 28, imageSrc: "/user.png" },
  noor: { name: "Noor Fatima", age: 24, imageSrc: "/user.png" },
  bilal: { name: "Bilal Aslam", age: 26, imageSrc: "/user.png" },
  ayesha: { name: "Ayesha Siddiqui", age: 23, imageSrc: "/user.png" },
  arsalan: { name: "Arsalan Javed", age: 25, imageSrc: "/user.png" },
};

export default function LedgerBody() {
  return (
    <ul className="divide-y divide-gray-300">
      {Object.entries(dummyStudents).map(([stuId, stuObj]) => (
        <li key={stuId} className="px-4 py-2.5 flex items-center">
          <img
            src={stuObj.imageSrc}
            alt={`${stuObj.name} Profile Picture`}
            width={34}
          />
          <p className="ml-3">
            {stuObj.name} &middot;
            <span className="italic text-sm ml-1">{stuObj.age} years</span>
          </p>
          <div className="ml-auto space-x-4 text-sm">
            <button className="text-yellow-600">
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
