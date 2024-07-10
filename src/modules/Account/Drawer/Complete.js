import React from "react";
import CompleteImage from "../../../images/Account/Complete.svg";

const Complete = () => {
  return (
    <div className="drawer drawer-end">
      <input id="changePass" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content w-[208px] h-[53px]">
        <label
          htmlFor="changePass"
          className="drawer-button w-full h-full flex 
      items-center justify-center border-[1px] 
      rounded-md border-[#F32034] text-[16px] 
      text-[#F32034] font-proBold cursor-pointer shadow"
        >
          Đổi mật khẩu
        </label>
      </div>
      <div className="drawer-side z-10">
        <div className="h-screen bg-white w-1/4 rounded-l-xl">
          <div className="flex items-center px-10 border-b-[1px] h-[13%]">
            <p className="font-proBold text-[28px]">Thành công</p>
          </div>
          <div className="h-[70%] flex flex-col items-center justify-center gap-4 px-10">
            <img src={CompleteImage} alt="" />
            <p className="font-pro text-[16px] text-[#666666]">
              Chúc mừng bạn đã thay đổi mật khẩu thành công
            </p>
            <button
              className="uppercase w-full h-[50px] flex items-center 
            justify-center text-[14px] font-proBold text-white 
            bg-gradient-to-r from-[#EF586B] to-[#D9112A] rounded-md"
            >
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complete;
