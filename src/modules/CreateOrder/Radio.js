import React from "react";

const Radio = ({ text, isCheck, handleCheck }) => {
  return (
    <div className="flex items-center gap-2">
      <input type="radio" name="thuhang" onClick={handleCheck} />
      <p
        className={`${
          isCheck ? "text-black" : "text-[#666666]"
        } text-[14px] font-pro`}
      >
        {text}
      </p>
    </div>
  );
};

export default Radio;
