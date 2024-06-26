import React from "react";
import User from "../../images/Warehouse/User.svg";
import Phone from "../../images/Warehouse/Phone.svg";
import Location from "../../images/Warehouse/Location.svg";
import Edit from "../../images/Order/Edit.svg";
import Garbage from "../../images/Warehouse/Garbage.svg";

const BodyTable = () => {
  return (
    <tr className="bg-white border-t-[1px]">
      <th scope="row" className="py-10 flex items-center gap-2 pl-6">
        <input type="radio" />
        <p className="font-proMedium text-[12px]">Mặc định</p>
      </th>
      <td>
        <p className="font-proBold text-[14px]">Tên kho hàng 1</p>
      </td>
      <td>
        <div>
          <div className="flex items-center gap-2 font-pro text-[12px]">
            <img src={User} alt="" />
            <p>Hữu Trí</p>
          </div>
          <div className="flex items-center gap-2 font-pro text-[12px]">
            <img src={Phone} alt="" />
            <p>0987654321</p>
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center">
          <img src={Location} alt="" />
          <p>32 Thân Nhân Trung, Phường 13, Quận Tân Bình, Tp. Hồ Chí Minh</p>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-2">
          <button
            className="size-[23px] rounded-full bg-white 
        shadow flex items-center justify-center"
          >
            <img src={Edit} alt="" />
          </button>
          <button
            className="size-[23px] rounded-full bg-white 
        shadow flex items-center justify-center"
          >
            <img src={Garbage} alt="" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default BodyTable;
