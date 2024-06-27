import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../images/NavAccount/Card.svg";
import CardActive from "../images/NavAccount/CardActive.svg";
import Shop from "../images/NavAccount/Shop.svg";
import ShopActive from "../images/NavAccount/ShopActive.svg";
import Bank from "../images/NavAccount/Bank.svg";
import BankActive from "../images/NavAccount/BankActive.svg";
import BoxEdit from "../images/NavAccount/BoxEdit.svg";
import BoxEditActive from "../images/NavAccount/BoxEditActive.svg";
import Cal from "../images/NavAccount/Cal.svg";
import CalActive from "../images/NavAccount/CalActive.svg";
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

const NavAccount = () => {
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
    {
      image: Card,
      imageActive: CardActive,
      name: "Tài khoản",
      path: "/account",
    },
    {
      image: Shop,
      imageActive: ShopActive,
      name: "Kho hàng",
      path: "/warehouse",
    },
    { image: Bank, imageActive: BankActive, name: "Ngân hàng", path: "/bank" },
    {
      image: BoxEdit,
      imageActive: BoxEditActive,
      name: "Sản phẩm",
      path: "/product",
    },
    { image: Cal, imageActive: CalActive, name: "Hoạt động", path: "/active" },
  ];

  return (
    <div className="fixed h-screen bg-gradient-to-b from-[#EF586B] to-[#D9112A] flex flex-col justify-between w-[260px]">
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center py-[41px] gap-3">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="white"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </Link>
          <p className="font-proBold text-[22px] text-white">Cài đặt</p>
        </div>
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

export default NavAccount;
