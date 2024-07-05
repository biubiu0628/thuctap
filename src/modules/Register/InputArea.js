import React, { useState } from "react";
import Build from "../../images/Component/Build.svg";
import Down from "../../images/Create/Down.svg";
import Area from "./Area";

const InputArea = ({ isArea, setIsArea }) => {
  const [isDrop, setIsDrop] = useState(false);
  const [selectedArea, setSelectedArea] = useState("");

  const handleDrop = () => {
    setIsDrop(!isDrop);
  };

  const handleSelect = (area) => {
    setSelectedArea(area);
    setIsArea(true); // Assuming you want to set isArea to true when an area is selected
    setIsDrop(false); // Close dropdown after selection
  };

  const areas = [
    { area: "Quận Tân Bình, TP.Hồ Chí Minh" },
    { area: "Quận Bình Thạnh, TP.Hồ Chí Minh" },
    { area: "Huyện Bình Chánh, TP.Hồ Chí Minh" },
    { area: "Huyện Củ Chi, TP.Hồ Chí Minh" },
    { area: "Huyện Cần Giờ, TP.Hồ Chí Minh" },
  ];

  return (
    <div className="relative">
      <label
        htmlFor="area"
        className={`w-full h-[50px] flex items-center 
        justify-between gap-2 rounded-lg px-3 border-[1px]
        ${isArea ? "border-[#005FCC]" : ""}`}
      >
        <div className="flex items-center gap-2 w-full">
          <div className="size-[20px] flex items-center justify-center">
            <img src={Build} alt="" />
          </div>
          <input
            type="text"
            id="area"
            className="w-full focus:outline-none font-pro text-[16px]"
            placeholder="Chọn khu vực *"
            value={selectedArea}
          />
        </div>
        <button className="dropdown" onClick={handleDrop}>
          <img src={Down} alt="" />
        </button>
      </label>
      <div
        className={`absolute top-[-15px] px-2 h-[16px] bg-white 
        left-4 text-center ${isArea ? "block" : "hidden"}`}
      >
        <p>
          <span className="text-[#005FCC] text-[12px] font-pro">Khu vực </span>
          <span className="text-[#F32034] text-[12px] font-pro">*</span>
        </p>
      </div>
      {isDrop && (
        <div
          className="dropdown-content absolute bg-white 
          z-10 border-[1px] mt-2 rounded-lg w-full"
        >
          {areas.map((area, index) => (
            <Area
              key={index}
              area={area.area}
              selectedArea={selectedArea}
              setSelectedArea={handleSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default InputArea;
