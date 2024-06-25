import React from "react";

const Postage = ({ name, number, text }) => {
  return (
    <div
      className="flex justify-between items-center 
    border-t-[1px] border-[#E5E5E5] px-8 py-4"
    >
      <p className="font-pro text-[14px]">{name}</p>
      <p>
        <span className="font-proMedium text-[14px]">{number} </span>
        <span className="underline font-pro text-[12px]">{text}</span>
      </p>
    </div>
  );
};

export default Postage;
