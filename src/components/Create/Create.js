import React from "react";
import GoBack from "../../images/Create/GoBack.svg";
import Location from "../../images/Create/Location.svg";
import Location2 from "../../images/Create/Location2.svg";
import Person from "../../images/Create/Person.svg";
import Phone from "../../images/Create/Phone.svg";
import Building from "../../images/Create/Building.svg";
import Down from "../../images/Create/Down.svg";
import Box from "../../images/Create/Box.svg";

const Create = () => {
  return (
    <div>
      <div className="flex items-center justify-between py-10">
        <div className="flex items-center gap-4">
          <button
            className="size-[40px] rounded-full bg-white 
            flex items-center justify-center shadow"
          >
            <img src={GoBack} alt="" />
          </button>
          <p className="flex items-center gap-4">
            <span className="text-[24px] font-pro">Chi tiết đơn hàng</span>
            <span className="text-[32px] font-proBold">A076798091237889</span>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div
            className="bg-[#27A568] text-white rounded-full 
            text-[10px] font-monoBold py-1 px-2"
          >
            ĐÃ ĐỐI SOÁT
          </div>
          <p className="font-pro">Ngày tạo đơn: 18/07/2023 - 09:36</p>
        </div>
      </div>
      <div className="grid grid-cols-[69%_30%]">
        <div className="bg-white rounded-2xl border-[1px] border-[#E5E5E5]">
          <div
            className="flex flex-col px-8 py-5 bg-[#FBEFF2] 
            border-b-[1px] border-[#F3CED7] rounded-t-2xl"
          >
            <div className="flex items-center justify-between">
              <p className="text-[18px] font-proBold">Địa chỉ lấy hàng</p>
              <div className="uppercase text-[14px] font-proBold text-[#F32034] cursor-pointer">
                thay đổi
              </div>
            </div>
            <p className="text-[12px] font-pro">
              32 Thân Nhân Trung, Tân Bình , Phường Bến Thành, Quận 1, TP. Hồ
              Chí Minh
            </p>
          </div>
          {/* thong tin nguoi nhan */}
          <div className="px-8 pb-8">
            <div className="flex py-6 gap-3">
              <img src={Location} alt="" />
              <p className="flex">
                <span className="text-[22px] font-proBold">
                  Thông tin người nhận
                </span>
                <span className="text-[22px] font-pro text-[#F32034]">*</span>
              </p>
            </div>
            {/* hoten va sdt */}
            <div className="flex justify-between pb-4">
              <label
                for="user"
                className="flex items-center gap-2 w-[400px] h-[40px] 
                border-[1px] border-[#E5E5E5] rounded-lg px-3"
              >
                <img src={Person} alt="" />
                <input
                  type="text"
                  id="user"
                  placeholder="Nhập tên khách hàng..."
                  className="focus:outline-none font-pro w-full"
                  required
                />
              </label>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <label
                    for="telephone"
                    className="flex items-center gap-2 w-[250px] h-[40px] 
                    border-[1px] border-[#E5E5E5] rounded-lg px-3"
                  >
                    <img src={Phone} alt="" />
                    <input
                      type="tel"
                      id="telephone"
                      placeholder="Nhập số điện thoại..."
                      className="focus:outline-none font-pro w-full"
                      required
                    />
                  </label>
                  <div className="font-pro text-[#005FCC] text-[12px]">
                    +SĐT phụ
                  </div>
                </div>
                <p className="text-[12px]">
                  <span className="font-pro">Tỷ lệ giao thành công: </span>
                  <span className="font-proMedium text-[#188B54]">100%</span>
                </p>
              </div>
            </div>
            {/* diachi */}
            <div className="relative pb-6">
              <label
                for="address"
                className="flex items-center gap-2 border-[1px] 
                border-[#005FCC] h-[40px] rounded-lg px-3"
              >
                <img src={Location2} alt="" />
                <input
                  type="text"
                  id="address"
                  placeholder="Nhập địa chỉ người nhận..."
                  className="focus:outline-none w-full text-[16px] font-pro"
                  required
                />
              </label>
              <div
                className="absolute top-[-15px] w-[88px] 
                h-[16px] bg-white left-4 text-center"
              >
                <p>
                  <span className="text-[#005FCC] text-[12px] font-pro">
                    Địa chỉ chi tiết
                  </span>
                  <span className="text-[#F32034] text-[12px] font-pro">*</span>
                </p>
              </div>
            </div>
            {/* dropdown */}
            <div
              className="h-[40px] bg-[#F7F7F7] rounded-lg flex 
              items-center justify-between px-3"
            >
              <div className="flex gap-2">
                <img src={Building} alt="" />
                <p className="font-pro">Quận / Huyện / Thị Xã / Thành Phố</p>
              </div>
              <button>
                <img src={Down} alt="" />
              </button>
            </div>
          </div>
          <hr className="py-5" />
          {/* chi tiet hang gui */}
          <div className="px-8">
            <div className="flex gap-3">
              <img src={Box} alt="" />
              <p className="flex">
                <span className="text-[22px] font-proBold">
                  Chi tiết hàng gửi
                </span>
                <span className="text-[22px] font-pro text-[#F32034]">*</span>
              </p>
            </div>
            <div className="flex gap-20">
              <div className="flex gap-2">
                <input type="radio" className="bg-white text-red-600" />
                <p>Điền thủ công</p>
              </div>
              <div className="flex gap-2">
                <input type="radio" />
                <p>Điền thủ công</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
