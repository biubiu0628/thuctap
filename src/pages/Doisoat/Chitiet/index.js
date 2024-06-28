import React from "react";
import { Link } from "react-router-dom";
import GoBack from "../../../images/Create/GoBack.svg";
import Document from "../../../images/Doisoat/Document.svg";
import Code from "../../../images/Doisoat/Code.svg";
import UpDown from "../../../images/Doisoat/UpDown.svg";
import BodyTable from "../../../modules/Doisoat/Chitiet/BodyTable";

const Button = () => (
  <div>
    <button>
      <img src={UpDown} alt="" />
    </button>
  </div>
);

const Thead = ({ name }) => (
  <th className="pr-2">
    <div className="flex items-center">
      <p className="w-full">{name}</p>
      <Button />
    </div>
  </th>
);

const heads = [
  { name: "Đơn hàng" },
  { name: "Người nhận" },
  { name: "Thu KH" },
  { name: "Trả trước" },
  { name: "Giao hàng" },
  { name: "Bảo hiểm" },
  { name: "Chuyển hoàn" },
  { name: "Hàng đổi" },
  { name: "Đổi địa chỉ" },
  { name: "Khuyến mãi" },
];

const Chitiet = () => {
  return (
    <div>
      <div className="flex justify-between items-center pt-16 pb-10">
        <div className="flex gap-2 items-center">
          <Link
            to={"/doisoat"}
            className="size-[40px] rounded-full bg-white 
            flex items-center justify-center shadow"
          >
            <img src={GoBack} alt="" />
          </Link>
          <p className="font-pro text-[24px]">Chi tiết đối soát </p>
          <p className="font-proBold text-[32px]">A030224.S888888.KYWB</p>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="w-[100px] h-[35px] text-white font-proMedium text-[14px] flex items-center 
            justify-center rounded-md bg-gradient-to-t from-[#066E3C] to-[#27A568] gap-2"
          >
            <img src={Document} alt="" />
            <p>Tải Excel</p>
          </button>
          <div className="flex flex-col items-center">
            <div
              className="tooltip"
              data-tip="Nhấn vào để sao chép mã đối soát"
            >
              <img src={Code} alt="" />
            </div>
            <p className="font-proBold text-[9px]">A030224.S888888.KYWB</p>
          </div>
          <p
            className="flex flex-col text-[12px] 
            font-pro text-[#666666] items-center"
          >
            <span>Ngày tạo đơn:</span>
            <span>18/07/2023 - 09:36</span>
          </p>
        </div>
      </div>
      <table className="w-full rounded-xl overflow-hidden">
        <thead>
          <tr
            className="text-[12px] font-proBold 
            text-[#666666] bg-[#F7F7F7]"
          >
            <th scope="col" className="p-2 pr-0">
              TT
            </th>
            {heads.map((map, _) => (
              <Thead name={map.name} />
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(5)].map((_, index) => (
            <BodyTable key={index} stt={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Chitiet;
