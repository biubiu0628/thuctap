import React from "react";

const Info = ({ image, name }) => {
  return (
    <div className="flex gap-2">
      <div className="w-[13px] h-[18px] flex items-center justify-center">
        <img src={image} alt="" />
      </div>
      <p className="font-pro text-[12px]">{name}</p>
    </div>
  );
};

export default Info;
