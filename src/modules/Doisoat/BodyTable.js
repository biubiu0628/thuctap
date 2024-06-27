import React, { useEffect, useState } from "react";

const BodyTable = ({ isClick, money, status, color }) => {
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
        <p className="text-black flex flex-col text-[14px] font-proBold">
          <span>SGN1718182397123</span>
          <span className="italic">145 đơn</span>
        </p>
      </td>
      <td>
        <p className="text-[14px] font-pro flex flex-col">
          <span>24-07-2023</span>
          <span>15:30</span>
        </p>
      </td>
      <td>
        <p className="font-pro text-[14px] text-center">120</p>
      </td>
      <td>
        <p className="font-pro text-[14px] text-center">25</p>
      </td>
      <td>
        <p
          className="font-proBold text-[14px] 
          text-[#188B54] text-center"
        >
          {money}đ
        </p>
      </td>
      <td>
        <div className="flex justify-center">
          <p
            className="w-[160px] h-[20px] rounded-2xl text-[10px] 
            font-monoBold text-white flex items-center justify-center gap-1"
            style={{ backgroundColor: color }}
          >
            <span>#1 - {status}</span>
          </p>
        </div>
      </td>
    </tr>
  );
};

export default BodyTable;
