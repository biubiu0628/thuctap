import React, { useState } from "react";
import GoBack from "../../images/Create/GoBack.svg";
import Question from "../../images/Create/Question.svg";
import Draft from "../../images/Create/Draft.svg";
import Add from "../../images/Nav/add.svg";
import Input from "../../modules/CreateProduct/Input";
import Check from "../../modules/CreateOrder/Check";
import FileImage from "../../modules/CreateOrder/FileImage";

const Radio = ({ text, handleChecked, isCheck, value }) => (
  <div className="flex items-center gap-1">
    <input
      type="radio"
      name="status"
      value={value}
      checked={isCheck === value}
      onChange={handleChecked}
    />
    <p
      className={`text-[14px] font-proMedium ${
        isCheck === value ? "text-black" : "text-gray-400"
      }`}
    >
      {text}
    </p>
  </div>
);

const CreateProduct = () => {
  const [isCheck, setIsCheck] = useState("");
  const [isInputDes, setIsInputDes] = useState(false);
  const [isInputCode, setIsInputCode] = useState(false);
  const handleChecked = (e) => setIsCheck(e.target.value);

  const [isChoose, setIsChoose] = useState(new Array(7).fill(false));
  const handleChoose = (index) => {
    const newIsChoose = [...isChoose];
    newIsChoose[index] = !newIsChoose[index];
    setIsChoose(newIsChoose);
  };

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
    <div className="flex flex-col ">
      <div className="flex items-center gap-4 py-10">
        <button
          className="size-[40px] rounded-full bg-white 
            flex items-center justify-center shadow"
        >
          <img src={GoBack} alt="" />
        </button>
        <p
          className="flex items-center gap-4 
            text-[32px] font-proBold"
        >
          Tạo sản phẩm
        </p>
      </div>
      <div className="flex gap-4">
        <div className="bg-white w-[900px] py-8 rounded-2xl border-[1px]">
          {/* bang san pham */}
          <div className="px-8">
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
          </div>
          <div className="py-4 px-8">
            <Input
              text="Mô tả sản phẩm"
              isInput={isInputDes}
              setIsInput={setIsInputDes}
            />
          </div>
          <div className="py-4 px-8 border-y-[1px]">
            <div className="flex w-full justify-between">
              <p className="font-proMedium text-[16px]">Trạng thái</p>
              <Radio
                text="Đang bán"
                value="dang"
                handleChecked={handleChecked}
                isCheck={isCheck}
              />
              <Radio
                text="Ngưng bán"
                value="ngung"
                handleChecked={handleChecked}
                isCheck={isCheck}
              />
              <Radio
                text="Sắp bán"
                value="sap"
                handleChecked={handleChecked}
                isCheck={isCheck}
              />
            </div>
          </div>
          <div className="py-4 px-8 flex flex-col gap-4 border-b-[1px]">
            <p className="font-proMedium text-[16px]">Thông tin khác</p>
            <Input
              text="Mã sản phẩm"
              isInput={isInputCode}
              setIsInput={setIsInputCode}
            />
          </div>
          <div className="grid grid-cols-2 p-8 pb-0">
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
        </div>
        <div className="flex-grow w-[636px]">
          <div className="bg-white rounded-2xl border-[1px] p-8 w-full">
            <div className="flex justify-between">
              <p className="font-proBold text-[16px]">Ảnh hàng hóa</p>
              <p className="font-pro text-[14px] text-[#F32034]">Xóa tất cả</p>
            </div>
            <FileImage />
          </div>
          <div className="grid grid-cols-2 gap-4 pt-6">
            <button
              className="flex items-center justify-center gap-2 
              h-[50px] bg-white font-proBold text-[14px] rounded-md"
            >
              <img src={Draft} alt="" />
              <p>Lưu nháp</p>
            </button>
            <button
              className="flex items-center justify-center gap-2 h-[50px] bg-gradient-to-b 
              from-[#EF586B] to-[#D9112A] text-white font-proBold text-[14px] rounded-md"
            >
              <img src={Add} alt="" />
              <p>Tạo mới</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
