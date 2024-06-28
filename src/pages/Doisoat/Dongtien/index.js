import React from "react";
import { Link } from "react-router-dom";
import GoBack from "../../../images/Create/GoBack.svg";
import Tag from "../../../modules/Order/Tag";
import Down from "../../../images/Order/Down.svg";
import Calendar from "../../../images/Doisoat/Calendar.svg";
import Folder from "../../../images/Doisoat/Folder.svg";
import TextSort from "../../../images/Doisoat/TextSort.svg";
import Down2 from "../../../images/Create/Down.svg";
import BodyTable from "../../../modules/Doisoat/Dongtien/BodyTable";
import List from "../../../modules/Doisoat/Dongtien/List";
import DonutChart from "../../../modules/Doisoat/Dongtien/DonutChart";

const Dongtien = () => {
  const tables = [
    {
      color: "#F7F7F7",
      name: "Đã trả",
      fee: "234",
      price: "1.666",
    },
    {
      color: "white",
      name: "Đã đối soát",
      fee: "0",
      price: "0",
    },
    {
      color: "#F7F7F7",
      name: "Chưa đối soát",
      fee: "13",
      price: "2.037",
    },
    {
      color: "white",
      name: "Cước vận chuyển",
      fee: "49",
      price: "-",
    },
    {
      color: "white",
      name: "Tổng",
      fee: "296",
      price: "3.654",
    },
  ];

  return (
    <div>
      <div className="flex items-center gap-2 pt-16">
        <Link
          to={"/doisoat"}
          className="size-[40px] rounded-full bg-white 
          flex items-center justify-center shadow"
        >
          <img src={GoBack} alt="" />
        </Link>
        <p className="font-proBold text-[32px]">Dòng tiền</p>
      </div>
      <div className="flex justify-between items-center pt-6">
        <div className="flex gap-2">
          <Tag
            name="Tháng này"
            color="#F32034"
            colorText="white"
            children={<img src={Down} alt="" />}
          />
          <Tag name="Tháng 9" />
          <Tag name="Tháng 8" />
          <Tag name="Tháng 7" />
          <Tag name="Tháng 6" />
          <Tag name="Tháng 5" />
          <Tag name="Tháng 4" />
          <Tag name="Tháng 3" />
          <Tag name="Tháng 2" />
          <Tag name="Tháng 1" />
        </div>
        <div
          className="flex justify-center items-center gap-2 bg-[#F7F7F7] 
          border-[1px] border-[#E5E5E5] px-4 rounded-2xl h-[31px]"
        >
          <img src={Calendar} alt="" />
          <p className="font-proMedium text-[12px] text-[#666666]">2023</p>
          <button>
            <img src={Down2} alt="" />
          </button>
        </div>
      </div>
      <div className="flex gap-4 pt-4">
        <div className="w-[1050px] bg-white rounded-2xl">
          <div className="py-4 px-8 border-b-[1px]">
            <p className="flex justify-between items-center">
              <span className="font-proBold text-[18px]">
                Tiền COD theo trạng thái
              </span>
              <span className="font-pro text-[14px] text-[#666666]">
                (Tính theo ngày đối soát)
              </span>
            </p>
            <div>
              <DonutChart />
            </div>
          </div>
          <div className="p-8 border-t-[1px]">
            <table className="w-full">
              <thead>
                <tr className="font-proBold text-[14px]">
                  <th scope="col" className="py-5"></th>
                  <th scope="col" className="text-right">
                    Cước
                  </th>
                  <th scope="col" className="text-right">
                    Phải trả
                  </th>
                </tr>
              </thead>
              {tables.map((table, index) => (
                <BodyTable
                  key={index}
                  index={index}
                  color={table.color}
                  name={table.name}
                  fee={table.fee}
                  price={table.price}
                />
              ))}
            </table>
          </div>
        </div>
        <div className="w-[500px] bg-white rounded-2xl h-full">
          <div className="flex justify-between items-center px-8 py-4">
            <div className="flex items-center gap-2 w-[150px]">
              <img src={Folder} alt="" />
              <p className="flex gap-2 font-proBold text-[18px]">
                <span>Bảng kê</span>
                <span>(2)</span>
              </p>
            </div>
            <button
              className="size-[40px] rounded-full shadow 
              flex items-center justify-center bg-white"
            >
              <img src={TextSort} alt="" />
            </button>
          </div>
          <div>
            <List />
            <List />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dongtien;
