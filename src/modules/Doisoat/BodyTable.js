import React, { useEffect, useState } from "react";
import Eye from "../../images/Doisoat/Eye.svg";
import Download from "../../images/Doisoat/Download.svg";
import { Link } from "react-router-dom";

const BodyTable = ({ isClick, stt, status, color }) => {
  const [isCheck, setIsCheck] = useState(false);

  useEffect(() => {
    setIsCheck(isClick);
  }, [isClick]);

  return (
    <tr className={`${isCheck ? "bg-[#F3CED780]" : "bg-white"} border-t-[1px]`}>
      <th scope="row" className="py-7">
        <input
          type="checkbox"
          className="accent-[#F32034]"
          onChange={() => setIsCheck(!isCheck)}
          checked={isCheck}
        />
      </th>
      <td>
        <p className="font-pro text-[13px] text-center">{stt}</p>
      </td>
      <td>
        <div className="flex flex-col gap-1 my-2">
          <div
            className="w-[90px] h-[20px] flex items-center justify-center 
            font-monoBold text-[9px] text-white rounded-2xl"
            style={{ backgroundColor: color }}
          >
            {status}
          </div>
          <p className="flex flex-col">
            <span className="font-proBold text-[13px]">
              A030224.S888888.KYWB
            </span>
            <span className="font-proBold text-[13px] italic">145 đơn</span>
            <span className="font-pro text-[12px]">24-07-2023 | 15:30</span>
          </p>
        </div>
      </td>
      <td>
        <p className="font-pro text-[13px] text-center">120</p>
      </td>
      <td>
        <p className="font-pro text-[13px] text-center">25</p>
      </td>
      <td>
        <p className="font-pro text-[13px] text-center">
          <span>Thu Hộ: 916.000 </span>
          <span className="underline">đ</span>
        </p>
      </td>
      <td>
        <div className="flex flex-col items-center">
          <p className="font-pro text-[13px]">
            <span>Giao Hàng: 56.000 </span>
            <span className="underline">đ</span>
          </p>
          <p className="font-pro text-[13px]">
            <span>Ngân Hàng: 3.300 </span>
            <span className="underline">đ</span>
          </p>
        </div>
      </td>
      <td>
        <div className="flex justify-center">
          <p className="font-proBold text-[13px] text-[#188B54]">
            <span>856.700 </span>
            <span>đ</span>
          </p>
        </div>
      </td>
      <td>
        <div className="flex justify-center">
          <div className="flex gap-2">
            <Link
              to="/doisoat/chitiet"
              className="size-[22px] rounded-full flex 
            items-center justify-center shadow"
            >
              <img src={Eye} alt="" />
            </Link>
            <button
              className="size-[22px] rounded-full flex 
            items-center justify-center shadow"
            >
              <img src={Download} alt="" />
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default BodyTable;
