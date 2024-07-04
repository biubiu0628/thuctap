import React, { useState } from "react";
import Tag from "../../modules/Order/Tag";
import Down from "../../images/Order/Down.svg";
import Add from "../../images/Nav/add.svg";
import Info from "../../images/Request/Info.svg";
import BodyTable from "../../modules/Request/BodyTable";

const Support = ({ name, info }) => (
  <div className="flex items-center gap-2">
    <div className="size-[4px] rounded-full bg-black"></div>
    <p className="text-[14px]">
      <span className="font-proBold">{name}</span>
      <span className="font-pro">{info}</span>
    </p>
  </div>
);

const Request = () => {
  const [isClick, setIsClick] = useState(false);

  const requests = [
    {
      text: "Khách hàng hẹn lại ngày lấy vì không có mặt tại điểm lấy",
      status: "Chờ trả lời",
      color: "#FFC91F",
      colorText: "white",
    },
    {
      text: "Khách đang cần gấp",
      status: "Chờ trả lời",
      color: "#FFC91F",
      colorText: "white",
    },
    {
      text: "Khách đang cần gấp",
      status: "Đã trả lời",
      color: "#27A568",
      colorText: "white",
    },
    {
      text: "Khách hàng hẹn lại ngày lấy vì không có mặt tại điểm lấy",
      status: "Chờ trả lời",
      color: "#FFC91F",
      colorText: "white",
    },
    {
      text: "Khách đang cần gấp",
      status: "Chờ trả lời",
      color: "#FFC91F",
      colorText: "white",
    },
    {
      text: "Khách đang cần gấp",
      status: "Đã đóng",
      color: "#F2F2F2",
      colorText: "#999999",
    },
    {
      text: "Khách đang cần gấp",
      status: "Chờ trả lời",
      color: "#FFC91F",
      colorText: "white",
    },
    {
      text: "Khách hàng hẹn lại ngày lấy vì không có mặt tại điểm lấy",
      status: "Chờ trả lời",
      color: "#FFC91F",
      colorText: "white",
    },
  ];

  const supports = [
    {
      name: "CHUYÊN VIÊN HỖ TRỢ (7h30 đến 17h30):",
      info: "Trịnh Thị Hà (0906684227)",
    },
    {
      name: "SMAN (7h30 đến 17h30):",
      info: "Xem SĐT sMan tại đây ",
    },
    {
      name: "HỖ TRỢ QUA MAIL:",
      info: "support@supership.vn",
    },
    {
      name: "HỢP TÁC:",
      info: "contact@supership.vn",
    },
    {
      name: "BỘ PHẬN KINH DOANH:",
      info: "0938.383.227 - 1900.636.152 (Phím 1) (7h30 đến 17h30)",
    },
    {
      name: "PHÀN NÀN CHẤT LƯỢNG DỊCH VỤ:",
      info: "1900.636.152 (7h30 đến 17h30)",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center py-6 mt-10">
        <div className="flex gap-2">
          <Tag
            name="Tất cả"
            color="#F32034"
            colorText="white"
            children={<img src={Down} alt="" />}
          />
          <Tag name="Đang bán" quantity="(0)" colorText="#666666" />
          <Tag name="Ngưng bán" quantity="(0)" colorText="#666666" />
          <Tag name="Sắp bán" quantity="(0)" colorText="#666666" />
        </div>
        <div className="flex items-center gap-4">
          <button
            className="flex items-center justify-center gap-1 py-2 w-[127px] rounded-md border-[#EF586B] 
            border-[1px] text-white bg-gradient-to-b from-[#EF586B] to-[#D9112A]"
          >
            <img src={Add} alt="" />
            <p className="text-[12px] font-proBold uppercase">Tạo mới</p>
          </button>
          <div
            className="dropdown dropdown-hover dropdown-bottom dropdown-end size-[40px] 
            rounded-full bg-white shadow flex items-center justify-center"
          >
            <img src={Info} alt="" />
            <div
              className="dropdown-content menu bg-white 
              w-[600px] rounded-2xl border-[1px] mt-2 px-0"
            >
              <p className="font-proBold text-[28px] py-8 border-b-[1px] px-6">
                Các kênh hỗ trợ của SuperShip
              </p>
              <div className="px-6 py-4 flex flex-col gap-1">
                {supports.map((support, index) => (
                  <Support
                    key={index}
                    name={support.name}
                    info={support.info}
                  />
                ))}
              </div>
            </div>
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
                <input type="checkbox" onChange={() => setIsClick(!isClick)} />
              </th>
              <th scope="col" className="w-[180px]">
                Ngày gửi yêu cầu
              </th>
              <th scope="col" className="text-center">
                Tiêu đề
              </th>
              <th scope="col" className="text-center">
                Mã yêu cầu
              </th>
              <th scope="col" className="text-center w-[350px]">
                Nội dung
              </th>
              <th scope="col" className="text-center">
                Trạng thái
              </th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, index) => (
              <BodyTable
                key={index}
                isClick={isClick}
                text={request.text}
                status={request.status}
                color={request.color}
                colorText={request.colorText}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Request;
