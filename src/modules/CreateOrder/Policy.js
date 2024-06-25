import React from "react";
import SideBar from "../../components/SideBar";
import Right from "../../images/Home/right.svg";

const Pol = ({ name, isLast }) => (
  <div
    className={`p-4 ${
      !isLast && "border-b-[1px]"
    } flex justify-between items-center`}
  >
    <p className="font-pro text-[14px]">{name}</p>
    <button>
      <img src={Right} alt="" />
    </button>
  </div>
);

const Policy = ({ isRead }) => {
  const pols = [
    { name: "Chính sách bồi thường" },
    { name: "Quy định về khiếu nại" },
    { name: "Chính sách hỗ trợ" },
    { name: "Điều khoản sử dụng" },
    { name: "Quy trình gửi hàng" },
  ];

  return (
    <SideBar name="Chính sách" isRead={isRead}>
      <div className="px-6">
        <p className="text-[14px] py-4 mt-20">
          <span className="font-proBold text-[#F32034]">Lưu ý: </span>
          <span className="font-proMedium">
            Giá Trị Hàng Hóa bạn kê khai tại mục này chính là Giá Trị Căn Cứ để
            xét xử lý Bồi Hoàn.
          </span>
        </p>
        <div>
          {pols.map((pol, index) => (
            <Pol
              key={index}
              name={pol.name}
              isLast={index === pols.length - 1}
            />
          ))}
        </div>
        <button
          className="w-full mt-10 btn uppercase text-white 
        bg-gradient-to-t from-[#EF586B] to-[#D9112A]"
        >
          Đã hiểu
        </button>
      </div>
    </SideBar>
  );
};

export default Policy;
