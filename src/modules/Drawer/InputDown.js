import React from "react";
import Down from "../../images/Create/Down.svg";

const InputDown = ({ id, image, text }) => {
  return (
    <label
      htmlFor={id}
      className="flex items-center justify-between px-4 
      py-2 bg-[#F7F7F7] h-[40px] w-full rounded-xl"
    >
      <div className="flex items-center gap-1">
        <img src={image} alt="" />
        <input
          type="text"
          id={id}
          placeholder={text}
          className="bg-[#F7F7F7] focus:outline-none"
        ></input>
      </div>
      <button className="flex items-center justify-center">
        <img src={Down} alt="" />
      </button>
    </label>
  );
};

export default InputDown;
