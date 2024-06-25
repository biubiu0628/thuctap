import React from "react";
import Right from "../../images/Stat/Right.svg";

const Menu = ({ name, color, isLast }) => {
  return (
    <div
      className={`flex justify-between py-4 px-3 ${
        !isLast && "border-b-[1px]"
      }`}
    >
      <p>{name}</p>
      <div className="flex gap-2">
        <p className="font-proMedium text-[14px]" style={{ color: color }}>
          0
        </p>
        <button>
          <img src={Right} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Menu;
