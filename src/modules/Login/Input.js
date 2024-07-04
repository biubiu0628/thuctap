import React from "react";

const Input = ({ type, id, image, text, setIsInput, isInput }) => {
  const handleInput = (e) => {
    if (e.target.value.trim() !== "") {
      setIsInput(true);
    } else {
      setIsInput(false);
    }
  };

  return (
    <div className={`relative pb-6`}>
      <label
        htmlFor={id}
        className={`flex items-center gap-2 border-[1px] ${
          isInput ? "border-[#005FCC]" : ""
        } h-[50px] rounded-lg px-3 w-[400px] `}
      >
        <div className="size-[20px] flex items-center justify-center">
          <img src={image} alt="" />
        </div>
        <input
          type={type}
          id={id}
          placeholder={`${text}`}
          onChange={handleInput}
          className="focus:outline-none w-full 
          text-[16px] font-pro placeholder:font-pro"
          required
        />
      </label>
      <div
        className={`absolute top-[-8px] px-2 h-[16px] bg-white left-4 text-center ${
          isInput ? "block" : "hidden"
        }`}
      >
        <p className="text-[#005FCC] text-[12px] font-pro">{text} </p>
      </div>
    </div>
  );
};

export default Input;
