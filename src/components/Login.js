import React, { useState } from "react";
import Logo from "../images/Component/Logo.svg";
import Input from "../modules/Login/Input";
import User from "../images/Component/User.svg";
import Lock from "../images/Component/Lock.svg";
import Image from "../images/Component/Image.svg";

const Login = () => {
  const [isInputEmail, setIsInputEmail] = useState(false);
  const [isInputPass, setIsInputPass] = useState(false);

  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="flex flex-col items-center justify-center">
        <img src={Logo} alt="" />
        <div className="text-center">
          <p className="font-proBold text-[44px]">
            <span>Chào mừng bạn đến với </span>
            <span className="text-[#F32034]">SuperShip</span>
          </p>
          <p className="font-pro text-[18px] text-[#666666]">
            Quý khách hàng có thể an tâm theo dõi lịch trình vận chuyển bưu kiện
            bưu phẩm.
          </p>
        </div>
        <div className="pt-8">
          <Input
            type="text"
            id="email"
            image={User}
            text="Số điện thoại/Email"
            isInput={isInputEmail}
            setIsInput={setIsInputEmail}
          />
          <Input
            type="password"
            id="pass"
            image={Lock}
            text="Mật khẩu"
            isInput={isInputPass}
            setIsInput={setIsInputPass}
          />
        </div>
        <div className="w-[400px] flex items-center justify-between">
          <div className="flex items-center gap-1">
            <input type="checkbox" className="accent-[#F32034]" />
            <p className="font-proMedium text-[14px] text-[#666666]">Ghi nhớ</p>
          </div>
          <p className="font-proBold text-[14px] text-[#F32034]">
            Quên mật khẩu?
          </p>
        </div>
        <div className="w-[400px] flex flex-col gap-2 py-4">
          <button
            className="uppercase h-[50px] flex items-center justify-center 
            bg-[#F2F2F2] rounded-md font-proBold text-[14px] text-[#B2B2B2]"
          >
            Đăng nhập
          </button>
          <button
            className="uppercase h-[50px] flex items-center 
            justify-center shadow rounded-md font-proBold text-[14px]"
          >
            Đăng ký tài khoản
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img src={Image} alt="" />
      </div>
    </div>
  );
};

export default Login;
