import React, { useState } from "react";
import Tag from "../../modules/Stat/Tag";
import Table from "../../modules/Stat/Table";
import Postage from "../../modules/Stat/Postage";
import DonutMoney from "../../modules/Stat/DonutMoney";
import DonutPercent from "../../modules/Stat/DonutPercent";
import DonutStatus from "../../modules/Stat/DonutStatus";
import Menu from "../../modules/Stat/Menu";
import Calendar from "../../modules/Stat/Calendar";

const Stat = () => {
  const menus = [
    { name: "Đang giao", color: "#005FCC" },
    { name: "Chờ lấy ", color: "#E09D00" },
    { name: "Đã lấy ", color: "#E09D00" },
    { name: "Giao thành công ", color: "#188B54" },
    { name: "Tiền về ", color: "#188B54" },
    { name: "Hoãn giao ", color: "#CB2D38" },
    { name: "Không giao được ", color: "#CB2D38" },
    { name: "Yêu cầu chưa xử lý ", color: "#CB2D38" },
    { name: "Tồn kho ", color: "#1A1A1A" },
  ];

  const tags = [
    { name: "Tỷ lệ giao" },
    { name: "Tiền hàng" },
    { name: "Trạng thái đơn" },
    { name: "Số lượng" },
  ];

  const [isActived, setIsActived] = useState(1);

  const handleActive = (index) => {
    setIsActived(index);
  };

  return (
    <div className="h-screen pt-20">
      <div className="flex gap-2">
        {tags.map((tag, index) => (
          <Tag
            key={index}
            name={tag.name}
            isActived={isActived === index}
            handleActive={() => handleActive(index)}
          />
        ))}
      </div>
      <div className="flex pt-4 gap-4">
        {/* table */}
        <div
          className="w-[65%] h-full bg-white rounded-2xl border-[1px] 
          border-[#E5E5E5] overflow-hidden dropdown dropdown-bottom"
        >
          {/* calendar */}
          <div
            className="relative px-8 py-6 bg-[#FBEFF2] 
            border-b-[1px] border-[#E5E5E5]"
          >
            <div className="flex justify-between items-center">
              <p className="font-proBold text-[18px]">Tháng 10, 10-10-2023</p>
              <button
                className="font-proBold text-[14px] 
                text-[#F32034] uppercase"
              >
                Thay đổi
              </button>
            </div>
            <p className="font-pro text-[12px]">Live (cập nhật lúc 17:05:02)</p>
            <Calendar />
          </div>
          {/* chart */}
          {isActived !== null && (
            <Table>
              {tags[isActived].name === "Tỷ lệ giao" ? (
                <div>
                  <DonutPercent />
                  <Postage name="Số đơn trả hàng" number="23" />
                  <Postage name="Số đơn giao hàng thành công" number="35" />
                </div>
              ) : tags[isActived].name === "Tiền hàng" ? (
                <div>
                  <DonutMoney />
                  <Postage
                    name="Cước phí người gửi trả"
                    number="200.000"
                    text="đ"
                  />
                  <Postage
                    name="Cước phí người nhận trả"
                    number="22.000"
                    text="đ"
                  />
                </div>
              ) : tags[isActived].name === "Trạng thái đơn" ? (
                <div>
                  <DonutStatus />
                </div>
              ) : (
                <div></div>
              )}
            </Table>
          )}
        </div>
        {/* list */}
        <div
          className="w-[35%] bg-white rounded-2xl 
        border-[1px] border-[#E5E5E5]"
        >
          {menus.map((menu, index) => (
            <Menu
              key={index}
              name={menu.name}
              color={menu.color}
              isLast={index === menus.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stat;
