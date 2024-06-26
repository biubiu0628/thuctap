import React from "react";
import CreditCard from "../../modules/Bank/CreditCard";

const Bank = () => {
  return (
    <div className="grid grid-cols-2 pt-10 gap-4 w-[820px]">
      <CreditCard bank="techcombank" />
      <CreditCard bank="vietcombank" />
      <CreditCard bank="vietcombank" />
      <div
        className="w-[400px] h-[250px] border-[2px] border-dashed border-[#F32034] 
        rounded-2xl flex items-center justify-center cursor-pointer"
      >
        <p className="font-proBold text-[22px] text-[#F32034]">+ Tạo mới</p>
      </div>
    </div>
  );
};

export default Bank;
