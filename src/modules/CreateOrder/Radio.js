import React from "react";

const Radio = ({ name, text, handleCheck, isCheck, index }) => (
  <div className="flex gap-1">
    <input
      type="radio"
      name={name}
      onChange={() => handleCheck(index)}
      checked={isCheck === index}
      className="accent-[#F32034]"
    />
    <p
      className={`flex flex-col text-[14px] font-proMedium ${
        isCheck === index ? "" : "text-[#666666]"
      }`}
    >
      {text}
    </p>
  </div>
);

export default Radio;
