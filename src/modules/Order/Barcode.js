import React from "react";
import LocationArrow from "../../images/Order/LocationArrow.svg";
import QR from "../../images/Order/QR.svg";
import Code from "../../images/Order/Code.svg";
import Share from "../../images/Order/Share.svg";
import Save from "../../images/Order/Save.svg";

const Barcode = () => {
  return (
    <div className="drawer drawer-end w-6 h-6">
      <input id="barcode" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="barcode"
          className="rounded-full w-6 h-6 bg-white 
        flex items-center justify-center shadow-md"
        >
          <img src={LocationArrow} alt="" />
        </label>
      </div>
      <div className="drawer-side z-10">
        <label
          htmlFor="barcode"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="h-screen bg-white w-1/4 rounded-l-xl">
          <div className="flex items-center px-10 border-b-[1px] h-[13%]">
            <p className="font-proBold text-[28px]">
              Mã QR Code và Barcode đơn hàng
            </p>
          </div>
          <div className="h-[70%] flex flex-col items-center justify-between gap-4 px-10 pt-20">
            <div className="flex flex-col items-center gap-8">
              <img src={QR} alt="" />
              <p className="flex flex-col items-center">
                <span className="font-proBold text-[16px]">
                  SGN1718182397123
                </span>
                <span className="font-pro text-[14px] text-[#666666]">
                  Ngày tạo đơn: 18/07/2023 lúc 09:36
                </span>
              </p>
              <img src={Code} alt="" />
            </div>
            <div className="grid grid-cols-2 w-full gap-4">
              <button
                className="flex h-[50px] items-center justify-center 
                gap-2 shadow uppercase rounded-md"
              >
                <img src={Share} alt="" />
                <p className="font-proBold text-[16px]">Chia sẻ</p>
              </button>
              <button
                className="uppercase flex items-center justify-center gap-2 h-[50px] shadow 
                bg-gradient-to-b from-[#EF586B] to-[#D9112A] text-white rounded-md"
              >
                <img src={Save} alt="" />
                <p className="font-proBold text-[16px]">Lưu lại</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Barcode;
