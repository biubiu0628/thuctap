import React from "react";
import Add from "../../images/Nav/add.svg";
import BodyTable from "../../modules/Warehouse/BodyTable";

const Warehouse = () => {
  return (
    <div className="pt-16">
      <div className="grid grid-cols-[75%_20%] justify-between h-[60px]">
        <div
          className="flex justify-between items-center 
        border-[1px] border-[#F3CED7] rounded-md px-8"
        >
          <p className="font-proBold text-[18px]">Kho hàng mặc định</p>
          <p className="flex flex-col font-pro text-[12px]">
            <span>Kho hàng Gò Vấp - 0987654321</span>
            <span>
              32 Thân Nhân Trung, Tân Bình , Phường Bến Thành, Quận 1, TP. Hồ
              Chí Minh
            </span>
          </p>
        </div>
        <button
          className="flex gap-1 items-center justify-center 
        bg-gradient-to-b from-[#EF586B] to-[#D9112A] rounded-md"
        >
          <img src={Add} alt="" />
          <p className="uppercase font-proBold text-[12px] text-white">
            Tạo mới
          </p>
        </button>
      </div>
      <table className="w-full rounded-2xl overflow-hidden mt-4">
        <thead>
          <tr
            className="font-proBold text-[12px] 
            text-[#666666] text-left bg-[#F7F7F7]"
          >
            <th scope="col" className="py-4"></th>
            <th scope="col">Tên kho hàng</th>
            <th scope="col">Người liên hệ</th>
            <th scope="col">Địa chỉ kho hàng</th>
            <th scope="col" className="pl-2">
              Tác vụ
            </th>
          </tr>
        </thead>
        <tbody>
          {[...Array(5)].map((_, index) => (
            <BodyTable />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Warehouse;
