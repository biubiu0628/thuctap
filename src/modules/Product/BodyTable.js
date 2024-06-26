import React, { useEffect, useState } from "react";
import Scan from "../../images/Product/Scan.svg";
import Edit from "../../images/Order/Edit.svg";
import LocationArrow from "../../images/Order/LocationArrow.svg";
import Headphone from "../../images/Order/Headphone.svg";
import Button from "../../modules/Order/Button";

const BodyTable = ({ isClick, status, color, colorText }) => {
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
        <p className="text-[14px] font-proBold">Iphone 14 Pro Max 256gb</p>
      </td>
      <td>
        <div className="flex items-center gap-1">
          <img src={Scan} alt="" />
          <p className="font-pro text-[14px]">NFH1235893</p>
        </div>
      </td>
      <td>
        <div className="flex items-center justify-center">
          <div
            className="h-[20px] w-[210px] rounded-2xl text-[10px]
            font-proBold flex items-center justify-center"
            style={{ backgroundColor: color, color: colorText }}
          >
            {status}
          </div>
        </div>
      </td>
      <td>
        <div className="flex gap-2 justify-center">
          <Button image={Edit} />
          <Button image={LocationArrow} />
          <Button image={Headphone} />
        </div>
      </td>
    </tr>
  );
};

export default BodyTable;
