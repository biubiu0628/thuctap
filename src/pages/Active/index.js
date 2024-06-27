import React, { useState } from "react";
import Tag from "../../modules/Order/Tag";
import Down from "../../images/Order/Down.svg";
import Delete from "../../images/Product/Delete.svg";
import DeleteRed from "../../images/Product/DeleteRed.svg";
import BodyTable from "../../modules/Active/BodyTable";

const Active = () => {
  const [isClick, setIsClick] = useState(false);

  const actives = [
    {
      time: "2 phút trước",
      name: "Kho hàng",
      text: "SuperShip Test đã sửa Kho W5VVF143494 bằng ứng dụng SuperShip Android",
    },
    {
      time: "2 phút trước",
      name: "Người dùng",
      text: "SuperShip Test đã sửa Sinh nhật 08/07/2023 thành 09/07/2023 bằng ứng dụng SuperShip Android",
    },
    {
      time: "2 phút trước",
      name: "Kho hàng",
      text: "SuperShip Test đã sửa Sinh nhật 08/07/2023 thành 09/07/2023 bằng ứng dụng SuperShip Android",
    },
    {
      time: "45 phút trước",
      name: "Người dùng",
      text: "SuperShip Test đã sửa Sinh nhật 08/07/2023 thành 09/07/2023 bằng ứng dụng SuperShip Android",
    },
    {
      time: "1 ngày trước",
      name: "Kho hàng",
      text: "SuperShip Test đã sửa Sinh nhật 08/07/2023 thành 09/07/2023 bằng ứng dụng SuperShip Android",
    },
    {
      time: "2 ngày trước",
      name: "Người dùng",
      text: "SuperShip Test đã sửa Sinh nhật 08/07/2023 thành 09/07/2023 bằng ứng dụng SuperShip Android",
    },
  ];

  return (
    <div>
      <div className="flex justify-between py-6 mt-10">
        <div className="flex gap-2">
          <Tag
            name="Tất cả"
            color="#F32034"
            colorText="white"
            children={<img src={Down} alt="" />}
          />
          <Tag name="Mới nhất" quantity="(3)" />
          <Tag name="Trước đó" quantity="(3)" />
        </div>
        <div className="flex gap-2">
          <button
            className={`flex items-center justify-center gap-1 py-2 
            w-[127px] rounded-md bg-white ${
              !isClick
                ? "border-[#E5E5E5] border-[1px] text-[#B2B2B2] disabled cursor-auto"
                : "border-[#EF586B] border-[1px] text-[#F32034] "
            }`}
          >
            <img src={isClick ? DeleteRed : Delete} alt="" />
            <p className="text-[12px] font-proBold uppercase">Xóa</p>
          </button>
        </div>
      </div>
      {/* bang don hang */}
      <div className="container mx-auto">
        <table className="w-full rounded-xl overflow-hidden">
          <thead className="bg-[#F7F7F7] ">
            <tr className="text-left text-[12px] font-proBold text-[#666666]">
              <th
                scope="col"
                className="px-2 py-3 flex justify-center accent-[#F32034]"
              >
                <input type="checkbox" onChange={() => setIsClick(!isClick)} />
              </th>
              <th scope="col">Thời gian</th>
              <th scope="col">Phân loại</th>
              <th scope="col">Nội dung</th>
              <th scope="col">Tác vụ</th>
            </tr>
          </thead>
          <tbody>
            {actives.map((active, index) => (
              <BodyTable
                key={index}
                isClick={isClick}
                time={active.time}
                name={active.name}
                text={active.text}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Active;
