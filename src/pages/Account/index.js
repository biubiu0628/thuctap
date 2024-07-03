import React, { useState } from "react";
import Avatar from "../../modules/Account/Avatar";
import Shop from "../../images/Account/Shop.svg";
import Phone from "../../images/Account/Phone.svg";
import User from "../../images/Account/User.svg";
import Mail from "../../images/Account/Mail.svg";
import ID from "../../images/Account/ID.svg";
import ImageCal from "../../images/Account/ImageCal.svg";
import ImageGT from "../../images/Account/ImageGT.svg";
import Button from "../../modules/Account/Button";
import Input from "../../modules/CreateOrder/Input";
import DropDown from "../../modules/Account/DropDown";
import Calendar from "../../components/Calendar";
import GioiTinh from "../../modules/Account/GioiTinh";

const Account = () => {
  const [nameShop, setNameShop] = useState(false);
  const [phone, setPhone] = useState(false);
  const [nameUser, setNameUser] = useState(false);
  const [email, setEmail] = useState(false);
  const [cccd, setCccd] = useState(false);

  return (
    <div
      className="grid grid-cols-[23%_75%] 
      grid-rows-[350px_53px] gap-8 py-20"
    >
      <div
        className="bg-white rounded-xl flex flex-col 
        items-center justify-center gap-8 row-span-2 shadow"
      >
        <Avatar />
        <p className="text-[26px] flex flex-col text-center">
          <span className="font-pro">Xin chào,</span>
          <span className="font-proBold">SuperShip Test!</span>
        </p>
        <button
          className="btn bg-white uppercase text-[14px] font-proBold text-[#F32034] 
        border-[1px] border-[#EF586B] w-[208px] h-[53px] rounded-md shadow"
        >
          Đổi mật khẩu
        </button>
      </div>
      <div
        className="bg-white grid grid-cols-4 w-full 
        h-full rounded-xl shadow p-10 gap-8"
      >
        <Input
          props="col-span-2"
          id="nameShop"
          image={Shop}
          text="Tên shop/Cửa hàng/Công ty"
          isInput={nameShop}
          setIsInput={setNameShop}
        />
        <Input
          props="col-span-2"
          id="phone"
          image={Phone}
          text="Số điện thoại"
          isInput={phone}
          setIsInput={setPhone}
        />
        <Input
          props="col-span-2"
          id="nameUser"
          image={User}
          text="Người đăng ký/Người đại diện"
          isInput={nameUser}
          setIsInput={setNameUser}
        />
        <Input
          props="col-span-2"
          id="email"
          image={Mail}
          text="Email"
          isInput={email}
          setIsInput={setEmail}
        />
        <Input
          props="col-span-2"
          id="id"
          image={ID}
          text="Số CMND/CCCD"
          isInput={cccd}
          setIsInput={setCccd}
        />
        <DropDown
          image={ImageCal}
          alt=""
          text="15/11/1996"
          children={
            <Calendar props="bg-white border-[1px] pt-2 rounded-xl top-16" />
          }
        />

        <DropDown image={ImageGT} alt="" text="Nam" children={<GioiTinh />} />
      </div>
      <div className="flex justify-end gap-2">
        <Button props="bg-white" name="hủy" />
        <Button
          props="bg-gradient-to-b 
          from-[#EF586B] to-[#D9112A]"
          name="cập nhật"
          colorText="text-white"
        />
      </div>
    </div>
  );
};

export default Account;
