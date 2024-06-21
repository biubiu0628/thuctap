import React from "react";

const Fee = ({ name, price }) => {
  return (
    <div className="flex justify-between py-1">
      <p className="font-pro text-[14px] text-[#666666]">{name}</p>
      <p className="font-proMedium">
        <span className="text-[14px]">{price}</span>
        <span className="underline text-[12px]">đ</span>
      </p>
    </div>
  );
};

export default Fee;
