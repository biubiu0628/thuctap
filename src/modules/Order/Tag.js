import React from "react";

const Tag = ({ name, quantity, color, colorText, children }) => {
  return (
    <button
      style={{ backgroundColor: color, color: colorText }}
      className="h-[31px] px-3 bg-[#F7F7F7] rounded-full border-[1px] border-[#E5E5E5]"
    >
      <div className="flex gap-2 items-center">
        <p className="text-[14px] font-proMedium">
          <span>{name}</span>
          <span>({quantity})</span>
        </p>
        {children}
      </div>
    </button>
  );
};

export default Tag;
