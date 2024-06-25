import React from "react";
import Down from "../../images/Order/Down.svg";

const Tag = ({ name, quantity, isActived, handleActive }) => {
  return (
    <button
      className={`h-[31px] px-3  rounded-full border-[1px]
      ${
        isActived
          ? "bg-[#F32034] text-white border-[#F32034]"
          : "bg-[#F7F7F7] text-[#666666] border-[#E5E5E5]"
      }`}
      onClick={handleActive}
    >
      <div className="flex gap-2 items-center">
        <p className="text-[14px] font-proMedium">
          <span>{name} </span>
          <span>{quantity}</span>
        </p>
        {isActived ? <img src={Down} alt="" /> : null}
      </div>
    </button>
  );
};

export default Tag;
