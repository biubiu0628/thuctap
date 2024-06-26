import React from "react";
import Down from "../../images/Account/Down.svg";

const DropDown = ({ image, text, children }) => {
  return (
    <div
      className="dropdown flex items-center justify-between 
      px-5 h-[50px] border-[1px] rounded-xl"
    >
      <div className="flex gap-2">
        <img src={image} alt="" />
        <p className="font-proMedium text-[16px]">{text}</p>
      </div>
      <button>
        <img src={Down} alt="" />
      </button>
      {children}
    </div>
  );
};

export default DropDown;
