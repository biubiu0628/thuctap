import React from "react";
import Copy from "../../images/Product/Copy.svg";

const BodyTable = ({ isActived }) => {
  return (
    <tr className="bg-white border-t-[1px]">
      <th scope="row" className="py-7">
        <p className="text-[#666666] flex flex-col text-[12px]">
          <span className="font-proBold">04/09/2023</span>
          <span className="font-pro">12:30</span>
        </p>
      </th>
      <td>
        <p className="flex flex-col text-center">
          <span className="font-proBold text-[14px]">SGN1718182397123</span>
          <span className="font-pro text-[12px]">2308111447A327308</span>
        </p>
      </td>
      <td>
        <p className="font-pro text-[14px] text-center">
          {isActived === 0 ? "119.000đ" : "100 gram"}
        </p>
      </td>
      <td className="font-proBold text-[14px] text-[#188B54] text-center">
        {isActived === 0 ? "1.000.000đ" : "1.270 gram"}
      </td>
      <td className="pl-2">
        <div
          className="size-[23px] rounded-full 
          shadow flex items-center justify-center"
        >
          <img src={Copy} alt="" />
        </div>
      </td>
    </tr>
  );
};

export default BodyTable;
