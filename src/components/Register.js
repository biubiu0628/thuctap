import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../modules/Register/Input";
import InputPass from "../modules/Register/InputPass";
import Code from "../images/Component/Code.svg";
import Shop from "../images/Component/Shop.svg";
import User from "../images/Component/User.svg";
import Phone from "../images/Component/Phone.svg";
import Email from "../images/Component/Email.svg";
import Image from "../images/Component/Image.svg";
import InputArea from "../modules/Register/InputArea";

const Register = () => {
  const [isInputArea, setIsInputArea] = useState(false);
  const [isInputCode, setIsInputCode] = useState(false);
  const [isInputShop, setIsInputShop] = useState(false);
  const [isInputUser, setIsInputUser] = useState(false);
  const [isInputPhone, setIsInputPhone] = useState(false);
  const [isInputEmail, setIsInputEmail] = useState(false);
  const [isInputPass, setIsInputPass] = useState(false);
  const [isInputConfirm, setIsInputConfirm] = useState(false);
  const [isShowPass, setIsShowPass] = useState(false);
  const [isShowConfirm, setIsShowConfirm] = useState(false);

  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="flex flex-col items-center justify-between p-20">
        <p className="font-proBold text-[58px] text-[#F32034]">Đăng ký</p>
        <div className="flex flex-col items-center w-full">
          <div className="grid grid-cols-2 gap-4 w-full">
            <InputArea isArea={isInputArea} setIsArea={setIsInputArea} />
            <Input
              id="code"
              text="Mã giới thiệu"
              type="text"
              image={Code}
              required={false}
              isInput={isInputCode}
              setIsInput={setIsInputCode}
            />
            <Input
              id="shop"
              text="Tên shop/Cửa hàng/Công ty"
              type="text"
              image={Shop}
              required={true}
              isInput={isInputShop}
              setIsInput={setIsInputShop}
            />
            <Input
              id="user"
              text="Người đăng ký/Người đại diện"
              type="text"
              image={User}
              required={true}
              isInput={isInputUser}
              setIsInput={setIsInputUser}
            />
            <Input
              id="phone"
              text="Số điện thoại"
              type="tel"
              image={Phone}
              required={true}
              isInput={isInputPhone}
              setIsInput={setIsInputPhone}
            />
            <Input
              id="email"
              text="Email"
              type="email"
              image={Email}
              required={true}
              isInput={isInputEmail}
              setIsInput={setIsInputEmail}
            />
            <InputPass
              id="password"
              text="Mật khẩu"
              isShowPass={isShowPass}
              setIsShowPass={setIsShowPass}
              isInput={isInputPass}
              setIsInput={setIsInputPass}
            />
            <InputPass
              id="confirm"
              text="Xác nhân lại mật khẩu"
              isShowPass={isShowConfirm}
              setIsShowPass={setIsShowConfirm}
              isInput={isInputConfirm}
              setIsInput={setIsInputConfirm}
            />
          </div>
          <div className="flex items-center gap-1 py-8">
            <input type="checkbox" className="accent-[#F32034]" />
            <p className="text-[14px]">
              <span className="font-pro">
                Bằng việc đăng ký, bạn đã đồng ý với
              </span>
              <span className="font-proBold"> Điều khoản Dịch Vụ </span>
              <span className="font-pro">& </span>
              <span className="font-proBold">Chính sách riêng tư </span>
              <span className="font-pro">của </span>
              <span className="font-proBold">SuperShip</span>
            </p>
          </div>
          <button
            className="uppercase h-[50px] flex items-center justify-center bg-gradient-to-r 
          from-[#EF586B] to-[#D9112A] rounded-md font-proBold text-[16px] text-white w-full"
          >
            Đăng ký
          </button>
          <div className="text-[16px] flex items-center gap-4 pt-10">
            <p className="font-pro text-[#666666]">Bạn đã có tài khoản?</p>
            <Link to="/login" className="font-proMedium text-[#F32034]">
              Đăng nhập
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

export default Register;
