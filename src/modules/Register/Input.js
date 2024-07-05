import React from "react";

const Input = ({ id, type, image, text, required, isInput, setIsInput }) => {
  const handleInput = (e) => {
    if (e.target.value.trim() !== "") {
      setIsInput(true);
    } else {
      setIsInput(false);
    }
  };

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`flex items-center gap-2 border-[1px] ${
          isInput ? "border-[#005FCC]" : ""
        } h-[50px] rounded-lg px-3 w-full`}
      >
        <div className="size-[20px] flex items-center justify-center">
          <img src={image} alt="" />
        </div>
        <input
          type={type}
          id={id}
          placeholder={`${text}${required ? " *" : " (không bắt buộc)"}`}
          onChange={handleInput}
          className="focus:outline-none w-full font-pro text-[16px]"
          required={required}
        />
      </label>
      <div
        className={`absolute top-[-15px] px-2 h-[16px] bg-white 
        left-4 text-center ${isInput ? "block" : "hidden"}`}
      >
        <p>
          <span className="text-[#005FCC] text-[12px] font-pro">{text}</span>
          {required && (
            <span className="text-[#F32034] text-[12px] font-pro"> *</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Input;
