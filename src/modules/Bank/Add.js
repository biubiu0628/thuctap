import React, { useState } from "react";
import Person from "../../images/Warehouse/Person.svg";
import Number from "../../images/Warehouse/Number.svg";
import Input from "../../modules/Register/Input";

const Add = () => {
  const [isInputPerson, setIsInputPerson] = useState(false);
  const [isInputNumber, setIsInputNumber] = useState(false);

  return (
    <div className="drawer drawer-end">
      <input id="add" type="checkbox" className="drawer-toggle" />
      <label
        htmlFor="add"
        className="drawer-content flex items-center justify-center border-[2px] border-dashed 
        border-[#F32034] rounded-2xl font-proBold text-[22px] text-[#F32034] cursor-pointer"
      >
        + Tạo mới
      </label>
      <div className="drawer-side z-10">
        <label className="drawer-overlay"></label>
        <div className=" h-screen bg-white w-1/4 rounded-l-xl">
          <div className="flex items-center px-10 border-b-[1px] h-[13%]">
            <p className="font-proBold text-[28px]">Liên kết tài khoản</p>
          </div>
          <div className="h-[70%] flex flex-col items-center justify-center gap-4 px-10">
            <div className="w-full flex flex-col gap-4">
              <Input
                image={Person}
                text="Tên kho hàng"
                required={true}
                isInput={isInputPerson}
                setIsInput={setIsInputPerson}
              />
              <Input
                image={Number}
                text="Số tài khoản"
                required={true}
                isInput={isInputNumber}
                setIsInput={setIsInputNumber}
              />
            </div>
            <div className="grid grid-cols-2 w-full gap-4">
              <label
                htmlFor="add"
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
                Tạo Tài Khoản
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
