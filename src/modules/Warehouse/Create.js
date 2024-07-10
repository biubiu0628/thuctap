import React, { useState } from "react";
import Add from "../../images/Nav/add.svg";
import Home from "../../images/Warehouse/Home.svg";
import Call from "../../images/Warehouse/Call.svg";
import Person from "../../images/Warehouse/Person.svg";
import Loca from "../../images/Warehouse/Loca.svg";
import Building from "../../images/Warehouse/Building.svg";
import Input from "../../modules/Register/Input";
import InputArea from "../../modules/Register/InputArea";

const Create = () => {
  const [isInputArea, setIsInputArea] = useState(false);
  const [isInputHome, setIsInputHome] = useState(false);
  const [isInputCall, setIsInputCall] = useState(false);
  const [isInputPerson, setIsInputPerson] = useState(false);
  const [isInputLoca, setIsInputLoca] = useState(false);

  return (
    <div className="drawer drawer-end">
      <input id="create" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content w-full h-[53px]">
        <label
          htmlFor="create"
          className="drawer-button h-[60px] flex gap-1 items-center justify-center 
        bg-gradient-to-b from-[#EF586B] to-[#D9112A] rounded-md cursor-pointer"
        >
          <img src={Add} alt="" />
          <p className="uppercase font-proBold text-[12px] text-white">
            Tạo mới
          </p>
        </label>
      </div>
      <div className="drawer-side z-10">
        <label></label>
        <div className="h-screen bg-white w-1/4 rounded-l-xl">
          <div className="flex items-center px-10 border-b-[1px] h-[13%]">
            <p className="font-proBold text-[28px]">Tạo kho hàng</p>
          </div>
          <div className="h-[70%] flex flex-col items-center justify-center gap-4 px-10">
            <div className="w-full flex flex-col gap-4">
              <Input
                image={Home}
                text="Tên kho hàng"
                required={true}
                isInput={isInputHome}
                setIsInput={setIsInputHome}
              />
              <Input
                image={Call}
                text="Số điện thoại"
                required={true}
                isInput={isInputCall}
                setIsInput={setIsInputCall}
              />
              <Input
                image={Person}
                text="Người liên hệ"
                required={true}
                isInput={isInputPerson}
                setIsInput={setIsInputPerson}
              />
              <Input
                image={Loca}
                text="Địa chỉ chi tiết"
                required={true}
                isInput={isInputLoca}
                setIsInput={setIsInputLoca}
              />
              <InputArea
                image={Building}
                isArea={isInputArea}
                setIsArea={setIsInputArea}
              />
            </div>
            <div className="grid grid-cols-2 w-full gap-4">
              <label
                htmlFor="create"
                aria-label="close sidebar"
                className="uppercase shadow rounded-md py-4 
                font-proBold text-[14px] text-center cursor-pointer"
              >
                Hủy
              </label>
              <button
                className="uppercase py-4 rounded-md font-proBold text-[14px] 
                text-white bg-gradient-to-b from-[#EF586B] to-[#D9112A]"
              >
                Tạo Kho
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
