import React from "react";

const Input = ({ id, image, text, setIsInput, isInput }) => {
  const handleInput = (e) => {
    if (e.target.value.trim() !== "") {
      setIsInput(true);
    } else {
      setIsInput(false);
    }
  };

  return (
    <div className="relative pb-6">
      <label
        htmlFor={id}
        className={`flex items-center gap-2 border-[1px] ${
          isInput ? "border-[#005FCC]" : ""
        } h-[40px] rounded-lg px-3 w-full`}
      >
        <img src={image} alt="" />
        <input
          type="text"
          id={id}
          placeholder={`${text} *`}
          onChange={handleInput}
          className="focus:outline-none w-full 
          text-[16px] font-pro placeholder:font-pro"
          required
        />
      </label>
      <div
        className={`absolute top-[-15px] px-2 h-[16px] bg-white left-4 text-center ${
          isInput ? "block" : "hidden"
        }`}
      >
        <p>
          <span className="text-[#005FCC] text-[12px] font-pro">{text} </span>
          <span className="text-[#F32034] text-[12px] font-pro">*</span>
        </p>
      </div>
    </div>
  );
};

export default Input;
