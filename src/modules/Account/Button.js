import React from "react";

const Button = ({ props, name, colorText }) => {
  return (
    <div
      className={`btn uppercase font-proBold text-[14px] w-[300px] h-[53px] ${props}`}
    >
      <p className={`text-[14px] font-proBold ${colorText}`}>{name}</p>
    </div>
  );
};

export default Button;
