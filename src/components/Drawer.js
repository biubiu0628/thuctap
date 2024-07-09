import React from "react";
import Options from "../images/Header/Options.svg";
import Calendar from "../images/Drawer/Calendar.svg";
import ListBar from "../images/Drawer/ListBar.svg";
import ArrowSort from "../images/Drawer/ArrowSort.svg";
import Data from "../images/Drawer/Data.svg";
import Code from "../images/Drawer/Code.svg";
import Phone from "../images/Drawer/Phone.svg";
import Location from "../images/Drawer/Location.svg";
import ReadingMobile from "../images/Drawer/ReadingMobile.svg";
import InputDown from "../modules/Drawer/InputDown";
import Input from "../modules/Drawer/Input";
import CheckBox from "../modules/Drawer/CheckBox";

const Drawer = ({ id }) => {
  return (
    <div className="drawer drawer-end size-[40px]">
      <input id={id} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor={id}
          className="drawer-button size-[40px] bg-white rounded-full 
          flex items-center justify-center cursor-pointer shadow"
        >
          <img src={Options} alt="" className="" />
        </label>
      </div>
      <div className="drawer-side z-10">
        <label
          htmlFor={id}
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="h-screen bg-white w-1/4 rounded-l-xl">
          <div className="flex items-center px-10 border-b-[1px] h-[13%]">
            <p className="font-proBold text-[28px]">Bộ lọc đơn hàng</p>
          </div>
          <div className="px-16">
            <div className="flex flex-col gap-6 items-center pt-10">
              <InputDown id="calendar" image={Calendar} text="7 ngày" />
              <InputDown id="list" image={ListBar} text="Trạng thái" />
              <InputDown id="sort" image={ArrowSort} text="Sắp xếp theo" />
              <Input id="data" image={Data} text="Mã đơn hàng SuperShip" />
              <Input id="code" image={Code} text="Mã đơn hàng Shop" />
              <Input id="phone" image={Phone} text="Tìm với số điện thoại" />
              <Input id="location" image={Location} text="Địa chỉ chi tiết" />
              <Input id="reading" image={ReadingMobile} text="Mã đối soát" />
            </div>
            <div className="grid grid-cols-2 py-12">
              <div>
                <p className="font-proBold text-[14px]">Người trả phí</p>
                <div className="flex flex-col gap-1 py-2">
                  <CheckBox nameBox="traphi" text="Người gửi" />
                  <CheckBox nameBox="traphi" text="Người nhận" />
                </div>
              </div>
              <div>
                <p className="font-proBold text-[14px]">In đơn</p>
                <div className="flex flex-col gap-1 py-2">
                  <CheckBox nameBox="in" text="Chưa in" />
                  <CheckBox nameBox="in" text="Đã in" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button className="uppercase py-4 shadow rounded-md font-proBold text-[14px]">
                Hủy
              </button>
              <button
                className="uppercase bg-gradient-to-b from-[#EF586B] 
                to-[#D9112A] rounded-md font-proBold text-[14px] text-white"
              >
                Áp dụng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
