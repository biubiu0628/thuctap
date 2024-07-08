import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Component/Logo.svg";
import Input from "../modules/Login/Input";
import User from "../images/Component/User.svg";
import Image from "../images/Component/Image.svg";

const Forget = () => {
  const [isInputPhone, setIsInputPhone] = useState(false);

  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="flex flex-col items-center justify-between py-20">
        <img src={Logo} alt="" />
        <div className="flex flex-col items-center">
          <div className="text-center">
            <p className="font-proBold text-[44px]">Quên mật khẩu</p>
            <p className="font-pro text-[18px] text-[#666666]">
              SuperShip rất tiếc vì sự cố này và sẵn sàng hỗ trợ
            </p>
          </div>
          <div className="pt-8">
            <Input
              type="tel"
              id="phone"
              image={User}
              text="Số điện thoại"
              isInput={isInputPhone}
              setIsInput={setIsInputPhone}
            />
          </div>
          <div className="flex gap-4">
            <p className="font-proMedium text-[14px] text-[#666666]">
              Gặp sự cố với điện thoại?
            </p>
            <p className="font-proBold text-[14px] text-[#F32034]">Trợ giúp</p>
          </div>
          <div className="w-[400px] flex flex-col gap-2 py-4">
            <Link
              to="/otp"
              className="uppercase h-[50px] flex items-center 
              justify-center rounded-md font-proBold text-[14px] 
              text-white bg-gradient-to-r from-[#EF586B] to-[#D9112A]"
            >
              Tiếp tục
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

export default Forget;
