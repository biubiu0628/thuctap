import React from "react";

const Button = ({ image }) => {
  return (
    <div>
      <button
        className="size-[24px] rounded-full bg-white 
        flex items-center justify-center shadow-md"
      >
        <img src={image} alt="" />
      </button>
    </div>
  );
};

export default Button;
