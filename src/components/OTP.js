import React from "react";
import Logo from "../images/Component/Logo.svg";

const Input = () => (
  <div className="size-[48px]">
    <input
      type="text"
      className="focus:outline-none size-full bg-[#F2F2F2] text-center rounded-md"
    />
  </div>
);

const OTP = () => {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="flex flex-col items-center justify-between py-20">
        <img src={Logo} alt="" />
        <div>
          <p className="flex flex-col items-center">
            <span className="font-proBold text-[42px]">Nhập mã OTP</span>
            <span className="font-pro text-[14px] text-[#666666]">
              Mã OTP đã được gửi về số điện thoại đuôi *6789 của bạn. Nhập mã 6
              số để tiếp tục.
            </span>
          </p>
          <div>
            <div className="flex gap-4 mt-8 justify-center">
              {[...Array(6)].map((_, index) => (
                <Input key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="font-pro text-[12px] text-[#B3B3B3]">
          2023 © SuperShip
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default OTP;
