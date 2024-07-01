import React, { useState } from "react";
import Search from "../../images/Header/search.svg";
import Building from "../../images/Create/Building.svg";
import Down from "../../images/Create/Down.svg";
import Province from "./API/Province";
import District from "./API/District";

const Modal = ({ isArea, setIsArea }) => {
  const [province, setProvince] = useState({
    code: "",
    name: "",
  });

  const [district, setDistrict] = useState({
    code: "",
    name: "",
  });

  const [step, setStep] = useState(1); // 1 tinh, 2 huyen, 3 xa

  const handleProvince = (selectedProvince) => {
    setProvince({ name: selectedProvince });
    setIsArea(selectedProvince.trim() !== "");
    setDistrict({
      code: "",
      name: "",
    });
  };

  const handleDistrict = (selectedDistrict) => {
    setDistrict({ name: selectedDistrict });
  };

  return (
    <div className="relative">
      <label
        htmlFor="area"
        className={`w-full h-[40px] flex items-center 
        justify-between gap-2 rounded-lg px-3 border-[1px]
        ${isArea ? "border-[#005FCC]" : ""}`}
        onClick={() => document.getElementById("area-modal").showModal()}
      >
        <div className="flex gap-2 w-full">
          <img src={Building} alt="" />
          <input
            type="text"
            id="area"
            className="w-full focus:outline-none font-pro text-[16px]"
            placeholder="Chọn khu vực *"
            value={province.name}
          />
        </div>
        <img src={Down} alt="" />
      </label>
      <div
        className={`absolute top-[-15px] px-2 h-[16px] bg-white left-4 text-center ${
          isArea ? "block" : "hidden"
        }`}
      >
        <p>
          <span className="text-[#005FCC] text-[12px] font-pro">Khu vực </span>
          <span className="text-[#F32034] text-[12px] font-pro">*</span>
        </p>
      </div>
      <dialog id="area-modal" className="modal">
        <div className="modal-box pt-0 flex flex-col">
          <div className="h-full bg-white pt-6 max-w-full">
            <div className="flex items-center pb-3">
              <p
                className="font-proBold text-[20px] 
                flex-grow text-center pl-6"
              >
                Chọn Khu Vực
              </p>
              <form method="dialog">
                <button className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="gray"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </form>
            </div>
            <div className="py-3 border-y-[1px] my-2">
              <label
                htmlFor="area-search"
                className="w-full bg-[#FBEFF2] flex 
                items-center px-4 py-2 rounded-full gap-1"
              >
                <img src={Search} alt="" />
                <input
                  id="area-search"
                  type="text"
                  placeholder="Tìm kiếm"
                  className="focus:outline-none 
                bg-[#FBEFF2] text-[16px] font-proBold"
                />
              </label>
            </div>
          </div>
          <div className="overflow-auto">
            {step === 1 && (
              <Province
                setProvince={handleProvince}
                onSelect={() => setStep(2)}
              />
            )}

            {step === 2 && <div>Day la khu vuc chon huyen</div>}
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
