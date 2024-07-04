import React from "react";
import User from "../../images/Account/User.svg";
const BodyTable = ({ name }) => {
  return (
    <tr className="bg-white border-t-[1px]">
      <th scope="row" className="py-7">
        <div className="flex justify-center text-start">
          <p className="text-[#666666] flex flex-col text-[12px]">
            <span className="font-proBold">04/09/2023</span>
            <span className="font-pro">12:30</span>
          </p>
        </div>
      </th>
      <td>
        <p className="text-center font-proBold text-[14px]">SGN1718182397123</p>
      </td>
      <td>
        <div className="flex items-center justify-center gap-2">
          <img src={User} alt="" />
          <p className="font-pro text-[14px]">KHTQ - Kho gia dụng</p>
        </div>
      </td>
      <td className="text-center">
        <p className="font-pro text-[14px]">
          Nhân viên quá là tuyệt vời không có gì để chê
        </p>
      </td>
      <td className="pl-2">
        <div className="rating flex items-center justify-center">
          <input
            type="radio"
            name={name}
            className="mask mask-star bg-[#FACC15]"
          />
          <input
            type="radio"
            name={name}
            className="mask mask-star bg-[#FACC15]"
          />
          <input
            type="radio"
            name={name}
            className="mask mask-star bg-[#FACC15]"
          />
          <input
            type="radio"
            name={name}
            className="mask mask-star bg-[#FACC15]"
          />
          <input
            type="radio"
            name={name}
            className="mask mask-star bg-[#FACC15]"
          />
        </div>
      </td>
      <td>
        <div className="flex justify-center">
          <div
            className="w-[185px] h-[20px] rounded-2xl 
        bg-[#27A568] flex items-center justify-center"
          >
            <p className="text-white text-[10px] font-proBold">
              #1 Đã đối soát giao hàng
            </p>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default BodyTable;
