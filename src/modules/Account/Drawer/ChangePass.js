import React, { useState } from "react";
import InputPass from "../../Register/InputPass";

const ChangePass = () => {
  const [isCurrentPass, setIsCurrentPass] = useState(false);
  const [isNewPass, setIsNewPass] = useState(false);
  const [isConfirmPass, setIsConfirmPass] = useState(false);
  const [isShowPass, setIsShowPass] = useState(false);
  const [isShowNewPass, setIsShowNewPass] = useState(false);
  const [isShowConfirm, setIsShowConfirm] = useState(false);

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
        <label className="drawer-overlay"></label>
        <div className="h-screen bg-white w-1/4 rounded-l-xl">
          <div className="flex items-center px-10 border-b-[1px] h-[13%]">
            <p className="font-proBold text-[28px]">Thay đổi mật khẩu</p>
          </div>
          <div className="h-[70%] flex flex-col justify-center gap-4 px-10">
            <div className="flex flex-col gap-4">
              <InputPass
                id="currentPass"
                text="Mật khẩu hiện tại"
                isInput={isCurrentPass}
                setIsInput={setIsCurrentPass}
                isShowPass={isShowPass}
                setIsShowPass={setIsShowPass}
              />
              <InputPass
                id="newPass"
                text="Mật khẩu mới"
                isInput={isNewPass}
                setIsInput={setIsNewPass}
                isShowPass={isShowNewPass}
                setIsShowPass={setIsShowNewPass}
              />
              <InputPass
                id="confirmPass"
                text="Xác nhận mật khẩu"
                isInput={isConfirmPass}
                setIsInput={setIsConfirmPass}
                isShowPass={isShowConfirm}
                setIsShowPass={setIsShowConfirm}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 h-[50px]">
              <label
                htmlFor="changePass"
                aria-label="close sidebar"
                className="shadow text-[15px] font-proBold flex 
                items-center justify-center rounded-md cursor-pointer"
              >
                Hủy
              </label>
              <button
                className="uppercase rounded-md font-proBold text-[15px] 
                text-white bg-gradient-to-b from-[#EF586B] to-[#D9112A]"
              >
                Cập nhật
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePass;
