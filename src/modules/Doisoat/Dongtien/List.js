import React from "react";

const List = () => {
  return (
    <div className="px-8 py-4 border-t-[1px] flex flex-col gap-2">
      <div
        className="w-[120px] h-[20px] rounded-2xl 
        flex items-center justify-center bg-[#27A568]"
      >
        <p
          className="uppercase text-white 
        font-monoBold text-[10px]"
        >
          #1 - Đã trả
        </p>
      </div>
      <p className="font-proBold text-[16px]">SGN1718.182397123</p>
      <p className="flex justify-between">
        <span>Tiền thu hộ:</span>
        <span>366.884.000 đ</span>
      </p>
      <p className="flex justify-between">
        <span>Cước vận chuyển:</span>
        <span>200.000 đ</span>
      </p>
      <p className="flex justify-between">
        <span>Tiền phải trả:</span>
        <span>366.694.000 đ</span>
      </p>
      <p className="flex justify-between">
        <span>Thời gian</span>
        <span>24-07-2023 15:30</span>
      </p>
    </div>
  );
};

export default List;
