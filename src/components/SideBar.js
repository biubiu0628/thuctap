import React, { useState } from "react";
import Dismiss from "../images/Header/Dismiss.svg";

const SideBar = ({ name, children, isRead }) => {
  const [isExited, setIsExited] = useState(false);

  const handleExit = () => {
    setIsExited(!isExited);
  };

  return (
    <div
      className={`fixed z-10 flex justify-end ${isExited ?? "hidden"} && ${
        isRead ?? "block"
      }`}
    >
      <div className="w-[400px] h-screen bg-white rounded-l-xl">
        <div className="px-4 py-8 border-b-[1px] flex justify-between">
          <div className="w-[200px]">
            <p className="font-proBold text-[28px]">{name}</p>
          </div>
          <button onClick={handleExit}>
            <img src={Dismiss} alt="" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default SideBar;
