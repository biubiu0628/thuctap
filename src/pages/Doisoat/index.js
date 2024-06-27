import React, { useState } from "react";
import { Link } from "react-router-dom";
import BodyTable from "../../modules/Doisoat/BodyTable";
import Right from "../../images/Stat/Right.svg";
import DonutChart from "../../modules/Doisoat/DonutChart";

const Text = ({ name, text }) => (
  <div>
    <p className="text-[13px] py-2">
      <span className="font-proBold">{name}: </span>
      <span className="font-pro">{text}</span>
    </p>
  </div>
);

const Button = ({ text }) => (
  <div>
    <button
      className="size-[25px] rounded-full text-[#5E6278] text-[14px] 
      focus:bg-[#F3CED7] flex items-center justify-center"
    >
      {text}
    </button>
  </div>
);

const Doisoat = () => {
  const [isClick, setIsClick] = useState(false);
  const [isChange, setIsChange] = useState(false);

  const recons = [
    { money: "100.884.000", status: "Chưa đối soát", color: "#FFC91F" },
    { money: "54.000.000", status: "Chưa đối soát", color: "#FFC91F" },
    { money: "366.884.000", status: "Chưa đối soát", color: "#FFC91F" },
    { money: "366.884.000", status: "Chưa đối soát", color: "#FFC91F" },
    { money: "366.884.000", status: "Chưa đối soát", color: "#FFC91F" },
    { money: "366.884.000", status: "Chưa đối soát", color: "#FFC91F" },
    { money: "366.884.000", status: "Đã đối soát", color: "#27A568" },
  ];

  const buttons = [
    { text: "M" },
    { text: "T" },
    { text: "W" },
    { text: "T" },
    { text: "F" },
    { text: "S" },
    { text: "S" },
  ];

  return (
    <div className="flex gap-4 pt-16">
      <div className="w-full flex flex-col gap-4">
        <div
          className={`relative flex justify-between items-center 
          py-2 px-8 h-[44px] border-[1px] border-[#E5E5E5] ${
            isChange ? "rounded-t-2xl bg-white" : "rounded-2xl bg-[#FBEFF2]"
          }`}
        >
          <p className="flex items-center gap-2">
            <span className="font-proBold text-[18px]">Lịch đối soát</span>
            <span className="font-pro text-[12px]">
              Tạo đối soát hằng ngày (Trừ thứ Sáu, Chủ Nhật)
            </span>
          </p>
          <button
            className="uppercase font-proBold text-[14px] text-[#F32034]"
            onClick={() => setIsChange(!isChange)}
          >
            thay đổi
          </button>
          <div
            className={`absolute top-[42px] left-[-1px] bg-white px-2 py-4 
            rounded-b-2xl border-[1px] border-[#E5E5E5] flex flex-col gap-2 ${
              isChange ? "block" : "hidden"
            }`}
          >
            <div className="flex gap-2">
              {buttons.map((button, index) => (
                <Button key={index} index={index} text={button.text} />
              ))}
            </div>
            <div
              className="btn w-full h-[45px] bg-gradient-to-t from-[#D9112A] 
              to-[#EF586B] text-white font-proBold text-[16px]"
            >
              Xác nhận
            </div>
          </div>
        </div>
        <div>
          <table className="w-full rounded-xl overflow-hidden">
            <thead className="bg-[#F7F7F7] ">
              <tr className="text-left text-[12px] font-proBold text-[#666666]">
                <th
                  scope="col"
                  className="px-2 py-3 flex justify-center accent-[#F32034]"
                >
                  <input
                    type="checkbox"
                    onChange={() => setIsClick(!isClick)}
                  />
                </th>
                <th scope="col">Mã đơn</th>
                <th scope="col">Thời gian</th>
                <th scope="col" className="text-center">
                  Số đơn giao thành công
                </th>
                <th scope="col" className="text-center">
                  Số đơn trả hàng
                </th>
                <th scope="col" className="text-center">
                  Thực nhận
                </th>
                <th scope="col" className="text-center">
                  Trạng thái
                </th>
              </tr>
            </thead>
            <tbody>
              {recons.map((recon, index) => (
                <BodyTable
                  key={index}
                  isClick={isClick}
                  money={recon.money}
                  status={recon.status}
                  color={recon.color}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div
          className="w-[350px] h-[420px] bg-white 
        rounded-2xl border-[1px] border-[#E5E5E5]"
        >
          <div
            className="flex justify-between 
          items-center p-4 border-b-[1px]"
          >
            <p className="font-proBold text-[18px]">Dòng tiền</p>
            <Link
              to={"/doisoat/dongtien"}
              className="size-[32px] rounded-full flex 
            justify-center items-center shadow"
            >
              <img src={Right} alt="" />
            </Link>
          </div>
          <div className="pt-4">
            <DonutChart />
          </div>
        </div>
        <div
          className="bg-[#FEFBF4] p-4 rounded-2xl 
          border-[1px] border-[#E5E5E5]"
        >
          <p className="font-proBold text-[18px]">Note</p>
          <Text
            name="Chưa đối soát"
            text="Là tiền đã thu của người nhận bao gồm (Tiền hàng + Phí)."
          />
          <Text
            name="Đã đối soát"
            text="Là số tiền thực nhận của người gửi (Tiền hàng)."
          />
          <Text
            name="Đã trả"
            text="Là tiền đã đối soát và thanh toán thành công vào số tài khoản người gửi."
          />
        </div>
      </div>
    </div>
  );
};

export default Doisoat;
