import React from "react";
import ID from "../../images/Header/id.svg";
import Resume from "../../images/Header/Resume.svg";
import Lock from "../../images/Header/Lock.svg";
import Right from "../../images/Header/Right.svg";
import House from "../../images/Header/House.svg";
import Bank from "../../images/Header/Bank.svg";
import Shopping from "../../images/Header/Shopping.svg";
import Eye from "../../images/Header/Eye.svg";
import Language from "../../images/Header/Language.svg";
import Data from "../../images/Header/Data.svg";
import API from "../../images/Header/API.svg";

const Menu = ({ image, children, childtext, button }) => (
  <button
    className={`w-[230px] px-4 py-3 flex justify-between bg-white ${children}`}
  >
    <div className="flex gap-2 items-center">
      <img src={image} alt="" />
      {childtext}
    </div>
    {button}
  </button>
);

const Account = () => {
  return (
    <div className="dropdown-content menu top-10 w-[231px] h-full rounded-xl z-10 block">
      <div className="pb-1 bg-[#F2F2F2]">
        <Menu
          image={ID}
          childtext={
            <p className="text-left text-[12px] font-proBold">
              supershiptest@gmail.com 0987654321
            </p>
          }
          button={
            <button>
              <img src={Right} alt="" />
            </button>
          }
          children="rounded-t-xl"
        />
        <Menu
          image={Resume}
          childtext={
            <p className="text-[12px] font-pro">
              <span>Ký hợp đồng điện tử - </span>
              <span className="text-[#188B54]">Đã ký</span>
            </p>
          }
          button={
            <button>
              <img src={Right} alt="" />
            </button>
          }
          children="border-y-[1px]"
        />
        <Menu
          image={Lock}
          childtext={<p className="text-[12px] font-pro">Đổi mật khẩu</p>}
          button={
            <button>
              <img src={Right} alt="" />
            </button>
          }
        />
      </div>
      <div className="pb-1 bg-[#F2F2F2]">
        <Menu
          image={House}
          childtext={
            <p className="text-[12px] font-pro">Sổ địa chỉ kho hàng</p>
          }
          button={
            <button>
              <img src={Right} alt="" />
            </button>
          }
        />
        <Menu
          image={Bank}
          childtext={
            <p className="text-[12px] font-pro">Tài khoản ngân hàng</p>
          }
          button={
            <button>
              <img src={Right} alt="" />
            </button>
          }
          children="border-y-[1px]"
        />
        <Menu
          image={Shopping}
          childtext={<p className="text-[12px] font-pro">Danh sách sản phẩm</p>}
          button={
            <button>
              <img src={Right} alt="" />
            </button>
          }
        />
      </div>
      <div className="pb-1 bg-[#F2F2F2]">
        <Menu
          image={Eye}
          childtext={<p className="text-[12px] font-pro">Giao diện</p>}
        />
        <Menu
          image={Language}
          childtext={<p className="text-[12px] font-pro">Ngôn ngữ</p>}
          children="border-y-[1px]"
        />
        <Menu
          image={Data}
          childtext={<p className="text-[12px] font-pro">Hoạt động</p>}
          button={
            <button>
              <img src={Right} alt="" />
            </button>
          }
        />
      </div>
      <Menu
        image={API}
        childtext={<p className="text-[12px] font-pro">Đăng xuất</p>}
        children="rounded-b-xl"
      />
    </div>
  );
};

export default Account;
