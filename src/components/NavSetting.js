import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Nav/logo.svg";
import Card from "../images/NavSetting/Card.svg";
import CardActive from "../images/NavSetting/CardActive.svg";
import Shop from "../images/Nav/Shop.svg";
import ShopActive from "../images/Nav/ShopActive.svg";
import Bank from "../images/Nav/Bank.svg";
import BankActive from "../images/Nav/BankActive.svg";
import BoxEdit from "../images/Nav/BoxEdit.svg";
import BoxEditActive from "../images/Nav/BoxEditActive.svg";
import Cal from "../images/Nav/Cal.svg";
import CalActive from "../images/Nav/CalActive.svg";
import Stamp from "../images/Nav/stamp.svg";

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
    { image: Card, imageActive: CardActive, name: "Tài khoản" },
    { image: Shop, imageActive: ShopActive, name: "Kho hàng" },
    { image: Bank, imageActive: BankActive, name: "Ngân hàng" },
    { image: BoxEdit, imageActive: BoxEditActive, name: "Sản phẩm" },
    { image: Cal, imageActive: CalActive, name: "Sản phẩm" },
  ];

  return (
    <div className="fixed h-screen bg-gradient-to-b from-[#EF586B] to-[#D9112A] flex flex-col justify-between w-[260px]">
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
      </div>
      <div className="flex flex-col items-center gap-2 pb-10">
        <p className="text-[10px] text-[#B2B2B2] font-pro">Version 3.0.5</p>
        <img src={Stamp} alt="" />
      </div>
    </div>
  );
};

export default Nav;
