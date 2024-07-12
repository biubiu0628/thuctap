import React, { useEffect, useState } from "react";
import Location from "../../images/Order/Location.svg";
import Phone from "../../images/Order/Phone.svg";
import BoxSearch from "../../images/Order/BoxSearch.svg";
import Note from "../../images/Order/Note.svg";
import Box from "../../images/Order/Box.svg";
import Edit from "../../images/Order/Edit.svg";
import Headphone from "../../images/Order/Headphone.svg";
import Info from "../../modules/Order/Info";
import Button from "../../modules/Order/Button";
import Barcode from "../../modules/Order/Barcode";

const BodyTable = ({ isClick }) => {
  const [isCheck, setIsCheck] = useState(false);

  useEffect(() => {
    setIsCheck(isClick);
  }, [isClick]);

  return (
    <tr className={`${isCheck ? "bg-[#F3CED780]" : "bg-white"} border-b-[1px]`}>
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
        <p className="text-[14px] font-proBold">SGN1718182397123</p>
      </td>
      <td>
        <div className="flex flex-col">
          <p className="text-[14px] font-proBold">Name</p>
          <Info image={Location} name="Địa chỉ" />
          <Info image={Phone} name="Số điện thoại" />
        </div>
      </td>
      <td>
        <div className="flex flex-col">
          <Info image={BoxSearch} name="Khối lượng" />
          <Info image={Note} name="Note" />
          <Info image={Box} name="Name product" />
        </div>
      </td>
      <td>
        <p className="text-[14px] font-proBold text-[#188B54]">1.000.000đ</p>
      </td>
      <td>
        <div className="flex items-center justify-center">
          <div
            className="h-[20px] w-[140px] rounded-2xl text-[10px] text-white font-proBold 
        bg-[#27A568] flex items-center justify-center"
          >
            Giao thành công
          </div>
        </div>
      </td>
      <td>
        <div className="flex gap-2 justify-center">
          <Button image={Edit} />
          <Barcode />
          <Button image={Headphone} />
        </div>
      </td>
    </tr>
  );
};

export default BodyTable;
