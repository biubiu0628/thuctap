import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Component/Logo.svg";
import Image from "../images/Component/Image.svg";
import InputPass from "../modules/Register/InputPass";

const ChangePass = () => {
  const [isInputPass, setIsInputPass] = useState(false);
  const [isInputConfirm, setIsInputConfirm] = useState(false);
  const [isShowPass, setIsShowPass] = useState(false);
  const [isShowConfirm, setIsShowConfirm] = useState(false);

  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="flex flex-col items-center justify-between py-20">
        <img src={Logo} alt="Logo" />
        <div className="flex flex-col items-center">
          <div className="text-center">
            <p className="font-proBold text-[44px]">Nhập mã OTP</p>
            <p className="flex flex-col font-pro text-[18px] text-[#666666]">
              <span>
                Mã OTP đã được gửi về số điện thoại đuôi *6789 của bạn.
              </span>
              <span>Nhập mã 6 số để tiếp tục.</span>
            </p>
          </div>
          <div className="flex flex-col w-full pt-8 gap-4">
            <InputPass
              id="newpass"
              text="Mật khẩu mới"
              isShowPass={isShowPass}
              setIsShowPass={setIsShowPass}
              isInput={isInputPass}
              setIsInput={setIsInputPass}
            />
            <InputPass
              id="newpass"
              text="Xác nhận lại mật khẩu mới"
              isShowPass={isShowConfirm}
              setIsShowPass={setIsShowConfirm}
              isInput={isInputConfirm}
              setIsInput={setIsInputConfirm}
            />
            <Link
              to="/login"
              className="uppercase flex justify-center items-center 
            h-[50px] bg-gradient-to-r from-[#EF586B] to-[#D9112A] 
            rounded-lg font-proBold text-[14px] text-white"
            >
              Lưu mật khẩu
            </Link>
          </div>
        </div>
        <div className="font-pro text-[12px] text-[#B3B3B3]">
          2023 © SuperShip
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img src={Image} alt="" />
      </div>
    </div>
  );
};

export default ChangePass;
