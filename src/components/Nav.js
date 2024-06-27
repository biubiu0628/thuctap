import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Nav/logo.svg";
import Home from "../images/Nav/home.svg";
import HomeActive from "../images/Nav/homeActive.svg";
import Add from "../images/Nav/add.svg";
import AddActive from "../images/Nav/addActive.svg";
import Box from "../images/Nav/box.svg";
import BoxActive from "../images/Nav/boxActive.svg";
import Data from "../images/Nav/data.svg";
import DataActive from "../images/Nav/dataActive.svg";
import Setting from "../images/Nav/setting.svg";
import Menu from "../images/Nav/menu.svg";
import Stamp from "../images/Nav/stamp.svg";
import Down from "../images/Nav/down.svg";
import Up from "../images/Nav/up.svg";
// import RightRed from "../images/Nav/rightRed.svg";
import Right from "../images/Nav/right.svg";

const Button = ({
  image,
  imageActive,
  name,
  isActive,
  handleActive,
  index,
  path,
}) => (
  <Link
    to={path}
    className={`w-[200px] h-[40px] rounded-2xl flex items-center gap-2 pl-8 font-pro ${
      isActive ? "bg-white text-[#F32034]" : "text-white"
    }`}
    onClick={() => handleActive(index)}
  >
    {!isActive ? <img src={image} alt="" /> : <img src={imageActive} alt="" />}
    <p className="text-base">{name}</p>
  </Link>
);

const ButtonDrop = ({ image, name, isActive, handleActive, index, drops }) => (
  <div>
    <button
      className="w-[200px] h-[40px] rounded-2xl flex 
    items-center gap-2 pl-8 font-pro"
      onClick={() => handleActive(index)}
    >
      <div className="w-full flex justify-between pr-4 items-center">
        <div className="flex gap-2">
          <img src={image} alt="" />
          <p className="text-base text-white">{name}</p>
        </div>
        {isActive ? <img src={Down} alt="" /> : <img src={Up} alt="" />}
      </div>
    </button>
    <div className="flex flex-col gap-2 pt-1">
      {isActive &&
        drops.map((drop, dropIndex) => (
          <Drop key={dropIndex} name={drop.name} path={drop.path} />
        ))}
    </div>
  </div>
);

const Drop = ({ name, path }) => (
  <Link
    to={path}
    className={`w-[200px] h-[40px] rounded-2xl flex
    items-center gap-2 pl-10 font-pro text-white`}
  >
    <img src={Right} alt="" />
    <p className="text-base">{name}</p>
  </Link>
);

const Nav = () => {
  const [isActive, setIsActive] = useState(0);

  useEffect(() => {
    const savedIndex = localStorage.getItem("activeButton");
    if (savedIndex !== null) {
      setIsActive(parseInt(savedIndex, 10));
    }
  }, []);

  const handleActive = (index) => {
    setIsActive(index);
    localStorage.setItem("activeButton", index);
  };

  const buttons = [
    { image: Home, imageActive: HomeActive, name: "Trang chủ", path: "/" },
    { image: Add, imageActive: AddActive, name: "Tạo đơn", path: "/create" },
    { image: Box, imageActive: BoxActive, name: "Đơn hàng", path: "/order" },
    { image: Data, imageActive: DataActive, name: "Thống kê", path: "/stat" },
  ];

  const drops1 = [
    { name: "Đối soát", path: "/doisoat" },
    { name: "Cấu hình mặc định" },
    { name: "Lấy trả" },
    { name: "Yêu cầu" },
  ];

  const drops2 = [
    { name: "API" },
    { name: "Lịch sử thay đổi" },
    { name: "Đối tác" },
    { name: "Nhượng quyền" },
    { name: "Đánh giá" },
  ];

  const buttonDrops = [
    { image: Setting, name: "Quản lý", drops: drops1 },
    { image: Menu, name: "Xem thêm", drops: drops2 },
  ];

  return (
    <div
      className="fixed h-screen bg-gradient-to-b from-[#EF586B] 
      to-[#D9112A] flex flex-col justify-between w-[260px]"
    >
      <div className="flex flex-col items-center gap-3">
        <img src={Logo} alt="" className="py-5" />
        {buttons.map((button, index) => (
          <Button
            key={index}
            image={button.image}
            imageActive={button.imageActive}
            name={button.name}
            isActive={isActive === index}
            handleActive={handleActive}
            index={index}
            path={button.path}
          />
        ))}
        {buttonDrops.map((button, index) => (
          <ButtonDrop
            key={index + buttons.length}
            image={button.image}
            name={button.name}
            isActive={isActive === index + buttons.length}
            handleActive={handleActive}
            index={index + buttons.length}
            drops={button.drops}
          />
        ))}
      </div>
      <div className="flex flex-col items-center gap-2 pb-10">
        <p className="text-[10px] text-[#B2B2B2] font-pro">Version 3.0.5</p>
        <img src={Stamp} alt="" />
      </div>
    </div>
  );
};

export default Nav;
