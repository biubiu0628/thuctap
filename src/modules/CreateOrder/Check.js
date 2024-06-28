import React from "react";

const Check = ({ text, isChoose, handleChoose, index }) => (
  <div className="flex gap-2">
    <input
      type="checkbox"
      checked={isChoose}
      onClick={() => handleChoose(index)}
      className="accent-[#F32034]"
    />
    <p
      className={`text-[14px] font-proMedium ${
        isChoose ? "" : "text-[#666666]"
      }`}
    >
      {text}
    </p>
  </div>
);

export default Check;
