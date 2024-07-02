import React from "react";

const Transport = ({
  name,
  color,
  isSelect,
  handleSelect,
  status,
  logo,
  rate,
  price,
  number,
  children,
}) => {
  return (
    <div
      className={`w-full flex flex-col border-[1.5px] rounded-lg my-2 cursor-pointer
      ${isSelect ? "border-[#F32034]" : "border-[#E5E5E5]"} hover:bg-[#F2F2F2]`}
      onClick={handleSelect}
    >
      <div
        className="w-[50px] h-[14px] rounded-r-full rounded-tl-full uppercase 
      text-[8px] font-proBold text-white flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        {status}
      </div>
      <div className="flex items-center justify-between px-4 pb-2">
        <div className="flex items-center gap-4">
          <div>
            <img src={logo} alt="" className="rounded" />
          </div>
          <div>
            <p className="text-[14px] font-proMedium">{name}</p>
            <p className="text-[12px] font-pro">
              <span className="text-[#666666]">Tỷ lệ: </span>
              <span className="text-[#188B54]">{rate}</span>
            </p>
            {children}
          </div>
        </div>
        <div>
          <p className="text-[#F32034] flex items-center justify-end gap-1">
            <span className="text-[16px] font-proBold ">{price}</span>
            <span className="underline text-[12px] font-pro">đ</span>
          </p>
          <p className="text-[12px]">
            <span className="font-pro">Dự kiến giao: </span>
            <span className="font-proBold">{number} ngày</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Transport;
