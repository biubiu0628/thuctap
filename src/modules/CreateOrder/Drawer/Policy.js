import React from "react";
import Right from "../../../images/Stat/Right.svg";

const Policy = () => {
  return (
    <div className="drawer drawer-end">
      <input id="policy" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="policy" className="drawer-button">
          <span className="text-[#CB2D38] font-proMedium cursor-pointer">
            Điều khoản & quy định
          </span>
        </label>
      </div>
      <div className="drawer-side z-10">
        <label
          htmlFor="policy"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="h-screen bg-white w-1/4 rounded-l-xl">
          <div className="flex items-center px-10 border-b-[1px] h-[13%]">
            <p className="font-proBold text-[28px]">Chính sách</p>
          </div>
          <div className="h-[70%] flex flex-col justify-center gap-8 px-10">
            <p className="text-[14px]">
              <span className="font-proBold text-[#F32034]">Lưu ý: </span>
              <span className="font-proMedium">
                Giá Trị Hàng Hóa bạn kê khai tại mục này chính là Giá Trị Căn Cứ
                để xét xử lý Bồi Hoàn.
              </span>
            </p>
            <div>
              <div className="p-4 flex items-center justify-between border-b-[1px]">
                <p className="font-proMedium text-[14px]">
                  Chính sách bồi thường
                </p>
                <img src={Right} alt="" />
              </div>
              <div className="p-4 flex items-center justify-between border-b-[1px]">
                <p className="font-proMedium text-[14px]">
                  Quy định về khiếu nại
                </p>
                <img src={Right} alt="" />
              </div>
              <div className="p-4 flex items-center justify-between border-b-[1px]">
                <p className="font-proMedium text-[14px]">Chính sách hỗ trợ</p>
                <img src={Right} alt="" />
              </div>
              <div className="p-4 flex items-center justify-between border-b-[1px]">
                <p className="font-proMedium text-[14px]">Điều khoản sử dụng</p>
                <img src={Right} alt="" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <p className="font-proMedium text-[14px]">Quy trình gửi hàng</p>
                <img src={Right} alt="" />
              </div>
            </div>
            <button
              className="uppercase h-[40px] bg-gradient-to-b from-[#EF586B] 
              to-[#D9112A] font-proMedium text-[14px] text-white rounded-lg"
            >
              Đã hiểu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
