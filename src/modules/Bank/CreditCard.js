import React from "react";

const CreditCard = ({ bank }) => {
  return (
    <div
      className="bg-gradient-to-l from-[#D9112A] to-[#EF586B] w-[400px] h-[250px] 
    rounded-2xl p-6 text-white uppercase flex flex-col justify-between"
    >
      <p className="font-proBold text-[18px]">{bank}</p>
      <p className="font-pro text-[16px] flex flex-col">
        <span>LÝ HỮU TRÍ</span>
        <span>3482 8384 8283 3482</span>
        <span className="text-[14px]">NHTMCP Ky Thuong VN CN TP HCM</span>
      </p>
    </div>
  );
};

export default CreditCard;
