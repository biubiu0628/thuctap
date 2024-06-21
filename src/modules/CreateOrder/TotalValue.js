import React from "react";

const TotalValue = ({ name, price }) => {
  return (
    <div className="flex justify-between py-1">
      <p className="font-pro text-[14px] text-[#666666]">{name}</p>
      <p className="text-[#F32034]">
        <span className="font-proBold text-[16px] ">{price}</span>
        <span className="font-pro underline text-[12px]">đ</span>
      </p>
    </div>
  );
};

export default TotalValue;
