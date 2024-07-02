import React from "react";

const Radio = ({ id, name, text, handleCheck, isCheck, index }) => (
  <label htmlFor={id} className="flex gap-1">
    <input
      type="radio"
      id={id}
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
  </label>
);

export default Radio;
