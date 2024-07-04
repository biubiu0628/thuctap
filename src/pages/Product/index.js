import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tag from "../../modules/Order/Tag";
import Delete from "../../images/Product/Delete.svg";
import DeleteRed from "../../images/Product/DeleteRed.svg";
import Add from "../../images/Nav/add.svg";
import Down from "../../images/Order/Down.svg";
import BodyTable from "../../modules/Product/BodyTable";

const Product = () => {
  const [isClick, setIsClick] = useState(false);

  const products = [
    { status: "Đang bán", color: "#27A568", colorText: "white" },
    { status: "Sắp bán", color: "#FFC91F", colorText: "white" },
    { status: "Ngưng bán", color: "#F2F2F2", colorText: "#999999" },
    { status: "Đang bán", color: "#27A568", colorText: "white" },
    { status: "Đang bán", color: "#27A568", colorText: "white" },
    { status: "Đang bán", color: "#27A568", colorText: "white" },
    { status: "Đang bán", color: "#27A568", colorText: "white" },
    { status: "Đang bán", color: "#27A568", colorText: "white" },
  ];

  return (
    <div>
      {/* tag menu */}
      <div className="flex justify-between items-center py-6 mt-10">
        <div className="flex gap-2">
          <Tag
            name="Tất cả"
            color="#F32034"
            colorText="white"
            children={<img src={Down} alt="" />}
          />
          <Tag name="Đang bán" quantity="(0)" />
          <Tag name="Ngưng bán" quantity="(0)" />
          <Tag name="Sắp bán" quantity="(0)" />
        </div>
        <div className="flex gap-2">
          <button
            className={`flex items-center justify-center gap-1 py-2 
            w-[127px] rounded-md bg-white ${
              !isClick
                ? "border-[#E5E5E5] border-[1px] text-[#B2B2B2] disabled cursor-auto"
                : "border-[#EF586B] border-[1px] text-[#F32034] "
            }`}
          >
            <img src={isClick ? DeleteRed : Delete} alt="" />
            <p className="text-[12px] font-proBold uppercase">Xóa</p>
          </button>
          <Link
            to="/createPro"
            className="flex items-center justify-center gap-1 py-2 w-[127px] rounded-md border-[#EF586B] 
            border-[1px] text-white bg-gradient-to-b from-[#EF586B] to-[#D9112A]"
          >
            <img src={Add} alt="" />
            <p className="text-[12px] font-proBold uppercase">Tạo mới</p>
          </Link>
        </div>
      </div>
      {/* bang don hang */}
      <div className="container mx-auto">
        <table className="w-full rounded-xl overflow-hidden">
          <thead className="bg-[#F7F7F7] ">
            <tr className="text-left text-[12px] font-proBold text-[#666666]">
              <th
                scope="col"
                className="px-2 py-3 flex justify-center accent-[#F32034]"
              >
                <input type="checkbox" onChange={() => setIsClick(!isClick)} />
              </th>
              <th scope="col">Thời gian lập</th>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Mã sản phẩm</th>
              <th scope="col" className="text-center">
                Trạng thái đơn hàng
              </th>
              <th scope="col" className="text-center">
                Tác vụ
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <BodyTable
                key={index}
                isClick={isClick}
                status={product.status}
                color={product.color}
                colorText={product.colorText}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
