import React from "react";

const Input = ({ image, text, name }) => {
  return (
    <div className="relative col-span-2">
      <label
        className="flex items-center h-[50px] 
        px-4 border-[1px] rounded-xl gap-1"
      >
        <div
          className="size-[20px] flex 
          items-center justify-center"
        >
          <img src={image} alt="" />
        </div>
        <input
          type="text"
          className="focus:outline-none 
          font-proMedium text-[14px]"
          placeholder={`${text}`}
        />
      </label>
      <p
        className="absolute top-[-10px] left-4 
        font-pro text-[14px] bg-white px-2"
      >
        <span>{name} </span>
        <span className="text-[#F32034]">*</span>
      </p>
    </div>
  );
};

export default Input;
