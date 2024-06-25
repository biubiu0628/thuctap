import React from "react";
import Checkmark from "../../images/Header/Checkmark.svg";
import Exit from "../../images/Header/Exit.svg";
import List from "../../images/Header/list.svg";

const NewNoti = () => (
  <button className="grid grid-cols-[10%_90%] w-full h-[64px] shadow rounded-2xl p-3 my-2 cursor-pointer">
    <div className="flex items-center justify-start">
      <img src={List} alt="" />
    </div>
    <div className="flex flex-col text-[10px] pl-1">
      <p className="flex justify-between">
        <span className="font-proBold">Tiêu đề</span>
        <span className="font-pro text-[#999999]">2 phút trước</span>
      </p>
      <p className="relative flex justify-between">
        <span className="font-pro">
          Cao Nguyễn Hà My (SuperShip) đã trả lời Yêu cầu TOVR4501278
        </span>
        <span class="absolute right-0 top-1 flex size-[7px]">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F32034] opacity-75"></span>
          <span class="relative inline-flex rounded-full size-[7px] bg-[#F32034]"></span>
        </span>
      </p>
    </div>
  </button>
);

const PrevNoti = () => (
  <button className="grid grid-cols-[10%_90%] w-full h-[64px] shadow rounded-2xl p-3 my-2 cursor-pointer">
    <div className="flex items-center justify-start">
      <img src={List} alt="" />
    </div>
    <div className="flex flex-col text-[10px] pl-1">
      <p className="flex justify-between text-[#999999]">
        <span className="font-proBold">Tiêu đề</span>
        <span className="font-pro">2 phút trước</span>
      </p>
      <p className="flex justify-between">
        <span className="font-pro text-[#B2B2B2]">
          Cao Nguyễn Hà My (SuperShip) đã trả lời Yêu cầu TOVR4501278
        </span>
      </p>
    </div>
  </button>
);

const Notification = () => {
  return (
    <div
      className="dropdown-content menu w-[423px] h-[550px] rounded-xl bg-white 
    shadow-lg absolute z-10 top-10 mt-2 right-[-195.5px]"
    >
      <div className="flex justify-between py-4 px-6 border-b-[1px]">
        <p className="font-proBold text-[24px]">Thông báo</p>
        <div className="flex items-center gap-4">
          <button className="flex gap-1 items-center">
            <img src={Checkmark} alt="" />
            <p className="text-[12px] text-[#F32034] font-pro">
              Đánh dấu đã đọc
            </p>
          </button>
          <button className="flex gap-1 items-center">
            <img src={Exit} alt="" />
            <p className="text-[12px] text-[#F32034] font-pro">Xem tất cả</p>
          </button>
        </div>
      </div>
      <div className="px-6 overflow-y-auto h-[450px]">
        <p className="flex justify-between pt-8 pb-2 items-center">
          <span className="text-[13px] font-proBold">Mới nhất</span>
          <span className="text-[12px] font-pro text-[#F32034]">Xóa</span>
        </p>
        <NewNoti />
        <NewNoti />
        <NewNoti />
        <NewNoti />
        <p className="flex justify-between pt-8 pb-2 items-center">
          <span className="text-[13px] font-proBold">Trước đó</span>
          <span className="text-[12px] font-pro text-[#F32034]">Xóa</span>
        </p>
        <PrevNoti />
        <PrevNoti />
        <PrevNoti />
        <PrevNoti />
      </div>
    </div>
  );
};

export default Notification;
