import React, { useState } from "react";
import Tag from "../../modules/Order/Tag";
import Export from "../../images/Order/export.svg";
import ExportRed from "../../images/Order/ExportRed.svg";
import Print from "../../images/Order/print.svg";
import PrintWhite from "../../images/Order/PrintWhite.svg";
import Down from "../../images/Order/Down.svg";
import BodyTable from "../../modules/Order/BodyTable";

const Order = () => {
  const [isClick, setIsClick] = useState(false);

  return (
    <div>
      {/* tag menu */}
      <div className="flex justify-between py-6 mt-10">
        <div className="flex gap-2">
          <Tag
            name="Hôm nay"
            quantity="22"
            color="#F32034"
            colorText="white"
            children={<img src={Down} alt="" />}
          />
          <Tag name="Tạo mới" quantity="0" />
          <Tag name="Chờ lấy" quantity="0" />
          <Tag name="Đã lấy" quantity="0" />
          <Tag name="Đang vận chuyển" quantity="0" />
          <Tag name="Đang giao" quantity="0" />
          <Tag name="Giao thành công" quantity="0" />
        </div>
        <div className="flex gap-2">
          <button
            className={`flex items-center justify-center gap-2 py-2 
            w-[127px] rounded-md bg-white ${
              !isClick
                ? "border-[#E5E5E5] border-[1px] text-[#B2B2B2] disabled cursor-auto"
                : "border-[#EF586B] border-[1px] text-[#F32034] "
            }`}
          >
            <img src={isClick ? ExportRed : Export} alt="" />
            <p className="text-[12px] font-proBold ">Xuất Excel</p>
          </button>
          <button
            className={`flex items-center justify-center gap-2 py-2 w-[127px] rounded-md ${
              !isClick
                ? "border-[#E5E5E5] border-[1px] text-[#B2B2B2] bg-white disabled cursor-auto"
                : "border-[#EF586B] border-[1px] text-white bg-gradient-to-b from-[#EF586B] to-[#D9112A]"
            }`}
          >
            <img src={isClick ? PrintWhite : Print} alt="" />
            <p className="text-[12px] font-proBold">In Tem</p>
          </button>
        </div>
      </div>
      {/* bang don hang */}
      <div className="container mx-auto">
        <table className="w-full rounded-xl overflow-hidden">
          <thead className="bg-[#F7F7F7] ">
            <tr className="text-left text-[12px] font-proBold text-[#666666] border-b-[1px]">
              <th
                scope="col"
                className="px-2 py-3 flex justify-center accent-[#F32034]"
              >
                <input type="checkbox" onChange={() => setIsClick(!isClick)} />
              </th>
              <th scope="col">Thời gian</th>
              <th scope="col">Mã đơn hàng</th>
              <th scope="col">Khách hàng</th>
              <th scope="col">Thông tin đơn hàng</th>
              <th scope="col">Tiền thu khách</th>
              <th scope="col" className="text-center">
                Trạng thái đơn hàng
              </th>
              <th scope="col" className="text-center">
                Tác vụ
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(9)].map((_, index) => (
              <BodyTable key={index} index={index} isClick={isClick} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
