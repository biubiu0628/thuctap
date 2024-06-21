import React from "react";
import Right from "../../images/Create/Right.svg";

const Service = ({ name }) => {
  return (
    <div className="flex justify-between py-2">
      <div className="flex gap-2 items-center">
        <input type="checkbox" className="size-[16px] accent-[#F32034]" />
        <p className="font-proMedium text-[14px]">{name}</p>
      </div>
      <button
        className="flex items-center text-[14px] 
      font-pro text-[#999999] gap-3"
      >
        Miễn phí
        <img src={Right} alt="" />
      </button>
    </div>
  );
};

export default Service;
