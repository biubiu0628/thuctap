import React from "react";

const CheckBox = ({ nameBox, text }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="radio"
        name={nameBox}
        className="size-[16px] accent-[#F32034]"
      />
      <p className="font-pro text-[14px]">{text}</p>
    </div>
  );
};

export default CheckBox;
