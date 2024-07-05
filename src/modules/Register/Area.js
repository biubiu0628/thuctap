import React from "react";

const Area = ({ area, selectedArea, setSelectedArea }) => {
  const handleSelect = () => {
    setSelectedArea(area);
  };

  return (
    <div
      className="cursor-pointer border-b-[1px] 
      last:border-b-0 flex px-4 py-3 gap-2"
      onClick={handleSelect}
    >
      <input
        type="radio"
        className="accent-[#F32034]"
        checked={selectedArea === area}
      />
      <p
        className={`${selectedArea === area ? "text-black" : "text-[#666666]"}`}
      >
        {area}
      </p>
    </div>
  );
};

export default Area;
