import React, { useEffect, useState } from "react";
import Garbage from "../../images/Warehouse/Garbage.svg";
import Button from "../../modules/Order/Button";

const BodyTable = ({ isClick, time, name, text }) => {
  const [isCheck, setIsCheck] = useState(false);
  const [isRead, setIsRead] = useState(false);

  useEffect(() => {
    setIsCheck(isClick);
  }, [isClick]);

  return (
    <tr
      className={`${isCheck ? "bg-[#F3CED7]" : "bg-white"} border-t-[1px]`}
      onClick={() => setIsRead(true)}
    >
      <th scope="row" className="py-7">
        <input
          type="checkbox"
          className="accent-[#F32034]"
          onChange={() => setIsCheck(!isCheck)}
          checked={isCheck}
        />
      </th>
      <td>
        <p className="relative flex items-center">
          <span
            className={`font-pro text-[12px] ${
              isRead ? "text-[#B2B2B2]" : "text-black"
            }`}
          >
            {time}
          </span>
          <span
            class={`${isRead ? "hidden" : "absolute"} left-20 flex size-[7px]`}
          >
            <span
              class="animate-ping absolute inline-flex h-full 
            w-full rounded-full bg-[#F32034] opacity-75"
            ></span>
            <span
              class="relative inline-flex rounded-full 
            size-[7px] bg-[#F32034]"
            ></span>
          </span>
        </p>
      </td>
      <td>
        <p
          className={`text-[14px] font-proBold ${
            isRead ? "text-[#B2B2B2]" : "text-black"
          }`}
        >
          {name}
        </p>
      </td>
      <td>
        <p
          className={`font-pro text-[14px] ${
            isRead ? "text-[#B2B2B2]" : "text-black"
          }`}
        >
          {text}
        </p>
      </td>
      <td className="pl-2">
        <Button image={Garbage} />
      </td>
    </tr>
  );
};

export default BodyTable;
