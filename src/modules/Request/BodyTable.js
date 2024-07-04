import React, { useEffect, useState } from "react";
import Scan from "../../images/Product/Scan.svg";

const BodyTable = ({ isClick, status, text, color, colorText }) => {
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
        <p className="text-[#666666] flex flex-col text-[12px]">
          <span className="font-proBold">04/09/2023</span>
          <span className="font-pro">12:30</span>
        </p>
      </td>
      <td>
        <p className="text-[14px] font-proBold text-center">Giao hàng gấp</p>
      </td>
      <td>
        <div className="flex items-center gap-1 justify-center">
          <img src={Scan} alt="" />
          <p className="font-pro text-[14px]">TOVR539128</p>
        </div>
      </td>
      <td className="font-pro text-[14px]">{text}</td>
      <td>
        <div className="flex items-center justify-center">
          <p
            className="h-[20px] w-[150px] rounded-2xl text-[10px]
            font-proBold flex items-center justify-center gap-1"
            style={{ backgroundColor: color, color: colorText }}
          >
            <span>#1</span>
            <span>{status}</span>
          </p>
        </div>
      </td>
    </tr>
  );
};

export default BodyTable;
