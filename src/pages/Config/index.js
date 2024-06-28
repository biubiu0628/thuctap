import React, { useState } from "react";
import Box from "../../images/Create/Box.svg";
import Question from "../../images/Create/Question.svg";

const Radio = ({ props, name, text, text2, handleCheck, isCheck, index }) => (
  <div className={`flex gap-1 ${props}`}>
    <input
      type="radio"
      name={name}
      onChange={() => handleCheck(index)}
      checked={isCheck === index}
      className="accent-[#F32034]"
    />
    <p className="flex flex-col text-[14px] font-proMedium">
      <span className={`${isCheck === index ? "" : "text-[#666666]"}`}>
        {text}
      </span>
      <span className="text-[#999999]">{text2}</span>
    </p>
  </div>
);

const Check = ({ text, isChoose, handleChoose, index }) => (
  <div className="flex gap-2">
    <input
      type="checkbox"
      checked={isChoose}
      onClick={() => handleChoose(index)}
      className="accent-[#F32034]"
    />
    <p
      className={`text-[14px] font-proMedium ${
        isChoose ? "" : "text-[#666666]"
      }`}
    >
      {text}
    </p>
  </div>
);

const Config = () => {
  const [isCheck1, setIsCheck1] = useState(null);
  const [isCheck2, setIsCheck2] = useState(null);
  const [isCheck3, setIsCheck3] = useState(null);
  const [isChoose, setIsChoose] = useState(new Array(7).fill(false));

  const handleCheck1 = (index) => {
    setIsCheck1(index);
  };

  const handleCheck2 = (index) => {
    setIsCheck2(index);
  };

  const handleCheck3 = (index) => {
    setIsCheck3(index);
  };

  const handleChoose = (index) => {
    const newIsChoose = [...isChoose];
    newIsChoose[index] = !newIsChoose[index];
    setIsChoose(newIsChoose);
  };

  const radios1 = [
    { name: "pay", text: "Người gửi trả phí" },
    { name: "pay", text: "Người nhận trả phí" },
  ];

  const radios2 = [
    { name: "check", text: "Không được xem hàng" },
    { name: "check", text: "Được phép thử hàng" },
    { name: "check", text: "Được phép xem nhưng không được thử hàng" },
  ];

  const radios3 = [
    {
      props: "border-t-[1px] py-4 px-8",
      name: "config",
      text: "Nhà vận chuyển bất kỳ theo phân tích hệ thống (hiệu quả nhất)",
    },
    {
      props: "border-t-[1px] py-4 px-8",
      name: "config",
      text: "Một nhà vận chuyển mặc định theo cá nhân",
    },
    {
      props: "border-t-[1px] py-4 px-8",
      name: "config",
      text: "Nhiều nhà vận chuyển theo phân tích",
      text2: "(SuperShip, Giao hàng tiết kiệm, ViettelPost,...",
    },
    {
      props: "border-t-[1px] py-4 px-8",
      name: "config",
      text: "Nhà vận chuyển có chi phí giao hành rẻ nhất",
    },
    {
      props: "border-t-[1px] py-4 px-8",
      name: "config",
      text: "Nhà vận chuyển có tốc độ giao hàng nhanh nhất",
    },
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
    <div className="flex pt-20 gap-4">
      <div className="w-[70%] bg-white rounded-2xl py-10">
        <div className="flex gap-2 px-8">
          <img src={Box} alt="" />
          <p className="text-[22px]">
            <span className="font-proBold">Chi tiết hàng gửi</span>
            <span className="font-pro text-[#F32034]">*</span>
          </p>
        </div>
        {/* radio1 */}
        <div className="flex gap-36 pt-4 px-8">
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
        {/* bang san pham */}
        <div className="px-8 py-4">
          <div
            className="grid grid-rows-2 w-full h-[110px] rounded-lg 
        border-[1px] border-[#E5E5E5] items-center"
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
                    <span className="font-proMedium text-[16px]">500.000 </span>
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
                    <span className="font-proMedium text-[16px]">500.000 </span>
                    <span className="font-pro text-[14px] underline">đ</span>
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* CheckBox */}
        <div className="grid grid-cols-2 py-4 border-y-[1px] px-8">
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
        {/* ghi chu */}
        <div className="px-8 pt-4 flex flex-col gap-4">
          <label
            htmlFor="ghichu"
            className="block bg-[#F7F7F7] h-[53px] p-4 rounded-md"
          >
            <input
              type="text"
              id="ghichu"
              placeholder="Ghi chú"
              className="focus:outline-none bg-[#F7F7F7] w-full placeholder:text-[14px] 
              placeholder-[#666666] placeholder:font-proMedium text-[14px] font-proMedium"
            />
          </label>
          <div className="flex flex-col gap-2">
            {radios2.map((radio2, index) => (
              <Radio
                key={index}
                text={radio2.text}
                name={radio2.name}
                isCheck={isCheck2}
                handleCheck={handleCheck2}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="h-full">
        <div className="bg-white rounded-2xl">
          <p className="font-proBold text-[22px] py-4 px-8">
            Cấu hình chọn nhà vận chuyển
          </p>
          <div>
            {radios3.map((radio3, index) => (
              <Radio
                key={index}
                props={radio3.props}
                name={radio3.name}
                text={radio3.text}
                text2={radio3.text2}
                isCheck={isCheck3}
                handleCheck={handleCheck3}
                index={index}
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 h-[53px] gap-2 pt-4">
          <button
            className="btn uppercase font-proBold 
            text-[14px] bg-white rounded-md"
          >
            Hủy
          </button>
          <button
            className="btn uppercase text-white font-proBold text-[14px] 
            bg-gradient-to-b from-[#EF586B] to-[#D9112A] rounded-md"
          >
            Cập nhật
          </button>
        </div>
      </div>
    </div>
  );
};

export default Config;
