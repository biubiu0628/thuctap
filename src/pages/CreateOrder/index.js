import React, { useState } from "react";
import GoBack from "../../images/Create/GoBack.svg";
import Location from "../../images/Create/Location.svg";
import Location2 from "../../images/Create/Location2.svg";
import Person from "../../images/Create/Person.svg";
import Phone from "../../images/Create/Phone.svg";
import Building from "../../images/Create/Building.svg";
import Down from "../../images/Create/Down.svg";
import Box from "../../images/Create/Box.svg";
import Question from "../../images/Create/Question.svg";
import Up from "../../images/Header/up.svg";
import Camera from "../../images/Create/Camera.svg";
import Image1 from "../../images/Create/image1.svg";
import Image2 from "../../images/Create/image2.svg";
import Image3 from "../../images/Create/image3.svg";
import Money from "../../images/Create/Money.svg";
import Info from "../../images/Create/Info.svg";
import Logo1 from "../../images/Create/logo1.svg";
import Logo2 from "../../images/Create/logo2.svg";
import Logo3 from "../../images/Create/logo3.svg";
import Logo4 from "../../images/Create/logo4.svg";
import Logo5 from "../../images/Create/logo5.svg";
import Logo6 from "../../images/Create/logo6.svg";
import Draft from "../../images/Create/Draft.svg";
import Add from "../../images/Create/Add.svg";
import Add2 from "../../images/Create/Add2.svg";
import Check from "../../modules/CreateOrder/Check";
import Image from "../../modules/CreateOrder/Image";
import Radio from "../../modules/CreateOrder/Radio";
import Service from "../../modules/CreateOrder/Service";
import Transport from "../../modules/CreateOrder/Transport";
import Fee from "../../modules/CreateOrder/Fee";
import Total from "../../modules/CreateOrder/TotalValue";
import Rating from "../../modules/CreateOrder/Rating";
import Policy from "../../modules/CreateOrder/Policy";

const Create = () => {
  const [isCheck1, setIsCheck1] = useState(null);
  const [isCheck2, setIsCheck2] = useState(null);
  const [isCheck3, setIsCheck3] = useState(null);
  const [isRules, setIsRules] = useState(false);

  const handleCheck1 = (index) => {
    setIsCheck1(index);
  };

  const handleCheck2 = (index) => {
    setIsCheck2(index);
  };

  const handleCheck3 = (index) => {
    setIsCheck3(index);
  };

  const handleRules = () => {
    setIsRules(!isRules);
  };

  const [isChoose, setIsChoose] = useState(new Array(7).fill(false));
  const handleChoose = (index) => {
    const newIsChoose = [...isChoose];
    newIsChoose[index] = !newIsChoose[index];
    setIsChoose(newIsChoose);
  };

  const [isRead, setIsRead] = useState(false);

  const TransportsThamKhao = [
    {
      name: "Giao Hàng Tiết Kiệm",
      rate: "97.12%",
      color: "#F32034",
      status: "quá tải",
      logo: Logo2,
      price: "16.500",
      number: "1",
      ratingName: "rating-ghtk",
    },
    {
      name: "Giao Hàng Nhanh",
      rate: "97.12%",
      color: "#F32034",
      status: "quá tải",
      logo: Logo3,
      price: "16.500",
      number: "1",
      ratingName: "rating-ghn",
    },
    {
      name: "VietelPost",
      rate: "97.12%",
      color: "#F32034",
      status: "quá tải",
      logo: Logo4,
      price: "16.500",
      number: "1",
      ratingName: "rating-viettel",
    },
    {
      name: "Ninja",
      rate: "97.12%",
      color: "#F32034",
      status: "quá tải",
      logo: Logo5,
      price: "16.500",
      number: "1",
      ratingName: "rating-ninja",
    },
    {
      name: "Best Express",
      rate: "97.12%",
      color: "#F32034",
      status: "quá tải",
      logo: Logo6,
      price: "16.500",
      number: "1",
      ratingName: "rating-bestExpress",
    },
  ];

  const TransportGoiY = {
    name: "SuperShip",
    rate: "97.12%",
    color: "#27A568",
    status: "tốt",
    logo: Logo1,
    price: "16.500",
    number: "1",
    ratingName: "rating-SuperShip",
  };

  const radios1 = [
    { name: "radio1", text: "Điền thủ công" },
    { name: "radio1", text: "Chọn từ danh sách" },
  ];

  const radios2 = [
    { name: "radio2", text: "Không được xem hàng" },
    { name: "radio2", text: "Được phép thử hàng" },
    { name: "radio2", text: "Được phép xem nhưng không được thử hàng" },
  ];

  const radios3 = [
    { name: "radio3", text: "Người gửi trả phí" },
    { name: "radio3", text: "Người nhận trả phí" },
  ];

  const checks1 = [
    { text: "Giá trị cao" },
    { text: "Dễ vỡ" },
    { text: "Chất lỏng" },
    { text: "Hàng lạnh" },
  ];

  const checks2 = [
    { text: "Nguyên khối" },
    { text: "Từ tính, Pin" },
    { text: "Cồng kềnh" },
  ];

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
      {/* bang thong tin */}
      <div className="grid grid-cols-[69%_30%] gap-4">
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
            <div className="flex pt-10 pb-6 gap-3">
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
                  placeholder="Họ và tên người nhận *"
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
                      placeholder="Số điện thoại người nhận *"
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
                  placeholder="Địa chỉ chi tiết *"
                  className="focus:outline-none w-full text-[16px] font-pro"
                  required
                />
              </label>
              <div
                className="absolute top-[-15px] px-2 
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
            {/* khuvuc */}
            <label
              htmlFor="area"
              className="w-full h-[40px] flex items-center justify-between 
                gap-2 rounded-lg px-3 border-[1px] border-[#E5E5E5]"
              onClick={() => document.getElementById("area-modal").showModal()}
            >
              <div className="flex gap-2 w-full">
                <img src={Building} alt="" />
                <input
                  type="text"
                  id="area"
                  className="w-full focus:outline-none font-pro text-[16px]"
                  placeholder="Chọn khu vực *"
                />
              </div>
              <img src={Down} alt="" />
            </label>
            <dialog id="area-modal" className="modal"></dialog>
          </div>
          <hr className="py-2" />
          {/* chi tiet hang gui */}
          <div className="p-8">
            <div className="flex gap-3">
              <img src={Box} alt="" />
              <p className="flex">
                <span className="text-[22px] font-proBold">
                  Chi tiết hàng gửi
                </span>
                <span className="text-[22px] font-pro text-[#F32034]">*</span>
              </p>
            </div>
            {/* nut */}
            <div className="flex gap-20 p-4">
              {radios1.map((radio1, index) => (
                <Radio
                  key={index}
                  name={radio1.name}
                  text={radio1.text}
                  isCheck={isCheck1}
                  handleCheck={handleCheck1}
                  index={index}
                />
              ))}
            </div>
            {/* Bang san pham */}
            <div
              className="grid grid-rows-2 w-full h-[110px] rounded-lg 
              border-[1px] border-[#E5E5E5] items-center my-8"
            >
              <div className="grid grid-cols-2 border-b-[1px] border-[#E5E5E5]">
                {/* ten san pham */}
                <p className="font-proMedium text-[16px] p-4">Tên sản phẩm</p>
                {/* khoi luong */}
                <div className="p-4 border-l-[1px]">
                  <p className="flex justify-between items-center">
                    <p className="text-[14px] font-pro">
                      <span className="text-[#666666]">KL </span>
                      <span className="text-[#F32034]">*</span>
                    </p>
                    <span className="font-proMedium text-[16px]">50g</span>
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2">
                {/* gia tri */}
                <div className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <p className="text-[14px] font-pro">
                        <span className="text-[#666666]">Giá trị </span>
                        <span className="text-[#F32034]">*</span>
                      </p>
                      <button>
                        <img src={Question} alt="" />
                      </button>
                    </div>
                    <p>
                      <span className="font-proMedium text-[16px]">
                        500.000{" "}
                      </span>
                      <span className="font-pro text-[14px] underline">đ</span>
                    </p>
                  </div>
                </div>
                {/* thu ho */}
                <div className="p-4 border-l-[1px]">
                  <p className="flex justify-between items-center">
                    <p className="text-[14px] font-pro">
                      <span className="text-[#666666]">Thu hộ </span>
                      <span className="text-[#F32034]">*</span>
                    </p>
                    <p>
                      <span className="font-proMedium text-[16px]">
                        500.000{" "}
                      </span>
                      <span className="font-pro text-[14px] underline">đ</span>
                    </p>
                  </p>
                </div>
              </div>
            </div>
            {/* Ghi chu */}
            <div className="relative pb-6">
              <label
                for="address"
                className="flex items-center gap-2 border-[1px] 
                border-[#E5E5E5] h-[52px] rounded-lg px-3"
              >
                <input
                  type="text"
                  id="address"
                  placeholder="Nhập ghi chú..."
                  className="focus:outline-none w-full text-[16px] font-proMedium"
                  required
                />
              </label>
              <div
                className="absolute top-[-10px] px-2 h-[16px] 
                bg-white left-4 text-center"
              >
                <p className="text-[12px] font-pro">Ghi chú</p>
              </div>
            </div>
            {/* thong tin them */}
            <div className="flex items-center justify-end gap-4 pr-4">
              <p className="font-proBold text-[14px]">Thông tin thêm</p>
              <button
                className="size-[32px] flex items-center 
                justify-center rounded-full shadow"
              >
                <img src={Up} alt="" />
              </button>
            </div>
            {/* check box */}
            <div className="grid grid-cols-2 p-8">
              <div className="flex flex-col gap-2">
                {checks1.map((check1, index) => (
                  <Check
                    key={index}
                    index={index}
                    text={check1.text}
                    handleChoose={handleChoose}
                    isChoose={isChoose[index]}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-2">
                {checks2.map((check2, index) => (
                  <Check
                    key={index + checks1.length}
                    index={index + checks1.length}
                    text={check2.text}
                    handleChoose={handleChoose}
                    isChoose={isChoose[index + checks1.length]}
                  />
                ))}
              </div>
            </div>
            {/* anh hang hoa */}
            <div>
              <div className="flex justify-between px-4">
                <p className="font-proBold text-[16px]">Ảnh hàng hóa</p>
                <button className="font-pro text-[14px] text-[#F32034]">
                  Xóa tất cả
                </button>
              </div>
              <div className="flex gap-2 p-4">
                <div
                  className="w-[100px] h-[86px] border-[2px] border-[#D6D6D6] 
                  border-dashed rounded flex items-center justify-center"
                >
                  <button
                    className="size-[40px] rounded-full shadow 
                    flex justify-center items-center"
                  >
                    <img src={Camera} alt="" />
                  </button>
                </div>
                <Image image={Image1} />
                <Image image={Image2} />
                <Image image={Image3} />
              </div>
            </div>
            {/* ma don */}
            <div className="flex items-center justify-between p-4">
              <input
                placeholder="Mã đơn của shop..."
                className="h-[53px] w-[800px] bg-[#F7F7F7] focus:outline-none 
                placeholder-[#666666] font-proMedium text-[14px] rounded px-4"
              />
              <div className="flex items-center gap-1">
                <input type="checkbox" className="accent-[#F32034]" />
                <p className="text-[#666666] text-[14px] font-pro">
                  Đổi / Lấy hàng về
                </p>
              </div>
            </div>
            {/* input radio */}
            <div className="flex flex-col gap-1 px-4">
              {radios2.map((radio2, index) => (
                <Radio
                  key={index}
                  name={radio2.name}
                  isCheck={isCheck2}
                  handleCheck={handleCheck2}
                  text={radio2.text}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border-[1px] border-[#E5E5E5]">
          <div className="flex items-center gap-2 py-[26px] border-b-[1px] border-[#F3CED7] px-8">
            <img src={Money} alt="" />
            <p className="text-[22px] font-proBold">Cước phí</p>
          </div>
          <div className="px-10">
            {/* phuong an tra phi */}
            <p className="text-[16px] font-proBold py-3">Phương án trả phí</p>
            <div className="flex items-center gap-10">
              {radios3.map((radio3, index) => (
                <Radio
                  key={index}
                  name={radio3.name}
                  text={radio3.text}
                  isCheck={isCheck3}
                  handleCheck={handleCheck3}
                  index={index}
                />
              ))}
              <img src={Info} alt="" />
            </div>
            {/* phuong thuc van chuyen */}
            <div className="flex justify-between py-5">
              <p className="font-proBold text-[16px]">Phương thức vận chuyển</p>
              <button className="font-pro text-[14px] text-[#F32034]">
                Cấu hình
              </button>
            </div>
            <div>
              {/* goiy */}
              <p className="text-[14px] font-proMedium">Gợi ý</p>
              <Transport
                name={TransportGoiY.name}
                rate={TransportGoiY.rate}
                color={TransportGoiY.color}
                status={TransportGoiY.status}
                logo={TransportGoiY.logo}
                price={TransportGoiY.price}
                number={TransportGoiY.number}
                isChoose={isChoose === -1}
                handleChoose={() => handleChoose(-1)}
              >
                <Rating name={TransportGoiY.ratingName} />
              </Transport>
              {/* thamkhao */}
              <p className="text-[14px] font-proMedium">Tham khảo</p>
              {TransportsThamKhao.map((transport, index) => (
                <Transport
                  key={index}
                  name={transport.name}
                  rate={transport.rate}
                  color={transport.color}
                  status={transport.status}
                  logo={transport.logo}
                  price={transport.price}
                  number={transport.number}
                  isChoose={isChoose === index}
                  handleChoose={() => handleChoose(index)}
                >
                  <Rating name={transport.ratingName} />
                </Transport>
              ))}
              {/* dich vu them */}
              <div>
                <p className="text-[16px] font-proBold pt-6 pb-2">
                  Dịch vụ thêm
                </p>
                <Service name="Bảo hiểm hàng hoá" />
                <Service name="Phí hàng đổi" />
              </div>
            </div>
          </div>
          {/* phi */}
          <div className="px-10 py-4 border-y-[1px] mt-8">
            <Fee name="Phí giao hàng" price="40.000" />
            <Fee name="Phí bảo hiểm" price="0" />
            <Fee name="Phí hàng đổi" price="0" />
            <Fee name="Giá trị hàng hóa" price="500.000" />
          </div>
          <div className="px-10 py-4">
            <Total name="Tiền thu người nhận hàng" price="500.000" />
            <Total name="Tổng phí vận chuyển" price="40.000" />
            <Total name="Tổng giá trị " price="540.000" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end ">
        {/* dieu khoan */}
        <div className="w-[459.25px] flex items-center gap-1 py-4">
          <input
            type="checkbox"
            className="accent-[#F32034] size-[16px]"
            onChange={handleRules}
          />
          <p className="text-[14px]">
            <span className="font-pro">Tôi đã đọc và đồng ý với </span>
            <span
              className="text-[#CB2D38] font-proMedium cursor-pointer"
              onClick={() => setIsRead(!isRead)}
            >
              Điều khoản & quy định
            </span>
          </p>
          <Policy isRead={isRead} />
        </div>
        <div className="w-[459.25px] grid grid-cols-2 h-[53px] gap-2 mb-8">
          <button
            className="uppercase gap-2 font-proBold text-[14px] bg-white 
            rounded-lg flex items-center justify-center shadow"
          >
            <img src={Draft} alt="" />
            Lưu nháp
          </button>
          <button
            className={`uppercase gap-2 font-proBold text-[14px]  
            rounded-lg flex items-center justify-center ${
              isRules
                ? "bg-white shadow"
                : "text-[#B2B2B2] border-[1px] border-[#E5E5E5] disabled cursor-auto"
            }`}
          >
            <img src={isRules ? Add2 : Add} alt="" />
            Tạo đơn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;
